import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "hidden-cost", label: "The Hidden Cost" },
  { id: "common-challenges", label: "Common Challenges" },
  { id: "communication-methods", label: "Communication Methods" },
  { id: "shift-handover", label: "Shift Handover" },
  { id: "multilingual-teams", label: "Multilingual Teams" },
  { id: "cost-calculator", label: "Cost Calculator" },
  { id: "modern-solution", label: "The Modern Solution" },
  { id: "implementation", label: "Implementation Guide" },
  { id: "faqs", label: "FAQs" },
];

// Interactive Cost Calculator Component
const CommunicationCostCalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [rooms, setRooms] = useState(100);
  const [staff, setStaff] = useState(50);
  const [shiftsPerDay, setShiftsPerDay] = useState(3);
  const [languages, setLanguages] = useState(3);
  const [showResults, setShowResults] = useState(false);

  // Cost calculations based on industry research
  const minutesLostPerHandover = 40; // From research: up to 40 minutes wasted per employee per shift
  const errorRateWithoutSystem = 0.80; // 80% of incidents linked to poor handovers
  const costPerError = 150; // Average cost per miscommunication error (guest compensation, rework, etc.)
  const avgHourlyWage = 18; // Average hospitality hourly wage
  const workDaysPerMonth = 30;

  const calculateCosts = () => {
    // Time lost calculations
    const handoversPerDay = shiftsPerDay;
    const minutesLostDaily = handoversPerDay * minutesLostPerHandover * (staff / shiftsPerDay);
    const hoursLostMonthly = (minutesLostDaily * workDaysPerMonth) / 60;
    const timeCostMonthly = hoursLostMonthly * avgHourlyWage;

    // Error-related costs
    const estimatedErrorsMonthly = Math.round((staff * workDaysPerMonth * errorRateWithoutSystem) / 10);
    const errorCostMonthly = estimatedErrorsMonthly * costPerError;

    // Language barrier costs (translation delays, misunderstandings)
    const languageOverhead = languages > 2 ? (languages - 2) * staff * 15 : 0; // $15 per staff per extra language monthly

    // Total monthly cost of poor communication
    const totalMonthlyCost = timeCostMonthly + errorCostMonthly + languageOverhead;
    const annualCost = totalMonthlyCost * 12;

    // Potential savings with proper system (based on 50-65% reduction in errors)
    const potentialSavings = annualCost * 0.55;

    return {
      hoursLostMonthly: Math.round(hoursLostMonthly),
      timeCostMonthly: Math.round(timeCostMonthly),
      estimatedErrorsMonthly,
      errorCostMonthly: Math.round(errorCostMonthly),
      languageOverhead: Math.round(languageOverhead),
      totalMonthlyCost: Math.round(totalMonthlyCost),
      annualCost: Math.round(annualCost),
      potentialSavings: Math.round(potentialSavings),
    };
  };

  const results = calculateCosts();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-lucy-neon-yellow flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Communication Cost Calculator</h3>
          <p className="text-gray-400 text-sm">Calculate your hidden communication costs</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Number of Rooms</label>
          <input
            type="range"
            min="20"
            max="500"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">20</span>
            <span className="text-lucy-neon-yellow font-semibold">{rooms} rooms</span>
            <span className="text-gray-500">500</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Total Staff Members</label>
          <input
            type="range"
            min="10"
            max="200"
            value={staff}
            onChange={(e) => setStaff(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">10</span>
            <span className="text-lucy-neon-yellow font-semibold">{staff} staff</span>
            <span className="text-gray-500">200</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Shifts Per Day</label>
          <input
            type="range"
            min="2"
            max="4"
            value={shiftsPerDay}
            onChange={(e) => setShiftsPerDay(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">2</span>
            <span className="text-lucy-neon-yellow font-semibold">{shiftsPerDay} shifts</span>
            <span className="text-gray-500">4</span>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-2">Languages Spoken by Staff</label>
          <input
            type="range"
            min="1"
            max="8"
            value={languages}
            onChange={(e) => setLanguages(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">1</span>
            <span className="text-lucy-neon-yellow font-semibold">{languages} languages</span>
            <span className="text-gray-500">8</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowResults(true)}
        className="w-full bg-lucy-neon-yellow text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-300 transition-colors mb-6"
      >
        Calculate My Costs
      </button>

      {showResults && (
        <div className="space-y-4 animate-fade-in">
          <div className="h-px bg-gray-700" />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Hours Lost Monthly</p>
              <p className="text-2xl font-bold text-white">{results.hoursLostMonthly.toLocaleString()}</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Estimated Errors/Month</p>
              <p className="text-2xl font-bold text-white">{results.estimatedErrorsMonthly.toLocaleString()}</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Monthly Impact</p>
              <p className="text-2xl font-bold text-red-400">${results.totalMonthlyCost.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 text-center">
            <p className="text-gray-300 mb-2">Estimated Annual Cost of Poor Communication</p>
            <p className="text-4xl font-bold text-red-400">${results.annualCost.toLocaleString()}</p>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 text-center">
            <p className="text-gray-300 mb-2">Potential Annual Savings with Modern Tools</p>
            <p className="text-4xl font-bold text-green-400">${results.potentialSavings.toLocaleString()}</p>
            <p className="text-sm text-gray-400 mt-2">Based on 55% reduction in communication-related costs</p>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onDemoClick}
              className="inline-flex items-center gap-2 bg-lucy-neon-yellow text-gray-900 font-semibold py-3 px-8 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              See How Lucy Can Help
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Communication Methods Comparison Table
const CommunicationMethodsTable = () => {
  const methods = [
    {
      method: "WhatsApp Groups",
      auditTrail: false,
      gdprCompliant: false,
      translation: false,
      taskTracking: false,
      shiftHandover: false,
      cost: "Free",
      bestFor: "Informal, personal use",
    },
    {
      method: "Walkie-Talkies",
      auditTrail: false,
      gdprCompliant: true,
      translation: false,
      taskTracking: false,
      shiftHandover: false,
      cost: "$50-200/unit",
      bestFor: "Urgent, real-time alerts",
    },
    {
      method: "Email",
      auditTrail: true,
      gdprCompliant: true,
      translation: false,
      taskTracking: false,
      shiftHandover: false,
      cost: "$5-15/user/mo",
      bestFor: "Formal documentation",
    },
    {
      method: "Slack/Teams",
      auditTrail: true,
      gdprCompliant: true,
      translation: false,
      taskTracking: false,
      shiftHandover: false,
      cost: "$7-15/user/mo",
      bestFor: "Office-based teams",
    },
    {
      method: "Lucy",
      auditTrail: true,
      gdprCompliant: true,
      translation: true,
      taskTracking: true,
      shiftHandover: true,
      cost: "Custom pricing",
      bestFor: "Frontline hotel teams",
    },
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Method</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">Audit Trail</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">GDPR</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">Auto Translation</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">Task Tracking</th>
            <th className="text-center p-4 font-semibold text-lucy-black border-b border-gray-200">Shift Handover</th>
            <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Best For</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((m, index) => (
            <tr
              key={m.method}
              className={`${index === methods.length - 1 ? "bg-lucy-neon-yellow/10" : ""} hover:bg-gray-50 transition-colors`}
            >
              <td className="p-4 border-b border-gray-100 font-medium text-lucy-black">{m.method}</td>
              <td className="p-4 border-b border-gray-100 text-center">{m.auditTrail ? <CheckIcon /> : <XIcon />}</td>
              <td className="p-4 border-b border-gray-100 text-center">{m.gdprCompliant ? <CheckIcon /> : <XIcon />}</td>
              <td className="p-4 border-b border-gray-100 text-center">{m.translation ? <CheckIcon /> : <XIcon />}</td>
              <td className="p-4 border-b border-gray-100 text-center">{m.taskTracking ? <CheckIcon /> : <XIcon />}</td>
              <td className="p-4 border-b border-gray-100 text-center">{m.shiftHandover ? <CheckIcon /> : <XIcon />}</td>
              <td className="p-4 border-b border-gray-100 text-lucy-medium-gray text-sm">{m.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Statistics Card Component
const StatCard = ({ number, label, source }: { number: string; label: string; source?: string }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
    <p className="text-3xl md:text-4xl font-bold text-lucy-black mb-2">{number}</p>
    <p className="text-lucy-medium-gray text-sm">{label}</p>
    {source && <p className="text-xs text-gray-400 mt-2">{source}</p>}
  </div>
);

// Shift Handover Checklist
const ShiftHandoverChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const items = [
    "Review all pending guest requests from previous shift",
    "Check VIP arrivals and special requirements for the day",
    "Verify room status updates with housekeeping",
    "Review maintenance issues and work order status",
    "Document any guest complaints or incidents",
    "Update team on any policy changes or announcements",
    "Confirm staffing levels for next shift",
    "Brief incoming staff on priority tasks",
  ];

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const completionPercentage = Math.round((checkedItems.size / items.length) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-lucy-black flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Interactive Shift Handover Checklist
        </h4>
        <span className="text-sm font-medium text-blue-600">{completionPercentage}% complete</span>
      </div>

      <div className="h-2 bg-blue-100 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleItem(index)}
            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
              checkedItems.has(index)
                ? "bg-blue-100 text-blue-800"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              checkedItems.has(index)
                ? "bg-blue-600 border-blue-600"
                : "border-gray-300"
            }`}>
              {checkedItems.has(index) && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-sm ${checkedItems.has(index) ? "line-through" : ""}`}>{item}</span>
          </li>
        ))}
      </ul>

      {completionPercentage === 100 && (
        <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-xl text-center">
          <p className="text-green-800 font-medium">Great job! Your handover checklist is complete.</p>
          <p className="text-green-600 text-sm mt-1">With Lucy, this entire process is automated and tracked.</p>
        </div>
      )}
    </div>
  );
};

// FAQ Schema data
const faqData = [
  {
    question: "What is hotel communication software?",
    answer: "Hotel communication software is a digital platform designed to facilitate internal communication between hotel staff across departments and shifts. Unlike consumer messaging apps, these purpose-built solutions offer features like audit trails, task tracking, automatic translation, shift handover documentation, and GDPR compliance. They help hotels replace fragmented WhatsApp groups and paper-based processes with a unified, professional system."
  },
  {
    question: "Why is WhatsApp not ideal for hotel staff communication?",
    answer: "While WhatsApp is convenient, it presents several issues for professional hotel use: no audit trail for compliance, GDPR concerns due to contact data sharing with Meta servers, mixing of personal and work communications, no task tracking or accountability features, lack of shift-aware functionality, and no management oversight. In 2021, WhatsApp was fined 225 million euros by the Irish Data Protection Commission for GDPR violations."
  },
  {
    question: "How much does poor communication cost hotels?",
    answer: "Poor communication can cost hotels significantly. Research shows shift transitions without proper handoffs can waste up to 40 minutes per employee per shift. Inadequate handovers contribute to approximately 80% of workplace incidents. Losing a single employee due to communication-related frustration can cost over $5,000 in recruiting, hiring, and training. Hotels with structured communication protocols see 23% higher guest satisfaction scores."
  },
  {
    question: "What features should hotel communication software include?",
    answer: "Essential features include: real-time messaging with channels for different departments, automatic translation for multilingual teams, structured shift handover documentation with AI summaries, work order management and task tracking, a knowledge base for SOPs and training materials, incident reporting capabilities, mobile-first design for deskless workers, GDPR compliance and data security, and integration with existing hotel systems like PMS."
  },
  {
    question: "How can hotels improve shift handover communication?",
    answer: "Hotels can improve shift handovers by implementing standardized protocols, which research shows reduces communication-related errors by up to 65%. Key strategies include: using digital handover documentation instead of paper or verbal-only methods, implementing structured checklists covering guest requests, maintenance issues, and VIP arrivals, utilizing AI-powered summaries of shift activities, ensuring all information is accessible in each team member preferred language, and tracking handover completion for accountability."
  }
];

// JSON-LD Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hotel Communication: The Complete Guide From Chaos to Clarity",
  "description": "Learn how to transform your hotel communication with proven strategies, tools, and best practices. Reduce errors by 65% and improve guest satisfaction with modern communication solutions.",
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
      "url": "https://lucyanalytics.com/logo.png"
    }
  },
  "datePublished": "2026-02-01",
  "dateModified": "2026-02-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lucyanalytics.com/articles/hotel-communication-guide"
  },
  "image": "https://lucyanalytics.com/og-hotel-communication.jpg"
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
      "name": "Hotel Communication Guide",
      "item": "https://lucyanalytics.com/articles/hotel-communication-guide"
    }
  ]
};

