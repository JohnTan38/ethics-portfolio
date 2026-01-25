import project1Data from '@/lib/data/project1'
import SectionPageClient from './SectionPageClient'

export const dynamic = 'force-dynamic'

// Generate static params for all sections at build time
export function generateStaticParams() {
  const params: { id: string; sectionId: string }[] = []
  
  project1Data.sections.forEach((section) => {
    params.push({
      id: '1',
      sectionId: section.id
    })
  })
  
  return params
}

export default async function SectionPage({ 
  params 
}: { 
  params: Promise<{ id: string; sectionId: string }> 
}) {
  const resolvedParams = await params
  return <SectionPageClient params={resolvedParams} />
}
