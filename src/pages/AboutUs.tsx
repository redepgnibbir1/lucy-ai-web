import React from 'react';
import { Check, Linkedin } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <div className="container py-12 md:py-24">
        <Animate variants={staggerContainer}>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <Animate variants={fadeInUp}>
              <div>
                <h1 className="text-3xl md:text-5xl font-medium mb-6">{t('about.title')}</h1>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.intro')}
                </p>
              </div>
            </Animate>
            <Animate variants={slideInRight}>
              <div className="bg-lucy-neon-yellow rounded-xl p-8">
                <h2 className="text-2xl font-medium mb-4 text-lucy-dark-gray">{t('about.vision.title')}</h2>
                <p className="text-lucy-dark-gray mb-6">
                  {t('about.vision.text')}
                </p>
                <h2 className="text-2xl font-medium mb-4 text-lucy-dark-gray">{t('about.values.title')}</h2>
                <ul className="space-y-3">
                  {[
                    t('about.values.item1'),
                    t('about.values.item2'),
                    t('about.values.item3'),
                    t('about.values.item4')
                  ].map((value, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-lucy-dark-gray flex-shrink-0" />
                      <span className="text-lucy-dark-gray">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          </div>
          
          <Animate variants={fadeInUp}>
            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">{t('about.founders.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Animate variants={slideInLeft} transition={{ delay: 0.2 }}>
                  <TeamMember 
                    name={t('about.founders.bjorn.name')}
                    title={t('about.founders.bjorn.title')}
                    bio={t('about.founders.bjorn.bio')}
                    imageSrc="/lovable-uploads/8b52a78b-42c9-4234-96df-088d64ddf8f0.png"
                  />
                </Animate>
                <Animate variants={slideInLeft} transition={{ delay: 0.4 }}>
                  <TeamMember 
                    name={t('about.founders.peder.name')}
                    title={t('about.founders.peder.title')}
                    bio={t('about.founders.peder.bio')}
                    imageSrc="/lovable-uploads/66c2a77c-5ad1-40ba-9c37-a2c74b08a892.png"
                  />
                </Animate>
                <Animate variants={slideInLeft} transition={{ delay: 0.6 }}>
                  <TeamMember 
                    name={t('about.founders.peter.name')}
                    title={t('about.founders.peter.title')}
                    bio={t('about.founders.peter.bio')}
                    imageSrc="/lovable-uploads/f99fa05a-1681-447e-b3a1-b57f7bd0bb52.png"
                  />
                </Animate>
              </div>
              
              <Animate variants={fadeInUp} transition={{ delay: 0.8 }}>
                <div className="mt-12 text-center">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://www.linkedin.com/company/lucy-analytics/', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                    {t('about.linkedinButton')}
                  </Button>
                </div>
              </Animate>
            </div>
          </Animate>
        </Animate>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
}

const TeamMember = ({ name, title, bio, imageSrc }: TeamMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
      <div className="flex justify-center mb-4">
        <Avatar className="w-24 h-24">
          {imageSrc ? (
            <AvatarImage src={imageSrc} alt={name} className="object-cover" />
          ) : (
            <AvatarFallback className="text-lg bg-gray-200">{name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
      </div>
      <h3 className="font-medium text-xl mb-1 text-center">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{title}</p>
      <p className="text-gray-600 text-sm flex-grow">{bio}</p>
    </div>
  );
};

export default AboutUs;
