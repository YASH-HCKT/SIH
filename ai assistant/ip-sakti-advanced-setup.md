# IP-SAKTI Advanced Setup - Premium Prompt Input Version

If you want the **FULL PREMIUM** prompt input component from the specification (with model selector, deep research toggle, voice mode, etc.), follow this guide.

---

## 📦 Install Dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

---

## 🎯 What's Different in Advanced Version?

| Feature | Basic | Advanced |
|---------|-------|----------|
| Send button | Simple | Gradient with hover effects |
| Textarea | Auto-resize | Auto-resize + placeholder rotation |
| Toolbar | Simple | Advanced toolbar with menus |
| Model Selector | No | Yes (with effort, context, modes) |
| Actions Menu | No | Yes (upload, deep research, web search, skills, connectors) |
| Voice Mode | Mic button only | Full dictation + voice conversation |
| Animations | Basic | Premium Framer Motion |
| Accessibility | Good | Excellent (ARIA, keyboard nav) |

---

## 🚀 Implementation Approach

### Option A: Use the Basic Version (RECOMMENDED for SIH 36-hour build)

**Why:**
- ✅ Fully functional and professional
- ✅ No complex component dependencies
- ✅ Easy to customize and extend
- ✅ Clear, maintainable code
- ✅ Less chance of bugs

**File:** `ip-sakti-assistant.tsx` (already created)

### Option B: Use Advanced Version (For extra polish)

**Why:**
- ✨ Extremely polished UI
- ✨ More interactive features
- ✨ Impressive for judges
- ⚠️ More complex code
- ⚠️ More time to debug

**Steps:**

1. Use the base component from `ip-sakti-assistant.tsx`
2. Gradually add features:
   - Model selector dropdown
   - Actions menu with toggles
   - Voice dictation
   - Deep research toggle

---

## 💻 Quick Premium Features to Add

If you want to enhance the basic version with premium touches, add these snippets:

### 1. Model Selector Dropdown

```typescript
// Add after imports
interface AiModel {
  id: string
  label: string
  description?: string
}

const MODELS: AiModel[] = [
  { id: 'opus', label: 'Claude Opus', description: 'Most powerful' },
  { id: 'sonnet', label: 'Claude Sonnet', description: 'Balanced' },
  { id: 'haiku', label: 'Claude Haiku', description: 'Fastest' },
]

// Add to component state
const [selectedModel, setSelectedModel] = React.useState<AiModel>(MODELS[0])
const [modelOpen, setModelOpen] = React.useState(false)

// Add this button in toolbar
<motion.button
  onClick={() => setModelOpen(!modelOpen)}
  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700"
>
  {selectedModel.label}
</motion.button>
```

### 2. Deep Research Toggle

```typescript
const [deepResearch, setDeepResearch] = React.useState(false)

// Add to toolbar
<motion.button
  onClick={() => setDeepResearch(!deepResearch)}
  className={cn(
    'size-9 rounded-lg flex items-center justify-center',
    deepResearch ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
  )}
>
  <TelescopeIcon className="size-4" />
</motion.button>
```

### 3. Web Search Toggle

```typescript
const [webSearch, setWebSearch] = React.useState(false)

// Add to toolbar
<motion.button
  onClick={() => setWebSearch(!webSearch)}
  className={cn(
    'size-9 rounded-lg flex items-center justify-center',
    webSearch ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
  )}
>
  <GlobeIcon className="size-4" />
</motion.button>
```

### 4. Active Tool Chips (shows selected tools)

```typescript
{(deepResearch || webSearch) && (
  <motion.div
    initial={{ opacity: 0, y: -4 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex gap-2 mb-2"
  >
    {deepResearch && (
      <motion.span
        className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-900/30 border border-emerald-600/50 rounded-full text-xs text-emerald-200"
      >
        <TelescopeIcon className="size-3" />
        Deep Research
        <button onClick={() => setDeepResearch(false)}>
          <XIcon className="size-3" />
        </button>
      </motion.span>
    )}
    {webSearch && (
      <motion.span
        className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-900/30 border border-emerald-600/50 rounded-full text-xs text-emerald-200"
      >
        <GlobeIcon className="size-3" />
        Web Search
        <button onClick={() => setWebSearch(false)}>
          <XIcon className="size-3" />
        </button>
      </motion.span>
    )}
  </motion.div>
)}
```

---

## 🎨 Design Decision Tree

