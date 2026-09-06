# ⚡ ANTIGRAVITY - QUICK CHEAT SHEET

**Copy-Paste Your Way to Running IP-SAKTI Website in 10 Minutes**

---

## 🎯 TL;DR (The 5-Minute Version)

```bash
# 1. Download all files from Claude
# 2. In Antigravity, create new Next.js project
# 3. Upload/sync your files
# 4. Run these commands:

npm install
npm run dev

# 5. Visit http://localhost:3000 ✅ DONE!
```

---

## 📂 FILE ORGANIZATION (Copy This)

```
ip-sakti-website/
├── components/
│   ├── ui/
│   │   └── prisma-hero.tsx
│   └── shared/
│       ├── navbar.tsx
│       └── footer.tsx
├── app/
│   ├── layout.tsx
│   ├── page.tsx           ← Rename from page-home.tsx
│   ├── about/
│   │   └── page.tsx       ← Rename from page-about.tsx
│   ├── features/
│   │   └── page.tsx       ← Rename from page-features.tsx
│   ├── how-it-works/
│   │   └── page.tsx       ← Rename from page-how-it-works.tsx
│   ├── team/
│   │   └── page.tsx       ← Rename from page-team.tsx
│   └── globals.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── .gitignore
```

---

## 📝 CREATE THESE FILES IN ANTIGRAVITY

### 1️⃣ package.json
```json
{
  "name": "ip-sakti-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.263.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### 2️⃣ tailwind.config.ts
```ts
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E1E0CC",
        dark: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
```

### 3️⃣ tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "strict": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 4️⃣ next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
```

### 5️⃣ app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .noise-overlay {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #000000;
  color: #ffffff;
}
```

### 6️⃣ .gitignore
```
.next
node_modules
.env.local
*.log
.DS_Store
```

---

## 🚀 COMMANDS TO RUN (In Order)

```bash
# Step 1: Install all dependencies
npm install

# Step 2: Start development server
npm run dev

# Step 3: Open in browser
# Copy the URL from terminal (usually http://localhost:3000)
# Or click Antigravity preview button

# Test pages (should all work):
# http://localhost:3000              ✓
# http://localhost:3000/about        ✓
# http://localhost:3000/features     ✓
# http://localhost:3000/how-it-works ✓
# http://localhost:3000/team         ✓
```

---

## 📥 FILE DOWNLOAD SUMMARY

**From Claude, download these 14 files:**

**Components (3):**
- prisma-hero.tsx
- navbar.tsx
- footer.tsx

**Pages (6):**
- page-home.tsx
- page-about.tsx
- page-features.tsx
- page-how-it-works.tsx
- page-team.tsx
- layout.tsx

**Docs (5):**
- 00_START_HERE.md
- QUICK_START.md
- SETUP_GUIDE.md
- HANDOFF.md
- PROJECT_SUMMARY.md

---

## ✅ CHECKLIST

- [ ] Downloaded 14 files
- [ ] Organized into folders (see structure above)
- [ ] Created Antigravity project
- [ ] Created package.json
- [ ] Created tailwind.config.ts
- [ ] Created tsconfig.json
- [ ] Created next.config.js
- [ ] Created app/globals.css
- [ ] Ran `npm install`
- [ ] Ran `npm run dev`
- [ ] All 5 pages work
- [ ] No errors in console

---

## 🆘 QUICK FIXES

| Problem | Fix |
|---------|-----|
| "Module not found" | Check tsconfig.json paths use `@/*` |
| "Styles not working" | Restart: `Ctrl+C` then `npm run dev` |
| "Port 3000 in use" | Use: `npm run dev -- -p 3001` |
| "Can't install" | Try: `npm install --force` |
| "Import errors" | Verify file paths and folder structure |

---

## 🎯 WHAT YOU'LL SEE

**When it works:**
```
> npm run dev

> ip-sakti-website@1.0.0 dev
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

Open http://localhost:3000 and you should see:
- Beautiful dark hero section with video
- Animated navigation
- Stats display
- All pages working

---

## 📱 VERIFY IT WORKS

```
✓ Home page loads
✓ Navigation works
✓ About page accessible
✓ Features page accessible
✓ How It Works page accessible
✓ Team page accessible
✓ Mobile menu works
✓ Animations smooth
✓ No console errors
```

If all ✓, you're DONE! 🎉

---

## 🚢 NEXT: CUSTOMIZE (Optional)

```ts
// In page-team.tsx, replace:
const teamMembers = [
  { name: "Team Member 1", ... }
]

// With your actual team info!
```

---

## 🎬 THEN: DEPLOY (Optional)

```bash
# Push to GitHub
git add .
git commit -m "IP-SAKTI website"
git push origin main

# Then in Antigravity:
# Projects → Deploy → Select Vercel
# Click Deploy → LIVE!
```

---

**That's it! Questions? Refer to full guides in /home/claude/**

**Good luck! 🚀**
