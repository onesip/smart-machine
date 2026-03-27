import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { models, commonSpecs } from '../data/models';
import { Settings, Cpu, Zap, ThermometerSnowflake, Ruler, Monitor } from 'lucide-react';
import ImageModal from './ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

export default function Models() {
  const [modalImage, setModalImage] = useState({ isOpen: false, url: '', alt: '' });
  const { t, translateValue } = useLanguage();

  return (
    <section id="models" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('models.title')}</h2>
          <p className="text-lg text-slate-600">{t('models.subtitle')}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Settings className="text-blue-600" /> {t('models.commonTitle')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">{t('models.common.system')}</div>
              <div className="font-semibold text-slate-900">{translateValue(commonSpecs.system)}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">{t('models.common.voltage')}</div>
              <div className="font-semibold text-slate-900">{translateValue(commonSpecs.voltage)}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">{t('models.common.cooling')}</div>
              <div className="font-semibold text-slate-900">{translateValue(commonSpecs.cooling)}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">{t('models.common.sugarAccuracy')}</div>
              <div className="font-semibold text-slate-900">{translateValue(commonSpecs.sugarAccuracy)}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <div className="text-sm text-slate-500 mb-1">{t('models.common.otherAccuracy')}</div>
              <div className="font-semibold text-slate-900">{translateValue(commonSpecs.otherAccuracy)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden cursor-zoom-in" onClick={() => setModalImage({ isOpen: true, url: model.image, alt: model.name })}>
                <img
                  src={model.image}
                  alt={`Model ${model.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm pointer-events-none z-10">
                  {t('models.modelPrefix')}{model.name}
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Monitor size={16} className="text-slate-400 shrink-0" />
                    <span className="text-slate-600 w-16">{t('models.specs.screen')}:</span>
                    <span className="font-medium text-slate-900 truncate">{translateValue(model.screen)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Cpu size={16} className="text-slate-400 shrink-0" />
                    <span className="text-slate-600 w-16">{t('models.specs.bins')}:</span>
                    <span className="font-medium text-slate-900 truncate">{translateValue(model.bins)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <ThermometerSnowflake size={16} className="text-slate-400 shrink-0" />
                    <span className="text-slate-600 w-16">{t('models.specs.sugarMachine')}:</span>
                    <span className="font-medium text-slate-900 truncate">{translateValue(model.sugarMachine)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Ruler size={16} className="text-slate-400 shrink-0" />
                    <span className="text-slate-600 w-16">{t('models.specs.dimensions')}:</span>
                    <span className="font-medium text-slate-900 truncate">{translateValue(model.dimensions)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Zap size={16} className="text-slate-400 shrink-0" />
                    <span className="text-slate-600 w-16">{t('models.specs.power')}:</span>
                    <span className="font-medium text-slate-900 truncate">{translateValue(model.power)}</span>
                  </div>
                  {model.trays && (
                    <div className="flex items-center gap-3 text-sm">
                      <Settings size={16} className="text-slate-400 shrink-0" />
                      <span className="text-slate-600 w-16">{t('models.specs.trays')}:</span>
                      <span className="font-medium text-slate-900 truncate">{translateValue(model.trays)}</span>
                    </div>
                  )}
                  {model.teaBuckets && (
                    <div className="flex items-center gap-3 text-sm">
                      <Settings size={16} className="text-slate-400 shrink-0" />
                      <span className="text-slate-600 w-16">{t('models.specs.teaBuckets')}:</span>
                      <span className="font-medium text-slate-900 truncate">{translateValue(model.teaBuckets)}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link to={`/model/${model.id}`} className="text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center gap-2 transition-colors">
                    {t('models.viewDetails')}
                  </Link>
                </div>
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