const HotelCommunicationGuide = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Hotel Communication: The Complete Guide From Chaos to Clarity"
          subtitle="How leading hotels are transforming internal communication to reduce errors by 65%, cut turnover costs, and deliver exceptional guest experiences in 2026 and beyond."
          breadcrumbLabel="Hotel Communication Guide"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Poor hotel communication contributes to <strong>80% of workplace incidents</strong> and costs properties thousands annually in errors, turnover, and lost productivity.</>,
            <>Hotels using structured communication protocols see <strong>23% higher guest satisfaction</strong> and up to <strong>65% fewer communication-related errors</strong>.</>,
            <>WhatsApp and consumer messaging apps pose significant <strong>GDPR compliance risks</strong> and lack essential features like audit trails and task tracking.</>,
            <>Modern hotel communication software with <strong>AI-powered translation and shift handovers</strong> can transform operations for multilingual, deskless teams.</>,
            <>Use our interactive <strong>cost calculator</strong> below to estimate your hidden communication costs and potential savings.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction: The Communication Crisis in Hotels">
          <p className="text-lucy-dark-gray">
            <strong>Hotel communication</strong> is the backbone of exceptional guest service. Yet in 2026, most hotels still rely on a chaotic mix of WhatsApp groups, walkie-talkies, paper notes, and verbal handoffs to coordinate their teams. The result? Missed guest requests, delayed maintenance, frustrated staff, and ultimately, negative reviews.
          </p>
          <p className="text-lucy-dark-gray">
            According to the{" "}
            <a
              href="https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              American Hotel and Lodging Association
            </a>
            , 65% of hotels continue to report staffing shortages as of early 2025, with hotel employment still nearly 10% below pre-pandemic levels. This staffing crisis makes efficient communication more critical than ever—when you have fewer people, every minute matters.
          </p>
          <p className="text-lucy-dark-gray">
            This comprehensive guide will show you exactly how hotels are moving from communication chaos to clarity. You will learn the true cost of poor communication, compare different tools and approaches, and discover how modern{" "}
            <Link to="/articles/introducing-lucy-analytics" className="text-blue-600 hover:underline">
              hotel communication software
            </Link>{" "}
            is helping properties reduce errors, improve guest satisfaction, and save thousands annually.
          </p>
        </ArticleSection>

        <ArticleSection id="hidden-cost" title="The Hidden Cost of Poor Hotel Communication">
          <p className="text-lucy-dark-gray">
            Communication breakdowns do not just create frustration—they have a measurable financial impact on your property. Research from{" "}
            <a
              href="https://www.myshyft.com/blog/avoiding-handover-errors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              industry studies
            </a>{" "}
            reveals that inadequate handovers contribute to approximately 80% of workplace incidents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <StatCard
              number="80%"
              label="of workplace incidents linked to poor handovers"
              source="MyShyft Research"
            />
            <StatCard
              number="40 min"
              label="wasted per employee per shift without proper handoffs"
              source="Industry Average"
            />
            <StatCard
              number="$5,000+"
              label="cost to replace a single hospitality employee"
              source="Cloudbeds 2025"
            />
            <StatCard
              number="65%"
              label="reduction in errors with standardized protocols"
              source="EviView Research"
            />
          </div>

          <p className="text-lucy-dark-gray">
            The costs compound quickly. According to{" "}
            <a
              href="https://www.cloudbeds.com/articles/hotel-turnover/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cloudbeds
            </a>
            , the hospitality industry faces a staggering 40.5% average churn rate globally, with some positions like housekeeping seeing 55% turnover within the first 90 days. Poor communication is a major driver—nearly half (47%) of hospitality frontline managers report feeling burned out, and 64% have seen employees quit specifically due to burnout exacerbated by communication frustrations.
          </p>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">The Real Cost of Turnover</h4>
                <p className="text-amber-900">
                  It can take up to two years for a new hire to become fully productive. Every time you lose an employee due to communication-related frustration, you are not just losing their salary—you are losing institutional knowledge, guest relationships, and team cohesion.
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="common-challenges" title="Common Hotel Communication Challenges">
          <p className="text-lucy-dark-gray">
            Before we explore solutions, let us understand the specific challenges that make hotel communication uniquely difficult:
          </p>

          <div className="space-y-6 mt-6">
            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-lucy-black mb-2">Fragmented Communication Channels</h3>
                <p className="text-lucy-medium-gray">
                  Staff juggle multiple WhatsApp groups, email threads, physical logbooks, and verbal messages. Critical information gets buried, and nobody knows where to look for updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-lucy-black mb-2">Shift Handover Gaps</h3>
                <p className="text-lucy-medium-gray">
                  Critical information falls through the cracks between shifts. Guest preferences, maintenance issues, and special requests are lost when teams rely on verbal handoffs or paper notes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-lucy-black mb-2">Language Barriers</h3>
                <p className="text-lucy-medium-gray">
                  Hotel teams often speak 5 or more languages. Manual translation slows everything down, and critical safety information may not reach every team member in a language they fully understand.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-lucy-black mb-2">No Accountability or Tracking</h3>
                <p className="text-lucy-medium-gray">
                  WhatsApp does not track who read what, who completed which task, or whether information was actioned. Managers lack visibility into operational execution.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-lucy-black mb-2">Security and Compliance Risks</h3>
                <p className="text-lucy-medium-gray">
                  Using personal phones and consumer apps for work creates data security vulnerabilities and GDPR compliance issues. Guest information on personal devices is a liability waiting to happen.
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="communication-methods" title="Hotel Communication Methods Compared">
          <p className="text-lucy-dark-gray">
            Not all communication tools are created equal. Here is how common methods stack up against the specific needs of hotel operations:
          </p>

          <div className="my-8 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <CommunicationMethodsTable />
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Why WhatsApp Falls Short for Hotels</h3>

          <p className="text-lucy-dark-gray">
            Despite its convenience, WhatsApp presents serious issues for professional hotel use. According to{" "}
            <a
              href="https://heydata.eu/en/magazine/whatsapp-privacy-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              heyData
            </a>
            , the WhatsApp Business app is not GDPR compliant because it processes metadata and accesses contact data without proper consent mechanisms.
          </p>

          <div className="bg-red-50 border border-red-100 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              GDPR Warning
            </h4>
            <p className="text-red-700">
              In 2021, WhatsApp was fined <strong>225 million euros</strong> by Ireland Data Protection Commission—the largest fine ever issued by the Irish authority. The messaging app violated GDPR rules around data transparency and user privacy. Hotels using WhatsApp for staff communication may be exposing themselves to similar compliance risks.
            </p>
          </div>

          <p className="text-lucy-dark-gray">
            The core issues with WhatsApp for hotels include: no audit trail for compliance requirements, contact data automatically shared with Meta servers, mixing personal and professional communications, no task tracking or work order management, and no ability to enforce message retention policies.
          </p>
        </ArticleSection>

        <ArticleSection id="shift-handover" title="Mastering Hotel Shift Handovers">
          <p className="text-lucy-dark-gray">
            Shift handovers are where most hotel communication breakdowns occur. Research shows that organizations implementing standardized handover protocols experience up to{" "}
            <a
              href="https://www.eviview.com/shift-handover-process/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              50% fewer task-related failures
            </a>{" "}
            and significantly improved information retention.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Common Handover Failures
              </h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  Relying on verbal-only communication
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  No standardized format or checklist
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  Distraction during handover moments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  Paper notes that get lost or damaged
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  Language barriers between staff
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Best Practice Elements
              </h4>
              <ul className="space-y-2 text-green-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Digital documentation with timestamps
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Standardized SBAR format (Situation, Background, Assessment, Recommendation)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  AI-generated summaries of key points
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Automatic translation to all team languages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Confirmation tracking for accountability
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lucy-dark-gray mb-6">
            Try this interactive checklist to see what a proper shift handover should cover. Click items to check them off:
          </p>

          <ShiftHandoverChecklist />

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mt-8">
            <p className="text-lucy-dark-gray italic text-center">
              &quot;Teams receiving specialized handover training experience up to 60% fewer communication-related errors compared to those with only on-the-job training.&quot;
            </p>
            <p className="text-center text-sm text-lucy-medium-gray mt-2">
              — MyShyft Shift Management Research
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="multilingual-teams" title="Solving the Multilingual Communication Challenge">
          <p className="text-lucy-dark-gray">
            Hotels are inherently multicultural environments. It is common for a single property to have staff speaking 5 or more languages across housekeeping, kitchen, front desk, and maintenance departments. This diversity is a strength for guest service but creates real operational challenges.
          </p>

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 my-8">
            <h4 className="text-xl font-semibold text-lucy-black mb-6 text-center">The Language Barrier Impact</h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-lucy-black mb-1">Time Delays</p>
                <p className="text-sm text-lucy-medium-gray">Manual translation slows response times to guest requests</p>
              </div>

              <div className="bg-white/80 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="font-semibold text-lucy-black mb-1">Safety Risks</p>
                <p className="text-sm text-lucy-medium-gray">Critical safety messages may not be understood by all staff</p>
              </div>

              <div className="bg-white/80 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-lucy-black mb-1">Team Isolation</p>
                <p className="text-sm text-lucy-medium-gray">Language groups become siloed, hurting collaboration</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">How AI Translation Changes the Game</h3>

          <p className="text-lucy-dark-gray">
            Modern hotel communication software with AI-powered translation eliminates language barriers without requiring additional staff. With{" "}
            <Link to="/fördelar" className="text-blue-600 hover:underline">
              Lucy Team Communications
            </Link>
            , every message, announcement, and shift report is automatically translated into each team member native language in real-time.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-lucy-black mb-4">Real-World Scenario</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <p className="font-medium text-lucy-black">Manager posts announcement in English</p>
                  <p className="text-sm text-lucy-medium-gray">&quot;VIP guest arriving at 3 PM - please ensure suite 401 has fresh flowers and champagne ready.&quot;</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <p className="font-medium text-lucy-black">Housekeeping staff (Spanish speaker) sees</p>
                  <p className="text-sm text-lucy-medium-gray">&quot;Huésped VIP llega a las 3 PM - asegure que la suite 401 tenga flores frescas y champán listos.&quot;</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <p className="font-medium text-lucy-black">Kitchen staff (Thai speaker) sees</p>
                  <p className="text-sm text-lucy-medium-gray">Thai translation of the same message, instantly</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            No delays. No misunderstandings. No need for bilingual supervisors to manually relay every message. According to{" "}
            <a
              href="https://amworldgroup.com/blog/effective-communications-strategies-in-the-hotel-industry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              AMW Group
            </a>
            , hotels that implement structured communication protocols see a 23% increase in guest satisfaction.
          </p>
        </ArticleSection>

        <ArticleSection id="cost-calculator" title="Calculate Your Communication Costs">
          <p className="text-lucy-dark-gray mb-6">
            Want to see the real impact of communication inefficiencies on your property? Use our interactive calculator to estimate your hidden costs and potential savings.
          </p>

          <CommunicationCostCalculator onDemoClick={handleDemoClick} />

          <p className="text-lucy-medium-gray text-sm mt-4 text-center">
            *Calculations based on industry research from Cloudbeds, MyShyft, and EviView. Actual results may vary based on your specific operations.
          </p>
        </ArticleSection>

        <ArticleSection id="modern-solution" title="The Modern Solution: Purpose-Built Hotel Communication Software">
          <p className="text-lucy-dark-gray">
            The global hotel management software market is projected to reach{" "}
            <a
              href="https://www.alliedmarketresearch.com/hotel-management-software-market-A08315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              $9.41 billion by 2032
            </a>
            , growing at 8.6% annually. This growth reflects hotels investing in purpose-built tools rather than struggling with consumer apps never designed for hospitality operations.
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">What to Look for in Hotel Communication Software</h3>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Mobile-First Design</h4>
                <p className="text-sm text-lucy-medium-gray">Built for staff who do not sit at desks</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Automatic Translation</h4>
                <p className="text-sm text-lucy-medium-gray">Every message in every team member language</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Task & Work Order Tracking</h4>
                <p className="text-sm text-lucy-medium-gray">Assign, track, and verify completion</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Shift-Aware Features</h4>
                <p className="text-sm text-lucy-medium-gray">AI summaries and structured handovers</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">GDPR Compliance</h4>
                <p className="text-sm text-lucy-medium-gray">Data security and privacy built in</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-lucy-neon-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black">Management Dashboards</h4>
                <p className="text-sm text-lucy-medium-gray">Visibility into team performance and trends</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">How Lucy Addresses Hotel Communication Challenges</h3>

          <p className="text-lucy-dark-gray">
            <Link to="/" className="text-blue-600 hover:underline">Lucy</Link> is an AI-powered communication platform designed specifically for frontline teams in hotels, healthcare, industry, and service-heavy sectors. Unlike generic tools like Slack or Teams, Lucy is built for people who work on their feet, not at desks.
          </p>

          <div className="bg-gradient-to-br from-lucy-neon-yellow/20 via-lucy-neon-yellow/10 to-gray-50 rounded-2xl p-8 my-8 border border-lucy-neon-yellow/30">
            <h4 className="text-lg font-semibold text-lucy-black mb-6">Lucy Core Features for Hotels</h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">AI-Powered Shift Reports</p>
                    <p className="text-sm text-lucy-medium-gray">Automatic summaries of shift activities, challenges, and handover items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">Real-Time Translation</p>
                    <p className="text-sm text-lucy-medium-gray">Every message automatically translated to each staff member language</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">Work Orders</p>
                    <p className="text-sm text-lucy-medium-gray">Create, assign, and track tasks with real-time status updates</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">Knowledge Base</p>
                    <p className="text-sm text-lucy-medium-gray">SOPs, training videos, and instructions accessible from anywhere</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">Housekeeping Planner</p>
                    <p className="text-sm text-lucy-medium-gray">Automated room assignments linked to check-ins and check-outs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lucy-black">Employee Surveys</p>
                    <p className="text-sm text-lucy-medium-gray">Anonymous pulse surveys with industry benchmarking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Explore all of Lucy&apos;s{" "}
            <Link to="/addons" className="text-blue-600 hover:underline">
              hotel-specific add-ons
            </Link>
            , including Automatic Review Flow, Reputation Management, Conference Planner, and Custom AI Agents.
          </p>
        </ArticleSection>

        <ArticleSection id="implementation" title="Implementation Guide: From Chaos to Clarity">
          <p className="text-lucy-dark-gray">
            Transitioning from WhatsApp and scattered tools to a unified communication platform does not have to disrupt your operations. Here is a proven approach:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lucy-neon-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-lucy-black">1</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-lg font-semibold text-lucy-black mb-2">Audit Your Current State</h4>
                <p className="text-lucy-medium-gray">
                  Document all existing communication channels—WhatsApp groups, email lists, physical logbooks, walkie-talkie protocols. Identify the biggest pain points and information gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lucy-neon-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-lucy-black">2</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-lg font-semibold text-lucy-black mb-2">Start with One Department</h4>
                <p className="text-lucy-medium-gray">
                  Roll out to a single team first—front desk is often a good choice due to their central role. This creates champions who can help train other departments.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lucy-neon-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-lucy-black">3</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-lg font-semibold text-lucy-black mb-2">Configure for Your Operations</h4>
                <p className="text-lucy-medium-gray">
                  Set up channels for each department, configure shift schedules, import your SOPs into the knowledge base, and establish work order categories.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lucy-neon-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-lucy-black">4</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-lg font-semibold text-lucy-black mb-2">Train and Support</h4>
                <p className="text-lucy-medium-gray">
                  With intuitive, mobile-first tools like Lucy, training takes minutes, not days. Provide quick reference guides in each staff language and designate super-users for ongoing support.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lucy-neon-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-lucy-black">5</span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="text-lg font-semibold text-lucy-black mb-2">Measure and Optimize</h4>
                <p className="text-lucy-medium-gray">
                  Track key metrics: task completion rates, handover quality scores, response times to guest requests. Use data to continuously improve processes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-lucy-dark-gray rounded-2xl p-8 text-center mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Hotel Communication?</h3>
            <p className="text-lucy-light-gray-new mb-6 max-w-2xl mx-auto">
              See how Lucy can help your property move from communication chaos to clarity. Book a personalized demo and discover the difference purpose-built hotel software makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center gap-2 bg-lucy-neon-yellow text-lucy-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-colors"
              >
                Book a Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <Link
                to="/fördelar"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="faqs" title="Frequently Asked Questions">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-medium text-lucy-black pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-lucy-medium-gray flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-lucy-medium-gray">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Have more questions?</h4>
                <p className="text-blue-800">
                  Our team is happy to answer any questions about hotel communication best practices or how Lucy can help your specific property.{" "}
                  <button onClick={handleDemoClick} className="font-medium underline hover:no-underline">
                    Get in touch
                  </button>
                  .
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        {/* Sources Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-lucy-black mb-4">Sources</h3>
          <ul className="space-y-2 text-sm text-lucy-medium-gray">
            <li>
              <a href="https://www.ahla.com/news/65-surveyed-hotels-report-staffing-shortages" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                American Hotel and Lodging Association - Hotel Staffing Report 2025
              </a>
            </li>
            <li>
              <a href="https://www.cloudbeds.com/articles/hotel-turnover/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                Cloudbeds - Hotel Turnover Statistics 2025
              </a>
            </li>
            <li>
              <a href="https://www.myshyft.com/blog/avoiding-handover-errors/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                MyShyft - Avoiding Shift Handover Errors Research
              </a>
            </li>
            <li>
              <a href="https://www.eviview.com/shift-handover-process/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                EviView - Common Problems with Manual Shift Handover Processes
              </a>
            </li>
            <li>
              <a href="https://heydata.eu/en/magazine/whatsapp-privacy-2025/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                heyData - WhatsApp and Data Privacy 2025
              </a>
            </li>
            <li>
              <a href="https://amworldgroup.com/blog/effective-communications-strategies-in-the-hotel-industry" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                AMW Group - Hotel Communication Strategies
              </a>
            </li>
            <li>
              <a href="https://www.alliedmarketresearch.com/hotel-management-software-market-A08315" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                Allied Market Research - Hotel Management Software Market Size
              </a>
            </li>
            <li>
              <a href="https://oysterlink.com/spotlight/hospitality-employee-burnout-statistics/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                OysterLink - Hospitality Employee Burnout Statistics 2025
              </a>
            </li>
          </ul>
        </div>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelCommunicationGuide;
