'use client'

export default function DonateButton() {
  const handleClick = () => {
    const container = document.getElementById('pound-symbols');
    if (container) {
      const symbols = container.getElementsByClassName('pound-symbol');
      Array.from(symbols).forEach((symbol, i) => {
        const elem = symbol as HTMLElement;
        elem.style.opacity = '1';
        elem.style.animation = `fallAndFade 1s ease-out ${i * 50}ms`;
        elem.style.left = `${Math.random() * 100}%`;
      });
      setTimeout(() => {
        Array.from(symbols).forEach((symbol) => {
          const elem = symbol as HTMLElement;
          elem.style.opacity = '0';
          elem.style.animation = 'none';
        });
      }, 2000);
    }
  };

  return (
    <div className="relative" id="donation-container">
      {/* Hidden pound symbols for the easter egg */}
      <div className="hidden" id="pound-symbols">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl text-reform-light font-bold opacity-0 transition-all duration-1000 pound-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px',
              transform: 'translateX(-50%)',
              animation: 'none'
            }}
          >
            £
          </div>
        ))}
      </div>
      <a
        href="https://donate.reformparty.uk/birmingham-erdington"
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-reform-light text-white dark:bg-reform-light dark:text-white hover:bg-reform-primary dark:hover:bg-reform-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 relative overflow-hidden group w-full sm:w-auto text-center"
        onClick={handleClick}
      >
        <span className="relative z-10 flex items-center justify-center">
          <span className="mr-2">🤝</span>
          Donate Now
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </a>
    </div>
  );
}
