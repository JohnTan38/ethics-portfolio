import Link from 'next/link'
import { BookOpen, FileText, Scale, Shield, AlertTriangle, User, Download, ArrowRight } from 'lucide-react'

export default function Home() {
  const sections = [
    {
      id: 'legislative-pdpa',
      title: 'PDPA & Data Breaches',
      icon: Shield,
      description: 'SingHealth cyberattack case study and Personal Data Protection Act framework',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'legislative-negligence',
      title: 'Medical Negligence',
      icon: AlertTriangle,
      description: 'Duty of care, professional misconduct, and landmark cases in Singapore',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'ethical-autonomy',
      title: 'Patient Autonomy',
      icon: User,
      description: 'Informed consent, ETHIC Model, and the Doctor L case analysis',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'ethical-justice',
      title: 'Distributive Justice',
      icon: Scale,
      description: 'Fair allocation of healthcare resources and ACA decision-making model',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'incident-reports',
      title: 'Incident Reports',
      icon: FileText,
      description: 'Reporting procedures, case studies, and corrective action plans',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Social Service Portfolio</h1>
              <p className="text-gray-600 mt-1">Diploma in Social Service - Singapore</p>
            </div>
            <a
              href="/Ethical_issues_and_Legislative_breaches.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Project 1 of 3
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ethical Issues & Legislative Breaches
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Research on common ethical issues and legislative breaches in the social and 
            intermediate long-term care sector in Singapore
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Link
                key={section.id}
                href={`/project/1/${section.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${section.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Explore Section
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300">Major Sections</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
              <div className="text-gray-300">Subsections</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Diploma in Social Service &copy; 2026 | Singapore</p>
        </div>
      </footer>
    </div>
  )
}
