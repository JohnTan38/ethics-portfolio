# 🚀 Quick Deploy Reference

## One-Command Deploy (After Setup)

```bash
# Navigate to folder
cd ethics-portfolio-deploy

# Install dependencies (first time only)
npm install

# Deploy to Vercel
vercel --prod
```

---

## Essential Commands

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Run locally | `npm run dev` |
| Build for production | `npm run build` |
| Deploy to Vercel | `vercel --prod` |
| Check deployment status | `vercel ls` |

---

## File Structure at a Glance

```
ethics-portfolio-deploy/
├── app/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── project/1/[sectionId]/   # Dynamic routes
│       ├── page.tsx             # Server component
│       └── SectionPageClient.tsx # Client component
├── lib/
│   └── data/
│       └── project1.ts          # All content data ⭐
├── package.json                 # Dependencies
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
└── tsconfig.json                # TypeScript config
```

---

## Routes Generated

| Page | URL |
|------|-----|
| Home | `/` |
| PDPA Section | `/project/1/legislative-pdpa` |
| Motivation Section | `/project/1/motivation-coaching-counselling` |

---

## Content Sections

**Motivation, Coaching & Counselling** includes:

1. **Staff Motivation** - 8 motivation techniques
2. **Negotiation Techniques** - 4 core principles  
3. **Counselling vs Coaching** - Comparison & framework
4. **Conflict Resolution** - Mediation strategies
5. **Role Play Scripts** - 4 interactive scenarios

---

## Color Scheme

- **Primary:** Blue-to-Purple gradient
- **Section Card:** Teal-to-Cyan gradient
- **Technique Boxes:** 8 different colors (Green, Blue, Purple, Orange, Red, Indigo, Pink, Teal)
- **Script Boxes:** 4 themed colors (Blue, Green, Purple, Orange)

---

## Tech Stack

- **Framework:** Next.js 15.0.3
- **React:** 19.0.0-rc
- **Styling:** Tailwind CSS 3.4.15
- **Icons:** Lucide React 0.460.0
- **Language:** TypeScript 5.x

---

## Vercel URLs

| Purpose | URL |
|---------|-----|
| Deploy | https://vercel.com/new |
| Dashboard | https://vercel.com/dashboard |
| Docs | https://vercel.com/docs |

---

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | `rm -rf node_modules && npm install` |
| TypeScript errors | Check `tsconfig.json` exists |
| Styling broken | Verify `tailwind.config.js` present |
| 404 errors | Check dynamic route folder structure |

---

## Important Notes

✅ No environment variables required  
✅ No database setup needed  
✅ Static generation (fast loading)  
✅ Mobile responsive out of the box  
✅ Production-ready code  

---

## Next Steps After Deploy

1. ✅ Get deployment URL from Vercel
2. ✅ Test all routes
3. ✅ Verify responsive design
4. ✅ Share URL with stakeholders
5. ⭐ Add custom domain (optional)

---

**Ready to deploy!** 🎉

Just run: `npm install && vercel --prod`
