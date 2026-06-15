import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function listDirs(dir) {
  return fs
    .readdirSync(path.join(root, dir), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function unique(values) {
  return [...new Set(values)];
}

function extractMainFaqSlugs(source) {
  return unique(
    [...source.matchAll(/\n\s*\{\n\s*slug:\s*"([^"]+)"/g)].map((match) => match[1]),
  );
}

function extractMainFaqs(source) {
  return source
    .split(/\n\s*\/\/ ───/)
    .slice(1)
    .map((block) => ({
      slug: block.match(/slug:\s*"([^"]+)"/)?.[1],
      category: block.match(/category:\s*"([^"]+)"/)?.[1],
    }))
    .filter((faq) => faq.slug && faq.category);
}

function extractRelatedFaqSlugs(source) {
  return [...source.matchAll(/relatedFaqs:\s*\[([\s\S]*?)\]/g)].flatMap((match) =>
    [...match[1].matchAll(/slug:\s*"([^"]+)"/g)].map((slugMatch) => slugMatch[1]),
  );
}

function extractSitemapFaqSlugs(source) {
  return unique([...source.matchAll(/\/faq\/([^`"']+)/g)].map((match) => match[1]));
}

function checkFaqLinks() {
  const faqs = read("lib/faqs.ts");
  const mainFaqs = extractMainFaqs(faqs);
  const mainSlugs = mainFaqs.map((faq) => faq.slug);
  const mainSet = new Set(mainSlugs);
  const relatedSlugs = extractRelatedFaqSlugs(faqs);

  const brokenRelated = unique(relatedSlugs.filter((slug) => !mainSet.has(slug)));
  if (brokenRelated.length > 0) {
    errors.push(`Broken related FAQ slugs: ${brokenRelated.join(", ")}`);
  }

  const inbound = Object.fromEntries(mainSlugs.map((slug) => [slug, 0]));
  for (const slug of relatedSlugs) {
    if (slug in inbound) inbound[slug] += 1;
  }

  const byCategory = new Map();
  for (const faq of mainFaqs) {
    const categoryFaqs = byCategory.get(faq.category) ?? [];
    categoryFaqs.push(faq);
    byCategory.set(faq.category, categoryFaqs);
  }

  for (const categoryFaqs of byCategory.values()) {
    for (let index = 0; index < categoryFaqs.length; index += 1) {
      const moreCategoryFaqs = [
        ...categoryFaqs.slice(index + 1),
        ...categoryFaqs.slice(0, index),
      ].slice(0, 4);
      for (const linkedFaq of moreCategoryFaqs) {
        inbound[linkedFaq.slug] += 1;
      }
    }
  }

  const orphanRelated = Object.entries(inbound)
    .filter(([, count]) => count === 0)
    .map(([slug]) => slug);

  if (orphanRelated.length > 0) {
    warnings.push(
      `${orphanRelated.length} FAQ pages have no inbound FAQ links: ${orphanRelated
        .slice(0, 12)
        .join(", ")}${orphanRelated.length > 12 ? ", ..." : ""}`,
    );
  }

  const sitemap = read("app/sitemap.ts");
  const sitemapUsesFaqSource = /FAQS\.map\(/.test(sitemap);
  const sitemapFaqSlugs = sitemapUsesFaqSource ? mainSlugs : extractSitemapFaqSlugs(sitemap);
  const missingFromData = sitemapFaqSlugs
    .filter((slug) => !slug.includes("${"))
    .filter((slug) => !mainSet.has(slug));
  const missingFromSitemap = sitemapUsesFaqSource
    ? []
    : mainSlugs.filter((slug) => !sitemapFaqSlugs.includes(slug));

  if (missingFromData.length > 0) {
    errors.push(`FAQ sitemap entries missing from lib/faqs.ts: ${missingFromData.join(", ")}`);
  }
  if (missingFromSitemap.length > 0) {
    errors.push(`FAQ data entries missing from sitemap: ${missingFromSitemap.join(", ")}`);
  }
}

function checkCalculatorRegistry() {
  const calculatorDirs = listDirs("app").filter((name) => name.endsWith("calculator"));
  const categories = read("lib/calc-categories.ts");
  const registrySlugs = unique([...categories.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]));

  const missingInRegistry = calculatorDirs.filter((slug) => !registrySlugs.includes(slug));
  const missingPages = registrySlugs.filter(
    (slug) => slug.endsWith("calculator") && !calculatorDirs.includes(slug),
  );

  if (missingInRegistry.length > 0) {
    errors.push(`Calculator pages missing from lib/calc-categories.ts: ${missingInRegistry.join(", ")}`);
  }
  if (missingPages.length > 0) {
    errors.push(`Calculator registry entries without app pages: ${missingPages.join(", ")}`);
  }
}

function checkBuiltHtml() {
  const appDir = path.join(root, ".next/server/app");
  if (!fs.existsSync(appDir)) {
    warnings.push("No .next/server/app build output found; run npm run build before HTML thin-content checks.");
    return;
  }

  const htmlFiles = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(fullPath);
    }
  };
  walk(appDir);

  const strip = (html) =>
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[#a-zA-Z0-9]+;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const thin = htmlFiles
    .filter((file) => !file.includes("_not-found"))
    .map((file) => {
      const html = fs.readFileSync(file, "utf8");
      const text = strip(html);
      const words = (text.match(/[A-Za-z][A-Za-z0-9'’-]*/g) ?? []).length;
      const url =
        "/" +
        path
          .relative(appDir, file)
          .replace(/(?:\/index)?\.html$/, "")
          .replace(/\\/g, "/");
      return { url, words };
    })
    .filter(({ url, words }) => words < 230 && !["/contact", "/privacy", "/_not-found"].includes(url))
    .sort((a, b) => a.words - b.words);

  if (thin.length > 0) {
    warnings.push(
      `Thin built HTML candidates under 230 words: ${thin
        .slice(0, 15)
        .map(({ url, words }) => `${url} (${words}w)`)
        .join(", ")}${thin.length > 15 ? ", ..." : ""}`,
    );
  }
}

checkFaqLinks();
checkCalculatorRegistry();
checkBuiltHtml();

for (const warning of warnings) {
  console.warn(`SEO QC warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`SEO QC error: ${error}`);
  }
  process.exit(1);
}

console.log("SEO QC passed.");
