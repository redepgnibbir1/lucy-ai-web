
import { Check } from 'lucide-react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const GuestCommunicationsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-lucy-light-gray-new text-lucy-black" id="guest-communications">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">{t('guestComm.title')}</h2>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
          <p className="text-xl md:text-2xl font-medium mb-4">{t('guestComm.subtitle')}</p>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
          <p className="max-w-3xl mx-auto text-lg text-lucy-dark-gray-new">
            {t('guestComm.description')}
          </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-last md:order-first flex justify-center items-center">
            <Animate variants={slideInLeft}>
            <div className="relative mx-auto w-full max-w-[640px]">
              {/* Laptop mockup */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/c286aa08-0656-45a7-8595-6af8e79193b1.png" 
                  alt="Laptop mockup" 
                  className="w-full h-auto"
                />
                {/* Screen content - positioned absolutely inside the laptop screen */}
                <div className="absolute top-[5.2%] left-[11.5%] right-[11.5%] bottom-[30.5%] overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/b90b9d31-7d0a-4002-aa07-5aacc9705e0b.png" 
                    alt="Lucy Guest Communications interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            </Animate>
          </div>
          <div>
            <Animate variants={slideInRight}>
            <h3 className="text-2xl font-medium mb-6">{t('guestComm.benefits.title')}</h3>
            <ul className="space-y-4 text-lucy-dark-gray-new">
              <FeatureItem text={t('guestComm.benefits.upsell')} />
              <FeatureItem text={t('guestComm.benefits.experience')} />
              <FeatureItem text={t('guestComm.benefits.channels')} />
            </ul>
            </Animate>
          </div>
        </div>
        
        <div>
          <Animate variants={fadeInUp} transition={{ delay: 0.6 }}>
          <h3 className="text-2xl font-medium mb-8 text-center">{t('guestComm.functions.title')}</h3>
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Animate variants={fadeInUp} transition={{ delay: 0.8 }}>
            <FunctionCard 
              title={t('guestComm.functions.welcome')} 
              description={t('guestComm.functions.welcome.desc')}
            />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.0 }}>
            <FunctionCard 
              title={t('guestComm.functions.upsell')} 
              description={t('guestComm.functions.upsell.desc')}
            />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.2 }}>
            <FunctionCard 
              title={t('guestComm.functions.feedback')} 
              description={t('guestComm.functions.feedback.desc')}
            />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.4 }}>
            <FunctionCard 
              title={t('guestComm.functions.ai')} 
              description={t('guestComm.functions.ai.desc')}
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
      <Check className="h-5 w-5 text-lucy-black mt-0.5 flex-shrink-0" />
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
    <div className="bg-lucy-white p-6 rounded-lg shadow-md h-[200px] flex flex-col">
      <h4 className="text-lg font-medium mb-3 text-lucy-black">{title}</h4>
      <p className="text-lucy-dark-gray-new flex-grow">{description}</p>
    </div>
  );
};

export default GuestCommunicationsSection;
