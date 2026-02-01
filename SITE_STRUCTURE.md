# Ethics Portfolio - Site Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                      ETHICS PORTFOLIO                           │
│              Social Service Portfolio - Singapore               │
│         Diploma in Social Service - Ethical Issues &            │
│                   Legislative Breaches                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ├─────────────────────────────────┐
                              │                                 │
                    ┌─────────▼──────────┐         ┌───────────▼──────────┐
                    │  SECTION 1:        │         │  SECTION 2:          │
                    │  PDPA & Data       │         │  Motivation,         │
                    │  Breaches          │         │  Coaching &          │
                    │                    │         │  Counselling         │
                    │  Color: Blue       │         │  Color: Teal-Cyan    │
                    └────────┬───────────┘         └──────────┬───────────┘
                             │                                 │
                    ┌────────▼───────────┐         ┌──────────▼─────────────┐
                    │ • Introduction     │         │ 1. Staff Motivation    │
                    │   to PDPA         │         │    - Motivating Factors │
                    └────────────────────┘         │    - 8 Techniques       │
                                                   │    - Role Play AAA      │
                                                   │                         │
                                                   │ 2. Negotiation          │
                                                   │    Techniques           │
                                                   │    - 4 Core Principles  │
                                                   │    - AAA-John Case      │
                                                   │                         │
                                                   │ 3. Counselling vs       │
                                                   │    Coaching             │
                                                   │    - Comparison Table   │
                                                   │    - Leader's Role      │
                                                   │    - Win-Win Strategy   │
                                                   │                         │
                                                   │ 4. Conflict Resolution  │
                                                   │    & Mediation          │
                                                   │    - Mediation Principles│
                                                   │    - AAA Strategy       │
                                                   │    - Process Framework  │
                                                   │                         │
                                                   │ 5. Role Play Scripts    │
                                                   │    - Counseling Meeting │
                                                   │    - Mediation Agenda   │
                                                   │    - Win-Win Meeting    │
                                                   │    - Record of Discussion│
                                                   └─────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                         NAVIGATION FEATURES                             │
├─────────────────────────────────────────────────────────────────────────┤
│  Header Navigation:                                                     │
│  • Home Button → Returns to main page                                   │
│  • Breadcrumb → Home > Section Title                                    │
│  • Search Bar → Content search (ready for implementation)              │
│  • PDF Download → Direct download button                                │
│                                                                         │
│  Sidebar Navigation:                                                    │
│  • Current Section Subsections (clickable buttons)                      │
│  • All Sections List (quick jump to other sections)                     │
│  • Active state highlighting (blue background)                          │
│  • Mobile: Toggleable with hamburger menu                               │
│                                                                         │
│  Footer Navigation:                                                     │
│  • Previous Button ← (disabled on first subsection)                     │
│  • Progress Indicator: "X of Y"                                         │
│  • Next Button → (disabled on last subsection)                          │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                      COLOR SCHEME & STYLING                             │
├─────────────────────────────────────────────────────────────────────────┤
│  Primary Gradient:                                                      │
│  • Blue-to-Purple (from-blue-500 to-purple-500)                         │
│  • Used for title dividers and accents                                  │
│                                                                         │
│  Section-Specific Colors:                                               │
│  • PDPA: Blue gradient (from-blue-500 to-blue-600)                      │
│  • Motivation: Teal-Cyan gradient (from-teal-500 to-cyan-600)           │
│                                                                         │
│  Content Box Borders:                                                   │
│  • Technique 1: Green (border-l-4 border-green-500)                     │
│  • Technique 2: Blue (border-l-4 border-blue-500)                       │
│  • Technique 3: Purple (border-l-4 border-purple-500)                   │
│  • Technique 4: Orange (border-l-4 border-orange-500)                   │
│  • Technique 5: Red (border-l-4 border-red-500)                         │
│  • Technique 6: Indigo (border-l-4 border-indigo-500)                   │
│  • Technique 7: Pink (border-l-4 border-pink-500)                       │
│  • Technique 8: Teal (border-l-4 border-teal-500)                       │
│                                                                         │
│  Script Box Themes:                                                     │
│  • Counseling: Blue theme (bg-blue-50, border-blue-300)                 │
│  • Mediation: Green theme (bg-green-50, border-green-300)               │
│  • Win-Win: Purple theme (bg-purple-50, border-purple-300)              │
│  • Documentation: Orange theme (bg-orange-50, border-orange-300)        │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                    RESPONSIVE BREAKPOINTS                               │
├─────────────────────────────────────────────────────────────────────────┤
│  Mobile (< 768px):                                                      │
│  • Sidebar: Hidden by default, toggle with hamburger menu              │
│  • Content: Full width, stacked layout                                  │
│  • Navigation: Touch-friendly buttons                                   │
│                                                                         │
│  Tablet (768px - 1024px):                                               │
│  • Sidebar: Toggleable, overlay on content                              │
│  • Content: 2-column grids collapse to 1 column                         │
│  • Search: Visible in header                                            │
│                                                                         │
│  Desktop (> 1024px):                                                    │
│  • Sidebar: Always visible, sticky positioning                          │
│  • Content: Full 2-column grid layouts                                  │
│  • Max width: 1280px (max-w-7xl)                                        │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        DEPLOYMENT INFO                                  │
├─────────────────────────────────────────────────────────────────────────┤
│  Platform: Next.js 15.0.3 with React 19                                │
│  Build Status: ✅ Compiled successfully                                 │
│  Static Pages Generated: 6 pages                                        │
│  Bundle Size: 121 kB First Load JS                                      │
│  Deployment Ready: Yes                                                  │
│                                                                         │
│  Routes Generated:                                                      │
│  • /                                                                    │
│  • /project/1/legislative-pdpa                                          │
│  • /project/1/motivation-coaching-counselling                           │
│                                                                         │
│  Vercel Deployment:                                                     │
│  • Domain: ethics-portfolio.vercel.app                                  │
│  • Status: Ready for deployment                                         │
│  • Command: vercel --prod                                               │
└─────────────────────────────────────────────────────────────────────────┘
```

## 📊 Content Statistics

| Metric | Value |
|--------|-------|
| Total Sections | 2 |
| Total Subsections | 6 |
| Motivation Techniques | 8 |
| Negotiation Principles | 4 |
| Role Play Scripts | 4 |
| Code Lines (project1.ts) | ~820 |
| Color Themes Used | 10+ |
| Interactive Elements | 15+ |

## 🎯 Key Features Implemented

✅ **Visual Hierarchy**
- Clear section headers with gradient dividers
- Color-coded boxes for different content types
- Consistent typography scale

✅ **Interactive Navigation**
- Sidebar with active state tracking
- Previous/Next subsection navigation
- Progress indicator (X of Y)
- Mobile-responsive hamburger menu

✅ **Content Organization**
- 5 main subsections with distinct themes
- Visual separation using colored borders
- Grid layouts for comparison content
- Dialog-style formatting for scripts

✅ **Professional Design**
- Blue-purple gradient theme throughout
- Rounded corners and shadows
- Hover effects on interactive elements
- Responsive grid systems

✅ **Accessibility**
- Semantic HTML structure
- ARIA-friendly components
- Keyboard navigation support
- High contrast text

## 🚀 Ready for Production

The website is fully functional and ready for deployment to Vercel or any Next.js hosting platform.
