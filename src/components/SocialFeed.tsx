export default function SocialFeed() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Join Our Community</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-reform-primary/5 dark:bg-reform-dark/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Facebook Group</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join our Facebook group to connect with local supporters, stay updated on events, and participate in community discussions.
          </p>
          <a
            href="https://www.facebook.com/groups/916932353577131/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-reform-primary dark:bg-reform-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200"
          >
            Join Facebook Group
          </a>
        </div>
        <div className="bg-reform-primary/5 dark:bg-reform-dark/10 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Follow on X</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Follow us on X (formerly Twitter) for the latest updates, news, and announcements from Reform UK Erdington.
          </p>
          <a
            href="https://x.com/ReformErdington"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-reform-primary dark:bg-reform-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200"
          >
            Follow on X
          </a>
        </div>
      </div>
    </div>
  )
}
