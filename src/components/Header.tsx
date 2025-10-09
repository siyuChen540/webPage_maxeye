import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Business', href: '#business' },
    { name: 'Future', href: '#future' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Cpu className="w-7 h-7 text-accent" />
            <span>Lingtong Wisdom</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block bg-accent text-accent-foreground font-semibold px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
