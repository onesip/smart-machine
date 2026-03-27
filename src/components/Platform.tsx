import { motion } from 'motion/react';
import { useState } from 'react';
import ImageModal from './ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Platform() {
  const [modalImage, setModalImage] = useState({ isOpen: false, url: '', alt: '' });
  const { t } = useLanguage();

  const showcases = [
    {
      id: 'iot',
      title: t('platform.iot.title'),
      subtitle: t('platform.iot.subtitle'),
      desc: t('platform.iot.desc'),
      image: 'https://s3.bmp.ovh/2026/03/13/huuJAwH8.png',
      link: '#'
    },
    {
      id: 'management',
      title: t('platform.management.title'),
      subtitle: t('platform.management.subtitle'),
      desc: t('platform.management.desc'),
      image: 'https://s3.bmp.ovh/2026/03/13/yWPHOI3w.png',
      link: '#'
    },
    {
      id: 'equipment',
      title: t('platform.operation.title'),
      subtitle: t('platform.operation.subtitle'),
      desc: t('platform.operation.desc'),
      image: 'https://s3.bmp.ovh/2026/03/13/fiHhxj73.png',
      link: '#'
    },
    {
      id: 'food-safety',
      title: t('platform.safety.title'),
      subtitle: t('platform.safety.subtitle'),
      desc: t('platform.safety.desc'),
      details: t('platform.safety.details'),
      link: '#'
    },
    {
      id: 'functions',
      title: t('platform.function.title'),
      subtitle: t('platform.function.subtitle'),
      desc: t('platform.function.desc'),
      image: 'https://s3.bmp.ovh/2026/03/13/hhRUgRDb.jpg',
      link: '#'
    },
    {
      id: 'advantages',
      title: t('platform.advantages.title'),
      subtitle: t('platform.advantages.subtitle'),
      desc: t('platform.advantages.desc'),
      details: t('platform.advantages.details'),
      link: '#'
    }
  ];

  return (
    <section id="platform" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('platform.title')}</h2>
          <p className="text-lg text-slate-600">{t('platform.subtitle')}</p>
        </div>

        <div className="space-y-24">
          {showcases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div>
                  <span className="inline-block py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="flex-1 w-full">
                {item.image ? (
                  <div 
                    onClick={() => setModalImage({ isOpen: true, url: item.image, alt: item.title })}
                    className="block relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10] bg-slate-100 cursor-zoom-in"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.details?.map((detail, i) => {
                      const [title, ...descParts] = detail.split('：');
                      const desc = descParts.join('：');
                      return (
                        <div key={i} className="group relative bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0 font-mono text-sm font-medium group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                              0{i + 1}
                            </div>
                            <div>
                              {desc ? (
                                <>
                                  <h4 className="text-slate-900 font-semibold mb-1">{title}</h4>
                                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                </>
                              ) : (
                                <p className="text-slate-700 text-sm leading-relaxed font-medium">{detail}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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
