# Деплой на Vercel

## Первый запуск (локально)
```bash
cd construction-calculators
npm install
npm run dev
# Открой http://localhost:3000
```

## Деплой на Vercel (через CLI)
```bash
npm install -g vercel
vercel
# Следуй инструкциям — создаст новый проект в твоём аккаунте
# Новый аккаунт НЕ нужен, используется существующий
```

## Деплой через GitHub (рекомендую)
1. Создай репозиторий на GitHub
2. `git init && git add . && git commit -m "init"`
3. `git remote add origin https://github.com/ВАШ_USERNAME/construction-calculators.git`
4. `git push -u origin main`
5. Зайди на vercel.com → "Add New Project" → выбери репозиторий
6. Vercel автоматически определит Next.js и задеплоит

## После деплоя

### 1. Замени домен
В `app/layout.tsx` и каждом `page.tsx` замени:
```
https://buildcalc.com → https://ВАШ_ДОМЕН.com
```

### 2. Подключи AdSense
После одобрения аккаунта Google AdSense:
- Раскомментируй тег в `app/layout.tsx`
- Замени `ca-pub-XXXXXXXXXXXXXXXX` на свой ID
- В компонентах AdSlot замени на реальные `<ins>` теги

### 3. Подключи affiliate ссылки
- Home Depot: зарегистрируйся на impact.com (программа HD)
- Amazon: affiliate.amazon.com
- Замени placeholder URL в каждом `page.tsx` в блоке `AffiliateBlock`

### 4. Google Search Console
- Добавь сайт на search.google.com/search-console
- Подтверди владение через Vercel DNS или HTML тег
- Отправь sitemap: `ВАШ_ДОМЕН.com/sitemap.xml` (Next.js генерирует автоматически)
