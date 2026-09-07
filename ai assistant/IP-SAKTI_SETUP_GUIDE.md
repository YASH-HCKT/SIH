# IP-SAKTI Sahayak - Ayurveda AI Assistant Setup Guide

## 🎯 Project Overview

**IP-SAKTI Sahayak** is a professional, interactive AI assistant for intellectual property and regulatory guidance in Ayurveda. Built for SIH 2026 Problem Statement #26045.

**Tech Stack:**
- Next.js 14+ (React)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- Lucide React (icons)

---

## ✅ Prerequisites

Make sure you have:
- Node.js 18+ (check: `node --version`)
- npm or yarn (check: `npm --version`)
- Git (for version control)

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create New Next.js Project

```bash
# Using create-next-app with shadcn preset (EASIEST)
npx create-next-app@latest ip-sakti \
  --typescript \
  --tailwind \
  --use-npm \
  --app

# Or manually with shadcn CLI:
npm create next-app@latest ip-sakti
cd ip-sakti
npx shadcn-ui@latest init
```

**When prompted:**
```
✔ Would you like to use TypeScript? › Yes
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like your code inside a `src/` directory? › No
✔ Would you like to use App Router? › Yes
✔ Would you like to use Turbopack? › No
✔ Would you like to customize the import alias? › No (@/* is fine)
```

### Step 2: Install Required Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

**Optional (for advanced features):**
```bash
npm install axios langchain openai # for real AI integration
```

### Step 3: Create Utils File

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 4: Add the Component

Copy the content from `ip-sakti-assistant.tsx` into:

**Option A (Full page route):**
```bash
# Create: app/page.tsx
# Paste the entire component code
```

**Option B (As a component):**
```bash
# Create: components/ip-sakti-assistant.tsx
# Paste the component code
# Then import in app/page.tsx
```

### Step 5: Update Tailwind Config (if needed)

`tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#030712',
        }
      }
    },
  },
  plugins: [],
}
export default config
```

### Step 6: Run the Project

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. 🎉

---

## 📁 Project Structure