```
Do you have 36+ hours?
├─ YES → Use advanced component with all features
│       └─ Model selector, voice, deep research, web search
├─ NO (tight timeline)
│   └─ Use basic component
│       ├─ Add simple model dropdown
│       └─ Keep send button + mic button simple
```

---

## 📋 Recommended Build Path for SIH (36 hours)

### Hours 0-2: Foundation
- Create Next.js project
- Install dependencies
- Set up Tailwind + shadcn/ui

### Hours 2-6: UI Implementation
- Add `ip-sakti-assistant.tsx` (basic version)
- Set up chat message display
- Test animations and responsiveness

### Hours 6-12: Core Features
- Mock AI responses (replace later)
- Add quick suggestion cards
- Implement message history
- Add demo messages

### Hours 12-18: Polish & Design
- Add model selector (dropdown)
- Add toolbar buttons with icons
- Refine animations
- Mobile responsiveness check

### Hours 18-24: Advanced Features
- Voice dictation (if time permits)
- Deep research toggle
- Web search toggle
- Admin panel (basic)

### Hours 24-30: Knowledge Base
- Create sample Ayurveda IP docs
- Implement RAG retrieval
- Add citations to responses

### Hours 30-36: Testing & Deploy
- Test all features
- Fix bugs
- Deploy to Vercel
- Prepare demo script

---

## 🎬 Demo Script (90 seconds for judges)

```
"Namaste. This is IP-SAKTI Sahayak, an AI assistant for Ayurveda IP protection.

[Click on first quick suggestion]
"Here's how to file a patent for your Ayurvedic formulation..."

[Point to citations]
"Notice every answer is sourced - no hallucinations. We use RAG technology.

[Click model dropdown]
"You can adjust the AI model. Select different effort levels.

[Toggle deep research]
"Enable deep research for in-depth analysis.

[Type a question manually]
"The chat is fully conversational. Type complex queries in natural language.

[Scroll down to show mobile responsive]
"It works seamlessly on all devices.

This MVP took 36 hours to build. In production, we'd integrate:
- Real knowledge base with 100+ documents
- Multilingual support (Hindi + English)
- Export capabilities (PDF reports)
- Admin dashboard for knowledge management

Thank you."
```

---

## ✅ Checklist Before Submission

- [ ] App loads without errors
- [ ] Send message → AI responds
- [ ] Quick suggestions work
- [ ] Toolbar buttons have hover effects
- [ ] Responsive on mobile (use DevTools)
- [ ] Citations display correctly
- [ ] Animations are smooth
- [ ] No console errors (F12)
- [ ] Deployed to Vercel (with working URL)
- [ ] Demo script practiced (90 sec max)

---

## 🚀 Deployment Checklist

```bash
# 1. Build locally
npm run build

# 2. Test production build
npm start

# 3. Push to GitHub
git add .
git commit -m "Final SIH submission"
git push origin main

# 4. Deploy to Vercel
vercel --prod

# 5. Share URL with judges
https://ip-sakti-[your-name].vercel.app
```

---

## 📚 Reference Files

- **Component:** `ip-sakti-assistant.tsx`
- **Setup:** `IP-SAKTI_SETUP_GUIDE.md`
- **This File:** `ip-sakti-advanced-setup.md`

---

## 💡 Pro Tips for SIH

1. **Start simple, iterate fast** - Basic version first, add features if time allows
2. **Focus on RAG accuracy** - This is 60% of your score
3. **UI Polish matters** - Judges notice clean design
4. **Citations are critical** - Wrong sources = instant failure
5. **Demo is everything** - Practice your pitch, be smooth
6. **Test on real devices** - Not just browser dev tools
7. **Have a backup demo** - Pre-recorded video just in case
8. **Read PS requirements 10x** - Most teams misunderstand something

---

## 🎯 Winning Checklist

✅ **Functionality:** Chat works, RAG provides accurate answers  
✅ **UI/UX:** Professional, responsive, smooth animations  
✅ **Features:** Model selection, tool toggles, citations  
✅ **Performance:** Fast responses, no lag  
✅ **Accessibility:** Keyboard navigation, ARIA labels  
✅ **Mobile:** Fully responsive design  
✅ **Deploy:** Live URL that works  
✅ **Demo:** Smooth, practiced 90-second pitch  

---

**You've got this! 🚀 Build fast, iterate smart, win hard.**

Last updated: September 2026
