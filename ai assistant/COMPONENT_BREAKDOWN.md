# IP-SAKTI Component Breakdown & Feature Guide

## 🎨 UI Architecture

```
┌─────────────────────────────────────────────────┐
│          IP-SAKTI Sahayak Page                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌───────────── HEADER (Hero) ───────────────┐ │
│  │ 🌿 | IP-SAKTI Sahayak                     │ │
│  │     Ayurveda IP & Regulatory Assistant     │ │
│  │     Your intelligent guide for IP...       │ │
│  └──────────────────────────────────────────┘ │
│                                                  │
│  ┌───────────── MESSAGES AREA ───────────────┐ │
│  │                                             │ │
│  │  ┌─ ASSISTANT MESSAGE ─────────────────┐  │ │
│  │  │ [IP] | Here's how to file a patent  │  │ │
│  │  │     with RAG citations below        │  │ │
│  │  │                                     │  │ │
│  │  │ 📄 Source: AYUSH Ministry (2023)    │  │ │
│  │  │ 📄 Source: WIPO Database            │  │ │
│  │  └─────────────────────────────────────┘  │ │
│  │                                             │ │
│  │  ┌─ USER MESSAGE ──────────────────────┐  │ │
│  │  │                  How do I patent...? │  │ │
│  │  └─────────────────────────────────────┘  │ │
│  │                                             │ │
│  │  ┌─ LOADING (Typing dots) ─────────────┐  │ │
│  │  │ [IP] | ● ● ●                        │  │ │
│  │  └─────────────────────────────────────┘  │ │
│  │                                             │ │
│  └──────────────────────────────────────────┘ │
│  (Scroll area with smooth animations)         │
│                                                  │
│  ┌──────────── QUICK SUGGESTIONS ────────────┐ │
│  │ ┌─────────────┐  ┌─────────────┐         │ │
│  │ │ 📋 Patent   │  │ ™️ Trademark│         │ │
│  │ │ Filing...   │  │ Registration│         │ │
│  │ └─────────────┘  └─────────────┘         │ │
│  │ ┌─────────────┐  ┌─────────────┐         │ │
│  │ │ 🌍 GI       │  │ ⚖️ Regulatory        │ │
│  │ │ Protection  │  │ Compliance  │         │ │
│  │ └─────────────┘  └─────────────┘         │ │
│  └──────────────────────────────────────────┘ │
│                                                  │
│  ┌──────── PROMPT INPUT AREA ────────────────┐ │
│  │ ┌─────────────────────────────────────┐  │ │
│  │ │ Ask about patents, trademarks...    │  │ │
│  │ │                                     │  │ │
│  │ │ ┌────────┐  ┌──────┐  ┌──────────┐ │  │ │
│  │ │ │ +      │  │🌐    │  │ 🎤 ↑    │ │  │ │
│  │ │ └────────┘  └──────┘  └──────────┘ │  │ │
│  │ └─────────────────────────────────────┘  │ │
│  │                                             │ │
│  │ IP-SAKTI Sahayak • Ministry of Ayush      │ │
│  └──────────────────────────────────────────┘ │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## 📦 Component Breakdown

### 1. **Header Section**
```tsx
├─ Logo + Title (IP-SAKTI Sahayak)
├─ Subtitle (Ayurveda IP & Regulatory Assistant)
├─ Description text
└─ Border-bottom divider
```

**Features:**
- Gradient logo background (emerald → teal)
- Animated entrance (fade + slide up)
- Responsive text sizing
- Accessible semantic HTML

**Props:** None (static)

---

### 2. **Messages Container**
```tsx
├─ Message List (scrollable)
│  ├─ Assistant Messages
│  │  ├─ Avatar (IP badge)
│  │  ├─ Message bubble
│  │  ├─ Citation cards (sourced)
│  │  └─ Timestamp
│  │
│  ├─ User Messages
│  │  ├─ Message bubble (right-aligned)
│  │  ├─ Avatar (U badge)
│  │  └─ Timestamp
│  │
│  └─ Loading Indicator (animated dots)
│
└─ Auto-scroll to latest message
```

**Features:**
- Smooth message animations (fade + slide)
- Color-coded (assistant vs user)
- Citation display with source info
- Loading indicator with pulsing dots
- Auto-scroll on new messages
- Message timestamp

**Props:**
```typescript
message: Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  citations?: string[]
  timestamp: Date
}
```

---

### 3. **Quick Suggestions**
```tsx
├─ Card Grid (2x2 responsive)
│  ├─ Patent Filing
│  │  └─ "How do I file a patent...?"
│  ├─ Trademark Registration
│  │  └─ "What's required for trademark...?"
│  ├─ GI Protection
│  │  └─ "How can I protect with GI...?"
│  └─ Regulatory Compliance
│     └─ "What are export regulations...?"
│
└─ Hover effects + click to send
```

**Features:**
- Icon + label for each suggestion
- Hover scale animation
- One-click message sending
- Responsive grid layout (1 col mobile, 2 cols desktop)
- Accessible button elements

**Customization:**
Edit the suggestion array to change questions:
```typescript
{
  icon: '📋',
  label: 'Patent Filing Process',
  query: 'Your question here...'
}
```

---

### 4. **AiPromptInput Component**
```tsx
AiPromptInput
├─ Textarea (auto-growing)
│  ├─ Placeholder text
│  ├─ Auto-resize on input
│  ├─ Min height: 1 line
│  ├─ Max height: 6 lines (then scroll)
│  └─ Keyboard shortcuts
│
├─ Toolbar (appears on focus/input)
│  ├─ Left side
│  │  ├─ + (Plus actions)
│  │  └─ 🌐 (Web search)
│  │
│  └─ Right side
│     ├─ 🎤 (Mic/Dictation)
│     └─ ↑ (Send button)
│
└─ Status indicators
   ├─ idle: arrow icon
   ├─ loading: spinner
   └─ success: checkmark
