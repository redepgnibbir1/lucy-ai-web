
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'sv';

const translations: Record<string, Record<string, string>> = {
  // Navigation
  'nav.products': {
    sv: 'Produkter',
    en: 'Products'
  },
  'nav.benefits': {
    sv: 'Fördelar',
    en: 'Benefits'
  },
  'nav.pricing': {
    sv: 'Priser',
    en: 'Pricing'
  },
  'nav.getStarted': {
    sv: 'Kom igång',
    en: 'Get Started'
  },
  'nav.aboutUs': {
    sv: 'Om oss',
    en: 'About Us'
  },
  'nav.bookDemo': {
    sv: 'Boka en demo',
    en: 'Book a Demo'
  },
  
  // Hero
  'hero.subtitle': {
    sv: 'AI för hotell.',
    en: 'AI for hotels.'
  },
  'hero.title': {
    sv: 'Vi hjälper hotell att växa',
    en: 'We help hotels grow'
  },
  'hero.description': {
    sv: 'Lucy tar hand om rutinuppgifter och hjälper er att ge gästerna bästa möjliga service dygnet runt – alltid på gästens språk.',
    en: 'Lucy handles routine tasks and helps you provide guests with the best possible service around the clock – always in the guest\'s language.'
  },
  'hero.button': {
    sv: 'Se hur vi kan hjälpa er',
    en: 'See how we can help you'
  },
  
  // Products
  'products.title': {
    sv: 'Detta är Lucy',
    en: 'This is Lucy'
  },
  'products.subtitle': {
    sv: 'En plattform. Två kraftfulla produkter.',
    en: 'One platform. Two powerful products.'
  },
  'products.description': {
    sv: 'Lucy består av två AI-drivna verktyg som gör hotellen bättre på det som spelar mest roll – samarbete i teamet och smart kommunikation med gäster.',
    en: 'Lucy consists of two AI-driven tools that make hotels better at what matters most – team collaboration and smart guest communication.'
  },
  'products.additionalInfo': {
    sv: 'Produkter som fungerar var för sig. Men tillsammans blir de ett oslagbart system.',
    en: 'Products that work individually. But together they become an unbeatable system.'
  },
  'products.team.title': {
    sv: 'Lucy Team Communications',
    en: 'Lucy Team Communications'
  },
  'products.team.description': {
    sv: 'Få hotellet att fungera som ett team.',
    en: 'Make your hotel work as a team.'
  },
  'products.team.subtext': {
    sv: 'Ett kommunikationsverktyg som är byggt specifikt för hotell – med allt ni behöver, samlat på ett ställe.',
    en: 'A communication tool built specifically for hotels – with everything you need, in one place.'
  },
  'products.team.cta': {
    sv: 'Läs mer om Lucy Team Communications',
    en: 'Learn more about Lucy Team Communications'
  },
  'products.guest.title': {
    sv: 'Lucy Guest Communications',
    en: 'Lucy Guest Communications'
  },
  'products.guest.description': {
    sv: 'När gästen får ett personligt meddelande – och bokar mer.',
    en: 'When guests receive a personal message – and book more.'
  },
  'products.guest.subtext': {
    sv: 'AI-baserad gästkommunikation via e-post, sms och WhatsApp som inte bara ökar servicekänslan – utan även försäljningen.',
    en: 'AI-based guest communication via email, SMS, and WhatsApp that not only enhances the service experience – but also increases sales.'
  },
  'products.guest.cta': {
    sv: 'Utforska Lucy Guest Communications',
    en: 'Explore Lucy Guest Communications'
  },
  
  // Guest Communications
  'guestComm.title': {
    sv: 'Lucy Guest Communications',
    en: 'Lucy Guest Communications'
  },
  'guestComm.subtitle': {
    sv: 'När gästen får ett personligt meddelande – och bokar mer.',
    en: 'When guests receive a personal message – and book more.'
  },
  'guestComm.description': {
    sv: 'AI-baserad gästkommunikation via e-post, sms och WhatsApp som inte bara ökar servicekänslan – utan även försäljningen.',
    en: 'AI-based guest communication via email, SMS, and WhatsApp that not only enhances the service experience – but also increases sales.'
  },
  'guestComm.benefits.title': {
    sv: 'Fördelar:',
    en: 'Benefits:'
  },
  'guestComm.benefits.upsell': {
    sv: 'Merförsäljning – Ökat upsell med +3000€/100 rum och månad.',
    en: 'Upselling – Increased upsell with +3000€/100 rooms per month.'
  },
  'guestComm.benefits.experience': {
    sv: 'Bättre gästupplevelse – Gäster får snabbare, mer träffsäker service – och lämnar bättre omdömen.',
    en: 'Better guest experience – Guests receive faster, more accurate service – and leave better reviews.'
  },
  'guestComm.benefits.channels': {
    sv: 'Mångsidiga kommunikationskanaler: e-post, SMS och WhatsApp i ett enda verktyg.',
    en: 'Versatile communication channels: email, SMS, and WhatsApp in a single tool.'
  },
  'guestComm.functions.title': {
    sv: 'Exempel på funktioner:',
    en: 'Example features:'
  },
  'guestComm.functions.welcome': {
    sv: 'Personaliserade välkomstmeddelanden',
    en: 'Personalized welcome messages'
  },
  'guestComm.functions.welcome.desc': {
    sv: 'Automatiska hälsningar som anpassas efter gästinformation och tidigare bokningar.',
    en: 'Automatic greetings adapted to guest information and previous bookings.'
  },
  'guestComm.functions.upsell': {
    sv: 'Pre-arrival upsell',
    en: 'Pre-arrival upsell'
  },
  'guestComm.functions.upsell.desc': {
    sv: 'Smarta erbjudanden som ökar RevPAR genom att sälja uppgraderingar före ankomst.',
    en: 'Smart offers that increase RevPAR by selling upgrades before arrival.'
  },
  'guestComm.functions.feedback': {
    sv: 'Gästenkäter & feedback',
    en: 'Guest surveys & feedback'
  },
  'guestComm.functions.feedback.desc': {
    sv: 'Automatiserad insamling av gästrecensioner med åtgärdbara insikter.',
    en: 'Automated collection of guest reviews with actionable insights.'
  },
  'guestComm.functions.ai': {
    sv: 'AI-assistans',
    en: 'AI assistance'
  },
  'guestComm.functions.ai.desc': {
    sv: 'Lucy skriver och översätter meddelanden, skapar mallar och analyserar svar automatiskt.',
    en: 'Lucy writes and translates messages, creates templates, and analyzes responses automatically.'
  },
  'guestComm.explore': {
    sv: 'Utforska Lucy Guest Communications',
    en: 'Explore Lucy Guest Communications'
  },
  
  // Benefits page
  'benefits.title': {
    sv: 'Fördelar med Lucy',
    en: 'Benefits of Lucy'
  },
  'benefits.subtitle': {
    sv: 'Genom att välja Lucy får hotell en rad fördelar som förbättrar kommunikation, ökar effektiviteten och förbättrar gästupplevelsen.',
    en: 'By choosing Lucy, hotels gain a range of benefits that improve communication, increase efficiency, and enhance the guest experience.'
  },
  'benefits.efficiency.title': {
    sv: 'Effektivitetsfördelar',
    en: 'Efficiency Benefits'
  },
  'benefits.efficiency.item1': {
    sv: 'Spara upp till 30 min per person och dag av personalens tid genom automatiserade processer',
    en: 'Save up to 30 minutes per person per day of staff time through automated processes'
  },
  'benefits.efficiency.item2': {
    sv: 'All information på ditt modersmål minskar risken för missförstånd',
    en: 'All information in your native language reduces the risk of misunderstandings'
  },
  'benefits.efficiency.item3': {
    sv: 'Centraliserad kommunikation ger överblick över informationsflödet',
    en: 'Centralized communication provides an overview of information flow'
  },
  'benefits.efficiency.item4': {
    sv: 'AI-assistans med rutinmässiga uppgifter frigör tid för personlig service',
    en: 'AI assistance with routine tasks frees up time for personal service'
  },
  'benefits.economic.title': {
    sv: 'Ekonomiska fördelar',
    en: 'Economic Benefits'
  },
  'benefits.economic.item1': {
    sv: 'Ökad merförsäljning genom personanpassad kommunikation',
    en: 'Increased upselling through personalized communication'
  },
  'benefits.economic.item2': {
    sv: 'Högre gästnöjdhet leder till fler återkommande gäster',
    en: 'Higher guest satisfaction leads to more returning guests'
  },
  'benefits.economic.item3': {
    sv: 'Lägre personalomsättning genom bättre arbetsmiljö',
    en: 'Lower staff turnover through better working environment'
  },
  'benefits.economic.item4': {
    sv: 'ROI inom 2 månader för de flesta hotell',
    en: 'ROI within 2 months for most hotels'
  },
  'benefits.guest.title': {
    sv: 'Gästupplevelse',
    en: 'Guest Experience'
  },
  'benefits.guest.item1': {
    sv: 'Personlig kommunikation på gästens eget språk',
    en: 'Personal communication in the guest\'s own language'
  },
  'benefits.guest.item2': {
    sv: 'Snabbare responstid på förfrågningar och behov',
    en: 'Faster response time to inquiries and needs'
  },
  'benefits.guest.item3': {
    sv: 'Konsekvent servicenivå oavsett tid på dygnet',
    en: 'Consistent service level regardless of time of day'
  },
  'benefits.guest.item4': {
    sv: 'Sömlös digital upplevelse från bokning till utcheckning',
    en: 'Seamless digital experience from booking to checkout'
  },
  'benefits.team.title': {
    sv: 'Teamfördelar',
    en: 'Team Benefits'
  },
  'benefits.team.item1': {
    sv: 'Bättre intern kommunikation mellan avdelningar',
    en: 'Better internal communication between departments'
  },
  'benefits.team.item2': {
    sv: 'Snabb onboarding av ny personal gör nya medarbetare produktiva snabbt',
    en: 'Quick onboarding of new staff makes new employees productive quickly'
  },
  'benefits.team.item3': {
    sv: 'Tydlig uppföljning och rapportering',
    en: 'Clear follow-up and reporting'
  },
  'benefits.team.item4': {
    sv: 'Minskad stress genom tydliga rutiner och instruktioner',
    en: 'Reduced stress through clear routines and instructions'
  },
  'benefits.bookDemo': {
    sv: 'Boka en demo',
    en: 'Book a Demo'
  },
  
  // Get Started page
  'getStarted.title': {
    sv: 'Kom igång med Lucy',
    en: 'Get Started with Lucy'
  },
  'getStarted.intro': {
    sv: 'Vi på Lucy gör det enkelt för er att komma igång med våra AI-lösningar. Vi erbjuder en smidig och professionell implementeringsprocess för att säkerställa att ert hotell får maximal nytta av vår plattform.',
    en: 'At Lucy, we make it easy for you to get started with our AI solutions. We offer a smooth and professional implementation process to ensure your hotel gets maximum benefit from our platform.'
  },
  'getStarted.onboarding.title': {
    sv: 'Gratis onboarding för hotell med över 50 rum',
    en: 'Free onboarding for hotels with over 50 rooms'
  },
  'getStarted.onboarding.intro': {
    sv: 'Vi investerar i er framgång. Därför erbjuder vi hotell med över 50 rum gratis onboarding, vilket inkluderar:',
    en: 'We invest in your success. That\'s why we offer hotels with over 50 rooms free onboarding, which includes:'
  },
  'getStarted.onboarding.item1': {
    sv: 'Personlig implementeringsplan',
    en: 'Personal implementation plan'
  },
  'getStarted.onboarding.item2': {
    sv: 'Skräddarsydd konfiguration av Lucy-plattformen',
    en: 'Customized configuration of the Lucy platform'
  },
  'getStarted.onboarding.item3': {
    sv: 'Fysiska utbildningsmöten med ert team',
    en: 'Physical training meetings with your team'
  },
  'getStarted.onboarding.item4': {
    sv: 'Kontinuerligt stöd under uppstartsperioden',
    en: 'Continuous support during the startup period'
  },
  'getStarted.onboarding.item5': {
    sv: 'Uppföljningsmöten för att optimera användningen',
    en: 'Follow-up meetings to optimize usage'
  },
  'getStarted.process.title': {
    sv: 'Vår process',
    en: 'Our process'
  },
  'getStarted.process.step1': {
    sv: 'Inledande konsultation för att förstå era behov',
    en: 'Initial consultation to understand your needs'
  },
  'getStarted.process.step2': {
    sv: 'Skräddarsydd implementeringsplan',
    en: 'Customized implementation plan'
  },
  'getStarted.process.step3': {
    sv: 'Teknisk installation och konfiguration',
    en: 'Technical installation and configuration'
  },
  'getStarted.process.step4': {
    sv: 'Fysiska utbildningssessioner med personalen',
    en: 'Physical training sessions with staff'
  },
  'getStarted.process.step5': {
    sv: 'Uppföljning och optimering',
    en: 'Follow-up and optimization'
  },
  'getStarted.cta.title': {
    sv: 'Redo att ta nästa steg?',
    en: 'Ready to take the next step?'
  },
  'getStarted.cta.text': {
    sv: 'Kontakta oss idag för att diskutera hur vi kan hjälpa ert hotell att öka intäkterna och effektivisera arbetsflödena.',
    en: 'Contact us today to discuss how we can help your hotel increase revenue and streamline workflows.'
  },
  'getStarted.cta.button': {
    sv: 'Kontakta oss',
    en: 'Contact us'
  },
  
  // About Us page
  'about.title': {
    sv: 'Människor bakom maskinen',
    en: 'People behind the machine'
  },
  'about.intro': {
    sv: 'Lucy grundades 2023 av Peder Ribbing, Peter Schierenbeck och Björn Treje – tre kollegor med bakgrund inom tech och hotell. De delar en gemensam vision: att AI kan förbättra både gästupplevelsen och arbetsmiljön inom hotellvärlden.',
    en: 'Lucy was founded in 2023 by Peder Ribbing, Peter Schierenbeck, and Björn Treje – three colleagues with backgrounds in tech and hospitality. They share a common vision: that AI can improve both the guest experience and the work environment in the hotel industry.'
  },
  'about.vision.title': {
    sv: 'Vår vision',
    en: 'Our vision'
  },
  'about.vision.text': {
    sv: 'Att vara den ledande AI-partnern för hotellbranschen, som skapar mätbart värde genom datadriven insikt och automatisering.',
    en: 'To be the leading AI partner for the hotel industry, creating measurable value through data-driven insights and automation.'
  },
  'about.values.title': {
    sv: 'Våra värderingar',
    en: 'Our values'
  },
  'about.values.item1': {
    sv: 'Innovation i allt vi gör',
    en: 'Innovation in everything we do'
  },
  'about.values.item2': {
    sv: 'Enkelhet i komplexitet',
    en: 'Simplicity in complexity'
  },
  'about.values.item3': {
    sv: 'Mätbara resultat för våra kunder',
    en: 'Measurable results for our customers'
  },
  'about.values.item4': {
    sv: 'Ständig förbättring',
    en: 'Continuous improvement'
  },
  'about.founders.title': {
    sv: 'Grundare',
    en: 'Founders'
  },
  'about.founders.bjorn.name': {
    sv: 'Björn Treje',
    en: 'Björn Treje'
  },
  'about.founders.bjorn.title': {
    sv: 'Medgrundare',
    en: 'Co-founder'
  },
  'about.founders.bjorn.bio': {
    sv: '20 års erfarenhet av att bygga tekniska system för B2B. Björn kommer senast från en roll som ansvarig för AI Enablement på spelutvecklaren King.',
    en: '20 years of experience building technical systems for B2B. Björn most recently held a role as head of AI Enablement at game developer King.'
  },
  'about.founders.peder.name': {
    sv: 'Peder Ribbing',
    en: 'Peder Ribbing'
  },
  'about.founders.peder.title': {
    sv: 'Medgrundare',
    en: 'Co-founder'
  },
  'about.founders.peder.bio': {
    sv: 'Gedigen erfarenhet av försäljning och försäljningsutveckling inom B2B. Innan Lucy var han en av de första anställda på Peltarion och kommer senast från King som Program Director AI.',
    en: 'Solid experience in sales and sales development in B2B. Before Lucy, he was one of the first employees at Peltarion and most recently came from King as Program Director AI.'
  },
  'about.founders.peter.name': {
    sv: 'Peter Schierenbeck',
    en: 'Peter Schierenbeck'
  },
  'about.founders.peter.title': {
    sv: 'Medgrundare',
    en: 'Co-founder'
  },
  'about.founders.peter.bio': {
    sv: 'Serieetreprenör med startups som Alvalabs och Lendify bakom sig. Peter arbetade tidigare som Investment Manager på EQT Ventures.',
    en: 'Serial entrepreneur with startups like Alvalabs and Lendify behind him. Peter previously worked as an Investment Manager at EQT Ventures.'
  },
  'about.linkedinButton': {
    sv: 'Läs mer på LinkedIn',
    en: 'Read more on LinkedIn'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage ? savedLanguage : defaultLanguage;
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
