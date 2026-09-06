# IP-SAKTI Sahayak - Landing Page Setup Guide

## Project Overview
A multilingual, RAG-based AI assistant for Intellectual Property and regulatory guidance in Ayurveda (SIH 26045).

**Website Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- lucide-react (icons)

---

## 🚀 Quick Start

### 1. Create New Next.js Project with shadcn

```bash
# Create project
npx create-next-app@latest ip-sakti-website --typescript --tailwind --eslint

# Navigate to project
cd ip-sakti-website

# Initialize shadcn/ui
npx shadcn-ui@latest init

# When prompted:
# ✓ Would you like to use TypeScript? › Yes
# ✓ Which style would you like to use? › Default
# ✓ Which color would you like as base color? › Slate
# ✓ Where is your global CSS file? › app/globals.css
```

### 2. Install Required Dependencies

```bash
npm install framer-motion lucide-react
```

### 3. Project Structure Setup

```
ip-sakti-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home - Hero)
│   ├── about/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── prisma-hero.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── ... (shadcn components)
│   └── shared/
│       └── navigation.tsx
├── public/
│   └── videos/
│       └── hero-bg.mp4 (download from CDN or upload)
├── lib/
│   └── utils.ts
└── tailwind.config.ts
```

---

## 📁 Step 1: Create Directory Structure

```bash
# From project root
mkdir -p app/{about,features,how-it-works,team}
mkdir -p components/ui
mkdir -p components/shared
mkdir -p public/videos
```

---

## 📋 Step 2: Copy Component Files

### File 1: `components/ui/prisma-hero.tsx`
✅ Copy the provided `prisma-hero.tsx` component as-is

### File 2: `components/shared/navbar.tsx`
Already provided separately (see Navbar section below)

### File 3: `components/shared/footer.tsx`
Already provided separately (see Footer section below)

---

## ⚙️ Configuration

### Update `tsconfig.json` (already set by create-next-app)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Update `tailwind.config.ts`
```ts
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#E1E0CC",
        dark: "#000000",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### Add Noise Overlay Effect to `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .noise-overlay {
    background-image: 
      url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }
}
```

---

## 🎯 Critical: `/components/ui` Importance

### Why `/components/ui` is Essential for shadcn Projects

1. **Convention**: shadcn/ui automatically installs components here
2. **Path Aliases**: `@/components/ui` ensures consistent imports across the app
3. **Organization**: Separates reusable primitives from page-specific components
4. **Scalability**: Makes it easy to add more UI components later with `shadcn-ui add`

**Correct structure:**
```
components/
├── ui/              ← Reusable primitives (button, card, etc.)
├── shared/          ← Composite components (navbar, footer, etc.)
└── [pages]/         ← Page-specific components (optional)
```

---

## 📄 File-by-File Implementation

### Files Provided in This Session:
1. ✅ `components/ui/prisma-hero.tsx`
2. ✅ `components/shared/navbar.tsx`
3. ✅ `components/shared/footer.tsx`
4. ✅ `app/layout.tsx` (Root Layout)
5. ✅ `app/page.tsx` (Home - Hero)
6. ✅ `app/about/page.tsx`
7. ✅ `app/features/page.tsx`
8. ✅ `app/how-it-works/page.tsx`
9. ✅ `app/team/page.tsx`

### Implementation Order:
1. Run project creation commands
2. Install dependencies
3. Copy all component files
4. Update configuration files
5. Test locally with `npm run dev`

---

## 🎬 Video Asset Setup

The Prisma Hero component uses an external CDN video. You have 2 options:

### Option A: Keep CDN Video (Recommended for MVP)
- Component already uses: `https://d8j0ntlcm91z4.cloudfront.net/...`
- No additional setup needed

### Option B: Host Locally
```bash
# 1. Download or create a 16:9 video (MP4)
# 2. Place in public/videos/hero-bg.mp4
# 3. Update component:
src="https://d8j0ntlcm91z4.cloudfront.net/..."
→ 
src="/videos/hero-bg.mp4"
```

---

## 🧪 Testing

```bash
# Development
npm run dev

# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 📝 Next Steps Checklist

- [ ] Run `create-next-app` command
- [ ] Install dependencies
- [ ] Create directory structure
- [ ] Copy all component files from provided code
- [ ] Update config files
- [ ] Test locally
- [ ] Deploy to Vercel

---

## 📊 Deployment (Recommended: Vercel)

```bash
# Push to GitHub
git add .
git commit -m "Initial IP-SAKTI website setup"
git push origin main

# Deploy to Vercel
# - Connect GitHub repo at vercel.com
# - Automatic deployments on push
# - Environment variables handled automatically
```

---

## 🔗 Useful Links
- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

---

**Status**: Ready for implementation ✅
**Last Updated**: September 6, 2026
