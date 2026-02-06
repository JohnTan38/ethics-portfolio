'use client'

import { useState } from 'react'
import { Download, ChevronDown } from 'lucide-react'

const pdfOptions = [
  {
    label: 'Ethics & Legislation',
    path: '/Ethical_issues_and_Legislative_breaches.pdf'
  },
  {
    label: 'People Management',
    path: '/Motivation_Coaching_Counselling.pdf'
  },
  {
    label: 'Volunteer Management',
    path: '/Volunteer_Management.pdf'
  }
]

export default function PdfDownloadSelector() {
  const [selectedPath, setSelectedPath] = useState(pdfOptions[0].path)

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      <div className="relative">
        <select
          value={selectedPath}
          onChange={(event) => setSelectedPath(event.target.value)}
          className="appearance-none bg-white border border-gray-200 text-gray-700 px-4 py-3 pr-10 rounded-lg shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pdfOptions.map((option) => (
            <option key={option.path} value={option.path}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      <a
        href={selectedPath}
        download
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-5 h-5" />
        Download PDF
      </a>
    </div>
  )
}
