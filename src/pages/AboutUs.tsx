
import React from 'react';
import Navbar from '@/components/Navbar';
import { Check, Linkedin } from "lucide-react";
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium mb-6">Människor bakom maskinen</h1>
            <p className="text-lg text-gray-600 mb-6">
              Lucy grundades 2023 av Peder Ribbing, Peter Schierenbeck och Björn Treje – tre kollegor 
              med bakgrund inom tech och hotell. De delar en gemensam vision: att AI kan förbättra 
              både gästupplevelsen och arbetsmiljön inom hotellvärlden.
            </p>
          </div>
          <div className="bg-lucy-neon-yellow rounded-xl p-8">
            <h2 className="text-2xl font-medium mb-4 text-lucy-dark-gray">Vår vision</h2>
            <p className="text-lucy-dark-gray mb-6">
              Att vara den ledande AI-partnern för hotellbranschen, som skapar mätbart värde 
              genom datadriven insikt och automatisering.
            </p>
            <h2 className="text-2xl font-medium mb-4 text-lucy-dark-gray">Våra värderingar</h2>
            <ul className="space-y-3">
              {[
                "Innovation i allt vi gör",
                "Enkelhet i komplexitet",
                "Mätbara resultat för våra kunder",
                "Ständig förbättring"
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-lucy-dark-gray flex-shrink-0" />
                  <span className="text-lucy-dark-gray">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Grundare</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Björn Treje" 
              title="Medgrundare"
              bio="20 års erfarenhet av att bygga tekniska system för B2B. Björn kommer senast från en roll som ansvarig för AI Enablement på spelutvecklaren King."
            />
            <TeamMember 
              name="Peder Ribbing" 
              title="Medgrundare"
              bio="Gedigen erfarenhet av försäljning och försäljningsutveckling inom B2B. Innan Lucy var han en av de första anställda på Peltarion och kommer senast från King som Program Director AI."
            />
            <TeamMember 
              name="Peter Schierenbeck" 
              title="Medgrundare"
              bio="Serieetreprenör med startups som Alvalabs och Lendify bakom sig. Peter arbetade tidigare som Investment Manager på EQT Ventures."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => window.open('https://www.linkedin.com/company/lucyhotels', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
              Läs mer på LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
}

const TeamMember = ({ name, title, bio }: TeamMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 mx-auto"></div>
      <h3 className="font-medium text-xl mb-1 text-center">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{title}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default AboutUs;
