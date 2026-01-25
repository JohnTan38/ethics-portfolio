# Social Service Portfolio - Ethical Issues & Legislative Breaches

A comprehensive Next.js website showcasing research on ethical issues and legislative breaches in Singapore's social and long-term care sector.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ethics-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── projects/          # Project pages
├── components/            # Reusable React components
├── lib/                   # Utilities and data
│   └── data/             # Project content
└── public/               # Static files (PDFs, images)
```

## ✨ Features

- ✅ Multi-page navigation with sidebar
- ✅ Search functionality across all content
- ✅ PDF download capability
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Table of contents with auto-scroll
- ✅ Professional healthcare-themed design
- ✅ SEO optimized
- ✅ Fast performance (Next.js 15)

## 📦 Technologies

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 🎨 Customization

### Adding New Projects

1. Create new data file in `lib/data/project2.ts`
2. Follow the same structure as `project1.ts`
3. Add route in `app/projects/[id]`

### Updating Content

Edit the content in `lib/data/project1.ts` - all HTML is supported in the `content` fields.

## 📄 Adding PDFs

Place PDF files in `/public/pdfs/` directory and reference them in the data file.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## 📚 Documentation

For more details on Next.js features, see:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 👨‍💻 Author

**John** - Generative AI Engineer
- Portfolio: [developer-portfolio-john.vercel.app](https://developer-portfolio-john.vercel.app)

## 📝 License

This project is for educational purposes as part of Diploma in Social Service coursework.
