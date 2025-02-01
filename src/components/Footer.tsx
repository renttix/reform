export default function Footer() {
  return (
    <footer className="bg-reform-primary dark:bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Promotion Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Reform UK Erdington Branch</h3>
            <p className="text-white/90 dark:text-white/80 leading-relaxed">
              Promoted by ReformUK Erdington Ward,<br />
              Reform UK, 124 City Road,<br />
              London, EC1V 2NX
            </p>
            <p className="text-white/90 dark:text-white/80">
              Email: chair.bhamerdington@reform.uk
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.reformparty.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 dark:text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 -ml-3 rounded-md transition-all duration-200 inline-block"
                >
                  Reform UK National
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/916932353577131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 dark:text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 -ml-3 rounded-md transition-all duration-200 inline-block"
                >
                  Facebook Group
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ReformErdington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 dark:text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 -ml-3 rounded-md transition-all duration-200 inline-block"
                >
                  Follow on X
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 dark:text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 -ml-3 rounded-md transition-all duration-200 inline-block"
                >
                  Our Contract
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white/90 dark:text-white/80 hover:text-white hover:bg-white/10 px-3 py-1 -ml-3 rounded-md transition-all duration-200 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} Reform UK Erdington Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
