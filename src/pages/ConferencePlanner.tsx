import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import CalendlyWidget from '@/components/CalendlyWidget';
import VideoPlayer from '@/components/VideoPlayer';
import MockupPlaceholder from '@/components/MockupPlaceholder';
import conferenceParticipantsImage from '@/assets/conference-planner-participants.png';
import conferenceScheduleImage from '@/assets/conference-planner-schedule.png';
import conferenceDialogueImage from '@/assets/conference-planner-dialogue.png';
import conferenceWorkspaceImage from '@/assets/conference-planner-workspace.png';
import { Clock, TrendingDown, Handshake, TrendingUp, Building, Hotel, CalendarDays, Users, ClipboardList, Utensils, LayoutDashboard, MessageSquare, FileSpreadsheet, Sparkles } from 'lucide-react';
const ConferencePlanner = () => {
  const {
    t
  } = useLanguage();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const scrollToFeatures = () => {
    document.getElementById('features-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    document.getElementById('cta-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Animation variants
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const problemItems = [t('cp.problem.item1'), t('cp.problem.item2'), t('cp.problem.item3'), t('cp.problem.item4')];
  const features = [{
    icon: ClipboardList,
    titleKey: 'cp.features.registration.title',
    descKey: 'cp.features.registration.description',
    image: conferenceWorkspaceImage
  }, {
    icon: Utensils,
    titleKey: 'cp.features.dietary.title',
    descKey: 'cp.features.dietary.description',
    image: conferenceParticipantsImage
  }, {
    icon: LayoutDashboard,
    titleKey: 'cp.features.schedule.title',
    descKey: 'cp.features.schedule.description',
    image: conferenceScheduleImage
  }, {
    icon: MessageSquare,
    titleKey: 'cp.features.dialogue.title',
    descKey: 'cp.features.dialogue.description',
    image: conferenceDialogueImage
  }];
  const results = [{
    icon: Clock,
    titleKey: 'cp.results.time.title',
    descKey: 'cp.results.time.description'
  }, {
    icon: TrendingDown,
    titleKey: 'cp.results.errors.title',
    descKey: 'cp.results.errors.description'
  }, {
    icon: Handshake,
    titleKey: 'cp.results.dialogue.title',
    descKey: 'cp.results.dialogue.description'
  }, {
    icon: TrendingUp,
    titleKey: 'cp.results.upsell.title',
    descKey: 'cp.results.upsell.description'
  }];
  const audiences = [{
    icon: Building,
    titleKey: 'cp.audience.venues.title',
    descKey: 'cp.audience.venues.description'
  }, {
    icon: Hotel,
    titleKey: 'cp.audience.hotels.title',
    descKey: 'cp.audience.hotels.description'
  }, {
    icon: CalendarDays,
    titleKey: 'cp.audience.agencies.title',
    descKey: 'cp.audience.agencies.description'
  }, {
    icon: Users,
    titleKey: 'cp.audience.companies.title',
    descKey: 'cp.audience.companies.description'
  }];
  return <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-10">
            {/* Text content - centered above video */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto">
              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                {t('cp.hero.title')}
                <br />
                <span className="text-gray-600">{t('cp.hero.subtitle')}</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                {t('cp.hero.description')}
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <Button onClick={() => setIsCalendlyOpen(true)} className="bg-lucy-neon-yellow text-lucy-black hover:bg-lucy-neon-yellow/90 font-sans text-lg px-8 py-6">
                  {t('cp.hero.cta.demo')}
                </Button>
                <Button onClick={scrollToFeatures} variant="outline" className="border-lucy-black text-lucy-black hover:bg-lucy-black hover:text-white font-sans text-lg px-8 py-6">
                  {t('cp.hero.cta.how')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Video - takes up most of the width */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="w-full max-w-6xl mx-auto">
              <VideoPlayer aspectRatio="16:9" videoPath="hero-video.mp4" autoPlay />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {t('cp.problem.title')}
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="font-sans text-lg text-gray-600 mb-12">
              {t('cp.problem.description')}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {problemItems.map((item, index) => <motion.div key={index} variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-lg">✕</span>
                    </div>
                    <p className="font-sans text-lg text-gray-700">{item}</p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TURNING POINT SECTION */}
      <section className="py-20 lg:py-32 bg-lucy-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8">
                {t('cp.turning.title')}
              </h2>
              <blockquote className="font-sans text-xl md:text-2xl text-gray-300 italic leading-relaxed">
                {t('cp.turning.quote')}
              </blockquote>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <VideoPlayer aspectRatio="16:9" videoPath="turning-point-video.mp4" autoPlayOnScroll className="bg-gradient-to-br from-gray-700 to-gray-800" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features-section" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              {t('cp.features.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              {t('cp.features.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.15
          }} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-lucy-neon-yellow flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-lucy-black" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">{t(feature.titleKey)}</h3>
                    <p className="font-sans text-gray-600">{t(feature.descKey)}</p>
                  </div>
                </div>
                {feature.image ? <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <img src={feature.image} alt={t(feature.titleKey)} className="w-full h-full object-cover object-top" />
                  </div> : <MockupPlaceholder />}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
                {t('cp.results.title')}
              </motion.h2>
              <motion.p variants={fadeInUp} className="font-sans text-lg text-gray-600 mb-8">
                {t('cp.results.subtitle')}
              </motion.p>

              <div className="space-y-6">
                {results.map((result, index) => <motion.div key={index} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-lucy-neon-yellow flex items-center justify-center flex-shrink-0">
                      <result.icon className="w-6 h-6 text-lucy-black" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">{t(result.titleKey)}</h3>
                      <p className="font-sans text-gray-600">{t(result.descKey)}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <VideoPlayer aspectRatio="16:9" videoPath="results-video.mp4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* UPSELL COMPARISON SECTION */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              {t('cp.upsell.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-gray-600">
              {t('cp.upsell.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-gray-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileSpreadsheet className="w-8 h-8 text-gray-500" />
                <h3 className="font-display text-2xl text-gray-700">{t('cp.upsell.before.title')}</h3>
              </div>
              <p className="font-sans text-gray-600 mb-6">{t('cp.upsell.before.description')}</p>
              
              {/* Excel mockup */}
              <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                </div>
                <div className="p-4 space-y-2 font-mono text-sm text-gray-600">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-2 border">Silent Disco</div>
                    <div className="bg-gray-50 p-2 border">500 kr</div>
                    <div className="bg-gray-50 p-2 border">Ja/Nej</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-2 border">Escape room</div>
                    <div className="bg-gray-50 p-2 border">50 kr/person</div>
                    <div className="bg-gray-50 p-2 border">Ja/Nej</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-2 border">Sauna</div>
                    <div className="bg-gray-50 p-2 border">120 kr/person</div>
                    <div className="bg-gray-50 p-2 border">Ja/Nej</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-2 border">Middag</div>
                    <div className="bg-gray-50 p-2 border">350 kr/person</div>
                    <div className="bg-gray-50 p-2 border">Ja/Nej</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-2 border">Teambuilding</div>
                    <div className="bg-gray-50 p-2 border">200 kr/person</div>
                    <div className="bg-gray-50 p-2 border">Ja/Nej</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-lucy-neon-yellow/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-lucy-black" />
                <h3 className="font-display text-2xl">{t('cp.upsell.after.title')}</h3>
              </div>
              <p className="font-sans text-gray-700 mb-6">{t('cp.upsell.after.description')}</p>
              
              <MockupPlaceholder />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              {t('cp.audience.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              {t('cp.audience.subtitle')}
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {audiences.map((audience, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-lucy-neon-yellow mx-auto mb-4 flex items-center justify-center">
                  <audience.icon className="w-8 h-8 text-lucy-black" />
                </div>
                <h3 className="font-display text-lg mb-2">{t(audience.titleKey)}</h3>
                <p className="font-sans text-sm text-gray-600">{t(audience.descKey)}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="py-20 lg:py-32 bg-lucy-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              {t('cp.cta.title')}
            </h2>
            <p className="font-sans text-xl text-gray-300 mb-10">
              {t('cp.cta.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsCalendlyOpen(true)} className="bg-lucy-neon-yellow text-lucy-black hover:bg-lucy-neon-yellow/90 font-sans text-lg px-8 py-6">
                {t('cp.cta.demo')}
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="border-white text-white hover:bg-white hover:text-lucy-black font-sans text-lg px-8 py-6">
                {t('cp.cta.contact')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Widget */}
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>;
};
export default ConferencePlanner;