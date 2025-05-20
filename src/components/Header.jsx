// components/Header.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">Hussein</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label, isButton }) =>
            isButton ? (
              <a
                key={label}
                href={href}
                className="px-4 py-1.5 text-sm bg-black text-white dark:bg-white dark:text-black rounded-full border border-gray-300 hover:opacity-90 transition"
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(({ href, label, isButton }) =>
              isButton ? (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full"
                >
                  {label}
                </a>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  {label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
