import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className="bg-reform-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Social Media Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook Group */}
            <div className="group bg-gradient-to-br from-reform-primary/10 to-reform-secondary/10 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,123,255,0.3)] relative overflow-hidden backdrop-blur-sm animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-reform-primary/20 to-reform-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-reform-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-reform-light transition-colors duration-300">Facebook Group</h3>
                <p className="text-center text-gray-300 mb-8 group-hover:text-white transition-colors duration-300">
                  Join our Facebook group to connect with local supporters, stay updated on events, and participate in community discussions.
                </p>
                <div className="text-center">
                  <Link 
                    href="https://facebook.com/groups/reformukerdington"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-reform-primary hover:bg-reform-primary/90 text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,123,255,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0"
                  >
                    Join Facebook Group
                  </Link>
                </div>
              </div>
            </div>

            {/* X (Twitter) */}
            <div className="group bg-gradient-to-br from-reform-primary/10 to-reform-secondary/10 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,123,255,0.3)] relative overflow-hidden backdrop-blur-sm animate-slide-up delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-reform-primary/20 to-reform-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-reform-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-reform-light transition-colors duration-300">Follow on X</h3>
                <p className="text-center text-gray-300 mb-8 group-hover:text-white transition-colors duration-300">
                  Follow us on X (formerly Twitter) for the latest updates, news, and announcements from Reform UK Erdington.
                </p>
                <div className="text-center">
                  <Link 
                    href="https://x.com/ReformErdington"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-reform-primary hover:bg-reform-primary/90 text-white font-semibold px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,123,255,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0"
                  >
                    Follow on X
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Reform UK Erdington Branch</h3>
            <p className="text-gray-400">
              Promoted by J Lambert,<br />
              Reform UK, 124 City Road,<br />
              London, EC1V 2NX
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.reformparty.uk" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Reform UK National
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com/groups/reformukerdington" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Facebook Group
                </Link>
              </li>
              <li>
                <Link href="https://x.com/ReformErdington" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Follow on X
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/reformtv" className="text-gray-400 hover:text-reform-primary transition-colors">
                  ReformTV
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-reform-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Email */}
        <div className="text-center text-gray-400 mb-8">
          Email: <a href="mailto:chair.bhamerdington@reform.uk" className="hover:text-reform-primary transition-colors">chair.bhamerdington@reform.uk</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Reform UK Erdington Branch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
