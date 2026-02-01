# 📥 Download Guide - Ethics Portfolio

## 🎯 What to Download

You have **3 options** to get all the files:

---

## Option 1: Download Archive (EASIEST) ⭐

### Download ONE of these compressed files:

**🗜️ ZIP File (Windows-friendly):**
- `ethics-portfolio-deploy.zip` (70 KB)
- Extract with Windows Explorer, 7-Zip, WinRAR, etc.

**🗜️ TAR.GZ File (Mac/Linux-friendly):**
- `ethics-portfolio-deploy.tar.gz` (65 KB)
- Extract with: `tar -xzf ethics-portfolio-deploy.tar.gz`

### After downloading:
1. Extract the archive
2. Open terminal/command prompt in the extracted folder
3. Run `npm install`
4. Run `vercel --prod`

---

## Option 2: Download Individual Files

If the archives don't work, download these files individually:

### 📁 Required Folders & Files

**Main Folder Structure:**
```
ethics-portfolio-deploy/
├── app/
│   ├── globals.css
│   ├── layout.tsx          → Download: layout.tsx
│   ├── page.tsx            → Download: home-page.tsx
│   └── project/            → Download: project-routes/ (folder)
├── lib/
│   └── data/
│       └── project1.ts     → Download: project1-data.ts
├── package.json            → Download: package.json
├── next.config.js          → Download: next.config.js
├── tsconfig.json           → Download: tsconfig.json
├── tailwind.config.js      → Download: tailwind.config.js
├── postcss.config.js       → Download in ethics-portfolio-deploy/
├── .eslintrc.json          → Download in ethics-portfolio-deploy/
├── .gitignore              → Download in ethics-portfolio-deploy/
└── README.md               → Download in ethics-portfolio-deploy/
```

### Step-by-Step File Download:

1. **Download config files:**
   - `package.json`
   - `next.config.js`
   - `tsconfig.json`
   - `tailwind.config.js`

2. **Download main app files:**
   - `layout.tsx` (rename to `layout.tsx` in `app/`)
   - `home-page.tsx` (rename to `page.tsx` in `app/`)
   - `project1-data.ts` (rename to `project1.ts` in `lib/data/`)

3. **Download the project-routes folder:**
   - Contains all dynamic route files
   - Place in `app/` as `project/`

4. **Download from ethics-portfolio-deploy folder:**
   - All remaining config files
   - `.eslintrc.json`
   - `.gitignore`
   - `postcss.config.js`
   - `README.md`
   - `globals.css` (in app/)

### Recreate This Structure:
```
your-folder/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── project/
│       └── 1/
│           └── [sectionId]/
│               ├── page.tsx
│               └── SectionPageClient.tsx
├── lib/
│   └── data/
│       └── project1.ts
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Option 3: Use Setup Scripts

Download and run one of these:

**For Mac/Linux:**
- Download: `setup.sh`
- Make executable: `chmod +x setup.sh`
- Run: `./setup.sh`

**For Windows:**
- Download: `setup.bat`
- Double-click to run

These scripts will:
1. Check for required files
2. Install dependencies
3. Test the build
4. Guide you through deployment

---

## 🔍 Verify Your Download

After downloading, check you have these **critical files**:

### Must-Have Files (15 total):
```
✅ package.json              - Dependencies
✅ next.config.js             - Next.js config
✅ tsconfig.json              - TypeScript config
✅ tailwind.config.js         - Tailwind config
✅ postcss.config.js          - PostCSS config
✅ .eslintrc.json             - ESLint rules
✅ .gitignore                 - Git ignore
✅ app/globals.css            - Global styles
✅ app/layout.tsx             - Root layout
✅ app/page.tsx               - Home page
✅ app/project/1/[sectionId]/page.tsx
✅ app/project/1/[sectionId]/SectionPageClient.tsx
✅ lib/data/project1.ts       - All content
✅ README.md                  - Instructions
✅ next-env.d.ts              - TypeScript declarations
```

### File Sizes (approximate):
- `package.json`: ~1 KB
- `project1.ts`: ~25 KB (largest file - all content)
- `package-lock.json`: ~210 KB
- Total: ~250 KB (without node_modules)

---

## 🚀 After Downloading

### Quick Start Commands:

```bash
# 1. Navigate to folder
cd ethics-portfolio-deploy

# 2. Install dependencies
npm install

# 3. Test locally (optional)
npm run dev

# 4. Deploy to Vercel
vercel --prod
```

---

## 🐛 Troubleshooting Downloads

### "Archive won't extract"
- Try a different extraction tool
- Download the other archive format (ZIP vs TAR.GZ)
- Use Option 2 (individual files)

### "Files are missing"
- Check folder structure matches above
- Re-download missing files
- Use the archive download instead

### "Can't find specific file"
Look for these alternate names:
- `home-page.tsx` → Rename to `page.tsx`
- `layout.tsx` → Already correct name
- `project1-data.ts` → Rename to `project1.ts`

### "Node modules missing"
This is normal! Run `npm install` to download all 372 packages.

---

## 📊 What You're Downloading

**Total Files:** 15 source files + configs  
**Total Size (without dependencies):** ~250 KB  
**After npm install:** ~150 MB (node_modules)  

**Content Included:**
- Complete Next.js 15 application
- All 5 Motivation/Coaching subsections
- Responsive design with blue-purple gradient
- Production-ready configuration
- Full documentation

---

## 📞 Need Help?

### If downloads fail:
1. Try a different browser
2. Check your internet connection
3. Try the archive instead of individual files
4. Clear browser cache and retry

### If files are corrupted:
1. Re-download the file
2. Try the alternate archive format
3. Download individual files instead

---

## ✅ Ready to Deploy?

Once you have all files:
1. ✅ Verify folder structure matches above
2. ✅ Run `npm install`
3. ✅ Run `npm run build` (optional test)
4. ✅ Run `vercel --prod`

**Your site will be live in 5 minutes!** 🎉

---

## 📋 Quick Checklist

Before deploying, ensure you have:
- [ ] Downloaded all required files
- [ ] Recreated correct folder structure
- [ ] Files renamed correctly (if using Option 2)
- [ ] All files in proper locations
- [ ] No missing folders (app/, lib/data/, etc.)

Then you're ready to run:
- [ ] `npm install`
- [ ] `vercel --prod`

---

**Need the deployment checklist?** Download: `DEPLOYMENT_CHECKLIST.md`  
**Need quick reference?** Download: `QUICK_REFERENCE.md`  
**Need technical specs?** Download: `PACKAGE_MANIFEST.md`  

🚀 **Happy Deploying!**
