interface AffiliateBlockProps {
  title: string;
  items: { name: string; url: string; store: "homedepot" | "amazon" }[];
}

export function AffiliateBlock({ title, items }: AffiliateBlockProps) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-8">
      <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">
        Buy materials
      </p>
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-between bg-white border border-amber-200 rounded-lg px-3 py-2 hover:border-amber-400 transition-colors group"
          >
            <span className="text-sm text-gray-700 group-hover:text-gray-900">{item.name}</span>
            <span className="text-xs font-medium text-amber-700 ml-2 whitespace-nowrap">
              {item.store === "homedepot" ? "Home Depot →" : "Amazon →"}
            </span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        Affiliate links — we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}
