import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Social Service Portfolio | Ethical Issues & Legislative Breaches',
  description: 'Research on common ethical issues and legislative breaches in the social and intermediate long-term care sector in Singapore',
  keywords: ['ethics', 'healthcare', 'PDPA', 'medical negligence', 'distributive justice', 'Singapore'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
