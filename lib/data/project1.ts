export const project1Data = {
  id: 'project-1',
  title: 'Ethical Issues and Legislative Breaches in Social Care',
  subtitle: 'Research on common ethical issues and legislative breaches in the social and intermediate long-term care sector',
  pdfPath: '/Ethical_issues_and_Legislative_breaches.pdf',
  sections: [
    {
      id: 'legislative-pdpa',
      title: 'Legislative Breach - PDPA',
      icon: 'Shield',
      subsections: [
        {
          id: 'singhealth-case',
          title: "SingHealth's IT System Cyberattack",
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Case Study: SingHealth Cyberattack</h3>
            <p class="text-gray-700 mb-4">
              In one of Singapore's most significant data breaches, SingHealth's IT system was targeted in a cyberattack 
              that compromised the personal data of 1.5 million patients.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h4 class="font-semibold text-blue-900 mb-2">Key Facts:</h4>
              <ul class="list-disc list-inside text-blue-900 space-y-2">
                <li>1.5 million patient records compromised</li>
                <li>Prime Minister's data specifically targeted</li>
                <li>Breach detected in June 2018</li>
                <li>Committee of Inquiry established to investigate</li>
              </ul>
            </div>
          `,
          references: [
            {
              title: 'MOH Newsroom - SingHealth Cyberattack',
              url: 'https://www.moh.gov.sg/newsroom/singhealth\'s-it-system-target-of-cyberattack/'
            },
            {
              title: 'Public Report of the COI',
              url: 'https://www.moh.gov.sg/docs/librariesprovider5/default-document-library/report-of-the-coi.pdf'
            }
          ]
        },
        {
          id: 'pdpa-framework',
          title: 'Personal Data Protection Act 2012',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">PDPA Framework</h3>
            <p class="text-gray-700 mb-4">
              The Personal Data Protection Act 2012 provides a framework for organizations to protect personal data 
              and establishes notification requirements for data breaches.
            </p>
            
            <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Part 6A - Notification of Data Breaches</h4>
            
            <div class="bg-gray-50 p-6 rounded-lg mb-6">
              <h5 class="font-semibold text-gray-900 mb-3">What is a Data Breach?</h5>
              <p class="text-gray-700 mb-3">A data breach occurs when there is:</p>
              <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Unauthorised access, collection, use, disclosure, copying, modification or disposal of personal data</li>
                <li>Loss of storage medium/device where unauthorised access is likely to occur</li>
              </ul>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <h5 class="font-semibold text-yellow-900 mb-3">Notifiable Data Breaches (Section 26B)</h5>
              <p class="text-yellow-900 mb-3">A data breach is notifiable if it:</p>
              <ul class="list-disc list-inside text-yellow-900 space-y-2">
                <li>Results in or is likely to result in significant harm to affected individuals</li>
                <li>Is or is likely to be of a significant scale</li>
              </ul>
            </div>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h5 class="font-semibold text-red-900 mb-3">Duty to Notify (Section 26D)</h5>
              <p class="text-red-900 mb-3">Organizations must:</p>
              <ul class="list-disc list-inside text-red-900 space-y-2">
                <li>Notify the Commission within <strong>3 calendar days</strong> of assessment</li>
                <li>Notify affected individuals in a reasonable manner</li>
                <li>Provide all prescribed information</li>
              </ul>
            </div>
          `,
          references: [
            {
              title: 'Personal Data Protection Act 2012',
              url: 'https://sso.agc.gov.sg/Act/PDPA2012'
            }
          ]
        }
      ]
    },
    {
      id: 'legislative-negligence',
      title: 'Legislative Breach - Negligence & Duty of Care',
      icon: 'AlertTriangle',
      subsections: [
        {
          id: 'medical-negligence',
          title: 'Medical Negligence Cases',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Medical Negligence: Duty of Care</h3>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h4 class="font-semibold text-red-900 mb-3">Case: Chong Khin Ngen v Lim Djoe Phing [1993]</h4>
              <p class="text-red-900 mb-3">
                Death caused by a surgeon's "scandalous and deplorable" conduct in diagnosis, treatment and aftercare.
              </p>
            </div>

            <div class="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Case: Pang Koi Fah v Lim Djoe Phing</h4>
              <p class="text-gray-700 mb-3">Claim for "nervous shock" arising from medical negligence:</p>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>Neurosurgeon wrongly told mother daughter would die without immediate operation</li>
                <li>Mother consented under duress</li>
                <li>Operation went terribly wrong - healthy tissue removed</li>
                <li>Tear in arachnoid membrane caused cerebrospinal fluid leak</li>
                <li>Patient developed meningitis and died after prolonged suffering</li>
                <li>Mother witnessed all suffering - basis for "nervous shock" claim</li>
              </ul>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Legal Framework</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-900 mb-2">Medical Registration Act 1997</h5>
                <p class="text-blue-800 text-sm">Governs doctor registration and professional conduct, with SMC handling complaints</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h5 class="font-semibold text-purple-900 mb-2">Key Reference</h5>
                <p class="text-purple-800 text-sm">Biomedical Ethics in Singapore - Cases and Commentary 2025</p>
              </div>
            </div>
          `,
          references: [
            {
              title: 'Medical Registration Act 1997',
              url: 'https://sso.agc.gov.sg/Act/MRA1997'
            },
            {
              title: 'Biomedical Ethics in Singapore',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      id: 'ethical-autonomy',
      title: 'Ethical Issues - Autonomy',
      icon: 'User',
      subsections: [
        {
          id: 'informed-consent',
          title: 'Patient Autonomy and Informed Consent',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">The Importance of Written Consent Forms</h3>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
              <h4 class="font-semibold text-blue-900 mb-3">Key Case: Lam Kwok Tai Leslie v Singapore Medical Council [2017]</h4>
              <p class="text-blue-900">
                This landmark case emphasized the critical importance of documenting informed consent in medical practice.
              </p>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-6 mb-3">The Doctor L Case: Failure to Obtain Informed Consent</h4>
            <p class="text-gray-700 mb-4">
              Doctor L was convicted of professional misconduct under Section 53(1)(d) of the MRA for failing to obtain 
              informed consent before carrying out a Percutaneous Coronary Intervention (PCI).
            </p>

            <div class="bg-yellow-50 p-6 rounded-lg mb-6">
              <h5 class="font-semibold text-yellow-900 mb-3">The Ethical Dilemma</h5>
              <p class="text-yellow-900 mb-3">
                <strong>How does the need to respect a patient's autonomy be balanced against the professional obligations of a doctor?</strong>
              </p>
              <p class="text-gray-700">
                The issue of informed consent is at the heart of respect for patient autonomy. According to SMC's 2016 ECEG Guideline C6:
              </p>
              <blockquote class="border-l-4 border-yellow-500 pl-4 italic text-gray-700 mt-3">
                "An important part of patient autonomy involves ensuring that patients give their valid consent (if they are able) 
                to any treatment or procedure prior to their undergoing such treatment or procedure. This involves the patients 
                making voluntary decisions on their medical care after having known and understood the benefits and risks involved."
              </blockquote>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">ETHIC Model Analysis</h4>
            <p class="text-gray-700 mb-4">
              Applying the Elaine Congress Ethical Decision-Making Model to Doctor L's case:
            </p>

            <div class="space-y-4">
              <div class="bg-white border-2 border-primary-200 p-5 rounded-lg">
                <h5 class="font-bold text-primary-700 mb-2">E - Evaluate Values</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Personal/Professional:</strong> Doctor valued clinical efficiency and beneficence</li>
                  <li><strong>SMC ECEG:</strong> Prioritizes autonomy - patient's right to decide</li>
                  <li><strong>Societal:</strong> Expects both medical expertise and transparency</li>
                </ul>
              </div>

              <div class="bg-white border-2 border-primary-200 p-5 rounded-lg">
                <h5 class="font-bold text-primary-700 mb-2">T - Think Relevant Laws and Case Decisions</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Section 53(1)(d) of the MRA: professional misconduct includes ECEG breaches</li>
                  <li>Guideline B3: Record-keeping is a legal safeguard for informed consent</li>
                  <li>Lack of contemporaneous record made "implied consent" defense untenable</li>
                </ul>
              </div>

              <div class="bg-white border-2 border-primary-200 p-5 rounded-lg">
                <h5 class="font-bold text-primary-700 mb-2">H - Hypothesize Possible Consequences</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Action A (Proceed without consent):</strong> Disciplinary action, loss of trust, legal liability</li>
                  <li><strong>Action B (Prioritize Autonomy):</strong> Slight delay, but protects patient and doctor</li>
                </ul>
              </div>

              <div class="bg-white border-2 border-primary-200 p-5 rounded-lg">
                <h5 class="font-bold text-primary-700 mb-2">I - Identify Who Benefits and Who is Harmed</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Patient:</strong> Benefits from self-determination, harmed by loss of agency</li>
                  <li><strong>Doctor:</strong> Harmed by professional misconduct conviction</li>
                  <li><strong>Vulnerable populations:</strong> Most at risk when consent bypassed</li>
                </ul>
              </div>

              <div class="bg-white border-2 border-primary-200 p-5 rounded-lg">
                <h5 class="font-bold text-primary-700 mb-2">C - Consult with Supervisor</h5>
                <p class="text-gray-700">
                  Supervisor would insist on written consent form as essential best practice to meet 2016 ECEG Guideline C6 requirements.
                </p>
              </div>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h5 class="font-semibold text-green-900 mb-3">Summary Recommendation</h5>
              <p class="text-green-900">
                To balance autonomy with professional obligation, doctors must view informed consent as a <strong>process</strong>, 
                not just a signature. Documentation must be "clear, legible, accurate, and contemporaneous" to satisfy High Court standards.
              </p>
            </div>
          `,
          references: [
            {
              title: 'SMC Ethical Code and Guidelines 2016',
              url: 'https://www.healthprofessionals.gov.sg/smc/guidelines'
            }
          ]
        },
        {
          id: 'valid-consent',
          title: 'Criteria for Valid Consent',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Valid Consent Under SMC 2016 ECEG</h3>
            
            <p class="text-gray-700 mb-6">
              Under the SMC 2016 Ethical Code and Ethical Guidelines (ECEG), valid consent is not a mere formality 
              but a comprehensive process of ensuring patient self-determination.
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
                <h4 class="font-bold text-blue-900 mb-3">1. Voluntariness</h4>
                <p class="text-blue-800 text-sm">
                  Decision must be made freely, without coercion by doctor, family, or insurers
                </p>
              </div>

              <div class="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-500">
                <h4 class="font-bold text-purple-900 mb-3">2. Capacity</h4>
                <p class="text-purple-800 text-sm">
                  Patient must be able to understand, retain, and weigh information to make a choice
                </p>
              </div>

              <div class="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
                <h4 class="font-bold text-green-900 mb-3">3. Adequate Disclosure</h4>
                <p class="text-green-800 text-sm">
                  Must disclose material risks a reasonable patient would want to know
                </p>
              </div>

              <div class="bg-yellow-50 p-6 rounded-lg border-t-4 border-yellow-500">
                <h4 class="font-bold text-yellow-900 mb-3">4. Understanding</h4>
                <p class="text-yellow-800 text-sm">
                  Doctor must ensure patient actually understands, using interpreters if needed
                </p>
              </div>

              <div class="bg-red-50 p-6 rounded-lg border-t-4 border-red-500">
                <h4 class="font-bold text-red-900 mb-3">5. Documentation</h4>
                <p class="text-red-800 text-sm">
                  For complex/invasive procedures, consent must be adequately documented
                </p>
              </div>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Where Doctor L Failed</h4>
            <div class="space-y-4">
              <div class="bg-red-50 p-5 rounded-lg">
                <h5 class="font-semibold text-red-900 mb-2">Failure of Disclosure</h5>
                <p class="text-red-800">
                  Failed to explain specific risks and complications of PCI before the procedure
                </p>
              </div>
              <div class="bg-red-50 p-5 rounded-lg">
                <h5 class="font-semibold text-red-900 mb-2">Lack of Documentation</h5>
                <p class="text-red-800">
                  Medical records were unsatisfactory, lacking "clear, legible, accurate and contemporaneous" detail required by Guideline B3
                </p>
              </div>
              <div class="bg-red-50 p-5 rounded-lg">
                <h5 class="font-semibold text-red-900 mb-2">Presumption of Consent</h5>
                <p class="text-red-800">
                  Bypassed voluntary decision-making process, leading to professional misconduct conviction
                </p>
              </div>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Remedial Actions</h4>
            <div class="bg-green-50 p-6 rounded-lg">
              <ul class="space-y-3 text-green-900">
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 text-xl">✓</span>
                  <span><strong>Standardised Consent Forms:</strong> Implement specific written forms listing common material risks and alternatives</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 text-xl">✓</span>
                  <span><strong>Documentation Training:</strong> Training on maintaining contemporaneous notes</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 text-xl">✓</span>
                  <span><strong>Communication Skills:</strong> CME focused on "Montgomery" standard of patient-centric disclosure</span>
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-3 text-xl">✓</span>
                  <span><strong>Systemic Review:</strong> Establish "time-out" or secondary check before invasive procedures</span>
                </li>
              </ul>
            </div>
          `
        },
        {
          id: 'negligence-vs-misconduct',
          title: 'Negligence vs Professional Misconduct',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Clinical Negligence vs Professional Misconduct</h3>
            
            <p class="text-gray-700 mb-6">
              The High Court and SMC drew a sharp line between clinical negligence (a civil wrong) and 
              professional misconduct (a disciplinary breach).
            </p>

            <div class="overflow-x-auto mb-8">
              <table class="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="py-3 px-6 text-left font-semibold text-gray-700 border-b">Feature</th>
                    <th class="py-3 px-6 text-left font-semibold text-gray-700 border-b">Negligence (Civil)</th>
                    <th class="py-3 px-6 text-left font-semibold text-gray-700 border-b">Professional Misconduct (Disciplinary)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6 border-b font-semibold text-gray-700">Primary Goal</td>
                    <td class="py-4 px-6 border-b text-gray-600">Compensate the patient for injury</td>
                    <td class="py-4 px-6 border-b text-gray-600">Uphold professional standards and public trust</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6 border-b font-semibold text-gray-700">Crucial Element</td>
                    <td class="py-4 px-6 border-b text-gray-600">Causation of harm/damage</td>
                    <td class="py-4 px-6 border-b text-gray-600">Breach of the SMC Ethical Code</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6 border-b font-semibold text-gray-700">Documentation</td>
                    <td class="py-4 px-6 border-b text-gray-600">Poor records might be "evidence" of a mistake</td>
                    <td class="py-4 px-6 border-b text-gray-600">Poor records (Guideline B3) are independent basis for charge</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6 border-b font-semibold text-gray-700">Result</td>
                    <td class="py-4 px-6 border-b text-gray-600">Monetary payout</td>
                    <td class="py-4 px-6 border-b text-gray-600">Censure, fine, suspension, or removal from register</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6 border-b font-semibold text-gray-700">Test Applied</td>
                    <td class="py-4 px-6 border-b text-gray-600">Modified Montgomery Test</td>
                    <td class="py-4 px-6 border-b text-gray-600">Lowman Test</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-blue-900 mb-3">The "Lowman" Test for Professional Misconduct</h4>
              <p class="text-blue-800">
                Misconduct is defined as conduct that would be reasonably regarded as "disgraceful or dishonourable" 
                by professional brethren of good repute and competency.
              </p>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
              <h4 class="font-semibold text-yellow-900 mb-3">Beyond Harm</h4>
              <p class="text-yellow-900">
                Unlike negligence, a doctor can be convicted of misconduct even if no physical harm occurred. 
                In Doctor L's case, the "harm" was the infringement of the patient's autonomy.
              </p>
            </div>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h4 class="font-semibold text-red-900 mb-3">High Court's Warning</h4>
              <p class="text-red-900">
                The Court signaled that failing to keep contemporaneous records is no longer just a "minor administrative slip" 
                — it is a professional failure that the SMC should charge as misconduct to protect the integrity of the healthcare system.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 'ethical-justice',
      title: 'Ethical Issues - Distributive Justice',
      icon: 'Scale',
      subsections: [
        {
          id: 'distributive-justice-concept',
          title: 'Concept of Distributive Justice',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Distributive Justice in Healthcare</h3>
            
            <div class="bg-purple-50 border-l-4 border-purple-500 p-6 my-6">
              <p class="text-purple-900 text-lg font-semibold mb-3">
                The fair and equitable distribution of limited healthcare resources across any given population.
              </p>
              <p class="text-purple-800">
                For a country with limited healthcare expertise and a significant aging population, it will only be 
                a matter of time before Singapore has to grapple with questions of distributive justice in very real terms.
              </p>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Principles</h4>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h5 class="font-bold text-blue-900 mb-3">Equality vs. Equity</h5>
                <p class="text-blue-800">
                  Mandates treating equals equally while recognizing that "unequals" may require different 
                  treatment based on specific needs to achieve true fairness.
                </p>
              </div>
              
              <div class="bg-green-50 p-6 rounded-lg">
                <h5 class="font-bold text-green-900 mb-3">Resource Allocation</h5>
                <p class="text-green-800">
                  Involves decisions about who receives treatment, how long they receive it, and how scarce 
                  resources are distributed.
                </p>
              </div>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-yellow-900 mb-3">Challenging Questions</h4>
              <p class="text-yellow-900 mb-3">Should we de-prioritise medical resources for:</p>
              <ul class="list-disc list-inside text-yellow-900 space-y-2">
                <li>Cigarette smokers in the cancer ward, on the basis they "brought this upon themselves"?</li>
                <li>Patients with self-inflicted conditions?</li>
                <li>Those who can't afford to pay?</li>
              </ul>
              <p class="text-yellow-900 mt-3 font-semibold">
                These are questions Singapore's aging population will force us to confront.
              </p>
            </div>
          `
        },
        {
          id: 'aca-model',
          title: 'ACA Ethical Decision-Making Model',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Forester-Miller and Davis Model</h3>
            
            <p class="text-gray-700 mb-6">
              The American Counseling Association (ACA) recommends a systematic process for resolving 
              ethical dilemmas involving resource distribution.
            </p>

            <div class="space-y-4 mb-8">
              <div class="bg-white border-l-4 border-blue-500 p-5 shadow-sm">
                <h5 class="font-bold text-blue-900 mb-2">1. Identify the Problem</h5>
                <p class="text-gray-700">Clearly define the issue and determine if it is legal, ethical, or professional in nature.</p>
              </div>
              
              <div class="bg-white border-l-4 border-purple-500 p-5 shadow-sm">
                <h5 class="font-bold text-purple-900 mb-2">2. Apply the ACA Code of Ethics</h5>
                <p class="text-gray-700">Review the code to see if specific standards apply.</p>
              </div>
              
              <div class="bg-white border-l-4 border-green-500 p-5 shadow-sm">
                <h5 class="font-bold text-green-900 mb-2">3. Determine Nature and Dimensions</h5>
                <p class="text-gray-700">Consider the six moral principles: autonomy, nonmaleficence, beneficence, justice, fidelity, and veracity.</p>
              </div>
              
              <div class="bg-white border-l-4 border-yellow-500 p-5 shadow-sm">
                <h5 class="font-bold text-yellow-900 mb-2">4. Generate Potential Actions</h5>
                <p class="text-gray-700">Brainstorm multiple solutions without initial judgment.</p>
              </div>
              
              <div class="bg-white border-l-4 border-orange-500 p-5 shadow-sm">
                <h5 class="font-bold text-orange-900 mb-2">5. Consider Consequences</h5>
                <p class="text-gray-700">Evaluate the potential impact of each action on all parties involved.</p>
              </div>
              
              <div class="bg-white border-l-4 border-red-500 p-5 shadow-sm">
                <h5 class="font-bold text-red-900 mb-2">6. Evaluate the Selected Action</h5>
                <p class="text-gray-700">Apply tests of justice, publicity, and universality.</p>
              </div>
              
              <div class="bg-white border-l-4 border-indigo-500 p-5 shadow-sm">
                <h5 class="font-bold text-indigo-900 mb-2">7. Implement the Action</h5>
                <p class="text-gray-700">Execute the plan and reflect on the outcome to improve future practice.</p>
              </div>
            </div>
          `
        },
        {
          id: 'case-study-scarcity',
          title: 'Case Study: The Scarcity Dilemma',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Case Study: Limited Counseling Resources</h3>
            
            <div class="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">The Setting</h4>
              <p class="text-gray-700">A community mental health agency with a six-month waiting list</p>
            </div>

            <div class="bg-red-50 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-red-900 mb-3">The Conflict</h4>
              <p class="text-red-800 mb-3">
                The agency has ONE open slot for intensive, weekly counseling. Two potential clients are referred simultaneously:
              </p>
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="bg-white p-4 rounded border-2 border-blue-300">
                  <h5 class="font-bold text-blue-900 mb-2">Client A</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>High-functioning professional</li>
                    <li>Moderate "burnout"</li>
                    <li>Can pay full fee</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border-2 border-red-300">
                  <h5 class="font-bold text-red-900 mb-2">Client B</h5>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>Unemployed single parent</li>
                    <li>Severe depression</li>
                    <li>Housing instability</li>
                    <li>Requires sliding-scale slot</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Potential Courses of Action</h4>
            
            <div class="overflow-x-auto mb-8">
              <table class="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Course of Action</th>
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Pros</th>
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">COA 1: First-Come, First-Served</td>
                    <td class="py-3 px-4 border-b text-green-700">Simple, avoids bias</td>
                    <td class="py-3 px-4 border-b text-red-700">Fails to account for acuity or systemic barriers (injustice)</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">COA 2: Maximize Revenue</td>
                    <td class="py-3 px-4 border-b text-green-700">Supports agency financial health</td>
                    <td class="py-3 px-4 border-b text-red-700">Perpetuates inequity; Client B may spiral into crisis</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">COA 3: Prioritize High Acuity</td>
                    <td class="py-3 px-4 border-b text-green-700">Aligns with social justice; prevents severe harm</td>
                    <td class="py-3 px-4 border-b text-red-700">Agency may face burnout of low-cost slots</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-6">
              <h4 class="font-semibold text-green-900 mb-3">Selected Action: COA 3 - Prioritize High Acuity (Client B)</h4>
              
              <p class="text-green-900 mb-4 font-semibold">
                Based on ACA's definition of justice: "treating equals equally and unequals unequally but in proportion to their relevant differences"
              </p>
              
              <div class="space-y-3 text-green-900">
                <div>
                  <strong>Test of Justice:</strong> Yes - clinical need is the "relevant difference"
                </div>
                <div>
                  <strong>Test of Publicity:</strong> Yes - aligns with social advocacy commitment
                </div>
                <div>
                  <strong>Test of Universality:</strong> Yes - upholds beneficence principle
                </div>
              </div>

              <div class="mt-4 p-4 bg-white rounded">
                <p class="text-green-900">
                  <strong>Mitigation:</strong> Provide Client A with referral to private practitioner with immediate availability, 
                  ensuring Client A still receives care.
                </p>
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: 'incident-reports',
      title: 'Incident Reports and Procedures',
      icon: 'FileText',
      subsections: [
        {
          id: 'incident-case',
          title: 'Case Study: Nursing Home Incident',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Incident Investigation: Client Struck by Falling Boxes</h3>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h4 class="font-semibold text-red-900 mb-3">The Incident</h4>
              <p class="text-red-900">
                A client was hit by carton boxes of diapers along the hallway in a nursing home. 
                You are assigned to investigate the incident.
              </p>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Investigation & Standard Operating Procedures</h4>
            
            <div class="space-y-4 mb-8">
              <div class="bg-blue-50 p-5 rounded-lg">
                <h5 class="font-semibold text-blue-900 mb-2">1. Immediate Response</h5>
                <ul class="list-disc list-inside text-blue-800 space-y-1">
                  <li>Ensure client is medically assessed</li>
                  <li>Check for injuries</li>
                  <li>Call attending doctor or nurse if needed</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-lg">
                <h5 class="font-semibold text-purple-900 mb-2">2. Fact-Finding</h5>
                <ul class="list-disc list-inside text-purple-800 space-y-1">
                  <li><strong>Direct Observation:</strong> Document exact location and state</li>
                  <li><strong>Interviews:</strong> Collect direct quotes from client and witnesses</li>
                  <li><strong>Review Documentation:</strong> Check if boxes violated safety protocols</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-5 rounded-lg">
                <h5 class="font-semibold text-green-900 mb-2">3. Reporting Requirements</h5>
                <ul class="list-disc list-inside text-green-800 space-y-1">
                  <li>Complete AIC Incident Reporting Form within <strong>two working days</strong></li>
                  <li>Use objective writing - avoid hearsay</li>
                  <li>Ensure all witnesses review and co-sign</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-5 rounded-lg">
                <h5 class="font-semibold text-yellow-900 mb-2">4. Notification</h5>
                <p class="text-yellow-800">
                  Escalate to Manager/Director immediately per organization's Quality & Safety Standards
                </p>
              </div>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">How to Write an Incident Report</h4>
            
            <div class="bg-white border-2 border-gray-300 p-6 rounded-lg mb-6">
              <h5 class="font-semibold text-gray-900 mb-4">Required Information:</h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>The exact time and date</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>Names of persons involved and any witnesses</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>Factual information about what happened</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>Your actions (e.g., notifying Manager/Director)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>Corrective actions taken</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-3">✓</span>
                  <span>Signature and date</span>
                </li>
              </ul>
            </div>

            <div class="bg-red-50 p-6 rounded-lg mb-6">
              <h5 class="font-semibold text-red-900 mb-3">Critical Rules:</h5>
              <ul class="space-y-2 text-red-900">
                <li><strong>✗ Do NOT assign blame</strong> - Refrain from pointing fingers at co-workers or administration</li>
                <li><strong>✗ Avoid hearsay and assumptions</strong> - Only document what you directly observed</li>
                <li><strong>✓ Write objectively</strong> - Describe exactly what you saw</li>
                <li><strong>✓ Use direct quotes</strong> - Incorporate client and witness accounts</li>
              </ul>
            </div>
          `
        },
        {
          id: 'sample-report',
          title: 'Sample Incident Report',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Sample Objective Narrative</h3>
            
            <p class="text-gray-700 mb-6">
              Drafted according to SMC Ethical Guidelines and AIC reporting standards:
            </p>

            <div class="bg-white border-2 border-gray-300 p-8 rounded-lg shadow-sm mb-8 font-mono text-sm">
              <h4 class="font-bold text-lg mb-4 font-sans">INCIDENT REPORT NARRATIVE</h4>
              
              <div class="space-y-4 text-gray-800">
                <div>
                  <strong>Date of Incident:</strong> 23 October 2025<br>
                  <strong>Time of Incident:</strong> 10:15 AM<br>
                  <strong>Location:</strong> Level 2 North Wing Hallway, adjacent to Room 204<br>
                  <strong>Persons Involved:</strong> Mdm. Tan (Client), Sarah Lim (Nursing Aide/Witness)
                </div>

                <div class="border-t pt-4">
                  <strong class="block mb-2">Factual Description of Event:</strong>
                  <p class="ml-4">
                    At 10:15 AM, Mdm. Tan was ambulating with her walker along the Level 2 North Wing hallway. 
                    A stack of four diaper carton boxes, positioned against the left wall, tilted and made contact 
                    with Mdm. Tan's right shoulder and arm. Mdm. Tan remained upright but ceased walking.
                  </p>
                  <p class="ml-4 mt-2">
                    Staff Nurse (SN) Arul arrived at the scene at 10:17 AM. Upon arrival, SN Arul observed three 
                    carton boxes lying on the floor and Mdm. Tan leaning against her walker.
                  </p>
                </div>

                <div class="border-t pt-4">
                  <strong class="block mb-2">Client and Witness Statements:</strong>
                  <ul class="ml-4 space-y-2">
                    <li>Mdm. Tan stated: <em>"I was walking to the dining hall when the boxes just slid and hit my side. 
                    It gave me a fright."</em></li>
                    <li>Sarah Lim (Witness) stated: <em>"I was coming out of Room 205 when I saw the top two boxes 
                    slide off the stack. They struck Mdm. Tan on her right side."</em></li>
                  </ul>
                </div>

                <div class="border-t pt-4">
                  <strong class="block mb-2">Actions Taken:</strong>
                  <ol class="ml-4 list-decimal space-y-2">
                    <li><strong>Immediate Assessment:</strong> SN Arul performed physical assessment. No bruising, skin tears, 
                    or swelling noted on right shoulder or arm at 10:20 AM. Mdm. Tan reported pain scale of 2/10.</li>
                    <li><strong>Safety Measures:</strong> Mdm. Tan assisted to her room for rest and further monitoring.</li>
                    <li><strong>Medical Review:</strong> Dr. Wong notified at 10:45 AM and scheduled review for 2:00 PM 
                    to rule out delayed musculoskeletal injury.</li>
                    <li><strong>Environmental Correction:</strong> Boxes immediately moved to secured Level 2 supply closet. 
                    Hallway cleared of all remaining obstructions.</li>
                    <li><strong>Notification:</strong> Director of Nursing (DON) briefed at 11:00 AM.</li>
                  </ol>
                </div>

                <div class="border-t pt-4">
                  <strong class="block mb-2">Corrective Actions & Follow-up:</strong>
                  <p class="ml-4">
                    Floor supervisor initiated review of "Supply Delivery SOP" to ensure all vendors and staff transport 
                    items directly to storage zones. Hazard report submitted to Facilities Management team to mark 
                    "Keep Clear" zones in high-traffic hallways.
                  </p>
                </div>

                <div class="border-t pt-4">
                  <strong class="block mb-2">Signatures:</strong>
                  <div class="ml-4 space-y-3">
                    <div>
                      Reporting Officer: ____________________<br>
                      Name/Designation: [Your Name/Investigator]<br>
                      Date/Time: 23 Oct 2025, 4:00 PM
                    </div>
                    <div>
                      Witness Verification: ____________________<br>
                      Name/Designation: Sarah Lim (Nursing Aide)<br>
                      Date/Time: 23 Oct 2025, 4:10 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-3">Evaluation Using ETHIC Model:</h4>
              <ul class="space-y-2 text-green-900">
                <li><strong>Objectivity:</strong> Avoids words like "careless" or "negligent" - describes physical facts</li>
                <li><strong>Documentation Standards:</strong> Fulfills 2016 ECEG B3 requirement (contemporaneous and detailed)</li>
                <li><strong>Rights-Based:</strong> Includes Mdm. Tan's direct quotes, respecting her autonomy</li>
              </ul>
            </div>
          `
        },
        {
          id: 'corrective-action',
          title: 'Corrective Action Plan',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Corrective Action Plan (CAP)</h3>
            
            <p class="text-gray-700 mb-6">
              To satisfy AIC Community Care quality standards and MOH Healthcare Performance requirements, 
              a CAP must address root cause and implement systemic safeguards.
            </p>

            <div class="overflow-x-auto mb-8">
              <table class="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Focus Area</th>
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Action Item</th>
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Responsibility</th>
                    <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">Immediate Environment</td>
                    <td class="py-3 px-4 border-b">"Clear Hallway" Mapping: Paint/Tape "Yellow Zones" in all transit corridors</td>
                    <td class="py-3 px-4 border-b">Facilities Manager</td>
                    <td class="py-3 px-4 border-b text-red-600 font-semibold">Within 7 days</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">Operational SOP</td>
                    <td class="py-3 px-4 border-b">Supply Chain Transition: "Two-Person Handover" for deliveries</td>
                    <td class="py-3 px-4 border-b">Logistics Officer</td>
                    <td class="py-3 px-4 border-b text-red-600 font-semibold">Immediate</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">Staff Training</td>
                    <td class="py-3 px-4 border-b">WSH Refresher: Mandatory briefing on hazards of vertical stacking</td>
                    <td class="py-3 px-4 border-b">Nursing Lead</td>
                    <td class="py-3 px-4 border-b text-yellow-600 font-semibold">Within 14 days</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-3 px-4 border-b font-semibold">Monitoring</td>
                    <td class="py-3 px-4 border-b">Safety Rounds: Daily Environmental Walkabout checklist</td>
                    <td class="py-3 px-4 border-b">Ward Manager</td>
                    <td class="py-3 px-4 border-b text-green-600 font-semibold">Daily (Ongoing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Root Cause Analysis</h4>
            
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h5 class="font-bold text-blue-900 mb-3">Engineering Controls</h5>
                <p class="text-blue-800 text-sm">
                  Install wall-mounted shelving or tethers to prevent tilting of bulky items
                </p>
              </div>
              
              <div class="bg-purple-50 p-6 rounded-lg">
                <h5 class="font-bold text-purple-900 mb-3">Administrative Controls</h5>
                <p class="text-purple-800 text-sm">
                  Update Risk Register to include "corridor obstructions" as high-frequency risk
                </p>
              </div>
              
              <div class="bg-green-50 p-6 rounded-lg">
                <h5 class="font-bold text-green-900 mb-3">Client Protection</h5>
                <p class="text-green-800 text-sm">
                  Ensure pathways clear before assisting clients with mobility aids
                </p>
              </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h4 class="font-semibold text-yellow-900 mb-3">Verification of Effectiveness</h4>
              <ul class="text-yellow-900 space-y-2">
                <li><strong>Audit:</strong> Surprise audit in 30 days to ensure zero items in "Yellow Zones"</li>
                <li><strong>Feedback:</strong> Interview residents to confirm environment feels safer and more accessible</li>
              </ul>
            </div>
          `
        },
        {
          id: 'safety-checklist',
          title: 'Daily Safety Checklist',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Daily Environmental Safety & Hazard Checklist</h3>
            
            <p class="text-gray-700 mb-6">
              To satisfy Good Governance and Quality & Safety Standards required by AIC and MOH, 
              this checklist is designed as a "living document" for daily accountability.
            </p>

            <div class="bg-white border-2 border-gray-300 p-6 rounded-lg shadow-sm mb-8">
              <div class="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div>
                  <strong>Ward/Area:</strong> ____________________
                </div>
                <div>
                  <strong>Date:</strong> ____________________
                </div>
                <div>
                  <strong>Time:</strong> ____________________
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="min-w-full">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left font-semibold text-gray-700 border">Checklist Item</th>
                      <th class="py-2 px-4 text-center font-semibold text-gray-700 border w-32">Status (Pass/Fail)</th>
                      <th class="py-2 px-4 text-left font-semibold text-gray-700 border w-48">Corrective Action</th>
                      <th class="py-2 px-4 text-center font-semibold text-gray-700 border w-24">Initials</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        1. <strong>Hallways & Corridors:</strong> Are all "Yellow Zones" completely free of carton boxes, wheelchairs, or trolleys?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        2. <strong>Storage Stability:</strong> Are supplies stacked below shoulder height or properly secured to prevent tilting/falling?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        3. <strong>Flooring & Surfaces:</strong> Are hallways free of spills, loose mats, or trailing electrical cords?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        4. <strong>Lighting:</strong> Are all transit areas and exit signs well-lit for clients with visual impairments?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        5. <strong>Mobility Clearance:</strong> Is there minimum 1.2 meters width for two walkers/wheelchairs to pass safely?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        6. <strong>Signage:</strong> Are "Wet Floor" signs available and used immediately upon any spill or cleaning?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border text-sm">
                        7. <strong>Equipment Parking:</strong> Are unused hoists and medication trolleys parked in designated bays, not in hallway?
                      </td>
                      <td class="py-3 px-4 border text-center">[ ]</td>
                      <td class="py-3 px-4 border"></td>
                      <td class="py-3 px-4 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-6 pt-6 border-t grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Staff Name:</strong> ____________________<br>
                  <strong>Signature:</strong> ____________________
                </div>
                <div>
                  <strong>Supervisor Verification:</strong> ____________________<br>
                  <strong>Date:</strong> ____________________
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-blue-900 mb-3">Implementation Instructions:</h4>
              <ol class="list-decimal list-inside text-blue-800 space-y-2">
                <li><strong>Contemporaneous Recording:</strong> Complete at start of every shift (SMC 2016 ECEG Guideline B3)</li>
                <li><strong>Immediate Remediation:</strong> If "Fail" noted, move items immediately and document</li>
                <li><strong>PDPA Compliance:</strong> Ensure no sensitive personal data visible on checklist</li>
                <li><strong>Escalation:</strong> Recurring hazards must be escalated to Manager/Director</li>
              </ol>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg">
              <h4 class="font-semibold text-purple-900 mb-3">Digital Integration (FormSG Approach):</h4>
              <ul class="text-purple-800 space-y-2">
                <li>✓ Complete checklist via mobile-friendly FormSG link</li>
                <li>✓ Creates time-stamped, contemporaneous record</li>
                <li>✓ Automatic alerts if checklist not submitted by 09:00 AM</li>
                <li>✓ Export data to identify "Hot Zones" and trends</li>
                <li>✓ Seamless escalation to AIC Level 3 Incident Report if needed</li>
              </ul>
            </div>
          `
        }
      ]
    },
    {
      id: 'motivation-coaching-counselling',
      title: 'Motivation, Coaching & Counselling',
      icon: 'Users',
      pdfPath: '/Motivation_Coaching_Counselling.pdf',
      theme: {
        divider: 'from-teal-500 to-cyan-600',
        sidebarActive: 'bg-teal-100 text-teal-700',
        button: 'bg-teal-600 text-white hover:bg-teal-700',
        ring: 'focus:ring-teal-500'
      },
      subsections: [
        {
          id: 'staff-motivation',
          title: 'Staff Motivation',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Staff Motivation and Motivating Factors</h3>
            <p class="text-gray-700 mb-6">
              To keep productivity and performance high, leaders need a culture where employees feel engaged,
              supported to grow, and motivated to contribute. Motivation is central to building a strong and
              effective workplace.
            </p>

            <div class="bg-teal-50 border-l-4 border-teal-500 p-6 my-6">
              <h4 class="font-semibold text-teal-900 mb-3">Common Motivating Factors</h4>
              <ul class="list-disc list-inside text-teal-900 space-y-2">
                <li>Financial incentives</li>
                <li>Flexible time options</li>
                <li>Recognition by co-workers or higher management</li>
                <li>Rewards such as shopping vouchers</li>
                <li>Positive reinforcement</li>
                <li>Share in profits</li>
              </ul>
            </div>

            <h4 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Motivation Techniques (8)</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white border-l-4 border-green-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-900 mb-2">1. Performance Appraisal</h5>
                <p class="text-gray-700">Use targets and recognition to encourage continual improvement.</p>
              </div>
              <div class="bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-900 mb-2">2. Staff Satisfaction Surveys</h5>
                <p class="text-gray-700">Gather feedback and act quickly to show staff their input matters.</p>
              </div>
              <div class="bg-white border-l-4 border-purple-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-900 mb-2">3. Staff Development Plans</h5>
                <p class="text-gray-700">Encourage professional growth and skill building.</p>
              </div>
              <div class="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-orange-900 mb-2">4. Intermittent Goals</h5>
                <p class="text-gray-700">Set small, measurable milestones that create momentum.</p>
              </div>
              <div class="bg-white border-l-4 border-red-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-red-900 mb-2">5. Celebrate Milestones</h5>
                <p class="text-gray-700">Reinforce progress with gratitude and tangible rewards.</p>
              </div>
              <div class="bg-white border-l-4 border-indigo-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-indigo-900 mb-2">6. Mentorship Programme</h5>
                <p class="text-gray-700">Pair experienced staff with newer colleagues for daily guidance.</p>
              </div>
              <div class="bg-white border-l-4 border-pink-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-pink-900 mb-2">7. Encourage Mindfulness</h5>
                <p class="text-gray-700">Short breaks help staff reset and refocus under stress.</p>
              </div>
              <div class="bg-white border-l-4 border-teal-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-teal-900 mb-2">8. Incentive Programmes</h5>
                <p class="text-gray-700">Link rewards to effort, milestones, or skills training.</p>
              </div>
            </div>
          `
        },
        {
          id: 'negotiation-techniques',
          title: 'Negotiation Techniques',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Negotiation Techniques</h3>
            <p class="text-gray-700 mb-6">
              Effective negotiation reduces conflict while protecting relationships. The focus is on the issue,
              not the person, and on collaboration rather than winning.
            </p>

            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div class="bg-white border-l-4 border-emerald-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-emerald-900 mb-2">Be Hard on the Problem, Soft on the Person</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Use calm, assertive language and avoid blame.</li>
                  <li>Stay objective and focus on the issue.</li>
                  <li>Do not condemn the person.</li>
                </ul>
              </div>
              <div class="bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-blue-900 mb-2">Focus on Needs, Not Positions</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Listen to both sides without hierarchy.</li>
                  <li>Shift from competing positions to shared goals.</li>
                  <li>Seek collaboration over a win-lose outcome.</li>
                </ul>
              </div>
              <div class="bg-white border-l-4 border-cyan-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-cyan-900 mb-2">Emphasize Common Ground</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Highlight what is already agreed.</li>
                  <li>Celebrate the shared vision.</li>
                  <li>Keep arguments away from clients or the public.</li>
                </ul>
              </div>
              <div class="bg-white border-l-4 border-purple-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-purple-900 mb-2">Be Inventive About Options</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Brainstorm creative solutions.</li>
                  <li>Support both sides in reaching a fair goal.</li>
                  <li>Do not ignore obvious solutions.</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
              <h5 class="font-semibold text-gray-900 mb-2">Example of an "I" Statement</h5>
              <p class="text-gray-700">
                "I sense there is frustration regarding the workflow, and I want to understand how we can fix it together."
              </p>
            </div>

            <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6">
              <h5 class="font-semibold text-cyan-900 mb-2">Case Application: AAA and John</h5>
              <ol class="list-decimal list-inside text-cyan-900 space-y-2">
                <li>Address the logistics list change as the issue, not the person.</li>
                <li>Refocus on the shared goal: a cost-effective and vibrant roadshow.</li>
                <li>Agree on a protocol where AAA proposes savings and John approves before vendors are notified.</li>
              </ol>
            </div>
          `
        },
        {
          id: 'counselling',
          title: 'Counselling & Coaching',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Counselling and Coaching</h3>
            <p class="text-gray-700 mb-6">
              Coaching is an ongoing developmental process focused on skill growth. Counselling is a one-on-one
              activity used when work-related issues affect performance.
            </p>

            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
                <h4 class="font-bold text-blue-900 mb-2">Coaching</h4>
                <p class="text-blue-800 text-sm">
                  Ongoing development to build skills and improve performance in a supportive environment.
                </p>
              </div>
              <div class="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-500">
                <h4 class="font-bold text-purple-900 mb-2">Counselling</h4>
                <p class="text-purple-800 text-sm">
                  One-on-one support when personal or professional issues affect work outcomes.
                </p>
              </div>
            </div>

            <div class="bg-white border-2 border-gray-200 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Leader's Role in Counselling</h4>
              <p class="text-gray-700">
                A leader acts as a counsellor by listening, helping staff reframe issues, and guiding them toward
                constructive solutions that align with team goals.
              </p>
            </div>

            <div class="bg-teal-50 border-l-4 border-teal-500 p-6 mb-6">
              <h4 class="font-semibold text-teal-900 mb-3">Counselling Plan for AAA</h4>
              <ul class="list-disc list-inside text-teal-900 space-y-2">
                <li>Acknowledge intentions behind cost-saving actions.</li>
                <li>Discuss the impact of emotional flare-ups on clients and team morale.</li>
                <li>Agree on mindfulness breaks and mentorship support to manage stress.</li>
              </ul>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-orange-900 mb-2">Identified Shortcomings</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Interpersonal communication and collaboration.</li>
                  <li>Emotional regulation under pressure.</li>
                </ul>
              </div>
              <div class="bg-white border-l-4 border-green-500 p-5 rounded-lg shadow-sm">
                <h5 class="font-bold text-green-900 mb-2">Agreed Actions</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>Active participation in team meetings.</li>
                  <li>Clear coordination before logistical changes.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'conflict-resolution-mediation',
          title: 'Conflict Resolution & Mediation',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Conflict Resolution and Mediation</h3>
            <p class="text-gray-700 mb-6">
              Constructive conflict often requires mediation to move from disagreement to agreement. Mediation is a
              non-adversarial process where a neutral third party helps people resolve issues and create shared solutions.
            </p>

            <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h4 class="font-semibold text-green-900 mb-3">Mediation Principles</h4>
              <ul class="list-disc list-inside text-green-900 space-y-2">
                <li>Neutral third-party facilitates communication.</li>
                <li>Focus on real issues and shared interests.</li>
                <li>Generate options that meet the needs of all parties.</li>
                <li>Outcome is accepted and owned by the parties themselves.</li>
              </ul>
            </div>

            <div class="bg-white border-2 border-gray-200 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mediation vs Arbitration</h4>
              <p class="text-gray-700">
                Arbitration results in a decision made by an intermediary. Mediation helps parties develop their own
                solution with the mediator acting as a process facilitator.
              </p>
            </div>

            <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-6">
              <h4 class="font-semibold text-cyan-900 mb-3">Conflict Resolution Strategy (AAA and John)</h4>
              <ol class="list-decimal list-inside text-cyan-900 space-y-2">
                <li>Separate the person from the problem.</li>
                <li>Identify shared goals: effective, cost-conscious logistics.</li>
                <li>Create a protocol: AAA proposes savings, John approves before vendor contact.</li>
              </ol>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h4 class="font-semibold text-purple-900 mb-3">Process Framework</h4>
              <ul class="list-disc list-inside text-purple-900 space-y-2">
                <li>Opening and ground rules</li>
                <li>Issue identification</li>
                <li>Option generation</li>
                <li>Agreement construction</li>
                <li>Closing and confirmation</li>
              </ul>
            </div>
          `
        },
        {
          id: 'role-play-scripts',
          title: 'Role Play Scripts',
          content: `
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Role Play Scripts and Documentation</h3>
            <p class="text-gray-700 mb-6">
              The following scripts model counselling, mediation, and win-win negotiation, with a formal record of discussion.
            </p>

            <div class="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-blue-900 mb-3">1) One-on-One Counselling Meeting</h4>
              <p class="text-blue-900 text-sm mb-3"><strong>Objective:</strong> Motivate AAA and address performance gaps with empathy.</p>
              <div class="space-y-2 text-blue-900 text-sm">
                <p><strong>Coach:</strong> "Your attention to logistics was a real asset. I want to help you manage stress when things get intense."</p>
                <p><strong>AAA:</strong> "The reports take time, and I get frustrated when cost savings are overlooked."</p>
                <p><strong>Coach:</strong> "We can pair you with a mentor and set smaller weekly goals so progress feels manageable."</p>
              </div>
            </div>

            <div class="bg-green-50 border-2 border-green-300 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-green-900 mb-3">2) Mediation Meeting Agenda</h4>
              <p class="text-green-900 text-sm mb-3"><strong>Objective:</strong> Reach a non-adversarial agreement on project expenditures.</p>
              <ol class="list-decimal list-inside text-green-900 space-y-2 text-sm">
                <li>Opening and process overview</li>
                <li>Issue identification (no interruptions)</li>
                <li>Focus on real issues, not hierarchy</li>
                <li>Generate options</li>
                <li>Construct agreement</li>
                <li>Close and confirm understanding</li>
              </ol>
            </div>

            <div class="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg mb-6">
              <h4 class="font-semibold text-purple-900 mb-3">3) Win-Win Meeting Script</h4>
              <p class="text-purple-900 text-sm mb-3"><strong>Objective:</strong> Fix the underlying problem with John through shared goals.</p>
              <div class="space-y-2 text-purple-900 text-sm">
                <p><strong>AAA:</strong> "I apologize for changing the equipment list without consulting you."</p>
                <p><strong>John:</strong> "It disrupted the event vision."</p>
                <p><strong>AAA:</strong> "I will identify cost savings, but you approve them before I contact vendors."</p>
                <p><strong>John:</strong> "That feels fair and workable."</p>
              </div>
            </div>

            <div class="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg">
              <h4 class="font-semibold text-orange-900 mb-3">4) Record of Discussion (Feb 5, 2026)</h4>
              <p class="text-orange-900 text-sm mb-3"><strong>Participants:</strong> AAA (Care Assistant), Workplace Coach or Supervisor</p>
              <div class="text-orange-900 text-sm space-y-2">
                <p><strong>Key Improvement Areas:</strong> Client visit KPIs, interpersonal communication, report-writing skills.</p>
                <p><strong>Agreed Actions:</strong> Training courses, consult coordinators before logistics changes, mindfulness during clinic chaperoning.</p>
                <p><strong>Support:</strong> Daily mentorship and weekly "small win" check-ins.</p>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};

export default project1Data;
