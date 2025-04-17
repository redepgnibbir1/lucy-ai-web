
import { Check } from 'lucide-react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const CopilotSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-lucy-dark-gray-new text-lucy-white" id="team-communications">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">{t('teamComm.title')}</h2>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-xl md:text-2xl font-medium mb-4">{t('teamComm.subtitle')}</p>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <p className="max-w-3xl mx-auto text-lg text-lucy-light-gray-new">
              {t('teamComm.description')}
            </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <Animate variants={slideInLeft}>
              <h3 className="text-2xl font-medium mb-6">{t('teamComm.benefits.title')}</h3>
              <ul className="space-y-4 text-lucy-light-gray-new">
                <FeatureItem text={t('teamComm.benefits.silos')} />
                <FeatureItem text={t('teamComm.benefits.time')} />
                <FeatureItem text={t('teamComm.benefits.daily')} />
              </ul>
            </Animate>
          </div>
          <div className="flex items-center justify-center">
            <Animate variants={slideInRight}>
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="h-full w-full rounded-[2rem] overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/d5a18fe3-5a14-4c16-b992-6e2bc1d36d7e.png" 
                    alt="Lucy Team Communications app screenshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Animate>
          </div>
        </div>
        
        <div>
          <Animate variants={fadeInUp} transition={{ delay: 0.6 }}>
            <h3 className="text-2xl font-medium mb-8 text-center">{t('teamComm.functions.title')}</h3>
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Animate variants={fadeInUp} transition={{ delay: 0.8 }}>
              <FunctionCard 
                title={t('teamComm.functions.shifts')} 
                description={t('teamComm.functions.shifts.desc')}
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.0 }}>
              <FunctionCard 
                title={t('teamComm.functions.translation')} 
                description={t('teamComm.functions.translation.desc')}
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.2 }}>
              <FunctionCard 
                title={t('teamComm.functions.onboarding')} 
                description={t('teamComm.functions.onboarding.desc')}
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.4 }}>
              <FunctionCard 
                title={t('teamComm.functions.workorders')} 
                description={t('teamComm.functions.workorders.desc')}
              />
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <Check className="h-5 w-5 text-lucy-neon-yellow mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
};

interface FunctionCardProps {
  title: string;
  description: string;
}

const FunctionCard = ({ title, description }: FunctionCardProps) => {
  return (
    <div className="bg-lucy-black p-6 rounded-lg shadow-sm">
      <h4 className="text-lg font-medium mb-2 text-lucy-white">{title}</h4>
      <p className="text-sm text-lucy-light-gray-new">{description}</p>
    </div>
  );
};

export default CopilotSection;
