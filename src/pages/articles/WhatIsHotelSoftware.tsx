import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-hotel-software", label: "What is Hotel Software?" },
  { id: "types-of-hotel-software", label: "Types of Hotel Software" },
  { id: "key-features", label: "Key Features to Look For" },
  { id: "market-statistics", label: "Market Statistics 2026" },
  { id: "communication-challenge", label: "The Communication Challenge" },
  { id: "roi-calculator", label: "ROI Calculator" },
  { id: "choosing-the-right-solution", label: "Choosing the Right Solution" },
  { id: "faq", label: "FAQ" },
];

// Interactive ROI Calculator Component
const ROICalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [rooms, setRooms] = useState(50);
  const [staffCount, setStaffCount] = useState(25);
  const [currentIssuesPerWeek, setCurrentIssuesPerWeek] = useState(10);

  const calculations = useMemo(() => {
    // Time saved on communication (hours per week)
    const communicationTimeSaved = staffCount * 2; // 2 hours saved per staff member per week
    // Reduction in miscommunication incidents (31% improvement based on industry data)
    const reducedIncidents = Math.round(currentIssuesPerWeek * 0.31);
    // Estimated cost per incident (guest complaints, rework, etc.)
    const costPerIncident = 75;
    const monthlySavingsFromIncidents = reducedIncidents * costPerIncident * 4;
    // Labor cost savings (assuming $20/hour average)
    const laborSavings = communicationTimeSaved * 20 * 4;
    // Total monthly savings
    const totalMonthlySavings = monthlySavingsFromIncidents + laborSavings;
    // Annual ROI
    const annualSavings = totalMonthlySavings * 12;

    return {
      communicationTimeSaved,
      reducedIncidents,
      monthlySavingsFromIncidents,
      laborSavings,
      totalMonthlySavings,
      annualSavings,
    };
  }, [rooms, staffCount, currentIssuesPerWeek]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Hotel Software ROI Calculator</h3>
          <p className="text-gray-400 text-sm">See how much you could save with better communication tools</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Number of Rooms</label>
          <input
            type="range"
            min="10"
            max="500"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">10</span>
            <span className="text-lg font-semibold text-lucy-neon-yellow">{rooms}</span>
            <span className="text-xs text-gray-500">500</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Staff Members</label>
          <input
            type="range"
            min="5"
            max="200"
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">5</span>
            <span className="text-lg font-semibold text-lucy-neon-yellow">{staffCount}</span>
            <span className="text-xs text-gray-500">200</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Communication Issues/Week</label>
          <input
            type="range"
            min="1"
            max="50"
            value={currentIssuesPerWeek}
            onChange={(e) => setCurrentIssuesPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">1</span>
            <span className="text-lg font-semibold text-lucy-neon-yellow">{currentIssuesPerWeek}</span>
            <span className="text-xs text-gray-500">50</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Hours Saved Weekly</p>
          <p className="text-2xl font-bold text-white">{calculations.communicationTimeSaved} <span className="text-sm font-normal text-gray-400">hours</span></p>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm mb-1">Incidents Prevented Weekly</p>
          <p className="text-2xl font-bold text-white">{calculations.reducedIncidents} <span className="text-sm font-normal text-gray-400">issues</span></p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-lucy-neon-yellow/20 to-lucy-neon-yellow/10 rounded-xl p-6 border border-lucy-neon-yellow/30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-gray-300 text-sm mb-1">Estimated Annual Savings</p>
            <p className="text-4xl font-bold text-lucy-neon-yellow">${calculations.annualSavings.toLocaleString()}</p>
            <p className="text-gray-400 text-sm mt-1">Based on 31% efficiency improvement from automation</p>
          </div>
          <button
            onClick={onDemoClick}
            className="inline-flex items-center justify-center bg-lucy-neon-yellow text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
          >
            Get Your Custom Quote
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        *Calculations based on industry averages. Actual results may vary.
      </p>
    </div>
  );
};