```

**Features:**
- Auto-expanding textarea
- Placeholder on empty
- Smooth height animation
- Smart toolbar (shows on focus)
- Multi-state send button
- Keyboard shortcuts (Enter to send, Shift+Enter for newline)
- Loading/success states
- Disabled state management

**Props:**
```typescript
{
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
  disabled?: boolean
  status?: 'idle' | 'loading' | 'success'
  placeholder?: string
}
```

---

### 5. **Citation Cards**
```tsx
CitationCard
├─ Header: "Source:"
├─ Source name/title
├─ Optional excerpt (italic)
└─ Fade-in animation
```

**Features:**
- Sourced response indicator
- Multiple citations per message
- Professional styling
- Light animation

**Props:**
```typescript
{
  source: string      // "AYUSH Ministry - Ayurvedic Product Classification"
  excerpt?: string    // "As per AYUSH guidelines, products are..."
}
```

---

## 🎨 Design System

### Color Palette

```
Primary Brand:
├─ Emerald-500: #10b981 (main CTA, accents)
├─ Teal-600: #0d9488 (secondary, gradients)
└─ Green gradient: emerald → teal

Neutral Base:
├─ Slate-950: #030712 (background)
├─ Slate-900: #0f172a (containers)
├─ Slate-800: #1e293b (borders, hover)
├─ Slate-700: #334155 (disabled)
└─ Slate-400: #78716c (text muted)

Text:
├─ White: #ffffff (primary text)
├─ Slate-50: #f8fafc (secondary text)
└─ Slate-400: #cbd5e1 (muted text)
```

### Typography

```
Hero Title:     text-3xl font-bold (desktop: text-3xl)
Message Text:   text-sm leading-relaxed
Button Text:    text-xs font-medium
Muted Text:     text-slate-500 text-xs
Caption:        text-xs text-slate-400
```

### Spacing

```
Container:      max-w-4xl mx-auto
Padding:        px-6 py-6 (mobile), px-6 py-8 (desktop)
Gap:            gap-3 or gap-6
Border Radius:  rounded-2xl (main), rounded-lg (cards)
```

### Animations

```
Duration:       200ms (fast), 300ms (normal)
Easing:         cubic-bezier(0.2, 0, 0, 1) (default)
Spring:         stiffness: 420, damping: 32 (soft)
Transition:     all duration-200 ease-[cubic-bezier(...)]

Key Animations:
├─ Fade + Slide: initial={{ opacity: 0, y: 8 }}
├─ Scale: whileHover={{ scale: 1.05 }}
├─ Rotate: animate={{ rotate: 45 }}
└─ Box Shadow: smooth shadow on focus
```

---

## 🔄 Data Flow

```
User Types Message
    ↓
