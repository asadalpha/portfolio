'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleScrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`cursor-pointer text-white ${caveat.className} text-2xl md:text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-300`}
              >
                Asad
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleScrollToSection(item.target)}
                  className="px-5 py-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </div>
              ))}
              <a
                href="resume.pdf"
                download
                className="ml-4 px-5 py-2 text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 rounded-lg border border-white/10"
              >
                Resume
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300"
              >
                <div
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out transform ${isOpen
            ? 'max-h-96 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="mx-4 mt-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg overflow-hidden">
            <div className="flex flex-col py-4">
              {navItems.map((item, i) => (
                <div
                  key={item.name}
                  onClick={() => handleScrollToSection(item.target)}
                  className="block px-6 py-3 text-lg text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  style={{
                    animation: isOpen
                      ? `fadeSlideIn 0.4s ease-out ${i * 80}ms both`
                      : 'none',
                  }}
                >
                  {item.name}
                </div>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-6 py-3 text-lg text-gray-300 hover:text-white transition-colors duration-300 border-t border-white/10"
                style={{
                  animation: isOpen
                    ? `fadeSlideIn 0.4s ease-out ${navItems.length * 80}ms both`
                    : 'none',
                }}
              >
                Resume
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