```
ip-sakti/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page (import component here)
│   └── globals.css          # Global styles
├── components/
│   └── ip-sakti-assistant.tsx  # The full component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🎨 Key Features Breakdown

### 1. **Chat Interface**
- Clean message display with assistant/user distinction
- Citation cards for sourced responses
- Smooth animations with Framer Motion
- Responsive design (mobile & desktop)

### 2. **Advanced Prompt Input**
- Auto-growing textarea (expands as you type)
- Send button with loading/success states
- Toolbar with action buttons (File upload, Web search, Mic)
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)

### 3. **Professional Design**
- Dark theme with emerald/teal accents
- Glassmorphism effects (backdrop blur)
- Gradient backgrounds
- Smooth transitions and micro-interactions
- Accessible focus states

### 4. **Quick Suggestions**
- 4 contextual query cards
- One-click message sending
- Hover animations

### 5. **Demo Mode**
- Pre-loaded with sample messages
- Simulated AI responses (replace with real API)
- Loading spinner while processing

---

## 🔌 Integration Guide

### A. Replace with Real AI (Claude/OpenAI)

In the `handleSubmit` function, replace the timeout simulation:

```typescript
// Using Claude API
const handleSubmit = async (value: string) => {
  if (!value.trim()) return

  setMessages(prev => [...prev, { 
    id: `msg-${Date.now()}`, 
    role: 'user', 
    content: value,
    timestamp: new Date() 
  }])
  
  setInputValue('')
  setStatus('loading')

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        message: value,
        history: messages 
      })
    })

    const data = await response.json()
    
    setMessages(prev => [...prev, {
      id: `msg-${Date.now()}-ai`,
      role: 'assistant',
      content: data.response,
      citations: data.citations,
      timestamp: new Date()
    }])

    setStatus('success')
    setTimeout(() => setStatus('idle'), 900)
  } catch (error) {
    console.error('API Error:', error)
    setStatus('idle')
  }
}
```

### B. Create API Route

Create `app/api/chat/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(request: NextRequest) {
  const { message, history } = await request.json()

  try {
    // Convert chat history to Anthropic format
    const messages = history
      .filter((m: any) => m.role !== 'assistant' || m.content)
      .map((m: any) => ({
        role: m.role,
        content: m.content
      }))
      .concat([{ role: 'user', content: message }])

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: `You are IP-SAKTI Sahayak, an expert Ayurveda IP & Regulatory Assistant.
        Provide accurate, sourced information about:
        - Patent filing for Ayurvedic products
        - Trademark registration
        - Geographical Indications (GI) protection
        - Regulatory compliance (AYUSH, FDA, EU standards)
        - Traditional knowledge documentation
        
        Always cite sources and provide practical guidance.`,
      messages: messages as any
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type')
    }

    return NextResponse.json({
      response: content.text,
      citations: [
        'AYUSH Ministry - Ayurvedic Product Classification',
        'WIPO Traditional Knowledge Database'
      ]
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
```

### C. Install Claude SDK

```bash
npm install @anthropic-ai/sdk
```

---

## 🎯 Customization

### Change Colors

Edit the Tailwind classes in the component:

```tsx
// Emerald/Teal theme
from-emerald-500 to-teal-600

// Change to other gradients:
from-blue-500 to-purple-600     // Blue/Purple
from-pink-500 to-rose-600       // Pink/Rose
from-amber-500 to-orange-600    // Amber/Orange
```

### Adjust Animations

In `SPRING_SOFT` and `SPRING_PRESS` constants:

```typescript
// Faster animations
const SPRING_SOFT = { type: 'spring', stiffness: 600, damping: 20 }

// Slower animations
const SPRING_SOFT = { type: 'spring', stiffness: 300, damping: 40 }
```

### Modify Messages

Edit `DEMO_MESSAGES` array to change initial state.

---

## 📝 Environment Variables (Optional)

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
ANTHROPIC_API_KEY=your-key-here
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Send a message → Simulate response appears
- [ ] Click quick suggestions → Message auto-sends
- [ ] Type long message → Textarea expands
- [ ] Click action buttons → Menus appear
- [ ] Responsive on mobile → Layout adapts
- [ ] Keyboard shortcuts → Enter sends, Shift+Enter new line
- [ ] Loading state → Spinner appears, then check/success
- [ ] Citations display → Appear below AI response

### Browser Console

Check for any errors:

```bash
npm run dev
# Open DevTools (F12) → Console tab → No red errors
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow prompts. Vercel auto-detects Next.js.

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Upload `out/` folder to Netlify
```

**Docker (Custom Server):**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `Module not found: framer-motion` | `npm install framer-motion` |
| Tailwind styles not applying | Restart dev server: `npm run dev` |
| TypeScript errors on build | Check `tsconfig.json` → `strict: true` |
| Textarea not expanding | Check `height` state in `resize()` |
| Animations feel janky | Reduce `stiffness` in spring configs |
| API calls failing | Check network tab, CORS, API key |

---

## 📚 File Checklist

Before deploying, verify:

- ✅ `app/page.tsx` - Main page component
- ✅ `lib/utils.ts` - Contains `cn()` helper
- ✅ `tailwind.config.ts` - Configured for content paths
- ✅ `package.json` - All deps installed
- ✅ `.env.local` - API keys set (if needed)
- ✅ `next.config.js` - Exists (can be empty)

---

## 🎓 Learning Resources

- **Framer Motion Docs:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/
- **shadcn/ui:** https://ui.shadcn.com/
- **Next.js:** https://nextjs.org/docs
- **Claude API:** https://docs.anthropic.com/

---

## 💡 Next Steps for Your SIH Project

1. **Replace demo responses** with real RAG-powered AI
2. **Add knowledge base** (load Ayurveda IP PDFs)
3. **Implement citations** from document sources
4. **Add multilingual support** (Hindi + English)
5. **Create admin panel** for knowledge base management
6. **Deploy to production** (Vercel or cloud provider)
7. **Add monitoring** (logging, error tracking)

---

## 📞 Support

- **GitHub Issues:** Report bugs
- **Discord:** Join dev communities
- **Documentation:** Read official docs above
- **YouTube Tutorials:** Search "Next.js AI Chat UI"

---

## ✨ Pro Tips

1. **VSCode Extension:** Install "Tailwind CSS IntelliSense"
2. **Chrome DevTools:** Use Lighthouse for performance audits
3. **Git:** Commit frequently: `git commit -am "Add feature"`
4. **Testing:** Add Vitest for component testing
5. **Performance:** Use Next.js Image component for images
6. **Security:** Never expose API keys in frontend code

---

**Built with ❤️ for IP-SAKTI @ SIH 2026**

Last updated: September 2026
