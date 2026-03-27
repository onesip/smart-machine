import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Monitor, Cpu, ThermometerSnowflake, Ruler, Zap, Settings } from 'lucide-react';
import { models, commonSpecs } from '../data/models';
import Navbar from '../components/Navbar';
import AIChatbot from '../components/AIChatbot';
import ImageModal from '../components/ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

export default function ModelDetails() {
  const { id } = useParams();
  const model = models.find(m => m.id === id);
  const [modalImage, setModalImage] = useState({ isOpen: false, url: '', alt: '' });
  const { t, translateValue } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!model) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">{t('details.notFound')}</h1>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> {t('details.back')}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeft size={20} /> {t('details.back')}
          </Link>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div 
                className="bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center cursor-zoom-in group relative"
                onClick={() => setModalImage({ isOpen: true, url: model.image, alt: model.name })}
              >
                <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                  {t('models.modelPrefix')}{model.name}
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-8">{t('details.titlePrefix')}{model.name}</h1>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b border-slate-100 pb-4">{t('details.coreSpecs')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Monitor className="text-blue-500 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.specs.screen')}</div>
                        <div className="font-medium">{translateValue(model.screen)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Cpu className="text-blue-500 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.specs.bins')}</div>
                        <div className="font-medium">{translateValue(model.bins)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ThermometerSnowflake className="text-blue-500 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.specs.sugarMachine')}</div>
                        <div className="font-medium">{translateValue(model.sugarMachine)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ruler className="text-blue-500 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.specs.dimensions')}</div>
                        <div className="font-medium">{translateValue(model.dimensions)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="text-blue-500 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.specs.power')}</div>
                        <div className="font-medium">{translateValue(model.power)}</div>
                      </div>
                    </div>
                    {model.trays && (
                      <div className="flex items-start gap-3">
                        <Settings className="text-blue-500 mt-1 shrink-0" size={20} />
                        <div>
                          <div className="text-sm text-slate-500">{t('models.specs.trays')}</div>
                          <div className="font-medium">{translateValue(model.trays)}</div>
                        </div>
                      </div>
                    )}
                    {model.teaBuckets && (
                      <div className="flex items-start gap-3">
                        <Settings className="text-blue-500 mt-1 shrink-0" size={20} />
                        <div>
                          <div className="text-sm text-slate-500">{t('models.specs.teaBuckets')}</div>
                          <div className="font-medium">{translateValue(model.teaBuckets)}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold border-b border-slate-100 pb-4 mt-8">{t('models.commonTitle')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Settings className="text-slate-400 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.common.system')}</div>
                        <div className="font-medium">{translateValue(commonSpecs.system)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="text-slate-400 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.common.voltage')}</div>
                        <div className="font-medium">{translateValue(commonSpecs.voltage)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ThermometerSnowflake className="text-slate-400 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.common.cooling')}</div>
                        <div className="font-medium">{translateValue(commonSpecs.cooling)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="text-slate-400 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.common.sugarAccuracy')}</div>
                        <div className="font-medium">{translateValue(commonSpecs.sugarAccuracy)}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="text-slate-400 mt-1 shrink-0" size={20} />
                      <div>
                        <div className="text-sm text-slate-500">{t('models.common.otherAccuracy')}</div>
                        <div className="font-medium">{translateValue(commonSpecs.otherAccuracy)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AIChatbot />

      <ImageModal 
        isOpen={modalImage.isOpen} 
        imageUrl={modalImage.url} 
        altText={modalImage.alt} 
        onClose={() => setModalImage({ ...modalImage, isOpen: false })} 
      />
    </div>
  );
}
