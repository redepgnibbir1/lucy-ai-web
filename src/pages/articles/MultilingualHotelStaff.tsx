import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "the-scale-of-multilingual-workforces", label: "The Scale of the Challenge" },
  { id: "hidden-costs", label: "Hidden Costs of Language Barriers" },
  { id: "traditional-solutions", label: "Traditional Solutions" },
  { id: "ai-translation-revolution", label: "AI Translation Revolution" },
  { id: "cost-calculator", label: "Calculate Your Savings" },
  { id: "implementation-guide", label: "Implementation Guide" },
  { id: "case-for-change", label: "The Case for Change" },
  { id: "faqs", label: "FAQs" },
];

// Interactive Cost Calculator Component
const MiscommunicationCostCalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [staffCount, setStaffCount] = useState(50);
  const [languagesSpoken, setLanguagesSpoken] = useState(4);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(8);
  const [averageHourlyWage, setAverageHourlyWage] = useState(18);

  const calculations = useMemo(() => {
    // Based on research: $2,500 average cost per communication incident
    const costPerIncident = 2500;
    const annualIncidentCosts = incidentsPerMonth * 12 * costPerIncident;

    // Time lost to clarifying miscommunications: ~7.47 hours/week per employee affected
    // Assume 30% of multilingual staff affected by language barriers weekly
    const affectedStaffPercentage = Math.min(0.15 * languagesSpoken, 0.6);
    const affectedStaff = Math.round(staffCount * affectedStaffPercentage);
    const hoursLostPerWeek = affectedStaff * 2.5; // Conservative estimate
    const annualTimeLost = hoursLostPerWeek * 52;
    const annualTimeCost = annualTimeLost * averageHourlyWage;

    // Training and onboarding costs due to turnover (hospitality ~74% turnover)
    const turnoverRate = 0.74;
    const annualTurnover = Math.round(staffCount * turnoverRate);
    const trainingCostPerEmployee = 5000; // Industry average
    const languageRelatedTurnover = 0.15; // 15% of turnover attributed to communication issues
    const turnoverCostFromLanguage = annualTurnover * trainingCostPerEmployee * languageRelatedTurnover;

    const totalAnnualCost = annualIncidentCosts + annualTimeCost + turnoverCostFromLanguage;

    // Estimated savings with AI translation (industry reports suggest 40-60% reduction)
    const savingsRate = 0.55;
    const potentialSavings = totalAnnualCost * savingsRate;

    return {
      annualIncidentCosts,
      annualTimeCost,
      turnoverCostFromLanguage,
      totalAnnualCost,
      potentialSavings,
      affectedStaff,
      annualTimeLost,
    };
  }, [staffCount, languagesSpoken, incidentsPerMonth, averageHourlyWage]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <ArticleSection id="cost-calculator" title="Calculate Your Hotel&apos;s Communication Costs">
      <p className="text-lucy-dark-gray mb-6">
        Use this calculator to estimate how much language barriers may be costing your hotel annually,
        and see the potential savings from implementing AI-powered translation tools.
      </p>

      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Number of Staff Members
            </label>
            <input
              type="range"
              min="10"
              max="500"
              value={staffCount}
              onChange={(e) => setStaffCount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>10</span>
              <span className="font-semibold text-lucy-black">{staffCount} staff</span>
              <span>500</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Languages Spoken by Staff
            </label>
            <input
              type="range"
              min="2"
              max="10"
              value={languagesSpoken}
              onChange={(e) => setLanguagesSpoken(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>2</span>
              <span className="font-semibold text-lucy-black">{languagesSpoken} languages</span>
              <span>10</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Communication Incidents per Month
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={incidentsPerMonth}
              onChange={(e) => setIncidentsPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>1</span>
              <span className="font-semibold text-lucy-black">{incidentsPerMonth} incidents</span>
              <span>30</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Average Hourly Wage ($)
            </label>
            <input
              type="range"
              min="12"
              max="35"
              value={averageHourlyWage}
              onChange={(e) => setAverageHourlyWage(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>$12</span>
              <span className="font-semibold text-lucy-black">${averageHourlyWage}/hr</span>
              <span>$35</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-lg font-semibold text-lucy-black mb-4">Estimated Annual Costs</h4>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-lucy-dark-gray">Communication incident costs</span>
              <span className="font-medium text-lucy-black">{formatCurrency(calculations.annualIncidentCosts)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-lucy-dark-gray">Productivity loss ({calculations.annualTimeLost.toLocaleString()} hours/year)</span>
              <span className="font-medium text-lucy-black">{formatCurrency(calculations.annualTimeCost)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-lucy-dark-gray">Language-related turnover costs</span>
              <span className="font-medium text-lucy-black">{formatCurrency(calculations.turnoverCostFromLanguage)}</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-red-50 rounded-lg px-4 -mx-4">
              <span className="font-semibold text-red-800">Total Annual Cost</span>
              <span className="font-bold text-red-800 text-xl">{formatCurrency(calculations.totalAnnualCost)}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-green-700">Potential Annual Savings with AI Translation</p>
                <p className="text-2xl font-bold text-green-800">{formatCurrency(calculations.potentialSavings)}</p>
              </div>
            </div>
            <p className="text-sm text-green-700 mt-3">
              Based on industry research showing 40-60% reduction in communication-related costs after implementing
              real-time translation tools.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={onDemoClick}
            className="inline-flex items-center gap-2 bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            See Lucy&apos;s Translation in Action
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-sm text-lucy-medium-gray mt-4 italic">
        * Calculations based on industry research from{" "}
        <a
          href="https://www.shrm.org/topics-tools/news/organizational-employee-development/cost-poor-communication"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lucy-dark-gray"
        >
          SHRM
        </a>
        ,{" "}
        <a
          href="https://amworldgroup.com/blog/effective-communications-strategies-in-the-hotel-industry"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lucy-dark-gray"
        >
          AMW Group
        </a>
        , and hospitality consulting firm HVS. Actual results may vary based on your specific situation.
      </p>
    </ArticleSection>
  );
};

// Comparison Table Component
const SolutionComparisonTable = () => {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-lucy-dark-gray to-gray-800 text-white">
            <th className="px-4 py-4 text-left font-semibold">Solution</th>
            <th className="px-4 py-4 text-center font-semibold">Cost</th>
            <th className="px-4 py-4 text-center font-semibold">Speed</th>
            <th className="px-4 py-4 text-center font-semibold">Scalability</th>
            <th className="px-4 py-4 text-center font-semibold">Accuracy</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-4 font-medium text-lucy-black">Bilingual Managers</td>
            <td className="px-4 py-4 text-center">
              <span className="inline-flex items-center gap-1 text-red-600">
                <span className="text-lg">$$$</span>
              </span>
            </td>
            <td className="px-4 py-4 text-center text-yellow-600">Medium</td>
            <td className="px-4 py-4 text-center text-red-600">Low</td>
            <td className="px-4 py-4 text-center text-green-600">High</td>
          </tr>
          <tr className="border-b border-gray-100 bg-gray-50">
            <td className="px-4 py-4 font-medium text-lucy-black">Professional Interpreters</td>
            <td className="px-4 py-4 text-center">
              <span className="inline-flex items-center gap-1 text-red-600">
                <span className="text-lg">$$$$</span>
              </span>
            </td>
            <td className="px-4 py-4 text-center text-red-600">Slow</td>
            <td className="px-4 py-4 text-center text-red-600">Very Low</td>
            <td className="px-4 py-4 text-center text-green-600">Very High</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="px-4 py-4 font-medium text-lucy-black">Consumer Translation Apps</td>
            <td className="px-4 py-4 text-center">
              <span className="inline-flex items-center gap-1 text-green-600">
                <span className="text-lg">$</span>
              </span>
            </td>
            <td className="px-4 py-4 text-center text-green-600">Fast</td>
            <td className="px-4 py-4 text-center text-yellow-600">Medium</td>
            <td className="px-4 py-4 text-center text-yellow-600">Medium</td>
          </tr>
          <tr className="bg-gradient-to-r from-lucy-neon-yellow/20 to-green-50 border-2 border-lucy-neon-yellow">
            <td className="px-4 py-4 font-semibold text-lucy-black flex items-center gap-2">
              AI-Powered Platform (Lucy)
              <span className="text-xs bg-lucy-neon-yellow px-2 py-0.5 rounded-full">Recommended</span>
            </td>
            <td className="px-4 py-4 text-center">
              <span className="inline-flex items-center gap-1 text-green-600">
                <span className="text-lg">$$</span>
              </span>
            </td>
            <td className="px-4 py-4 text-center text-green-600">Instant</td>
            <td className="px-4 py-4 text-center text-green-600">High</td>
            <td className="px-4 py-4 text-center text-green-600">High</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Language Statistics Visual
const LanguageStatisticsVisual = () => {
  const languages = [
    { name: "Spanish", percentage: 69, color: "bg-red-500" },
    { name: "French", percentage: 8, color: "bg-blue-500" },
    { name: "Portuguese", percentage: 6, color: "bg-green-500" },
    { name: "Chinese", percentage: 5, color: "bg-yellow-500" },
    { name: "Other", percentage: 12, color: "bg-gray-400" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 my-8">
      <h4 className="font-semibold text-lucy-black mb-4">Most Common Second Languages in U.S. Hotels</h4>
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-3">
            <span className="w-24 text-sm text-lucy-dark-gray">{lang.name}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${lang.color} rounded-full transition-all duration-500`}
                style={{ width: `${lang.percentage}%` }}
              />
            </div>
            <span className="w-12 text-sm font-medium text-lucy-black text-right">{lang.percentage}%</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-lucy-medium-gray mt-4">
        Source:{" "}
        <a
          href="https://www.zippia.com/hospitality-representative-jobs/demographics/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lucy-dark-gray"
        >
          Zippia Hospitality Demographics 2025
        </a>
      </p>
    </div>
  );
};

// FAQ Schema Data
const faqData = [
  {
    question: "How many languages do hotel staff typically speak?",
    answer: "In the United States, hotel staff commonly speak 3-5 languages, with Spanish being the most prevalent second language (spoken by 69% of hospitality representatives), followed by French (8%), Portuguese (6%), and Chinese (5%). International hotels often have staff speaking 5+ languages depending on their location and guest demographics.",
  },
  {
    question: "What is the cost of miscommunication in hotels?",
    answer: "According to hospitality consulting firm HVS, communication breakdowns cost hotels an average of $2,500 per incident through operational inefficiencies. For a mid-sized hotel experiencing 8-10 incidents monthly, this can add up to $240,000-$300,000 annually when including productivity losses and turnover costs.",
  },
  {
    question: "How does AI translation work in hotel communication platforms?",
    answer: "AI-powered translation in platforms like Lucy works by automatically detecting the language of incoming messages and translating them in real-time to each staff member&apos;s preferred language. This means a housekeeper who speaks Spanish can read messages from a manager who writes in English, and vice versa, without either needing to manually translate.",
  },
  {
    question: "Can AI translation handle hospitality-specific terminology?",
    answer: "Yes, modern AI translation systems are trained on industry-specific vocabulary. Platforms designed for hospitality understand terms like &apos;turn-down service,&apos; &apos;comp,&apos; &apos;walking a guest,&apos; and other hotel jargon, ensuring accurate translations in context.",
  },
  {
    question: "How long does it take to implement multilingual communication software?",
    answer: "Most hotels can implement AI-powered communication platforms like Lucy within 1-2 weeks. The onboarding process typically includes setting up team structures, importing staff information, and a brief training period. Since staff use the platform in their native language, adoption rates are typically high.",
  },
];

const MultilingualHotelStaff = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Multilingual Hotel Staff: How to Solve the Communication Challenge",
    "description": "Learn how hotels with multilingual staff can overcome language barriers using AI-powered translation. Discover the costs of miscommunication and modern solutions.",
    "author": {
      "@type": "Person",
      "name": "Bj\u00f6rn Treje",
      "url": "https://www.linkedin.com/in/bjorntreje/",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lucy Analytics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lucyanalytics.com/logo.png",
      },
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lucyanalytics.com/articles/multilingual-hotel-staff",
    },
    "image": "https://lucyanalytics.com/og-multilingual-hotel-staff.jpg",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lucyanalytics.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "https://lucyanalytics.com/articles",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Multilingual Hotel Staff",
        "item": "https://lucyanalytics.com/articles/multilingual-hotel-staff",
      },
    ],
  };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Multilingual Hotel Staff: How to Solve the Communication Challenge"
          subtitle="Hotels with diverse, multilingual teams face unique communication hurdles. Learn how AI-powered translation is transforming operations and why the traditional solutions are no longer enough."
          breadcrumbLabel="Multilingual Hotel Staff"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Hotels often employ staff speaking <strong>5+ languages</strong>, with Spanish (69%), French (8%), and Portuguese (6%) being the most common second languages in the U.S.</>,
            <>Communication breakdowns cost hotels an average of <strong>$2,500 per incident</strong>, adding up to hundreds of thousands annually in lost productivity.</>,
            <>AI-powered translation can reduce communication-related costs by <strong>40-60%</strong> while improving response times by up to 40%.</>,
            <>Traditional solutions like hiring bilingual managers are <strong>expensive and unscalable</strong> compared to modern AI platforms.</>,
            <>Real-time translation enables <strong>instant, language-independent communication</strong> across all departments and shifts.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            <strong>Multilingual hotel staff</strong> are both an incredible asset and a significant operational challenge.
            The hospitality industry employs approximately{" "}
            <a
              href="https://thehotelgm.com/hotel-management/hotel-industry-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              10% of the global workforce
            </a>
            , making it one of the most linguistically diverse sectors in the world. While this diversity enables
            hotels to serve international guests, it also creates internal communication challenges that can
            impact everything from housekeeping efficiency to guest satisfaction.
          </p>
          <p className="text-lucy-dark-gray">
            In the United States alone, the hospitality industry is expected to employ 1.8 million workers in 2024,
            with{" "}
            <a
              href="https://www.zippia.com/hospitality-representative-jobs/demographics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              69% of hospitality representatives
            </a>{" "}
            speaking Spanish as a second language. When shift handovers, work orders, and urgent requests need to
            flow seamlessly between team members who speak different languages, the traditional workarounds start
            to break down.
          </p>
          <p className="text-lucy-dark-gray">
            This guide explores the true cost of language barriers in hotel operations, examines why traditional
            solutions fall short, and shows how AI-powered translation is changing the game for{" "}
            <Link to="/articles/introducing-lucy-analytics" className="text-blue-600 hover:underline">
              hotel communication
            </Link>
            .
          </p>
        </ArticleSection>

        <ArticleSection id="the-scale-of-multilingual-workforces" title="The Scale of Multilingual Workforces">
          <p className="text-lucy-dark-gray">
            Walk into any major hotel and you will find a remarkable linguistic tapestry. Front desk staff fielding
            calls in multiple languages. Housekeepers communicating in their native tongues. Maintenance teams
            coordinating across language divides. This diversity is not a bug but a feature of modern hospitality.
          </p>

          <LanguageStatisticsVisual />

          <p className="text-lucy-dark-gray">
            According to{" "}
            <a
              href="https://oysterlink.com/career/hotel-general-manager/demographics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              OysterLink research
            </a>
            , even at the management level, 38% of Hotel General Managers speak Spanish as a second language,
            followed by French (10%) and Russian (9%). This multilingual reality creates a communication ecosystem
            where messages must traverse multiple language barriers daily.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">The Challenge in Numbers</h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>Average hotel team speaks <strong>3-5 different languages</strong></li>
                  <li>55% of housekeepers leave within the first 90 days, often citing communication issues</li>
                  <li>Hotels with structured communication protocols see <strong>23% higher guest satisfaction</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            The languages in highest demand across U.S. hotels include Spanish, Chinese, French, Japanese, and German.
            For properties catering to international guests, having staff who speak these languages is essential but
            managing internal communication between them remains a persistent challenge.
          </p>
        </ArticleSection>

        <ArticleSection id="hidden-costs" title="The Hidden Costs of Language Barriers">
          <p className="text-lucy-dark-gray">
            Language barriers in hotels create costs that extend far beyond the obvious. According to{" "}
            <a
              href="https://amworldgroup.com/blog/effective-communications-strategies-in-the-hotel-industry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              hospitality consulting firm HVS
            </a>
            , communication breakdowns cost hotels an average of <strong>$2,500 per incident</strong> through
            operational inefficiencies. Multiply this across a property experiencing even modest communication
            failures, and the annual toll becomes staggering.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lucy-black mb-2">Operational Errors</h4>
              <p className="text-sm text-lucy-dark-gray">
                Properties implementing standardized handover protocols experience{" "}
                <strong>47% fewer operational errors</strong> related to miscommunication.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lucy-black mb-2">Productivity Loss</h4>
              <p className="text-sm text-lucy-dark-gray">
                Poor communication accounts for a loss of <strong>7.47 hours per employee per week</strong>,
                translating to $12,506 per employee annually.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <h4 className="font-semibold text-lucy-black mb-2">Turnover Costs</h4>
              <p className="text-sm text-lucy-dark-gray">
                Losing a single employee costs hospitality businesses{" "}
                <strong>over $5,000</strong> in recruiting, hiring, training, and lost productivity.
              </p>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            The{" "}
            <a
              href="https://www.shrm.org/topics-tools/news/organizational-employee-development/cost-poor-communication"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Society for Human Resource Management (SHRM)
            </a>{" "}
            reports that miscommunication costs organizations an average of $62.4 million per year in lost
            productivity. While this figure spans all industries, the impact is particularly acute in hospitality
            where real-time coordination is essential for guest satisfaction.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6">
            <h4 className="font-semibold text-amber-800 mb-2">Safety Implications</h4>
            <p className="text-amber-900 text-sm">
              Language barriers can make it challenging to effectively communicate important information during
              crisis situations, such as medical emergencies or severe weather. Clear communication delivered
              quickly is crucial to ensure proper protocols are followed. Without it, there could be confusion
              and delayed response times, creating liability concerns for the hotel.
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="traditional-solutions" title="Why Traditional Solutions Fall Short">
          <p className="text-lucy-dark-gray">
            Hotels have historically relied on a handful of approaches to bridge language gaps. Each comes with
            significant limitations that become more pronounced as operations scale.
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-lucy-black mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">1</span>
                Hiring Bilingual Managers
              </h4>
              <p className="text-lucy-dark-gray text-sm mb-3">
                The traditional approach of hiring bilingual supervisors to act as translation bridges creates
                bottlenecks. These managers become single points of failure, and their availability determines
                whether communication flows smoothly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">High salary costs</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Limited availability</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Single point of failure</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-lucy-black mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">2</span>
                Personal Translation Apps
              </h4>
              <p className="text-lucy-dark-gray text-sm mb-3">
                Staff using personal phones with consumer translation apps like Google Translate create security
                concerns, inconsistent experiences, and no audit trail for operational messages.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">No audit trail</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">GDPR concerns</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Inconsistent quality</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-lucy-black mb-2 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm">3</span>
                Informal WhatsApp Groups
              </h4>
              <p className="text-lucy-dark-gray text-sm mb-3">
                Many hotels default to{" "}
                <Link to="/articles/introducing-lucy-analytics" className="text-blue-600 hover:underline">
                  WhatsApp for team communication
                </Link>
                , but these informal channels lack translation features, structured task management, and
                management oversight.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">No translation</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">No accountability</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Information silos</span>
              </div>
            </div>
          </div>

          <SolutionComparisonTable />

          <p className="text-lucy-dark-gray">
            The{" "}
            <a
              href="https://oysterlink.com/spotlight/high-turnover-in-hospitality-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              hospitality industry faces a 74% annual turnover rate
            </a>
            , compared to just 12-15% for other U.S. industries. Part of this churn stems from communication
            frustrations. When staff cannot understand instructions, feel isolated due to language barriers,
            or struggle to collaborate with colleagues, they are more likely to leave.
          </p>
        </ArticleSection>

        <ArticleSection id="ai-translation-revolution" title="The AI Translation Revolution">
          <p className="text-lucy-dark-gray">
            The global translation software market is projected to grow from{" "}
            <a
              href="https://www.factmr.com/report/translation-software-market"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              USD 10.7 billion in 2025 to USD 20.1 billion by 2035
            </a>
            , reflecting a fundamental shift in how organizations approach language barriers. In hospitality,
            this shift is particularly transformative.
          </p>

          <div className="relative bg-gradient-to-br from-lucy-dark-gray to-gray-900 rounded-2xl p-8 my-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lucy-neon-yellow/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h4 className="text-white text-xl font-semibold mb-4">How AI Translation Works in Practice</h4>
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lucy-black font-bold">1</span>
                  </div>
                  <h5 className="font-medium mb-2">Message Sent</h5>
                  <p className="text-sm text-gray-300">
                    Manager writes a message in English about a VIP guest arrival
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lucy-black font-bold">2</span>
                  </div>
                  <h5 className="font-medium mb-2">Instant Translation</h5>
                  <p className="text-sm text-gray-300">
                    AI detects language and translates to each team member&apos;s preference
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lucy-black font-bold">3</span>
                  </div>
                  <h5 className="font-medium mb-2">Native Reading</h5>
                  <p className="text-sm text-gray-300">
                    Housekeeping reads in Spanish, concierge in French, all understand perfectly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Modern AI-powered platforms like{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Lucy
            </Link>{" "}
            go beyond simple translation. They integrate translation directly into the communication workflow,
            meaning staff never need to copy text into a separate app or wait for a bilingual colleague.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-4">Key Benefits of AI-Powered Translation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium text-green-800">40% Faster Response Times</p>
                  <p className="text-sm text-green-700">Marriott&apos;s centralized communication system achieved this benchmark</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium text-green-800">37% Fewer Operational Errors</p>
                  <p className="text-sm text-green-700">When standardized communication channels are implemented</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium text-green-800">30% Higher Professional Translation Fees</p>
                  <p className="text-sm text-green-700">Saved compared to human translator costs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium text-green-800">23% Higher Guest Satisfaction</p>
                  <p className="text-sm text-green-700">Hotels with structured communication protocols</p>
                </div>
              </div>
            </div>
          </div>
        </ArticleSection>

        <MiscommunicationCostCalculator onDemoClick={handleDemoClick} />

        <ArticleSection id="implementation-guide" title="Implementation Guide: Getting Started">
          <p className="text-lucy-dark-gray">
            Transitioning to AI-powered multilingual communication requires thoughtful planning but does not
            need to disrupt operations. Here is a practical roadmap based on successful implementations.
          </p>

          <div className="my-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-lucy-neon-yellow via-green-400 to-blue-400" />

              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
                    <span className="font-bold text-lucy-black">1</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lucy-black mb-2">Audit Your Current Communication</h4>
                    <p className="text-sm text-lucy-dark-gray">
                      Document all existing communication channels (WhatsApp groups, radios, paper notes).
                      Identify which departments face the most language-related friction and quantify
                      incident frequency.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lucy-black mb-2">Start with a Pilot Department</h4>
                    <p className="text-sm text-lucy-dark-gray">
                      Begin with housekeeping or maintenance where language diversity is typically highest
                      and the impact of miscommunication most visible. This creates quick wins and
                      internal champions.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lucy-black mb-2">Configure Language Preferences</h4>
                    <p className="text-sm text-lucy-dark-gray">
                      Set up each team member&apos;s preferred language in the platform. With Lucy, staff
                      can use the entire platform in their native language, not just receive translated
                      messages.
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">4</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h4 className="font-semibold text-lucy-black mb-2">Roll Out Property-Wide</h4>
                    <p className="text-sm text-lucy-dark-gray">
                      Once the pilot proves successful, extend to all departments. Use the{" "}
                      <Link to="/addons" className="text-blue-600 hover:underline">
                        knowledgebase and onboarding features
                      </Link>{" "}
                      to ensure consistent training across language groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Most hotels complete full implementation within 1-2 weeks. Because staff interact with the
            platform in their native language, adoption rates are typically high. The key is ensuring
            leadership champions the transition and provides support during the initial adjustment period.
          </p>
        </ArticleSection>

        <ArticleSection id="case-for-change" title="The Case for Change">
          <p className="text-lucy-dark-gray">
            The hospitality industry stands at an inflection point. With{" "}
            <a
              href="https://www.cloudbeds.com/articles/hotel-turnover/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              67% of hotel operators reporting understaffing
            </a>{" "}
            and labor shortages making bilingual hires increasingly difficult to find, the traditional
            approaches to managing multilingual teams are no longer sustainable.
          </p>

          <div className="bg-gradient-to-r from-lucy-neon-yellow/20 via-green-50 to-blue-50 rounded-2xl p-8 my-8 border border-lucy-neon-yellow/30">
            <h4 className="text-xl font-semibold text-lucy-black mb-4">Why Hotels Are Making the Switch</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-lucy-black mb-3">Before AI Translation</h5>
                <ul className="space-y-2 text-sm text-lucy-dark-gray">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Tasks lost between shifts due to language gaps
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Managers as constant translation bottlenecks
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Staff isolation and communication frustration
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Safety protocol miscommunication risks
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-lucy-black mb-3">After AI Translation</h5>
                <ul className="space-y-2 text-sm text-lucy-dark-gray">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Seamless handovers in any language combination
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Direct team communication without intermediaries
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Inclusive team culture across language groups
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Clear emergency communication in all languages
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Companies with inclusive communication strategies are{" "}
            <a
              href="https://www.worklingua.com/blog/the-hidden-cost-of-miscommunication-in-the-hospitality-industry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              3.5 times more likely to outperform their competitors
            </a>
            . For hotels, this translates directly to better guest experiences, higher staff retention,
            and stronger operational performance.
          </p>

          <div className="mt-8 p-6 bg-lucy-dark-gray rounded-xl text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to Break Down Language Barriers?</h3>
            <p className="text-lucy-light-gray-new mb-4">
              See how Lucy&apos;s real-time translation can transform your hotel&apos;s communication.
              Book a personalized demo in your preferred language.
            </p>
            <button
              onClick={handleDemoClick}
              className="inline-block bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </ArticleSection>

        <ArticleSection id="faqs" title="Frequently Asked Questions">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-medium text-lucy-black pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-lucy-medium-gray transform transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-lucy-dark-gray">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Have More Questions?</h4>
            <p className="text-blue-800 text-sm mb-4">
              Our team speaks multiple languages and would be happy to discuss your specific challenges.
            </p>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-900 transition-colors"
            >
              Schedule a conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ArticleSection>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-lucy-black mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/articles/hotel-staff-onboarding"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Onboarding</p>
              <p className="font-medium text-lucy-black">Hotel Staff Onboarding Best Practices</p>
            </Link>
            <Link
              to="/articles/hotel-shift-handovers"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Operations</p>
              <p className="font-medium text-lucy-black">Improving Hotel Shift Handovers</p>
            </Link>
            <Link
              to="/articles/whatsapp-for-hotels"
              className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <p className="text-sm text-lucy-medium-gray mb-1">Communication</p>
              <p className="font-medium text-lucy-black">WhatsApp for Hotels: Pros & Cons</p>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default MultilingualHotelStaff;
