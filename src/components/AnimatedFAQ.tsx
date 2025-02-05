'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface FAQItem {
  q: string;
  a: string;
}

const faqData: FAQItem[] = [
  {
    q: "What exactly is Reform UK?",
    a: "Reform UK isn't just another political party—it's a movement for those fed up with the same tired nonsense from the establishment. We stand for common sense: tackling out-of-control immigration, skyrocketing living costs, daft energy policies, and restoring our national pride. It's about fixing what's broken—wages that don't stretch, housing shortages, rising crime—while trimming the fat from bloated public services."
  },
  {
    q: "How do I join Reform UK?",
    a: "Joining's as easy as pie. Just sign up, pay your £25 a year, and you're in. Think of it as less than a round at the pub for the privilege of standing up for your country. If you're under 25, there's a special rate—because the youth deserve a say without emptying their wallets."
  },
  {
    q: "What does Reform UK actually stand for?",
    a: "Ah, the meat of it. Here's what we're about:\n\nEconomy: Low taxes, smarter regulations, real growth—not just fiddling the figures. We believe in keeping more of your hard-earned money where it belongs: in your pocket.\nImmigration: Control the borders, simple as that. Legal, illegal—doesn't matter. If it's not managed, it's chaos.\nHealthcare: The NHS isn't sacred if it's sinking. We'll fund it properly, cut the waiting lists, and stop treating it like a political football.\nEnergy: Tired of eye-watering bills? So are we. Time to harness our own resources instead of relying on imports that cost the earth—literally and figuratively."
  },
  {
    q: "How do I get involved with Reform UK?",
    a: "Plenty of ways. Roll up your sleeves and volunteer, throw in a donation if you can, or just turn up at events and have your voice heard. We're not a clique—we're a crowd, and there's always room for one more who's had enough of the status quo."
  },
  {
    q: "How do I contact Reform UK?",
    a: "Simple—just reach out. Whether it's a message, an email, or popping by an event, we're not hiding behind bureaucratic red tape. We want to hear from you, even if it's just a rant about the latest government blunder."
  },
  {
    q: "Are there local Reform UK branches?",
    a: "Of course! We're not just some London bubble outfit. There's likely a branch near you—just ask around. If not, start one. That's the Reform spirit."
  },
  {
    q: "What's Reform UK's view on government spending?",
    a: "Let's be blunt—it's a mess. The government's spending like there's no tomorrow, yet public services are worse than ever. We'd cut the waste, not the essentials. It's not rocket science: spend wisely, not wildly."
  },
  {
    q: "How does Reform UK plan to fix the energy crisis?",
    a: "By using good old-fashioned common sense. We've got resources right here in the UK—why are we paying through the nose for imports? Let's invest in what we've got, lower bills, and stop pretending wind turbines alone will save us."
  },
  {
    q: "What's Reform UK's stance on national sovereignty?",
    a: "Sovereignty means calling the shots ourselves—our borders, our money, our laws. No more being bossed around by Brussels or anyone else. It's about time we stood firm and proud of who we are."
  },
  {
    q: "How do I stay in the loop with Reform UK news?",
    a: "Want the latest updates? Subscribe to our newsletter. It's straight to the point—no fluff, no spin, just the facts and a bit of fire in the belly."
  }
];

const triggerConfetti = () => {
  const colors = ['#E3242B', '#ffffff', '#00247D'];  // Red, White, and Blue (Union Jack colors)
  
  // First burst
  confetti({
    particleCount: 50,
    spread: 90,
    origin: { y: 0.6, x: 0.3 },
    colors: colors,
    angle: 60,
    startVelocity: 45,
    disableForReducedMotion: true
  });

  // Second burst (delayed)
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { y: 0.6, x: 0.7 },
      colors: colors,
      angle: 120,
      startVelocity: 45,
      disableForReducedMotion: true
    });
  }, 150);

  // Star burst effect
  setTimeout(() => {
    const end = Date.now() + 200;
    const starColors = ['#E3242B', '#00247D'];  // Red and Blue stars

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.5, y: 0.65 },
        colors: starColors,
        shapes: ['star'],
        ticks: 100,
        startVelocity: 25,
        disableForReducedMotion: true
      });
     
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, 300);
};

const AnimatedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      triggerConfetti();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 820); // Duration of shake animation + small buffer
    }
  };

  return (
    <motion.section 
      className={`py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 ${isShaking ? 'animate-shake' : ''} transition-all duration-500`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px) rotate(-0.5deg); }
          20%, 40%, 60%, 80% { transform: translateX(2px) rotate(0.5deg); }
        }
        .animate-shake {
          animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
          perspective: 1000px;
        }
        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.1); }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="group bg-reform-gray dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-6 cursor-pointer text-left font-semibold text-lg text-reform-primary dark:text-reform-light focus:outline-none"
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 150,
                      damping: 20
                    }}
                  >
                    <div className="p-6 pt-0">
                      {faq.a.split('\n\n').map((paragraph, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: i * 0.15,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          whileHover={{ 
                            scale: 1.01,
                            transition: { duration: 0.2 }
                          }}
                          className="text-gray-600 dark:text-gray-300 mb-4 last:mb-0"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedFAQ;
