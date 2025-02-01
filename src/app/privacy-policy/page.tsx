import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Reform UK Erdington',
  description: 'Our commitment to protecting your privacy and personal data.',
  openGraph: {
    title: 'Privacy Policy | Reform UK Erdington',
    description: 'Our commitment to protecting your privacy and personal data.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Reform UK Erdington Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Reform UK Erdington',
    description: 'Our commitment to protecting your privacy and personal data.',
    images: ['/images/hero.jpg'],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-reform-dark to-reform-primary dark:from-black dark:to-reform-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy / Transparency Information</h1>
            <p className="text-lg text-white/90">V2.4 Jan 2022</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose dark:prose-invert prose-headings:text-reform-dark dark:prose-headings:text-white prose-a:text-reform-primary dark:prose-a:text-reform-light hover:prose-a:text-reform-dark dark:hover:prose-a:text-white prose-a:transition-colors">
            <p className="text-gray-700 dark:text-gray-300">
              Reform Party UK process and control Personal Data and therefore are required by Articles 13 and 14 of the General Data Protection Regulation (GDPR) to publish this information using clear and plain language.
            </p>

            <h2>Contact Details</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Reform Party UK may be contacted at <a href="https://www.reformparty.uk/contact" target="_blank" rel="noopener noreferrer">https://www.reformparty.uk/contact</a> or Postal Address: 124 City Road, London EC1V 2NX, United Kingdom.
            </p>

            <h2>Transparent Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The reasons, purposes and retention periods for which we process personal data, including any specified lawful basis or legitimate interest are detailed in separate tables for ease. These are split into data we may obtain from you directly and indirectly.
            </p>

            <h2>Profiling</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Reform Party UK aims to create and maintain a profile for each registered voter in the UK. We will do this by merging the Electoral Register(s) with other data that may be lawfully available to us. For more detailed information about this type of processing, you may wish to read the ICO Draft framework code of practice for the use of personal data in political campaigning. If you wish, you can ask us not to maintain a profile in your name using the contact details above and we will take steps to remove you from our systems.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Reform UK will respect the wishes of the people and aim to fully comply with the Information Commissioner's Office (ICO), in particular the specified requirements for Political Parties set out by the ICO in the report, titled Democracy Disrupted, dated 11 July 18.
            </p>

            <h2>Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300">Under data protection law, you have rights including:</p>
            <ul className="text-gray-700 dark:text-gray-300">
              <li><strong className="text-gray-900 dark:text-white">Access</strong> – You have the right to ask us for copies of your personal information.</li>
              <li><strong className="text-gray-900 dark:text-white">Rectification</strong> – You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
              <li><strong className="text-gray-900 dark:text-white">Erasure</strong> – You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Restriction</strong> – You have the right to ask us to restrict the processing of your information in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Object</strong> – You have the right to object to the processing of your personal data in certain circumstances.</li>
              <li><strong className="text-gray-900 dark:text-white">Data portability</strong> – You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300">
              You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.
            </p>

            <h2>Data Processing and Storage</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We use service providers to host and or process your information on our behalf. We only use processors who provide guarantees of appropriate technical and organisational measures that meet the requirements of the GDPR. Each service agreement is clear that we remain the data controller and they will only process the data in accordance with our written instructions.
            </p>

            <h2>Data Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We will never sell your information or share it with another organisation.
            </p>

            <h2>Your Right to Complain</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you are unhappy with how we use your data, you can let us know directly or complain to the Information Commissioner's Office (ICO). The ICO's contact details are:
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Information Commissioner's Office<br />
              Wycliffe House<br />
              Water Lane<br />
              Wilmslow<br />
              Cheshire<br />
              SK9 5AF
            </p>

            <h2>Information Obtained From You Directly</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">When and how is this data obtained</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Type of data used</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Legal Basis</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">In all cases</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Electoral Purposes<br/>· Profiling<br/>· Use anonymised data to identify potential supporters</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Identity<br/>Contact details<br/>Opinions if included</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Public interest<br/>Section 8(e), Data Protection Act 18</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">For the life of our relationship, or until you ask us not to profile you</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">When you register as a supporter</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">· Manage relationship<br/>· Notify changes<br/>· Ask your views</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Identity<br/>Contact details</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Legitimate interest</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">For the life of our relationship</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">When you make a donation</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">· Permissibility checks<br/>· Reporting requirements</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Identity<br/>Contact details<br/>Payment method</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Legal requirement</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">At least 7 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Information About You Obtained From Other Sources</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Source</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Type of data</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Legal Basis</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Electoral registers</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">· Electoral Purposes<br/>· Profiling</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Identity<br/>Address<br/>Voting method</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Public Interest</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">As long as relevant or until opt-out</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Public records</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">· Donation permissibility</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Organisation details<br/>Interested persons</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Legal requirement</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">At least 7 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              Last updated: January 2022
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
