import Link from 'next/link'
import { BookOpen, FileText, Scale, Shield, AlertTriangle, User, Users, ArrowRight } from 'lucide-react'
import PdfDownloadSelector from './components/PdfDownloadSelector'

export default function Home() {
  const ethicsSections = [
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

  const peopleSections = [
    {
      id: 'motivation-coaching-counselling',
      title: 'Motivation, Coaching & Counselling',
      icon: Users,
      description: 'Staff motivation techniques, negotiation, counselling, and conflict resolution',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const volunteerSections = [
    {
      id: 'volunteer-management',
      title: 'Volunteer Management',
      icon: FileText,
      description: 'Volunteer frameworks, leadership development, budgeting, orientation, and risk mitigation',
      color: 'from-amber-500 to-orange-600'
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
            <PdfDownloadSelector />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Portfolio Overview
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Diploma in Social Service Projects Portfolio
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Now organized into three parts: Ethics & Legislation, People Management, and Volunteer Management.
            More parts and content will be added in future updates.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Part 1: Ethics & Legislation
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ethicsSections.map((section) => {
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
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              Part 2: People Management
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleSections.map((section) => {
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex items-center text-teal-600 font-semibold group-hover:gap-3 transition-all">
                      Explore Section
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
              <FileText className="w-4 h-4" />
              Part 3: Volunteer Management
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerSections.map((section) => {
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex items-center text-amber-600 font-semibold group-hover:gap-3 transition-all">
                      Explore Section
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-gray-300">Major Sections</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-300">Main Parts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">30+</div>
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
