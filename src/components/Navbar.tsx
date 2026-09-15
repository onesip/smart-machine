import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: 'https://itea-supply-bv.odoo.com/', path: 'https://itea-supply-bv.odoo.com/' },
    { name: t('nav.features'), href: '#features', path: '/#features' },
    { name: t('nav.mes'), href: '#mes', path: '/#mes' },
    { name: t('nav.platform'), href: '#platform', path: '/#platform' },
    { name: t('nav.models'), href: '#models', path: '/#models' },
    { name: t('nav.contact'), href: '#contact', path: '/#contact' },
  ];

  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#eadfd6] bg-[#fffdfb]/95 py-3.5 shadow-[0_8px_30px_-26px_rgba(57,26,16,0.32)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="https://itea-supply-bv.odoo.com/" className="flex min-w-0 items-center gap-3" aria-label="I'TEA Supply home">
          <img src="/itea-logo.webp" alt="I'TEA" className="h-8 w-auto shrink-0 object-contain sm:h-9" />
          <span className="hidden h-7 w-px bg-[#e5d7cf] sm:block" />
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a645a] sm:block">Smart Machine</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isHome ? link.href : link.path}
              className="text-[13px] font-medium text-[#5f4b42] transition-colors hover:text-[#391A10]"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-[#ddcfc6] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#5f4b42] transition hover:border-[#a98472] hover:text-[#391A10]"
          >
            <Globe size={15} />
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-[#ddcfc6] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#5f4b42]"
          >
            <Globe size={14} />
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <button
            className="rounded-md p-1.5 text-[#391A10]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#eadfd6] bg-[#fffdfb] px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isHome ? link.href : link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-[#5f4b42] hover:bg-[#f7f1ed] hover:text-[#391A10]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
