import { motion } from 'motion/react';
import { ShieldCheck, Zap, Server, Smartphone, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MES() {
  const { t } = useLanguage();

  const mesBenefits = [
    {
      icon: Zap,
      title: t('mes.benefits.0.title'),
      desc: t('mes.benefits.0.desc')
    },
    {
      icon: ShieldCheck,
      title: t('mes.benefits.1.title'),
      desc: t('mes.benefits.1.desc')
    },
    {
      icon: Server,
      title: t('mes.benefits.2.title'),
      desc: t('mes.benefits.2.desc')
    }
  ];

  const advantages = [
    { title: t('mes.advantages.0.title'), items: [t('mes.advantages.0.items.0'), t('mes.advantages.0.items.1'), t('mes.advantages.0.items.2')] },
    { title: t('mes.advantages.1.title'), items: [t('mes.advantages.1.items.0'), t('mes.advantages.1.items.1'), t('mes.advantages.1.items.2')] },
    { title: t('mes.advantages.2.title'), items: [t('mes.advantages.2.items.0'), t('mes.advantages.2.items.1'), t('mes.advantages.2.items.2')] },
    { title: t('mes.advantages.3.title'), items: [t('mes.advantages.3.items.0'), t('mes.advantages.3.items.1')] },
    { title: t('mes.advantages.4.title'), items: [t('mes.advantages.4.items.0'), t('mes.advantages.4.items.1'), t('mes.advantages.4.items.2')] },
    { title: t('mes.advantages.5.title'), items: [t('mes.advantages.5.items.0'), t('mes.advantages.5.items.1')] },
    { title: t('mes.advantages.6.title'), items: [t('mes.advantages.6.items.0'), t('mes.advantages.6.items.1'), t('mes.advantages.6.items.2')] },
    { title: t('mes.advantages.7.title'), items: [t('mes.advantages.7.items.0'), t('mes.advantages.7.items.1')] }
  ];

  return (
    <section id="mes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('mes.title')}</h2>
          <p className="text-lg text-slate-600">{t('mes.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mesBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">{t('mes.coreValue')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-blue-400 font-bold mb-4">{adv.title}</h4>
                  <ul className="space-y-2">
                    {adv.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
