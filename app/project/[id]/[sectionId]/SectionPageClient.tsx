'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, Search, Menu, X, ChevronRight, Home, ArrowLeft } from 'lucide-react'
import project1Data from '@/lib/data/project1'

export default function SectionPageClient({ 
  params 
}: { 
  params: { id: string; sectionId: string } 
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSubsection, setActiveSubsection] = useState(0)

  const section = project1Data.sections.find(s => s.id === params.sectionId)
  
  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Section Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const theme = section.theme ?? {
    divider: 'from-blue-500 to-purple-500',
    sidebarActive: 'bg-blue-100 text-blue-700',
    button: 'bg-blue-600 text-white hover:bg-blue-700',
    ring: 'focus:ring-blue-500'
  }

  const pdfPath = section.pdfPath ?? project1Data.pdfPath ?? '/Ethical_issues_and_Legislative_breaches.pdf'
  const currentSubsection = section.subsections[activeSubsection]
  const references = 'references' in currentSubsection ? currentSubsection.references : undefined

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-gray-900 truncate">{section.title}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 ${theme.ring} focus:border-transparent`}
                />
              </div>
              <a
                href={pdfPath}
                download
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${theme.button}`}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`
            ${sidebarOpen ? 'block' : 'hidden'} lg:block
            fixed lg:sticky top-20 left-0 
            w-80 h-[calc(100vh-5rem)] 
            bg-white rounded-xl shadow-lg p-6 
            overflow-y-auto z-30
            lg:z-0
          `}>
            <h3 className="font-bold text-lg mb-4 text-gray-900">{section.title}</h3>
            <nav className="space-y-2">
              {section.subsections.map((subsection, index) => (
                <button
                  key={subsection.id}
                  onClick={() => {
                    setActiveSubsection(index)
                    setSidebarOpen(false)
                  }}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-colors
                    ${activeSubsection === index 
                      ? `${theme.sidebarActive} font-semibold` 
                      : 'hover:bg-gray-100 text-gray-700'
                    }
                  `}
                >
                  {subsection.title}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-sm text-gray-500 uppercase mb-3">All Sections</h4>
              <nav className="space-y-2">
                {project1Data.sections.map((s) => (
                  <Link
                    key={s.id}
                    href={`/project/1/${s.id}`}
                    className={`
                      block px-4 py-2 rounded-lg text-sm transition-colors
                      ${s.id === section.id 
                        ? 'bg-gray-100 text-gray-900 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    {s.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {currentSubsection.title}
            </h1>
            
            <div className={`h-1 w-24 bg-gradient-to-r ${theme.divider} rounded-full mb-8`} />

            <div 
              className="content-section max-w-none"
              dangerouslySetInnerHTML={{ __html: currentSubsection.content }}
            />

            {references && references.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-lg text-gray-900 mb-4">References</h4>
                <ul className="space-y-2">
                  {references.map((ref, index) => (
                    <li key={index}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setActiveSubsection(Math.max(0, activeSubsection - 1))}
                disabled={activeSubsection === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
              <span className="text-sm text-gray-500">
                {activeSubsection + 1} of {section.subsections.length}
              </span>
              <button
                onClick={() => setActiveSubsection(Math.min(section.subsections.length - 1, activeSubsection + 1))}
                disabled={activeSubsection === section.subsections.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${theme.button}`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