onChange() → state updated
    ↓
Textarea resizes
    ↓
Toolbar appears
    ↓
User clicks Send OR presses Enter
    ↓
onSubmit() called
    ↓
- Add user message to messages array
- Clear input
- Set status = 'loading'
- Start timer simulation
    ↓
After 1.4s: Timer fires
    ↓
- Add AI response to messages array
- Set status = 'success'
    ↓
After 0.9s more:
    ↓
- Set status = 'idle'
- Auto-scroll to latest message
```

---

## 🎯 Customization Points

### Quick Easy Changes

**1. Change brand colors:**
```tsx
// Find: from-emerald-500 to-teal-600
// Replace: from-blue-500 to-purple-600
```

**2. Change placeholder text:**
```tsx
placeholder="Your custom prompt here..."
```

**3. Adjust animation speed:**
```tsx
transition={{ duration: 0.2 }} // Change 0.2 to faster/slower
```

**4. Change header text:**
```tsx
<h1>Your App Name Here</h1>
<p>Your subtitle here</p>
```

**5. Add more suggestions:**
```tsx
{
  icon: '🆕',
  label: 'New Topic',
  query: 'Your new question...'
}
```

### Advanced Customizations

**1. Change message bubble styling:**
```tsx
className={cn(
  'rounded-2xl px-4 py-3 text-sm leading-relaxed',
  isAssistant
    ? 'bg-YOUR-COLOR text-YOUR-TEXT-COLOR'
    : 'bg-YOUR-COLOR text-YOUR-TEXT-COLOR'
)}
```

**2. Add custom icons:**
```tsx
import { YourCustomIcon } from 'lucide-react'

// Use like: <YourCustomIcon className="size-4" />
```

**3. Modify message layout:**
```tsx
// Change from horizontal to vertical avatar
// Change timestamp placement
// Add reaction buttons
```

---

## 📱 Responsive Behavior

```
Mobile (<640px):
├─ Single column layout
├─ Text: text-sm
├─ Padding: px-4 py-4
└─ Grid suggestions: 1 column

Tablet (640-1024px):
├─ Single column layout
├─ Text: text-base
├─ Padding: px-6 py-6
└─ Grid suggestions: 2 columns

Desktop (>1024px):
├─ Max-width container (4xl = 896px)
├─ Centered horizontally
├─ Text: text-base
├─ Padding: px-6 py-8
└─ Grid suggestions: 2 columns
```

---

## ♿ Accessibility

### ARIA Labels
```tsx
aria-label="AI prompt"
role="textbox"
aria-multiline="true"
aria-expanded={focused}
aria-busy={isLoading}
```

### Keyboard Navigation
```
Tab:              Focus through buttons
Enter:            Send message (in textarea)
Shift+Enter:      Newline (in textarea)
Escape:           Close menus (future)
Arrow Keys:       Navigate options (future)
```

### Color Contrast
- Text on dark bg: WCAG AAA compliant
- Focus states: Bright emerald ring visible
- Hover states: Clear visual feedback

### Screen Reader Support
- Semantic HTML: `<button>`, `<textarea>`, `<main>`
- Landmark roles: `<main>`, `<header>`, `<article>`
- Live regions: Status messages for loading
- Alt text: Emojis as visual indicators only

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] Messages display correctly
- [ ] Textarea expands/collapses
- [ ] Buttons have hover states
- [ ] Loading spinner animates
- [ ] Citations appear below AI messages
- [ ] Responsive on mobile (DevTools)
- [ ] No text overflow
- [ ] Smooth scrolling

### Functional Testing
- [ ] Type message → display updates
- [ ] Click send → message added
- [ ] Quick suggestions work
- [ ] Toolbar appears on focus
- [ ] Status changes correctly
- [ ] Input clears after send
- [ ] Auto-scroll works

### Browser Testing
- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Animations smooth (60fps)
- [ ] Load time < 3s

---

## 📚 Dependencies

```json
{
  "react": "^18.0.0",
  "next": "^14.0.0",
  "framer-motion": "^10.x.x",
  "lucide-react": "^0.x.x",
  "clsx": "^2.x.x",
  "tailwind-merge": "^2.x.x"
}
```

---

**Build with confidence! 🚀**

Last updated: September 2026
