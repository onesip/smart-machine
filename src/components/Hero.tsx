import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/teafactory/1920/1080?blur=2"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {t('hero.title')}
            <span className="block text-blue-400 mt-2">{t('hero.titleHighlight')}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#models" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-colors">
              {t('hero.button1')} <ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors backdrop-blur-sm">
              {t('hero.button2')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
