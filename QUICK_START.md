# ⚡ IP-SAKTI Website - Quick Start Card

## 30-Second Overview
A professional landing page website for IP-SAKTI Sahayak (SIH 26045 project) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Setup (Copy-Paste)

```bash
# 1. Create project
npx create-next-app@latest ip-sakti-website --typescript --tailwind --eslint

# 2. Navigate in
cd ip-sakti-website

# 3. Initialize shadcn
npx shadcn-ui@latest init

# 4. Install dependencies
npm install framer-motion lucide-react

# 5. Create directories
mkdir -p app/{about,features,how-it-works,team}
mkdir -p components/{ui,shared}
```

---

## 📋 Files to Copy (From `/home/claude/`)

| From | To | Purpose |
|------|----|---------| 
| `prisma-hero.tsx` | `components/ui/` | Hero section |
| `navbar.tsx` | `components/shared/` | Navigation |
| `footer.tsx` | `components/shared/` | Footer |
| `layout.tsx` | `app/` | Root layout |
| `page-home.tsx` | `app/page.tsx` | Home page |
| `page-about.tsx` | `app/about/page.tsx` | About page |
| `page-features.tsx` | `app/features/page.tsx` | Features |
| `page-how-it-works.tsx` | `app/how-it-works/page.tsx` | Process |
| `page-team.tsx` | `app/team/page.tsx` | Team |

---

## ⚙️ Configuration Updates

### `tailwind.config.ts`
- Add to `extend.colors`:
  ```ts
  primary: "#E1E0CC",
  dark: "#000000",
  ```

### `app/globals.css`
- Add noise overlay class (see SETUP_GUIDE.md)

### `tsconfig.json`
- Verify `@` paths alias points to root

---

## ✅ Verification Checklist

```bash
# After copying files:
npm install                    # ✅ No errors
npm run dev                    # ✅ Starts on :3000
# Visit these URLs:
# ✅ http://localhost:3000
# ✅ http://localhost:3000/about
# ✅ http://localhost:3000/features
# ✅ http://localhost:3000/how-it-works
# ✅ http://localhost:3000/team
```

---

## 🎨 Customization Quick List

1. **Team Names** → `page-team.tsx` (replace "Team Member 1-6")
2. **Email** → `footer.tsx` (update contact info)
3. **GitHub/LinkedIn** → `footer.tsx` (social links)
4. **Colors** → `tailwind.config.ts` (primary color #E1E0CC)
5. **Logo** → `navbar.tsx` (add your logo)

---

## 🚀 Deploy (1 Click)

```bash
# Push to GitHub
git add . && git commit -m "IP-SAKTI website" && git push

# Then:
# 1. Go to vercel.com
# 2. Import GitHub repo
# 3. Click Deploy
# ✅ Live in 2-3 minutes
```

---

## 🎯 Page Structure

```
/ (Home)
├── Hero section with video
├── Quick stats
└── CTA button

/about
├── Problem overview
├── Solution explanation
└── Team intro

/features
├── 6 core features
├── RAG architecture
└── Use cases

/how-it-works
├── 4-step process
├── Tech stack
└── FAQ

/team
├── 6 team members
├── Mentors/advisors
└── Values section
```

---

## 📊 Key Stats

- **Pages**: 5 (Home, About, Features, How It Works, Team)
- **Components**: 3 (Hero, Navbar, Footer)
- **Dependencies**: 2 new (framer-motion, lucide-react)
- **Build Time**: ~3 hours (setup + customization)
- **Mobile Ready**: ✅ 100%
- **Dark Mode**: ✅ Built-in

---

## 🆘 Common Issues

| Problem | Fix |
|---------|-----|
| Module not found | Check path in `tsconfig.json` |
| Styles not applying | Rebuild: `npm run dev` |
| Port in use | Use different port: `npm run dev -- -p 3001` |
| Import errors | Install all deps: `npm install` |

---

## 💾 Save These Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/introduction/)
- [shadcn/ui](https://ui.shadcn.com/docs)

---

## 📞 Files Reference

- **SETUP_GUIDE.md** - Detailed step-by-step guide
- **HANDOFF.md** - Complete continuation document
- **QUICK_START.md** - This file (quick reference)

---

## ✨ You're All Set!

1. Copy-paste setup commands above
2. Copy 9 `.tsx` files to correct locations
3. Run `npm run dev`
4. Customize team info
5. Deploy to Vercel

**Total Time**: 2-3 hours → Professional website ready! 🎉

---

**Next Session**: Customize team info, deploy to Vercel, add blog section
