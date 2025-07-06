# Arash Azizi DNS – Private Site

این پروژه یک سایت **Next.js + TailwindCSS** است که سرویس‌های DNS بهینه برای گیمرها ارائه می‌کند.

## راه‌اندازی محلی

```bash
pnpm install   # یا npm install / yarn install
pnpm dev       # یا npm run dev
```

سپس در مرورگر به `http://localhost:3000` بروید.

## دیپلوی روی GitHub و Vercel (خصوصی)

1. **ایجاد مخزن خصوصی**
   ```bash
   gh repo create arash-azizi-dns --private
   cd arash-azizi-dns
   git remote add origin https://github.com/<YOUR_USERNAME>/arash-azizi-dns.git
   ```

2. **کد پروژه را کپی کرده و پوش کنید**
   ```bash
   git add .
   git commit -m "initial commit"
   git push -u origin main
   ```

3. **وارد [Vercel](https://vercel.com) شوید**
   - روی «New Project» بزنید.
   - مخزن خصوصی `arash-azizi-dns` را انتخاب کنید (لازم است GitHub را متصل کنید).
   - تنظیمات پیش‌فرض Next.js را بپذیرید و Deploy را بزنید.

4. چند ثانیه بعد، لینک نهایی (مثلاً `https://arash-azizi-dns.vercel.app`) آماده است!

> اگر در هر مرحله نیاز به کمک داشتی، در تلگرام `@Arash_0048` پیام بده.

---