// Software Category Card Component
interface SoftwareCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const SoftwareCategoryCard = ({ icon, title, description, features, gradient }: SoftwareCategoryProps) => (
  <div className={`relative overflow-hidden rounded-2xl p-6 ${gradient}`}>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
  </div>
);

// Comparison Table Component
const ComparisonTable = () => {
  const features = [
    { name: "Real-time messaging", whatsapp: true, generic: true, dedicated: true },
    { name: "Automatic translation", whatsapp: false, generic: false, dedicated: true },
    { name: "Shift handover reports", whatsapp: false, generic: false, dedicated: true },
    { name: "Work order management", whatsapp: false, generic: true, dedicated: true },
    { name: "PMS integration", whatsapp: false, generic: false, dedicated: true },
    { name: "GDPR compliance", whatsapp: false, generic: true, dedicated: true },
    { name: "Audit trail", whatsapp: false, generic: true, dedicated: true },
    { name: "Role-based access", whatsapp: false, generic: true, dedicated: true },
    { name: "Mobile-first design", whatsapp: true, generic: false, dedicated: true },
    { name: "Built for hospitality", whatsapp: false, generic: false, dedicated: true },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 pr-4 font-semibold text-lucy-black">Feature</th>
            <th className="text-center py-4 px-4 font-semibold text-lucy-black">WhatsApp</th>
            <th className="text-center py-4 px-4 font-semibold text-lucy-black">Generic Tools</th>
            <th className="text-center py-4 px-4 font-semibold text-lucy-neon-yellow bg-lucy-neon-yellow/10 rounded-t-lg">Dedicated Hotel Software</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-3 pr-4 text-lucy-dark-gray">{feature.name}</td>
              <td className="text-center py-3 px-4">
                {feature.whatsapp ? (
                  <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
              <td className="text-center py-3 px-4">
                {feature.generic ? (
                  <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
              <td className="text-center py-3 px-4 bg-lucy-neon-yellow/5">
                {feature.dedicated ? (
                  <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FAQ Accordion Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-left hover:text-lucy-dark-gray transition-colors"
    >
      <span className="font-medium text-lucy-black pr-4">{question}</span>
      <svg
        className={`w-5 h-5 text-lucy-medium-gray flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
      <p className="text-lucy-dark-gray">{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the best hotel software for small properties?",
      answer: "For small hotels with fewer than 50 rooms, cloud-based solutions offer the best value. Look for all-in-one platforms that combine property management, booking engine, and communication tools without requiring large upfront investments. Solutions designed specifically for hospitality, rather than generic business tools, will better serve your operational needs.",
    },
    {
      question: "How much does hotel management software typically cost?",
      answer: "Hotel software pricing varies widely based on property size and features needed. Cloud-based solutions typically range from $50-500 per month for small properties, while enterprise solutions for large hotel chains can cost several thousand monthly. Many providers offer per-room pricing models, making costs more predictable as you scale.",
    },
    {
      question: "Can hotel software integrate with my existing PMS?",
      answer: "Most modern hotel software solutions are built with integration in mind. Look for platforms that offer API connections to major PMS providers like Opera, Mews, or Cloudbeds. The best solutions use an API-first approach, allowing seamless data sharing between your property management, revenue management, and communication systems.",
    },
    {
      question: "What is the difference between PMS and hotel management software?",
      answer: "A Property Management System (PMS) is one type of hotel software focused on reservations, check-ins, and room management. Hotel management software is a broader category that includes PMS, revenue management systems (RMS), channel managers, communication tools, and housekeeping software. Many properties use multiple specialized tools that integrate together.",
    },
    {
      question: "How does AI improve hotel operations?",
      answer: "AI in hotel software automates routine tasks like shift report summaries, review responses, and guest communication translation. According to industry research, automation through hotel management software improves overall operational efficiency by approximately 31%. AI also enables predictive analytics for revenue management and personalized guest experiences.",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-lucy-black mb-6">Frequently Asked Questions</h3>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

// Market Statistics Visual Component
const MarketStatsVisual = () => {
  const stats = [
    { value: "$6.12B", label: "Market Size 2026", sublabel: "Hotel & Hospitality Software" },
    { value: "11.87%", label: "Annual Growth Rate", sublabel: "CAGR through 2032" },
    { value: "72%", label: "Adoption Rate", sublabel: "Mid to large-sized hotels" },
    { value: "31%", label: "Efficiency Gain", sublabel: "From automation" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-lucy-black mb-1">{stat.value}</p>
            <p className="text-sm font-medium text-lucy-dark-gray">{stat.label}</p>
            <p className="text-xs text-lucy-medium-gray">{stat.sublabel}</p>
          </div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-lucy-neon-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      ))}
    </div>
  );
};

const WhatIsHotelSoftware = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleDemoClick = () => {
    setIsCalendlyOpen(true);
  };

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Hotel Software? Complete Guide for 2026",
    "description": "Learn about hotel software types, features, and how modern AI-powered solutions help properties improve operations and guest satisfaction.",
    "author": {
      "@type": "Person",
      "name": "Bjorn Treje",
      "url": "https://www.linkedin.com/in/bjorntreje/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lucy Analytics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lucyanalytics.com/lucy_logo.png"
      }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lucyanalytics.com/articles/what-is-hotel-software"
    },
    "image": "https://lucyanalytics.com/hotel-software-guide.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best hotel software for small properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For small hotels with fewer than 50 rooms, cloud-based solutions offer the best value. Look for all-in-one platforms that combine property management, booking engine, and communication tools without requiring large upfront investments."
        }
      },
      {
        "@type": "Question",
        "name": "How much does hotel management software typically cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hotel software pricing varies widely based on property size and features needed. Cloud-based solutions typically range from $50-500 per month for small properties, while enterprise solutions for large hotel chains can cost several thousand monthly."
        }
      },
      {
        "@type": "Question",
        "name": "Can hotel software integrate with my existing PMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most modern hotel software solutions are built with integration in mind. Look for platforms that offer API connections to major PMS providers like Opera, Mews, or Cloudbeds."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between PMS and hotel management software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Property Management System (PMS) is one type of hotel software focused on reservations, check-ins, and room management. Hotel management software is a broader category that includes PMS, revenue management systems, channel managers, communication tools, and housekeeping software."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve hotel operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI in hotel software automates routine tasks like shift report summaries, review responses, and guest communication translation. Automation through hotel management software improves overall operational efficiency by approximately 31%."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lucyanalytics.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://lucyanalytics.com/articles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "What is Hotel Software?",
        "item": "https://lucyanalytics.com/articles/what-is-hotel-software"
      }
    ]
  };

  return (
    <>
    <ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="What is Hotel Software and Why Does Your Property Need It?"
          subtitle="A comprehensive guide to understanding hotel technology, from property management systems to AI-powered communication tools that are transforming hospitality operations in 2026."
          breadcrumbLabel="What is Hotel Software"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Hotel software encompasses multiple categories including <strong>PMS, revenue management, channel managers, and communication tools</strong>—each solving different operational challenges.</>,
            <>The global hotel software market reached <strong>$6.12 billion in 2026</strong>, growing at 11.87% annually as properties accelerate digital transformation.</>,
            <>Cloud-based solutions now dominate with <strong>58% of installations</strong>, offering lower costs and better integration capabilities than on-premise systems.</>,
            <>Hotels using integrated communication platforms see <strong>23% higher guest satisfaction</strong> and significantly fewer operational errors.</>,
            <>AI-powered automation improves operational efficiency by <strong>approximately 31%</strong>, freeing staff to focus on guest experience.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            <strong>Hotel software</strong> has become the backbone of modern hospitality operations. From boutique inns to international chains, properties worldwide are discovering that the right technology can mean the difference between thriving and merely surviving in an increasingly competitive market.
          </p>
          <p className="text-lucy-dark-gray">
            But with so many options available—property management systems, revenue management tools, channel managers, and communication platforms—understanding what you actually need can feel overwhelming. This guide breaks down everything you need to know about hotel software in 2026, helping you make informed decisions for your property.
          </p>
          <p className="text-lucy-dark-gray">
            According to <a href="https://hoteltechreport.com/operations/property-management-systems" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">HotelTechReport</a>, 86% of hoteliers say that a PMS is their most important system for day-to-day operations. Yet property management is just one piece of the puzzle. Let us explore the complete landscape.
          </p>
        </ArticleSection>

        <ArticleSection id="what-is-hotel-software" title="What is Hotel Software?">
          <p className="text-lucy-dark-gray">
            Hotel software refers to any digital tool designed to help hospitality properties manage their operations, serve guests better, and increase profitability. At its core, hotel software aims to replace manual processes—paper logbooks, spreadsheets, phone calls, and sticky notes—with streamlined digital workflows.
          </p>

          <div className="bg-gradient-to-r from-lucy-neon-yellow/20 via-lucy-neon-yellow/10 to-transparent rounded-xl p-6 my-8 border-l-4 border-lucy-neon-yellow">
            <p className="text-lucy-black font-medium mb-2">The Modern Hotel Tech Stack</p>
            <p className="text-lucy-dark-gray">
              A property management system sits at the heart of any hotel, managing reservations, check-ins, and guest profiles. But today&apos;s hotels typically use 5-10 different software tools that need to work together seamlessly.
            </p>
          </div>

          <p className="text-lucy-dark-gray">
            The evolution of hotel software mirrors the broader digital transformation happening across industries. What started as basic reservation systems in the 1980s has evolved into sophisticated, AI-powered platforms that can predict demand, automate guest communications, and optimize every aspect of hotel operations.
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Why Hotels Need Specialized Software</h3>
          <p className="text-lucy-dark-gray">
            Unlike generic business tools, hotel software is designed for the unique challenges of hospitality:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lucy-dark-gray mt-4">
            <li><strong>24/7 Operations:</strong> Hotels never close, requiring systems that support shift-based teams and around-the-clock service.</li>
            <li><strong>Perishable Inventory:</strong> An unsold room tonight cannot be sold tomorrow—revenue management requires real-time optimization.</li>
            <li><strong>Multilingual Staff:</strong> Hotel teams often speak multiple languages, creating communication challenges that consumer apps like WhatsApp cannot solve.</li>
            <li><strong>Complex Coordination:</strong> Housekeeping, maintenance, front desk, and management must stay synchronized across departments and shifts.</li>
            <li><strong>Guest Experience Focus:</strong> Every touchpoint matters—from booking to checkout and beyond.</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="types-of-hotel-software" title="Types of Hotel Software">
          <p className="text-lucy-dark-gray">
            The hotel technology ecosystem includes several distinct categories, each addressing specific operational needs. Understanding these categories helps you build a tech stack that works for your property.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <SoftwareCategoryCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Property Management System (PMS)"
              description="The central hub for hotel operations, managing reservations, check-ins, room assignments, and guest data."
              features={["Reservation management", "Guest profiles", "Room inventory", "Billing and invoicing"]}
              gradient="bg-gradient-to-br from-blue-600 to-blue-800"
            />

            <SoftwareCategoryCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Revenue Management System (RMS)"
              description="Optimizes pricing strategies using AI and market data to maximize revenue per available room."
              features={["Dynamic pricing", "Demand forecasting", "Competitor analysis", "Rate recommendations"]}
              gradient="bg-gradient-to-br from-green-600 to-green-800"
            />

            <SoftwareCategoryCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              }
              title="Channel Manager"
              description="Distributes room inventory across OTAs like Booking.com and Expedia while preventing overbookings."
              features={["Multi-channel distribution", "Real-time sync", "Rate parity", "Inventory control"]}
              gradient="bg-gradient-to-br from-purple-600 to-purple-800"
            />

            <SoftwareCategoryCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              title="Communication Platform"
              description="Enables team collaboration and guest messaging with features built specifically for hospitality."
              features={["Team messaging", "Auto-translation", "Shift handovers", "Work order tracking"]}
              gradient="bg-gradient-to-br from-amber-500 to-amber-700"
            />
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Additional Software Categories</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Booking Engine</h4>
                <p className="text-lucy-medium-gray text-sm">Enables direct bookings on your website, reducing OTA commission fees and building guest relationships.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Reputation Management</h4>
                <p className="text-lucy-medium-gray text-sm">Monitors and responds to online reviews across platforms, using AI to analyze sentiment and generate responses.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Housekeeping Software</h4>
                <p className="text-lucy-medium-gray text-sm">Manages room cleaning schedules, maintenance requests, and staff assignments with real-time status updates.</p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="key-features" title="Key Features to Look For">
          <p className="text-lucy-dark-gray">
            When evaluating hotel software, certain features have become essential in 2026. The best solutions share common characteristics that set them apart from outdated or generic alternatives.
          </p>

          <div className="my-8">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">Essential Feature Checklist</h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">Cloud-based architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">Mobile-first design</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">API integrations</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">Real-time synchronization</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">AI-powered automation</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">Multi-language support</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">GDPR compliance</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lucy-dark-gray">Comprehensive reporting</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Cloud vs. On-Premise: The Clear Winner</h3>
          <p className="text-lucy-dark-gray">
            As reported by the <a href="https://www.grandviewresearch.com/industry-analysis/hotel-hospitality-management-software-market-report" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">Grand View Research</a>, cloud-enabled platforms now dominate with 58% of hotel software installations. The advantages are compelling:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 font-semibold text-lucy-black border-b">Factor</th>
                  <th className="text-left py-4 px-6 font-semibold text-lucy-black border-b">Cloud-Based</th>
                  <th className="text-left py-4 px-6 font-semibold text-lucy-black border-b">On-Premise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-6 text-lucy-dark-gray font-medium">Upfront Cost</td>
                  <td className="py-3 px-6 text-green-600">Low (subscription)</td>
                  <td className="py-3 px-6 text-red-500">High (license + hardware)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-6 text-lucy-dark-gray font-medium">Maintenance</td>
                  <td className="py-3 px-6 text-green-600">Provider handles</td>
                  <td className="py-3 px-6 text-red-500">In-house IT required</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-6 text-lucy-dark-gray font-medium">Updates</td>
                  <td className="py-3 px-6 text-green-600">Automatic</td>
                  <td className="py-3 px-6 text-red-500">Manual installation</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-6 text-lucy-dark-gray font-medium">Accessibility</td>
                  <td className="py-3 px-6 text-green-600">Any device, anywhere</td>
                  <td className="py-3 px-6 text-amber-500">Limited to on-site</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-lucy-dark-gray font-medium">Scalability</td>
                  <td className="py-3 px-6 text-green-600">Instant</td>
                  <td className="py-3 px-6 text-red-500">Requires new hardware</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lucy-dark-gray">
            The <a href="https://www.canarytechnologies.com/post/hospitality-technology-trends-for-2026" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">European Travel Commission</a> reports that 55% of European hotels plan to adopt cloud-based software by 2025, a figure that has likely been exceeded given the acceleration we have seen in early 2026.
          </p>
        </ArticleSection>

        <ArticleSection id="market-statistics" title="Market Statistics 2026">
          <p className="text-lucy-dark-gray">
            The hotel software market is experiencing unprecedented growth as properties worldwide accelerate their digital transformation. Here are the key numbers shaping the industry:
          </p>

          <div className="my-8">
            <MarketStatsVisual />
          </div>

          <p className="text-lucy-dark-gray">
            According to <a href="https://www.globenewswire.com/news-release/2026/01/19/3220768/0/en/Hotel-Hospitality-Management-Software-Markets-and-Competitive-Landscape-Analysis-2026-2032.html" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">GlobeNewswire market analysis</a>, the hotel and hospitality management software market expanded from USD 5.57 billion in 2025 to USD 6.12 billion in 2026, projecting to reach USD 12.21 billion by 2032.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold text-lucy-black mb-4">Key Market Insights</h4>
            <ul className="space-y-3 text-lucy-dark-gray">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lucy-neon-yellow mt-2.5" />
                <span><strong>North America</strong> leads adoption with 35.94% market share, driven by large hotel chains and tech-forward independents.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lucy-neon-yellow mt-2.5" />
                <span><strong>Asia Pacific</strong> shows the fastest growth at 26.8% projected share, fueled by expanding tourism and digital infrastructure investment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lucy-neon-yellow mt-2.5" />
                <span><strong>Core PMS systems</strong> account for 46% of deployments, while extended modules (billing, inventory, analytics) represent 54%.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lucy-neon-yellow mt-2.5" />
                <span><strong>81% of hoteliers</strong> are prioritizing increasing employee productivity through technology investments.</span>
              </li>
            </ul>
          </div>

          <p className="text-lucy-dark-gray">
            The <a href="https://www.prnewswire.com/news-releases/ai-tipping-point-mews-warns-2026-is-make-or-break-year-for-hotel-transformation-302638149.html" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">Mews 2026 Hospitality Industry Outlook</a> identifies this year as a make-or-break moment for hotel transformation. Their research suggests that by 2035, most hotel discovery and booking will happen through a single AI conversation, and at least half of back-office tasks will be automated.
          </p>
        </ArticleSection>

        <ArticleSection id="communication-challenge" title="The Communication Challenge">
          <p className="text-lucy-dark-gray">
            While property management and revenue optimization get most of the attention, <strong>internal communication</strong> remains one of the biggest pain points for hotel operations. Research shows that leading hotels implementing integrated communication hubs reduce response times from an industry average of 12 hours to under 30 minutes for digital inquiries.
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 my-8 border-l-4 border-red-400">
            <h4 className="font-semibold text-lucy-black mb-3">The WhatsApp Problem</h4>
            <p className="text-lucy-dark-gray mb-4">
              According to <a href="https://www.revfine.com/only-12-of-hotels-use-whatsapp-marketing-should-you/" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">RevFine research</a>, only 12% of hotels include WhatsApp in their marketing strategy, yet 63% either do not use it at all or rely on it for operational updates. This informal adoption creates serious problems:
            </p>
            <ul className="space-y-2 text-lucy-dark-gray">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>No audit trail for compliance and accountability</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>GDPR compliance concerns with personal devices</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Information silos between multiple group chats</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>No integration with hotel operational systems</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Communication Tools Comparison</h3>
          <p className="text-lucy-dark-gray mb-6">
            Hotels that implement structured communication protocols see a 23% increase in guest satisfaction and fewer operational errors. Here is how different solutions compare:
          </p>

          <ComparisonTable />

          <p className="text-lucy-dark-gray mt-6">
            Purpose-built hospitality communication platforms like <Link to="/articles/introducing-lucy-analytics" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">Lucy</Link> address these gaps by combining the ease of consumer messaging apps with the professional features hotels actually need: automatic translation, shift handover reports, work order management, and seamless PMS integration.
          </p>
        </ArticleSection>

        <ArticleSection id="roi-calculator" title="Calculate Your Potential ROI">
          <p className="text-lucy-dark-gray mb-6">
            Understanding the potential return on investment from hotel software helps justify the decision to upgrade your technology stack. Use this interactive calculator to estimate your potential savings:
          </p>

          <ROICalculator onDemoClick={handleDemoClick} />
        </ArticleSection>

        <ArticleSection id="choosing-the-right-solution" title="Choosing the Right Solution">
          <p className="text-lucy-dark-gray">
            Selecting hotel software requires balancing your property&apos;s specific needs against available options. According to the <a href="https://www.theaccessgroup.com/en-gb/blog/hos-ai-hospitality/" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">Access Hospitality 2025 AI Report</a>, businesses waste 286 hours per year switching between unconnected systems, and 13% of operational costs are lost due to system fragmentation.
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Selection Framework</h3>

          <div className="space-y-6 my-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-lucy-black">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black mb-2">Assess Your Current Pain Points</h4>
                  <p className="text-lucy-dark-gray text-sm">Identify where you lose the most time and money. Is it overbookings? Miscommunication? Manual data entry? Prioritize solutions that address your biggest challenges first.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-lucy-black">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black mb-2">Evaluate Integration Capabilities</h4>
                  <p className="text-lucy-dark-gray text-sm">Only 1 in 3 operators trust the data they get from their current systems. Look for API-first platforms that connect seamlessly with your existing tech stack.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-lucy-black">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black mb-2">Consider Your Team</h4>
                  <p className="text-lucy-dark-gray text-sm">The best software is useless if your staff will not use it. Prioritize mobile-first, intuitive interfaces that require minimal training—especially for frontline workers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-lucy-black">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black mb-2">Plan for Growth</h4>
                  <p className="text-lucy-dark-gray text-sm">Choose solutions that scale with your property. Cloud-based platforms adapt more easily as your needs evolve, without requiring significant additional investment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-lucy-dark-gray to-gray-900 rounded-2xl p-8 mt-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Ready to modernize your hotel operations?</h3>
                <p className="text-gray-300">
                  See how Lucy combines team communication, work orders, and AI-powered automation in one platform designed specifically for hospitality.
                </p>
              </div>
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center bg-lucy-neon-yellow text-lucy-black px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap text-lg"
              >
                Book a Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="faq" title="Frequently Asked Questions">
          <FAQSection />
        </ArticleSection>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-lucy-black mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/articles/hotel-software-cost"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Pricing</p>
              <p className="font-medium text-lucy-black">How Much Does Hotel Software Cost?</p>
            </Link>
            <Link
              to="/articles/hotel-software-implementation"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Implementation</p>
              <p className="font-medium text-lucy-black">Hotel Software Implementation Guide</p>
            </Link>
            <Link
              to="/articles/hotel-software-trends-2026"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Trends</p>
              <p className="font-medium text-lucy-black">Hotel Software Trends for 2026</p>
            </Link>
          </div>
        </section>

        {/* Sources Section */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-lucy-black mb-4">Sources</h3>
          <ul className="space-y-2 text-sm text-lucy-medium-gray">
            <li>
              <a href="https://www.globenewswire.com/news-release/2026/01/19/3220768/0/en/Hotel-Hospitality-Management-Software-Markets-and-Competitive-Landscape-Analysis-2026-2032.html" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                GlobeNewswire - Hotel & Hospitality Management Software Markets Analysis 2026-2032
              </a>
            </li>
            <li>
              <a href="https://hoteltechreport.com/operations/property-management-systems" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                HotelTechReport - Best Hotel Property Management Systems 2026
              </a>
            </li>
            <li>
              <a href="https://www.prnewswire.com/news-releases/ai-tipping-point-mews-warns-2026-is-make-or-break-year-for-hotel-transformation-302638149.html" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                PRNewswire - Mews 2026 Hospitality Industry Outlook
              </a>
            </li>
            <li>
              <a href="https://www.grandviewresearch.com/industry-analysis/hotel-hospitality-management-software-market-report" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                Grand View Research - Hotel Management Software Market Report
              </a>
            </li>
            <li>
              <a href="https://www.revfine.com/only-12-of-hotels-use-whatsapp-marketing-should-you/" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                RevFine - Hotel WhatsApp Marketing Statistics
              </a>
            </li>
            <li>
              <a href="https://www.theaccessgroup.com/en-gb/blog/hos-ai-hospitality/" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                Access Hospitality 2025 AI Report
              </a>
            </li>
            <li>
              <a href="https://www.canarytechnologies.com/post/hospitality-technology-trends-for-2026" target="_blank" rel="noopener noreferrer" className="hover:text-lucy-black transition-colors">
                Canary Technologies - Hospitality Technology Trends 2026
              </a>
            </li>
          </ul>
        </section>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default WhatIsHotelSoftware;
