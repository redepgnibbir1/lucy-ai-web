import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "hospitality-challenges", label: "The Hospitality Challenge" },
  { id: "slack-teams-comparison", label: "Slack vs Teams vs Lucy" },
  { id: "why-generic-tools-fail", label: "Why Generic Tools Fail" },
  { id: "hidden-costs", label: "Hidden Costs" },
  { id: "roi-calculator", label: "ROI Calculator" },
  { id: "what-hotels-need", label: "What Hotels Need" },
  { id: "lucy-solution", label: "The Lucy Solution" },
  { id: "faqs", label: "FAQs" },
];

// Interactive ROI Calculator Component
const ROICalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [employees, setEmployees] = useState(50);
  const [avgHourlyWage, setAvgHourlyWage] = useState(18);
  const [hoursLostWeekly, setHoursLostWeekly] = useState(3);

  const calculations = useMemo(() => {
    const weeklyLostCost = employees * avgHourlyWage * hoursLostWeekly;
    const monthlyLostCost = weeklyLostCost * 4.33;
    const yearlyLostCost = monthlyLostCost * 12;

    // Estimated savings with Lucy (conservative 60% reduction in communication inefficiency)
    const estimatedSavings = yearlyLostCost * 0.6;

    // Cost comparison (annual)
    const slackCostAnnual = employees * 15 * 12; // Business+ at $15/user/month
    const teamsCostAnnual = employees * 12.50 * 12; // Business Standard at $12.50/user/month

    return {
      weeklyLostCost,
      monthlyLostCost,
      yearlyLostCost,
      estimatedSavings,
      slackCostAnnual,
      teamsCostAnnual,
    };
  }, [employees, avgHourlyWage, hoursLostWeekly]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-2">Communication Cost Calculator</h3>
      <p className="text-gray-300 mb-8">
        Calculate how much inefficient communication is costing your hotel
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Number of Employees</label>
          <input
            type="range"
            min="10"
            max="500"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="text-2xl font-bold text-lucy-neon-yellow mt-2">{employees}</div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Average Hourly Wage ($)</label>
          <input
            type="range"
            min="10"
            max="40"
            value={avgHourlyWage}
            onChange={(e) => setAvgHourlyWage(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="text-2xl font-bold text-lucy-neon-yellow mt-2">${avgHourlyWage}</div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Hours Lost to Miscommunication (Weekly/Person)</label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={hoursLostWeekly}
            onChange={(e) => setHoursLostWeekly(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="text-2xl font-bold text-lucy-neon-yellow mt-2">{hoursLostWeekly}h</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6">
          <div className="text-red-400 text-sm font-medium mb-1">Annual Cost of Poor Communication</div>
          <div className="text-4xl font-bold text-red-400">
            ${calculations.yearlyLostCost.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm mt-2">
            ${calculations.monthlyLostCost.toLocaleString()}/month
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
          <div className="text-green-400 text-sm font-medium mb-1">Potential Yearly Savings with Lucy</div>
          <div className="text-4xl font-bold text-green-400">
            ${calculations.estimatedSavings.toLocaleString()}
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Based on 60% efficiency improvement
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="text-sm text-gray-400 mb-4">Annual Software Costs Comparison</div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Slack Business+</div>
            <div className="text-xl font-bold text-white">${calculations.slackCostAnnual.toLocaleString()}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="text-gray-400 text-sm">Teams Business</div>
            <div className="text-xl font-bold text-white">${calculations.teamsCostAnnual.toLocaleString()}</div>
          </div>
          <div className="bg-lucy-neon-yellow/20 border border-lucy-neon-yellow/30 rounded-lg p-4">
            <div className="text-lucy-neon-yellow text-sm">Lucy</div>
            <div className="text-xl font-bold text-lucy-neon-yellow">Get Quote</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onDemoClick}
          className="inline-block bg-lucy-neon-yellow text-lucy-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Get Your Custom ROI Analysis
        </button>
      </div>
    </div>
  );
};

// Comparison Table Component
const ComparisonTable = () => {
  const features = [
    {
      name: "Mobile-First Design",
      slack: "Partial",
      teams: "Partial",
      lucy: "Yes",
      description: "Built specifically for workers without desks"
    },
    {
      name: "Shift-Aware Messaging",
      slack: "No",
      teams: "No",
      lucy: "Yes",
      description: "Messages reach staff based on their shift schedule"
    },
    {
      name: "Real-Time Translation",
      slack: "Add-on",
      teams: "Limited",
      lucy: "Built-in",
      description: "Automatic translation to each user&apos;s native language"
    },
    {
      name: "Work Order Management",
      slack: "No",
      teams: "No",
      lucy: "Yes",
      description: "Create, assign, and track tasks in real-time"
    },
    {
      name: "Housekeeping Integration",
      slack: "No",
      teams: "No",
      lucy: "Yes",
      description: "Room status, check-in/out coordination"
    },
    {
      name: "AI Shift Summaries",
      slack: "No",
      teams: "No",
      lucy: "Yes",
      description: "Automatic handover reports between shifts"
    },
    {
      name: "Role-Based Access",
      slack: "Limited",
      teams: "Yes",
      lucy: "Yes",
      description: "Control who sees what based on job role"
    },
    {
      name: "Guest Communication",
      slack: "No",
      teams: "No",
      lucy: "Yes",
      description: "Coordinate guest requests across departments"
    },
    {
      name: "GDPR Compliant",
      slack: "Partial",
      teams: "Yes",
      lucy: "Yes",
      description: "Full data control and audit trails"
    },
    {
      name: "Onboarding Workflows",
      slack: "No",
      teams: "Limited",
      lucy: "Yes",
      description: "Automated training for new hires"
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Yes":
      case "Built-in":
        return "bg-green-100 text-green-800";
      case "Partial":
      case "Limited":
      case "Add-on":
        return "bg-yellow-100 text-yellow-800";
      case "No":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Feature</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <span>Slack</span>
              </div>
            </th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <span>MS Teams</span>
              </div>
            </th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200 bg-lucy-neon-yellow/10">
              <div className="flex items-center justify-center gap-2">
                <span>Lucy</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 border-b border-gray-100">
                <div className="font-medium text-lucy-black">{feature.name}</div>
                <div className="text-sm text-lucy-medium-gray">{feature.description}</div>
              </td>
              <td className="p-4 border-b border-gray-100 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(feature.slack)}`}>
                  {feature.slack}
                </span>
              </td>
              <td className="p-4 border-b border-gray-100 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(feature.teams)}`}>
                  {feature.teams}
                </span>
              </td>
              <td className="p-4 border-b border-gray-100 text-center bg-lucy-neon-yellow/5">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(feature.lucy)}`}>
                  {feature.lucy}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Pricing Comparison Component
const PricingComparison = ({ onDemoClick }: { onDemoClick: () => void }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lucy-black">Slack</h4>
            <p className="text-sm text-lucy-medium-gray">Business+</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-lucy-black">$15</span>
          <span className="text-lucy-medium-gray">/user/month</span>
        </div>
        <ul className="space-y-2 text-sm text-lucy-dark-gray">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>No hospitality-specific features</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>Translation requires third-party add-ons</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>No shift management integration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>Desktop-first design</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-lucy-medium-gray">
          Source: <a href="https://slack.com/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-lucy-black">Slack Pricing 2026</a>
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.5 3C7.358 3 4 6.358 4 10.5V19h7.5c4.142 0 7.5-3.358 7.5-7.5V3H11.5zM6 10.5C6 7.462 8.462 5 11.5 5H17v6.5c0 3.038-2.462 5.5-5.5 5.5H6v-6.5z"/>
              <path d="M3 20v1h8v-1H3zM20 3v1h1V3h-1z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lucy-black">Microsoft Teams</h4>
            <p className="text-sm text-lucy-medium-gray">Business Standard</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-lucy-black">$12.50</span>
          <span className="text-lucy-medium-gray">/user/month</span>
        </div>
        <ul className="space-y-2 text-sm text-lucy-dark-gray">
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>Designed for office workers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>Complex interface for non-desk workers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>No work order management</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 mt-0.5">-</span>
            <span>Requires Microsoft ecosystem</span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-lucy-medium-gray">
          Source: <a href="https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options" target="_blank" rel="noopener noreferrer" className="underline hover:text-lucy-black">Microsoft Teams Pricing 2026</a>
        </p>
      </div>

      <div className="bg-gradient-to-br from-lucy-neon-yellow/20 to-lucy-neon-yellow/5 border-2 border-lucy-neon-yellow rounded-xl p-6 relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-lucy-neon-yellow text-lucy-black px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap">
            Built for Hotels
          </span>
        </div>
        <div className="flex items-center gap-3 mb-4 mt-2">
          <div className="w-10 h-10 bg-lucy-black rounded-lg flex items-center justify-center">
            <span className="text-lucy-neon-yellow font-bold text-lg">L</span>
          </div>
          <div>
            <h4 className="font-semibold text-lucy-black">Lucy</h4>
            <p className="text-sm text-lucy-medium-gray">Team Communications</p>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold text-lucy-black">Custom</span>
          <span className="text-lucy-medium-gray"> pricing</span>
        </div>
        <ul className="space-y-2 text-sm text-lucy-dark-gray">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">+</span>
            <span>Purpose-built for hospitality</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">+</span>
            <span>Built-in real-time translation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">+</span>
            <span>Shift reports and work orders</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">+</span>
            <span>Mobile-first, intuitive design</span>
          </li>
        </ul>
        <button
          onClick={onDemoClick}
          className="mt-4 block w-full bg-lucy-black text-white text-center py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

// Statistics Section
const StatisticsSection = () => {
  const stats = [
    { value: "73.8%", label: "Annual turnover rate in hospitality", source: "U.S. Bureau of Labor Statistics" },
    { value: "$200K", label: "Lost annually on manual communication", source: "PWC Digital IQ Survey" },
    { value: "60%", label: "Employers struggle to find qualified staff", source: "Industry Research 2025" },
    { value: "95%", label: "Hotels need to transform operations by 2026", source: "McKinsey Research" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-5 text-center">
          <div className="text-3xl md:text-4xl font-bold text-lucy-black mb-2">{stat.value}</div>
          <div className="text-sm text-lucy-dark-gray mb-2">{stat.label}</div>
          <div className="text-xs text-lucy-medium-gray">{stat.source}</div>
        </div>
      ))}
    </div>
  );
};

// FAQ Schema data
const faqData = [
  {
    question: "Why is Slack not suitable for hotel teams?",
    answer: "Slack was designed for office-based knowledge workers, not frontline hospitality staff. It lacks essential features hotels need: shift-aware messaging, built-in translation for multilingual teams, work order management, and housekeeping coordination. Hotels using Slack often need multiple third-party integrations, increasing complexity and cost while still missing hospitality-specific workflows."
  },
  {
    question: "Can Microsoft Teams be used for hotel communication?",
    answer: "While Microsoft Teams offers robust features for office environments, it presents challenges for hotel operations. The interface is complex for non-desk workers, it requires the Microsoft ecosystem, and it lacks hospitality-specific features like shift handovers, room status updates, and guest request coordination. Hotels typically need a simpler, mobile-first solution designed for workers who are constantly on the move."
  },
  {
    question: "What makes Lucy different from Slack and Teams for hotels?",
    answer: "Lucy is purpose-built for hospitality and frontline teams. Key differences include: AI-powered shift summaries that ensure nothing is lost between handovers, built-in real-time translation for multilingual staff, integrated work order management, housekeeping planning tools, and a mobile-first interface designed for workers without desks. Lucy understands how hotels operate and provides tools specifically for those workflows."
  },
  {
    question: "Is WhatsApp GDPR compliant for hotel staff communication?",
    answer: "Using WhatsApp for work raises significant GDPR concerns. Messages are stored on personal devices without company oversight, there are no audit trails, former employees retain access to group chats, and data retention cannot be controlled. In 2021, WhatsApp received a EUR 193 million fine for GDPR violations. Hotels should consider purpose-built solutions with proper data controls and compliance features."
  },
  {
    question: "How much does poor communication cost hotels annually?",
    answer: "According to PWC research, hotels lose an average of $200,000 annually on manual data entry and redundant communications. This includes time lost to miscommunication between shifts, repeated explanations due to language barriers, delays in task completion, and errors from unclear handovers. Purpose-built communication tools can recover 60% or more of these costs."
  },
];

const HotelCommunicationSlackTeams = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hotel Communication Software: Why Slack and Teams Fall Short",
    "description": "Compare Slack, Microsoft Teams, and purpose-built hotel communication solutions. Learn why generic tools fail hospitality teams and what features hotels actually need.",
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
        "url": "https://lucyanalytics.com/lucy-logo.png"
      }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lucyanalytics.com/articles/hotel-communication-slack-teams"
    },
    "image": "https://lucyanalytics.com/hotel-communication-comparison.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
        "name": "Hotel Communication: Slack vs Teams vs Lucy",
        "item": "https://lucyanalytics.com/articles/hotel-communication-slack-teams"
      }
    ]
  };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Hotel Communication Software: Why Slack and Teams Fall Short"
          subtitle="Generic business tools were built for office workers, not hospitality teams. Discover why hotels are switching to purpose-built internal communication software that understands shifts, translations, and frontline operations."
          breadcrumbLabel="Slack vs Teams for Hotels"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Internal employee communication software for hotels requires <strong>shift-aware features, real-time translation, and mobile-first design</strong> that Slack and Teams lack.</>,
            <>The hospitality industry has a <strong>73.8% annual turnover rate</strong>, making streamlined onboarding and communication critical for operational success.</>,
            <>Hotels lose an average of <strong>$200,000 annually</strong> on inefficient manual communication processes according to PWC research.</>,
            <>Purpose-built solutions like Lucy offer <strong>AI-powered shift summaries, work orders, and housekeeping integration</strong> that generic tools cannot provide.</>,
            <>WhatsApp, while popular, poses <strong>significant GDPR compliance risks</strong> for hotel employee communication.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            When it comes to <strong>internal employee communication software for hotels</strong>, many properties default to familiar tools like Slack or Microsoft Teams. After all, these platforms power communication at some of the world&apos;s largest companies. But here&apos;s the problem: hotels are not typical companies.
          </p>
          <p className="text-lucy-dark-gray">
            Your housekeeping team doesn&apos;t sit at desks. Your front desk staff works rotating shifts. Your maintenance crew speaks three different languages. And your night manager needs to know exactly what happened during the day shift without reading through 200 messages in five different WhatsApp groups.
          </p>
          <p className="text-lucy-dark-gray">
            In this comprehensive guide, we&apos;ll examine why Slack and Microsoft Teams—despite being excellent tools for office environments—fall short for hospitality operations. We&apos;ll compare features, analyze real costs, and explore what hotels actually need from their communication platform.
          </p>

          <div className="my-8">
            <StatisticsSection />
          </div>
        </ArticleSection>

        <ArticleSection id="hospitality-challenges" title="The Hospitality Communication Challenge">
          <p className="text-lucy-dark-gray">
            The hospitality industry faces unique communication challenges that set it apart from traditional office environments. Understanding these challenges is essential before evaluating any communication tool.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-lucy-black mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Industry Pain Points
              </h3>
              <ul className="space-y-3 text-lucy-dark-gray">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">1.</span>
                  <span><strong>High Turnover:</strong> At 73.8%, hospitality turnover is more than double other industries, requiring constant onboarding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">2.</span>
                  <span><strong>Multilingual Teams:</strong> Hotels routinely employ staff speaking 5+ languages, creating communication barriers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">3.</span>
                  <span><strong>Shift-Based Operations:</strong> Critical information must transfer seamlessly between shifts 24/7.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">4.</span>
                  <span><strong>Deskless Workers:</strong> Over 80% of hotel employees work without access to computers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-lucy-black mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Cost of Poor Communication
              </h3>
              <ul className="space-y-3 text-lucy-dark-gray">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">$</span>
                  <span><strong>$200K/year</strong> lost on manual data entry and redundant communications (PWC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">$</span>
                  <span><strong>30-40%</strong> higher retention with proper training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">$</span>
                  <span><strong>13%</strong> decline in training hours since 2021</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">$</span>
                  <span><strong>60%+</strong> of employers report difficulty finding qualified candidates</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            These challenges demand specialized solutions. As <a href="https://www.mckinsey.com/industries/travel-logistics-and-infrastructure/our-insights" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-dark-gray">McKinsey research</a> predicts, 95% of hospitality businesses will need to significantly transform their operating models by 2026 to remain competitive. Communication infrastructure is a critical part of that transformation.
          </p>
        </ArticleSection>

        <ArticleSection id="slack-teams-comparison" title="Slack vs Microsoft Teams vs Lucy: The Complete Comparison">
          <p className="text-lucy-dark-gray">
            Let&apos;s examine how these three platforms stack up for hotel operations. While Slack and Teams are powerful tools in their own right, they were designed for different use cases.
          </p>

          <div className="my-8">
            <ComparisonTable />
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Pricing Breakdown (2026)</h3>
          <p className="text-lucy-dark-gray mb-6">
            Understanding the true cost requires looking beyond the per-user price. Here&apos;s how the main options compare:
          </p>

          <PricingComparison onDemoClick={handleDemoClick} />

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-8">
            <h4 className="font-semibold text-lucy-black mb-3">Important Note on Pricing</h4>
            <p className="text-lucy-dark-gray text-sm">
              These prices reflect standard list rates as of February 2026. Slack Business+ is priced at <a href="https://slack.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">$15/user/month</a> (annual billing), while Microsoft Teams Business Standard is <a href="https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options" target="_blank" rel="noopener noreferrer" className="underline">$12.50/user/month</a>. Note that Microsoft now offers Teams as a separate add-on following their modular licensing changes in November 2025. Enterprise plans require custom quotes.
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="why-generic-tools-fail" title="Why Generic Communication Tools Fail in Hotels">
          <p className="text-lucy-dark-gray">
            The fundamental issue with Slack and Teams isn&apos;t that they&apos;re bad products—they&apos;re exceptional for their intended audience. The problem is that audience isn&apos;t hospitality.
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Desktop-First Design Philosophy</h4>
                <p className="text-lucy-dark-gray">
                  Both Slack and Teams were built for knowledge workers who spend their days at computers. While they have mobile apps, the experience is an afterthought. Hotel staff need a platform that&apos;s mobile-first because that&apos;s how they work—on their feet, moving between rooms, rarely sitting at a desk.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">No Understanding of Shifts</h4>
                <p className="text-lucy-dark-gray">
                  When the night shift ends and day shift begins, what happens to the information? In Slack and Teams, it&apos;s buried in chat history. Staff must scroll through potentially hundreds of messages to find what&apos;s relevant. Purpose-built hotel software provides AI-generated shift summaries that capture what matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Translation as an Afterthought</h4>
                <p className="text-lucy-dark-gray">
                  Slack requires third-party integrations for translation. Teams offers some translation features but they&apos;re limited and not always real-time. In a hotel where your housekeeper speaks Spanish, your maintenance worker speaks Polish, and your manager speaks English, built-in real-time translation isn&apos;t a nice-to-have—it&apos;s essential.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">No Operational Integration</h4>
                <p className="text-lucy-dark-gray">
                  Hotels don&apos;t just need chat—they need work order management, housekeeping coordination, incident reporting, and task tracking. With Slack or Teams, you&apos;re adding multiple tools and hoping they integrate. Purpose-built hotel software includes these features natively.
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="hidden-costs" title="The Hidden Costs of Using the Wrong Tool">
          <p className="text-lucy-dark-gray">
            The sticker price of Slack or Teams is just the beginning. The real costs accumulate in ways that don&apos;t show up on any invoice.
          </p>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 my-8 text-white">
            <h3 className="text-2xl font-bold mb-6">True Cost Analysis</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-lucy-neon-yellow mb-4">Direct Costs</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Software licenses</span>
                    <span className="text-lucy-neon-yellow">$12-15/user/mo</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Translation add-ons</span>
                    <span className="text-lucy-neon-yellow">$3-8/user/mo</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Task management tools</span>
                    <span className="text-lucy-neon-yellow">$5-12/user/mo</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Integration maintenance</span>
                    <span className="text-lucy-neon-yellow">$2-5/user/mo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-4">Hidden Costs</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Training time (complex UI)</span>
                    <span className="text-red-400">4-8 hours/person</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Lost productivity/shift</span>
                    <span className="text-red-400">15-30 min/day</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span>Missed handover information</span>
                    <span className="text-red-400">2-5 incidents/week</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>IT support burden</span>
                    <span className="text-red-400">5-10 hrs/week</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The WhatsApp Problem</h3>
          <p className="text-lucy-dark-gray">
            Many hotels, frustrated with complex enterprise tools, fall back to WhatsApp. It&apos;s familiar, it&apos;s free, and everyone knows how to use it. But this creates serious problems:
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              GDPR Compliance Risks with WhatsApp
            </h4>
            <ul className="space-y-2 text-red-800">
              <li><strong>No data control:</strong> Messages are stored on personal devices without company oversight</li>
              <li><strong>No audit trails:</strong> No way to track who said what or when</li>
              <li><strong>Access issues:</strong> Former employees retain access to group chats</li>
              <li><strong>Consent problems:</strong> You can be added to groups without explicit consent</li>
              <li><strong>Regulatory penalties:</strong> WhatsApp was fined EUR 193 million in 2021 for GDPR violations</li>
            </ul>
            <p className="text-sm text-red-700 mt-4">
              Source: <a href="https://www.speakap.com/insights/whatsapp-for-work-gdpr-compliance" target="_blank" rel="noopener noreferrer" className="underline">GDPR Compliance Analysis</a>
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="roi-calculator" title="Calculate Your Communication ROI">
          <p className="text-lucy-dark-gray mb-6">
            Use this interactive calculator to estimate how much inefficient communication is costing your hotel—and how much you could save with purpose-built software.
          </p>
          <ROICalculator onDemoClick={handleDemoClick} />
        </ArticleSection>

        <ArticleSection id="what-hotels-need" title="What Hotels Actually Need from Communication Software">
          <p className="text-lucy-dark-gray">
            Based on research and conversations with hundreds of hotel operators, here are the essential features that internal employee communication software for hotels must have:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lucy-black text-lg">Must-Have Features</h4>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-green-800">Mobile-First Interface</span>
                </div>
                <p className="text-sm text-green-700 ml-11">Works seamlessly on smartphones without requiring a desktop</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-green-800">Real-Time Translation</span>
                </div>
                <p className="text-sm text-green-700 ml-11">Automatic translation to each staff member&apos;s native language</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-green-800">Shift Handover Tools</span>
                </div>
                <p className="text-sm text-green-700 ml-11">AI-summarized reports that capture what matters between shifts</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-green-800">Role-Based Access</span>
                </div>
                <p className="text-sm text-green-700 ml-11">Control who sees what based on department and role</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lucy-black text-lg">Operations Features</h4>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Work Order Management</span>
                </div>
                <p className="text-sm text-blue-700 ml-11">Create, assign, and track maintenance tasks in real-time</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Housekeeping Integration</span>
                </div>
                <p className="text-sm text-blue-700 ml-11">Room status, cleaning assignments, check-in/out coordination</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Onboarding Automation</span>
                </div>
                <p className="text-sm text-blue-700 ml-11">Role-specific training workflows for new hires</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-medium text-blue-800">Incident Reporting</span>
                </div>
                <p className="text-sm text-blue-700 ml-11">Document and track incidents with full audit trails</p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="lucy-solution" title="The Lucy Solution: Built for Hospitality">
          <p className="text-lucy-dark-gray">
            <Link to="/" className="text-lucy-black underline hover:text-lucy-dark-gray">Lucy</Link> was designed from the ground up for frontline teams in hospitality, healthcare, and service industries. Unlike Slack or Teams, every feature exists because hotels asked for it.
          </p>

          <div className="my-8 bg-gradient-to-br from-lucy-neon-yellow/10 via-white to-lucy-neon-yellow/5 border border-lucy-neon-yellow/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-lucy-black mb-6">How Lucy Solves Hotel Communication</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lucy-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-lucy-black text-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Lucy Team Communications
                </h4>
                <p className="text-lucy-dark-gray mb-4">
                  The core platform replaces scattered WhatsApp groups with one professional hub. Features include:
                </p>
                <ul className="space-y-2 text-lucy-dark-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    AI-powered shift reports and summaries
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    Automatic translation to native languages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    Structured work orders and task tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    Knowledge base for procedures and training
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lucy-black mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-lucy-black text-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Hotel-Specific Add-Ons
                </h4>
                <p className="text-lucy-dark-gray mb-4">
                  Extend Lucy with specialized tools built for hospitality:
                </p>
                <ul className="space-y-2 text-lucy-dark-gray text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    <Link to="/addons" className="underline hover:text-lucy-black">Housekeeping Planner</Link> for room management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    Automatic Review Flow for reputation management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    Employee pulse surveys with benchmarking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lucy-black rounded-full"></span>
                    <Link to="/conference-planner" className="underline hover:text-lucy-black">Conference Planner</Link> for MICE operations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
            <p className="text-lucy-dark-gray italic text-lg text-center">
              &quot;Lucy understands that hospitality runs 24/7, that our staff speaks multiple languages, and that a message missed during shift change can mean a guest complaint. Generic tools never got that.&quot;
            </p>
            <p className="text-lucy-medium-gray text-center mt-4">— Hotel Operations Manager</p>
          </div>

          <div className="mt-8 p-6 bg-lucy-dark-gray rounded-xl text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to See the Difference?</h3>
            <p className="text-lucy-light-gray-new mb-4">
              Book a personalized demo and discover how Lucy transforms hotel communication.
            </p>
            <button
              onClick={handleDemoClick}
              className="inline-block bg-lucy-neon-yellow text-lucy-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </ArticleSection>

        <ArticleSection id="faqs" title="Frequently Asked Questions">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-lucy-black mb-3">{faq.question}</h3>
                <p className="text-lucy-dark-gray">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-lucy-neon-yellow/20 to-lucy-neon-yellow/5 rounded-2xl border border-lucy-neon-yellow/30 text-center">
            <h3 className="text-2xl font-bold text-lucy-black mb-4">
              Stop Fighting Your Communication Tools
            </h3>
            <p className="text-lucy-dark-gray mb-6 max-w-2xl mx-auto">
              Your team deserves software that was built for how hotels actually work—not adapted from office tools as an afterthought. See how Lucy transforms internal communication for hospitality teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDemoClick}
                className="inline-block bg-lucy-black text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Book a Demo
              </button>
              <Link
                to="/fördelar"
                className="inline-block bg-white text-lucy-black px-8 py-3 rounded-lg font-medium border border-gray-200 hover:border-lucy-neon-yellow transition-colors"
              >
                Learn More About Lucy
              </Link>
            </div>
          </div>
        </ArticleSection>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelCommunicationSlackTeams;
