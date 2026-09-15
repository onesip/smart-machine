import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Gauge,
  Layers,
  Package,
  QrCode,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Models from '../components/Models';
import Contact from '../components/Contact';
import AIChatbot from '../components/AIChatbot';
import ImageModal from '../components/ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

const featureImages = [
  'https://s3.bmp.ovh/2026/03/13/I1slIJSY.png',
  'https://s3.bmp.ovh/2026/03/13/HZYM8pK6.png',
  'https://s3.bmp.ovh/2026/03/13/RywmTZoJ.png',
  'https://s3.bmp.ovh/2026/03/13/cnCWOTih.jpg',
  'https://s3.bmp.ovh/2026/03/13/oeXPGN7i.jpg',
  'https://s3.bmp.ovh/2026/03/13/i2oKNswu.png',
];

const platformImages = [
  'https://s3.bmp.ovh/2026/03/13/huuJAwH8.png',
  'https://s3.bmp.ovh/2026/03/13/yWPHOI3w.png',
  'https://s3.bmp.ovh/2026/03/13/fiHhxj73.png',
  'https://s3.bmp.ovh/2026/03/13/hhRUgRDb.jpg',
];

export default function Home() {
  const { language } = useLanguage();
  const en = language === 'en';
  const [modalImage, setModalImage] = useState({ isOpen: false, url: '', alt: '' });

  const copy = en
    ? {
        heroKicker: 'SMART BUBBLE TEA AUTOMATION',
        heroTitle: 'Turn every drink into a repeatable automated workflow.',
        heroDesc:
          'I’TEA Smart Machine connects recipes, QR-triggered production, step-by-step dispensing, material monitoring, automatic cleaning and a remote dashboard — so beverage stores can operate with more consistency, speed and control.',
        heroPrimary: 'Book a live demo',
        heroSecondary: 'See how it works',
        heroBadge1: 'Stable recipes',
        heroBadge2: 'Faster production',
        heroBadge3: 'Traceable execution',
        heroBadge4: 'Lower training pressure',
        heroVisualTitle: 'One machine. Six operating advantages.',
        heroVisualSub: 'From recipe control to management visibility.',
        featuresKicker: 'THE SIX CORE ADVANTAGES',
        featuresTitle: 'Every feature is tied to a business result.',
        featuresDesc:
          'The machine is not valuable because it automates one action. It is valuable because it turns beverage production into a controlled, repeatable and measurable store process.',
        features: [
          {
            title: 'Recipe integration',
            outcome: 'More consistent drinks',
            desc: 'Centralized recipes keep preparation logic connected to the machine, helping stores deliver a repeatable standard across staff and locations.',
            icon: Cloud,
          },
          {
            title: 'QR-triggered production',
            outcome: 'Higher service efficiency',
            desc: 'Scan the order and move directly into production. Fewer manual steps mean a faster path from order to cup during peak periods.',
            icon: QrCode,
          },
          {
            title: 'Automatic cleaning & traceability',
            outcome: 'Stronger food-safety control',
            desc: 'Cleaning routines and execution records make daily hygiene and production activity easier to verify and trace.',
            icon: ShieldCheck,
          },
          {
            title: 'Step-by-step dispensing',
            outcome: 'Less manual preparation',
            desc: 'The machine can execute production in structured stages, reducing repetitive manual work and dependence on individual staff technique.',
            icon: Layers,
          },
          {
            title: 'Material monitoring',
            outcome: 'Better material efficiency',
            desc: 'Track material use and machine status so teams can react earlier to shortages, reduce avoidable waste and improve operating visibility.',
            icon: Package,
          },
          {
            title: 'Operations dashboard',
            outcome: 'Lower supervision & training cost',
            desc: 'Central visibility into machine activity, recipes and operating data reduces the need for constant floor supervision and repeated staff training.',
            icon: BarChart3,
          },
        ],
        workflowKicker: 'FROM ORDER TO CUP',
        workflowTitle: 'A production workflow staff can follow — and managers can see.',
        workflowDesc:
          'The value comes from connecting each stage instead of treating the machine as a standalone dispenser.',
        workflow: [
          ['01', 'Recipe ready', 'Approved drink logic is stored and standardized.', Cloud],
          ['02', 'Scan order', 'The production task is identified quickly from the order.', QrCode],
          ['03', 'Step-by-step output', 'The machine executes a structured production sequence.', Layers],
          ['04', 'Material check', 'Material use and availability stay visible to the operator.', Package],
          ['05', 'Cleaning & record', 'Cleaning actions and execution records support traceability.', ShieldCheck],
          ['06', 'Dashboard review', 'Managers can review machine and operating information remotely.', BarChart3],
        ] as const,
        resultsKicker: 'WHAT THE STORE OWNER GETS',
        resultsTitle: 'Automation translated into operating value.',
        results: [
          ['More stable output', 'Reduce variation caused by different staff habits and experience levels.', Gauge],
          ['Faster execution', 'Remove repeated manual steps and make production easier during rush periods.', Zap],
          ['Traceable operations', 'Keep production and cleaning activity visible instead of relying on memory.', ClipboardList],
          ['Easier staff onboarding', 'Use a structured machine workflow to reduce the amount of technique each new employee must memorize.', Users],
        ] as const,
        platformKicker: 'CONNECTED OPERATIONS',
        platformTitle: 'The machine is only one part of the system.',
        platformDesc:
          'The surrounding software layer gives owners and managers visibility into recipes, machine activity, execution records and daily operations.',
        platformBlocks: [
          {
            title: 'Remote machine visibility',
            text: 'See operating status and connected machine information without standing next to the equipment all day.',
          },
          {
            title: 'Recipe and task management',
            text: 'Keep recipes and production tasks organized so execution is easier to standardize across shifts and stores.',
          },
          {
            title: 'Execution and maintenance records',
            text: 'Review operating records to support maintenance, hygiene checks and operational follow-up.',
          },
          {
            title: 'Dashboard for managers',
            text: 'Turn machine activity into a management view that can reduce supervision pressure and improve training consistency.',
          },
        ],
        proofTitle: 'Built for real beverage-store operations',
        proofText:
          'From the machine interface to the management layer, the system is designed around the actual handoffs that happen in a beverage store: recipe, order, production, materials, cleaning and management review.',
        proofBullets: ['Recipe-driven execution', 'Connected production records', 'Operational visibility', 'Scalable staff workflow'],
      }
    : {
        heroKicker: '智能奶茶自动化',
        heroTitle: '把一杯奶茶，从配方到出品，变成可复制的自动化流程。',
        heroDesc:
          'I’TEA 智能奶茶机把配方、扫码生产、分步出茶、物料检测、自动清洗与 Dashboard 连接起来，让饮品门店更稳定、更高效，也更容易管理。',
        heroPrimary: '预约现场演示',
        heroSecondary: '看它如何工作',
        heroBadge1: '配方稳定',
        heroBadge2: '提高效率',
        heroBadge3: '执行可追溯',
        heroBadge4: '降低培训压力',
        heroVisualTitle: '一台机器，六个经营价值。',
        heroVisualSub: '从配方控制一直连接到门店管理。',
        featuresKicker: '六大核心能力',
        featuresTitle: '每一个功能，都要落到门店真正的经营结果。',
        featuresDesc:
          '智能奶茶机的价值，不是“自动做一个动作”，而是把饮品生产变成一套可控制、可复制、可追踪、可管理的门店流程。',
        features: [
          {
            title: '配方集成',
            outcome: '让出茶更稳定',
            desc: '通过集中化配方管理，把制作逻辑直接连接到机器，减少不同员工、不同班次之间的出品偏差。',
            icon: Cloud,
          },
          {
            title: '扫码出茶',
            outcome: '提高出品效率',
            desc: '扫描订单后直接进入制作流程，减少人工查找、确认和重复操作，让高峰期从订单到出杯更顺畅。',
            icon: QrCode,
          },
          {
            title: '自动清洗与执行溯源',
            outcome: '强化食品安全',
            desc: '清洗流程和执行记录能够被查看和追踪，让每日卫生管理、设备执行和问题回溯更有依据。',
            icon: ShieldCheck,
          },
          {
            title: '分步出茶',
            outcome: '代替重复手工操作',
            desc: '机器按结构化步骤执行出茶流程，减少重复性的人工制作，也降低对员工个人经验和手法的依赖。',
            icon: Layers,
          },
          {
            title: '物料检测',
            outcome: '提高物料效率',
            desc: '持续看到物料使用和机器状态，让门店更早发现缺料、异常和浪费，减少不必要的损耗。',
            icon: Package,
          },
          {
            title: 'Dashboard 管理',
            outcome: '降低监督与培训成本',
            desc: '把机器运行、配方和运营数据集中到管理视图里，减少管理者反复盯现场和重复培训员工的压力。',
            icon: BarChart3,
          },
        ],
        workflowKicker: '从订单到出杯',
        workflowTitle: '员工知道下一步做什么，管理者知道门店正在发生什么。',
        workflowDesc: '真正的价值在于把每一个环节连接起来，而不是把奶茶机当成一台孤立的出料设备。',
        workflow: [
          ['01', '配方就绪', '经过确认的饮品逻辑统一保存并标准化。', Cloud],
          ['02', '扫码识别订单', '快速识别需要执行的饮品和制作任务。', QrCode],
          ['03', '分步自动出茶', '机器按照结构化顺序执行制作。', Layers],
          ['04', '物料状态检测', '员工能够看到物料使用和可用状态。', Package],
          ['05', '清洗与执行记录', '清洗和生产动作留下记录，便于追溯。', ShieldCheck],
          ['06', 'Dashboard 管理', '管理者远程查看机器和运营信息。', BarChart3],
        ] as const,
        resultsKicker: '老板真正得到什么',
        resultsTitle: '把“自动化”翻译成真正的经营价值。',
        results: [
          ['出品更稳定', '减少不同员工习惯、经验和手法造成的出品波动。', Gauge],
          ['制作更高效', '减少重复人工步骤，让高峰期生产流程更顺畅。', Zap],
          ['流程可追溯', '生产与清洗不再只靠员工记忆，而是能够留下执行记录。', ClipboardList],
          ['新人更容易上手', '用结构化机器流程降低每一位新员工需要死记硬背的制作细节。', Users],
        ] as const,
        platformKicker: '连接门店运营',
        platformTitle: '奶茶机只是系统的一部分。',
        platformDesc:
          '真正的自动化还需要软件管理层，让老板和店长看到配方、机器状态、执行记录以及门店日常运营。',
        platformBlocks: [
          {
            title: '远程查看机器状态',
            text: '不用一直站在设备旁边，也能够看到机器和相关运行信息。',
          },
          {
            title: '配方与任务管理',
            text: '统一管理配方和制作任务，让不同班次、不同门店更容易执行同一套标准。',
          },
          {
            title: '执行与维护记录',
            text: '查看机器执行记录，为维护、卫生检查和异常跟进提供依据。',
          },
          {
            title: '管理 Dashboard',
            text: '把机器运行转化成管理视图，降低监督压力，同时提高员工培训的一致性。',
          },
        ],
        proofTitle: '为真实饮品店运营设计',
        proofText:
          '从机器界面到管理后台，整套系统围绕饮品店真正发生的交接来设计：配方、订单、制作、物料、清洗和管理复盘。',
        proofBullets: ['配方驱动执行', '生产记录联动', '运营状态可视', '更容易复制到多员工与多门店'],
      };

  const openImage = (url: string, alt: string) => setModalImage({ isOpen: true, url, alt });

  return (
    <div className="min-h-screen bg-[#f7f8fa] font-sans text-slate-950 selection:bg-blue-200 selection:text-blue-950">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#0b1220] pt-28 text-white sm:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_20%_90%,rgba(14,165,233,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300"
              >
                {copy.heroKicker}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[64px]"
              >
                {copy.heroTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-6 max-w-xl text-[16px] leading-8 text-slate-300 sm:text-[17px]"
              >
                {copy.heroDesc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500">
                  {copy.heroPrimary} <ArrowRight size={17} />
                </a>
                <a href="#features" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  {copy.heroSecondary}
                </a>
              </motion.div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[12px] text-slate-300 sm:grid-cols-4">
                {[copy.heroBadge1, copy.heroBadge2, copy.heroBadge3, copy.heroBadge4].map((item) => (
                  <div key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="shrink-0 text-blue-400" />{item}</div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => openImage(featureImages[0], copy.heroVisualTitle)}
                className="group relative block w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left shadow-2xl shadow-black/30"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                  <img src={featureImages[0]} alt={copy.heroVisualTitle} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/92 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">I’TEA SMART MACHINE</div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.02em]">{copy.heroVisualTitle}</div>
                  <div className="mt-1 text-[12px] text-slate-300">{copy.heroVisualSub}</div>
                </div>
              </button>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {featureImages.slice(1, 4).map((image, index) => (
                  <button key={image} type="button" onClick={() => openImage(image, copy.features[index + 1].title)} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <div className="aspect-[4/3] overflow-hidden"><img src={image} alt={copy.features[index + 1].title} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" referrerPolicy="no-referrer" /></div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">{copy.featuresKicker}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[44px]">{copy.featuresTitle}</h2>
              <p className="mt-5 text-[15px] leading-7 text-slate-600 sm:text-[16px]">{copy.featuresDesc}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {copy.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfcfd] shadow-[0_14px_40px_-30px_rgba(15,23,42,0.35)]"
                  >
                    <button type="button" onClick={() => openImage(featureImages[index], feature.title)} className="block w-full overflow-hidden bg-slate-100 text-left">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={featureImages[index]} alt={feature.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
                      </div>
                    </button>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={19} /></div>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">{feature.outcome}</span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-slate-950">{feature.title}</h3>
                      <p className="mt-3 text-[13px] leading-6 text-slate-600">{feature.desc}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="mes" className="border-y border-slate-200 bg-[#f6f8fb] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">{copy.workflowKicker}</div>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">{copy.workflowTitle}</h2>
                <p className="mt-5 text-[15px] leading-7 text-slate-600">{copy.workflowDesc}</p>
              </div>

              <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-2">
                {copy.workflow.map(([num, title, desc, Icon], index) => {
                  const C = Icon;
                  return (
                    <div key={num} className={`p-6 sm:p-7 ${index < 4 ? 'border-b border-slate-200' : ''} ${index % 2 === 0 ? 'md:border-r md:border-slate-200' : ''}`}>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white"><C size={18} /></div>
                        <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-400">{num}</span>
                      </div>
                      <h3 className="mt-5 text-[18px] font-semibold text-slate-950">{title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-slate-600">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1220] py-20 text-white lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">{copy.resultsKicker}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{copy.resultsTitle}</h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {copy.results.map(([title, desc, Icon]) => {
                const C = Icon;
                return (
                  <article key={title} className="bg-[#0b1220] p-6 sm:p-7">
                    <C size={21} className="text-blue-300" />
                    <h3 className="mt-5 text-[17px] font-semibold">{title}</h3>
                    <p className="mt-3 text-[12px] leading-6 text-slate-400">{desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="platform" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">{copy.platformKicker}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[44px]">{copy.platformTitle}</h2>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">{copy.platformDesc}</p>
            </div>

            <div className="mt-12 space-y-6">
              {copy.platformBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className={`grid overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfcfd] lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <button type="button" onClick={() => openImage(platformImages[index], block.title)} className="group block min-h-[280px] overflow-hidden bg-slate-100 text-left sm:min-h-[340px]">
                    <img src={platformImages[index]} alt={block.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
                  </button>
                  <div className="flex items-center p-7 sm:p-10 lg:p-12">
                    <div className="max-w-lg">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">0{index + 1}</div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-[28px]">{block.title}</h3>
                      <p className="mt-4 text-[14px] leading-7 text-slate-600">{block.text}</p>
                      <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-slate-900"><CheckCircle2 size={16} className="text-blue-600" />{en ? 'Connected to the same operating system' : '连接到同一套门店运营系统'}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 rounded-2xl border border-slate-200 bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600"><Settings size={20} /></div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{copy.proofTitle}</h3>
                <p className="mt-4 text-[13px] leading-7 text-slate-300">{copy.proofText}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.proofBullets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-[12px] leading-5 text-slate-200"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-300" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Models />
        <Contact />
      </main>

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
