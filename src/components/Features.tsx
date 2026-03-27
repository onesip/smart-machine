import { motion } from 'motion/react';
import { useState } from 'react';
import { Activity, Target, Zap, TrendingUp, CheckCircle2, Check } from 'lucide-react';
import ImageModal from './ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const [modalImage, setModalImage] = useState({ isOpen: false, url: '', alt: '' });
  const { t } = useLanguage();

  const mainFeatures = [
    {
      icon: Activity,
      title: t('features.stable.title'),
      desc: t('features.stable.desc'),
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      image: 'https://s3.bmp.ovh/2026/03/13/I1slIJSY.png',
      link: '#'
    },
    {
      icon: Target,
      title: t('features.accurate.title'),
      desc: t('features.accurate.desc'),
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      image: 'https://s3.bmp.ovh/2026/03/13/HZYM8pK6.png',
      link: '#'
    },
    {
      icon: Zap,
      title: t('features.fast.title'),
      desc: t('features.fast.desc'),
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      image: 'https://s3.bmp.ovh/2026/03/13/RywmTZoJ.png',
      link: '#'
    },
    {
      icon: TrendingUp,
      title: t('features.capacity.title'),
      desc: t('features.capacity.desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      image: 'https://s3.bmp.ovh/2026/03/13/cnCWOTih.jpg',
      link: '#'
    }
  ];

  const detailedFeatures: string[] = t('features.details');

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('features.title')}</h2>
          <p className="text-lg text-slate-600">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group flex flex-col relative"
            >
              <div 
                onClick={() => setModalImage({ isOpen: true, url: feature.image, alt: feature.title })}
                className="block relative aspect-video overflow-hidden bg-slate-100 z-10 cursor-zoom-in"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-sm border border-white/20 ${feature.color}`}>
                  <feature.icon size={20} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <a href={feature.link || '#'} target={feature.link && feature.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="before:absolute before:inset-0 z-10">
                    {feature.title}
                  </a>
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
            {t('features.productFeatures')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-12">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
                  <Check className="text-blue-600 group-hover:text-white transition-colors duration-300" size={12} strokeWidth={3} />
                </div>
                <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
            {[
              { image: 'https://s3.bmp.ovh/2026/03/13/oeXPGN7i.jpg', alt: t('features.alt1') },
              { image: 'https://s3.bmp.ovh/2026/03/13/i2oKNswu.png', alt: t('features.alt2') }
            ].map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setModalImage({ isOpen: true, url: item.image, alt: item.alt })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="block relative rounded-2xl overflow-hidden aspect-[2/1] group shadow-sm border border-slate-100 cursor-zoom-in"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={modalImage.isOpen} 
        imageUrl={modalImage.url} 
        altText={modalImage.alt} 
        onClose={() => setModalImage({ ...modalImage, isOpen: false })} 
      />
    </section>
  );
}
