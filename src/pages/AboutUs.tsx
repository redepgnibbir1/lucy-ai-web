import React from 'react';
import Navbar from '@/components/Navbar';
import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium mb-6">Om Lucy</h1>
            <p className="text-lg text-gray-600 mb-6">
              Lucy grundades med en vision om att revolutionera hotellbranschen genom 
              avancerad artificiell intelligens och automatisering.
            </p>
            <p className="text-lg text-gray-600">
              Vår mission är att hjälpa hotell att leverera enastående gästupplevelser 
              samtidigt som de optimerar sin verksamhet och ökar sina intäkter.
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
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">Vårt team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Anna Lindberg" 
              title="VD & Grundare"
              bio="Med över 15 års erfarenhet inom hotellbranschen och teknologi grundade Anna Lucy för att lösa de utmaningar hon själv upplevt."
            />
            <TeamMember 
              name="Erik Johansson" 
              title="Teknisk chef"
              bio="Erik leder vårt utvecklingsteam med sin omfattande erfarenhet inom AI och maskininlärning från både Google och Microsoft."
            />
            <TeamMember 
              name="Maria Andersson" 
              title="Kundrelationschef"
              bio="Maria har en gedigen bakgrund inom hotellbranschen och ser till att våra lösningar verkligen möter kundernas behov."
            />
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

interface HistoryItemProps {
  year: string;
  title: string;
  description: string;
}

const HistoryItem = ({ year, title, description }: HistoryItemProps) => {
  return (
    <div className="flex gap-6">
      <div className="text-xl font-bold text-lucy-neon-yellow w-16 flex-shrink-0">{year}</div>
      <div>
        <h3 className="font-medium text-xl mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AboutUs;
