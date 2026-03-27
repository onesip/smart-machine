import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#', path: '/' },
    { name: t('nav.features'), href: '#features', path: '/#features' },
    { name: t('nav.mes'), href: '#mes', path: '/#mes' },
    { name: t('nav.platform'), href: '#platform', path: '/#platform' },
    { name: t('nav.models'), href: '#models', path: '/#models' },
    { name: t('nav.contact'), href: '#contact', path: '/#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`flex items-center gap-2 font-bold text-xl ${isScrolled || !isHome ? 'text-black' : 'text-white'}`}>
          <span>I'TEA SUPPLY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : link.path}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled || !isHome ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-sm font-medium hover:text-blue-500 transition-colors px-3 py-1.5 rounded-full border ${
              isScrolled || !isHome 
                ? 'text-slate-600 border-slate-200 hover:border-blue-500' 
                : 'text-white/90 border-white/30 hover:border-white'
            }`}
          >
            <Globe size={16} />
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-sm font-medium px-2 py-1 rounded-full border ${
              isScrolled || !isHome 
                ? 'text-slate-600 border-slate-200' 
                : 'text-white/90 border-white/30'
            }`}
          >
            <Globe size={14} />
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <button
            className={`${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 font-medium py-2 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
