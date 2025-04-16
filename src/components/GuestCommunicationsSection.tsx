
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const GuestCommunicationsSection = () => {
  const { t } = useLanguage();

  const handleExploreClick = () => {
    console.log('Explore Lucy Guest Communications clicked');
    // In a real implementation, this might navigate to a product page
    window.open('mailto:contact@lucy.ai?subject=Guest Communications Inquiry', '_blank');
  };

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
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="h-6 bg-gray-700 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="aspect-video">
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
          
          <div className="mt-12 text-center">
            <Animate variants={fadeInUp} transition={{ delay: 1.6 }}>
            <Button 
              className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 font-medium px-8"
              onClick={handleExploreClick}
            >
              {t('guestComm.explore')}
            </Button>
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
