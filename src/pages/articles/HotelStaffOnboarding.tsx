import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "hidden-cost", label: "The Hidden Cost" },
  { id: "traditional-vs-digital", label: "Traditional vs Digital" },
  { id: "digital-knowledge-sharing", label: "Digital Knowledge Sharing" },
  { id: "implementation-guide", label: "Implementation Guide" },
  { id: "onboarding-calculator", label: "Cost Calculator" },
  { id: "case-benefits", label: "Key Benefits" },
  { id: "faq", label: "FAQ" },
];

// Interactive Onboarding Cost Calculator
const OnboardingCostCalculator = ({ onDemoClick }: { onDemoClick?: () => void }) => {
  const [employees, setEmployees] = useState(10);
  const [turnoverRate, setTurnoverRate] = useState(40);
  const [avgHourlyCost, setAvgHourlyCost] = useState(25);
  const [trainingHours, setTrainingHours] = useState(40);
  const [showResults, setShowResults] = useState(false);

  // Calculations
  const annualHires = Math.round((employees * turnoverRate) / 100);
  const traditionalTrainingCost = annualHires * trainingHours * avgHourlyCost;
  const trainerTimeCost = annualHires * (trainingHours * 0.5) * (avgHourlyCost * 1.5);
  const productivityLoss = annualHires * 2 * 160 * avgHourlyCost * 0.5;
  const totalTraditionalCost = traditionalTrainingCost + trainerTimeCost + productivityLoss;

  // With digital knowledge sharing (50% reduction as per research)
  const digitalTrainingCost = traditionalTrainingCost * 0.5;
  const digitalTrainerTime = trainerTimeCost * 0.3;
  const digitalProductivityLoss = productivityLoss * 0.66;
  const totalDigitalCost = digitalTrainingCost + digitalTrainerTime + digitalProductivityLoss;

  const annualSavings = totalTraditionalCost - totalDigitalCost;
  const savingsPercentage = Math.round((annualSavings / totalTraditionalCost) * 100);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <ArticleSection id="onboarding-calculator" title="Calculate Your Onboarding Costs">
      <p className="text-lucy-dark-gray mb-6">
        Use this interactive calculator to estimate how much you could save by switching from traditional onboarding to a digital knowledge-sharing platform.
      </p>

      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Input: Number of Employees */}
          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Number of Staff Members
            </label>
            <input
              type="range"
              min="5"
              max="200"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>5</span>
              <span className="font-semibold text-lucy-black">{employees} employees</span>
              <span>200</span>
            </div>
          </div>

          {/* Input: Annual Turnover Rate */}
          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Annual Turnover Rate (%)
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={turnoverRate}
              onChange={(e) => setTurnoverRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>10%</span>
              <span className="font-semibold text-lucy-black">{turnoverRate}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Input: Average Hourly Cost */}
          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Average Hourly Labor Cost ($)
            </label>
            <input
              type="range"
              min="15"
              max="50"
              value={avgHourlyCost}
              onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>$15</span>
              <span className="font-semibold text-lucy-black">${avgHourlyCost}/hour</span>
              <span>$50</span>
            </div>
          </div>

          {/* Input: Training Hours */}
          <div>
            <label className="block text-sm font-medium text-lucy-black mb-2">
              Training Hours per New Hire
            </label>
            <input
              type="range"
              min="8"
              max="80"
              value={trainingHours}
              onChange={(e) => setTrainingHours(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
              <span>8 hrs</span>
              <span className="font-semibold text-lucy-black">{trainingHours} hours</span>
              <span>80 hrs</span>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleCalculate}
            className="bg-lucy-neon-yellow text-lucy-black px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-md"
          >
            Calculate Potential Savings
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
                <p className="text-sm text-red-600 mb-1">Traditional Onboarding Cost</p>
                <p className="text-2xl font-bold text-red-700">{formatCurrency(totalTraditionalCost)}</p>
                <p className="text-xs text-red-500 mt-1">per year</p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                <p className="text-sm text-green-600 mb-1">Digital Onboarding Cost</p>
                <p className="text-2xl font-bold text-green-700">{formatCurrency(totalDigitalCost)}</p>
                <p className="text-xs text-green-500 mt-1">per year</p>
              </div>
              <div className="bg-gradient-to-br from-lucy-neon-yellow/20 to-lucy-neon-yellow/5 border border-lucy-neon-yellow/30 rounded-xl p-5 text-center">
                <p className="text-sm text-lucy-dark-gray mb-1">Annual Savings</p>
                <p className="text-2xl font-bold text-lucy-black">{formatCurrency(annualSavings)}</p>
                <p className="text-xs text-lucy-medium-gray mt-1">{savingsPercentage}% reduction</p>
              </div>
            </div>

            {/* Breakdown Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-lucy-dark-gray">Cost Category</th>
                    <th className="text-right px-4 py-3 font-medium text-lucy-dark-gray">Traditional</th>
                    <th className="text-right px-4 py-3 font-medium text-lucy-dark-gray">Digital</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-lucy-dark-gray">New hire training time</td>
                    <td className="px-4 py-3 text-right text-lucy-medium-gray">{formatCurrency(traditionalTrainingCost)}</td>
                    <td className="px-4 py-3 text-right text-green-600">{formatCurrency(digitalTrainingCost)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-lucy-dark-gray">Trainer/supervisor time</td>
                    <td className="px-4 py-3 text-right text-lucy-medium-gray">{formatCurrency(trainerTimeCost)}</td>
                    <td className="px-4 py-3 text-right text-green-600">{formatCurrency(digitalTrainerTime)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-lucy-dark-gray">Productivity loss (ramp-up)</td>
                    <td className="px-4 py-3 text-right text-lucy-medium-gray">{formatCurrency(productivityLoss)}</td>
                    <td className="px-4 py-3 text-right text-green-600">{formatCurrency(digitalProductivityLoss)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-lucy-dark-gray to-gray-800 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Based on {annualHires} new hires per year</h4>
                  <p className="text-gray-300 text-sm">
                    With a {turnoverRate}% turnover rate and {employees} staff members, you will need to onboard approximately {annualHires} new employees annually. A digital knowledge-sharing platform like Lucy can reduce your onboarding costs by up to {savingsPercentage}%.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <button
                onClick={onDemoClick}
                className="inline-flex items-center gap-2 bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
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
    </ArticleSection>
  );
};

// FAQ Component with structured data
interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How long does it typically take to onboard a new hotel employee?",
    answer: "Traditional hotel onboarding typically takes 2-4 weeks for basic training, but employees may not reach full productivity for 5-8 months. With a digital knowledge-sharing platform, hotels can reduce initial training time by 50% while accelerating the path to full productivity through on-demand learning resources and video tutorials.",
  },
  {
    question: "What is the average cost to onboard a new hotel staff member?",
    answer: "The average cost to hire and onboard a new employee is approximately $4,700 according to SHRM, but total costs including training, productivity loss, and supervision can range from $7,500 to $28,000 per employee. For hotels with high turnover (often 40-74% annually), these costs add up significantly.",
  },
  {
    question: "How can digital knowledge bases reduce hotel staff training time?",
    answer: "Digital knowledge bases centralize training materials, SOPs, and video tutorials in one accessible location. Studies show organizations with effective knowledge management systems report up to 35% reduction in onboarding time. Staff can learn at their own pace, revisit materials as needed, and access information in their native language through automatic translation features.",
  },
  {
    question: "Why is staff turnover so high in the hospitality industry?",
    answer: "The hospitality industry experiences 40-74% annual turnover due to several factors: wages that have not kept pace with cost of living (40% of hospitality workers saw no raise in 2024), burnout from understaffing (64% have seen colleagues quit due to burnout), and lack of career progression. Effective onboarding and continuous learning opportunities can improve retention by up to 82%.",
  },
  {
    question: "What features should hotel onboarding software include?",
    answer: "Effective hotel onboarding software should include: a centralized knowledge base with video tutorials, role-based training paths, automatic translation for multilingual teams, mobile-first design for deskless workers, progress tracking and quizzes, integration with existing hotel systems, and the ability for any team member to contribute knowledge.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ArticleSection id="faq" title="Frequently Asked Questions">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lucy-black pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-lucy-medium-gray flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-lucy-dark-gray bg-gray-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </ArticleSection>
  );
};

// Statistics Card Component
const StatCard = ({ value, label, source }: { value: string; label: string; source?: string }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
    <div className="text-3xl md:text-4xl font-bold text-lucy-black mb-2">{value}</div>
    <div className="text-sm text-lucy-medium-gray">{label}</div>
    {source && <div className="text-xs text-lucy-medium-gray mt-2 opacity-70">{source}</div>}
  </div>
);

const HotelStaffOnboarding = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hotel Staff Onboarding: Cut Training Time 50% with Digital Knowledge Sharing",
    "description": "Learn how digital knowledge bases and AI-powered platforms help hotels reduce onboarding time by 50% while improving retention. Includes cost calculator and implementation guide.",
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
      "@id": "https://lucyanalytics.com/articles/hotel-staff-onboarding"
    },
    "image": "https://lucyanalytics.com/hotel-onboarding-hero.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
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
        "name": "Hotel Staff Onboarding",
        "item": "https://lucyanalytics.com/articles/hotel-staff-onboarding"
      }
    ]
  };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Hotel Staff Onboarding: Cut Training Time in Half with Digital Knowledge Sharing"
          subtitle="Hospitality faces a 40-74% annual turnover crisis. Learn how digital knowledge bases help hotels reduce onboarding time by 50%, improve retention, and build stronger teams."
          breadcrumbLabel="Hotel Staff Onboarding"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Hotel staff onboarding with digital knowledge platforms reduces training time by <strong>up to 50%</strong>, according to research from <a href="https://bloomfire.com/blog/types-of-knowledge-management-systems/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Bloomfire</a>.</>,
            <>The hospitality industry faces <strong>40-74% annual turnover</strong>, making efficient onboarding critical for profitability.</>,
            <>Companies with structured onboarding see <strong>82% better retention</strong> and <strong>70% higher productivity</strong>.</>,
            <>Digital platforms with video tutorials, automatic translation, and mobile access help <strong>multilingual teams</strong> learn faster.</>,
            <>Use the interactive calculator below to estimate your potential savings from digital onboarding.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            <strong>Hotel staff onboarding</strong> is one of the most expensive and time-consuming challenges facing the hospitality industry in 2026. With the sector experiencing turnover rates between 40% and 74% annually, hotels are trapped in a costly cycle of hiring, training, losing staff, and starting over.
          </p>
          <p className="text-lucy-dark-gray">
            The numbers are striking: according to <a href="https://www.cloudbeds.com/articles/hotel-turnover/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cloudbeds</a>, the average churn rate in hospitality is 40.5%, with US hotels seeing rates as high as 50%. Even more alarming, <a href="https://oysterlink.com/spotlight/high-turnover-in-hospitality-2025/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">55% of room attendants leave within their first 90 days</a>.
          </p>
          <p className="text-lucy-dark-gray">
            But there is good news: hotels that invest in <strong>digital knowledge sharing</strong> are seeing dramatically different results. This article explores how modern knowledge management platforms can cut your onboarding time in half while building more resilient, engaged teams.
          </p>
        </ArticleSection>

        <ArticleSection id="hidden-cost" title="The Hidden Cost of Hotel Staff Turnover">
          <p className="text-lucy-dark-gray">
            Before diving into solutions, let us understand the true cost of ineffective onboarding in hotels.
          </p>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <StatCard value="$5,000+" label="Cost per lost employee" source="Cloudbeds Research" />
            <StatCard value="55%" label="Housekeepers quit in 90 days" source="OysterLink 2025" />
            <StatCard value="12 months" label="Time to full productivity" source="Gallup" />
          </div>

          <p className="text-lucy-dark-gray">
            According to <a href="https://www.shrm.org/topics-tools/topics/onboarding/measuring-success" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SHRM</a>, the average cost per hire is nearly $4,700, not including onboarding and training expenses. When you factor in productivity loss, trainer time, and the ripple effects on guest service, total costs can reach <strong>$7,500 to $28,000 per employee</strong>.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl my-6">
            <h4 className="font-semibold text-red-800 mb-2">The Productivity Gap</h4>
            <p className="text-red-700 text-sm">
              New hires operate at just 25% productivity in their first month, reaching 50% in month two and 75% in month three. It can take <strong>5-8 months</strong> for a new employee to become fully productive. With high turnover, many hotels never see their investment pay off.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Why Turnover Remains High</h3>
          <p className="text-lucy-dark-gray">
            Research from <a href="https://thehotelblueprint.com/2025-hospitality-workforce-trends-and-challenges/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">The Hotel Blueprint</a> identifies key drivers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lucy-dark-gray mt-4">
            <li><strong>Stagnant wages:</strong> 40% of hospitality employees saw no pay raise in 2024</li>
            <li><strong>Burnout:</strong> 64% have seen colleagues quit specifically due to burnout</li>
            <li><strong>Poor onboarding:</strong> 23% of new hires quit within six months due to inadequate onboarding</li>
            <li><strong>Lack of development:</strong> Employees who do not see career progression leave faster</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="traditional-vs-digital" title="Traditional vs. Digital Onboarding">
          <p className="text-lucy-dark-gray">
            To understand the opportunity, let us compare traditional hotel onboarding methods with modern digital approaches.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-lucy-dark-gray to-gray-700 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Aspect</th>
                  <th className="text-left px-6 py-4 font-semibold">Traditional Onboarding</th>
                  <th className="text-left px-6 py-4 font-semibold">Digital Knowledge Sharing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Training Format</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">Shadowing, in-person sessions, paper manuals</td>
                  <td className="px-6 py-4 text-green-700">Video tutorials, interactive modules, digital SOPs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Time to Basic Competency</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">2-4 weeks</td>
                  <td className="px-6 py-4 text-green-700">1-2 weeks (50% faster)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Trainer Time Required</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">20-40 hours per new hire</td>
                  <td className="px-6 py-4 text-green-700">6-12 hours per new hire</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Language Support</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">Limited, requires bilingual trainers</td>
                  <td className="px-6 py-4 text-green-700">Automatic translation to any language</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Content Updates</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">Slow, requires reprinting materials</td>
                  <td className="px-6 py-4 text-green-700">Instant updates, always current</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Knowledge Retention</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">Varies, no reinforcement</td>
                  <td className="px-6 py-4 text-green-700">On-demand access, quizzes, refreshers</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-lucy-black">Scalability</td>
                  <td className="px-6 py-4 text-lucy-dark-gray">Difficult with multiple hires</td>
                  <td className="px-6 py-4 text-green-700">Train unlimited staff simultaneously</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Research Insight
            </h4>
            <p className="text-green-700">
              According to <a href="https://www.devlinpeck.com/content/employee-onboarding-statistics" className="text-green-800 underline hover:no-underline" target="_blank" rel="noopener noreferrer">Devlin Peck</a>, companies using AI for onboarding saw a <strong>50% improvement</strong> in new hire time-to-productivity. Digital onboarding platforms also save an average of <strong>18 hours per new hire</strong> in administrative time.
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="digital-knowledge-sharing" title="How Digital Knowledge Sharing Works">
          <p className="text-lucy-dark-gray">
            Digital knowledge sharing transforms how hotels train and support their teams. Instead of relying on busy supervisors and outdated manuals, new hires access a centralized platform with everything they need to succeed.
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Core Components of Effective Digital Onboarding</h3>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            {/* Component 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Centralized Knowledge Base</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                All SOPs, procedures, checklists, and training materials in one searchable location. Staff can find answers instantly instead of hunting down supervisors.
              </p>
            </div>

            {/* Component 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Video Training Library</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                Visual demonstrations of tasks from bed-making to check-in procedures. Videos can be created by experienced staff, preserving institutional knowledge.
              </p>
            </div>

            {/* Component 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Automatic Translation</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                Every piece of content automatically translated to each team member&#39;s native language. Critical for hotels with multilingual staff speaking 5+ languages.
              </p>
            </div>

            {/* Component 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Role-Based Learning Paths</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                Customized onboarding flows for each role: housekeeping, front desk, F&amp;B, maintenance. New hires only see what they need to learn.
              </p>
            </div>

            {/* Component 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Mobile-First Access</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                All training accessible on personal smartphones. Perfect for deskless workers who do not sit at computers. Learn during breaks or commute.
              </p>
            </div>

            {/* Component 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lucy-black">Progress Tracking</h4>
              </div>
              <p className="text-lucy-dark-gray text-sm">
                Managers see exactly where each new hire is in their training. Identify struggles early and provide targeted support before issues escalate.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The Lucy Approach to Knowledge Sharing</h3>
          <p className="text-lucy-dark-gray">
            <Link to="/" className="text-blue-600 hover:underline">Lucy Analytics</Link> provides a purpose-built platform for hotel teams that combines all these elements in one intuitive solution. Unlike generic tools like Slack or WhatsApp, Lucy understands how hotels actually work.
          </p>
          <p className="text-lucy-dark-gray">
            With Lucy&#39;s <strong>Knowledgebase</strong> feature, hotels can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lucy-dark-gray mt-4">
            <li>Build a library of procedures, policies, and video tutorials</li>
            <li>Enable any team member to contribute knowledge, creating a living resource</li>
            <li>Automatically translate all content to each staff member&#39;s language</li>
            <li>Assign role-based onboarding paths that guide new hires step by step</li>
            <li>Track completion and understanding with built-in quizzes</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="implementation-guide" title="Implementation Guide: 5 Steps to Better Onboarding">
          <p className="text-lucy-dark-gray">
            Ready to transform your hotel&#39;s onboarding process? Follow this practical implementation guide.
          </p>

          {/* Step 1 */}
          <div className="relative pl-8 pb-8 border-l-2 border-lucy-neon-yellow ml-4 mt-8">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold text-lucy-black">1</div>
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Audit Your Current Onboarding</h3>
            <p className="text-lucy-dark-gray mb-3">
              Before implementing new tools, understand what is working and what is not. Ask yourself:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-lucy-dark-gray text-sm">
              <li>How long does it take new hires to become productive?</li>
              <li>Where do new employees struggle most?</li>
              <li>What questions do supervisors answer repeatedly?</li>
              <li>Which training materials exist and which are outdated?</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8 pb-8 border-l-2 border-lucy-neon-yellow ml-4">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold text-lucy-black">2</div>
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Document Critical Procedures</h3>
            <p className="text-lucy-dark-gray mb-3">
              Start with the 20% of procedures that new hires need 80% of the time:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-lucy-dark-gray text-sm">
              <li>Check-in and check-out processes</li>
              <li>Room cleaning standards and checklists</li>
              <li>Emergency procedures and safety protocols</li>
              <li>POS and reservation system basics</li>
              <li>Guest communication guidelines</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8 pb-8 border-l-2 border-lucy-neon-yellow ml-4">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold text-lucy-black">3</div>
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Create Video Content</h3>
            <p className="text-lucy-dark-gray mb-3">
              Video is the most effective format for demonstrating hands-on tasks. Tips for success:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-lucy-dark-gray text-sm">
              <li>Keep videos short (2-5 minutes per topic)</li>
              <li>Have experienced staff record procedures</li>
              <li>Film in actual work environments</li>
              <li>Include common mistakes to avoid</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="relative pl-8 pb-8 border-l-2 border-lucy-neon-yellow ml-4">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold text-lucy-black">4</div>
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Build Role-Based Learning Paths</h3>
            <p className="text-lucy-dark-gray mb-3">
              Organize content into structured journeys for each role. A housekeeping path might include:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <p className="font-medium text-lucy-black mb-2">Example: Housekeeping Onboarding Path</p>
              <ol className="list-decimal pl-5 space-y-1 text-lucy-dark-gray">
                <li>Day 1: Welcome, property tour, team introductions</li>
                <li>Day 2: Cleaning standards and chemical safety</li>
                <li>Day 3: Room setup procedures (video + practice)</li>
                <li>Day 4: Laundry and linen management</li>
                <li>Day 5: Guest interaction and special requests</li>
                <li>Week 2: Shadowing with mentor, independent rooms</li>
              </ol>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative pl-8 ml-4">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-sm font-bold text-lucy-black">5</div>
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Measure and Iterate</h3>
            <p className="text-lucy-dark-gray mb-3">
              Track key metrics to continuously improve your onboarding:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-lucy-dark-gray text-sm">
              <li><strong>Time to productivity:</strong> How quickly do new hires work independently?</li>
              <li><strong>90-day retention:</strong> Are fewer people leaving early?</li>
              <li><strong>Training completion rates:</strong> Are all modules being finished?</li>
              <li><strong>Knowledge assessment scores:</strong> What is understood vs. needs work?</li>
              <li><strong>Manager feedback:</strong> Where are new hires still struggling?</li>
            </ul>
          </div>
        </ArticleSection>

        {/* Interactive Calculator */}
        <OnboardingCostCalculator onDemoClick={handleDemoClick} />

        <ArticleSection id="case-benefits" title="Key Benefits of Digital Knowledge Sharing">
          <p className="text-lucy-dark-gray">
            Hotels that implement digital knowledge sharing see improvements across multiple dimensions.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-xl p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mt-16" />
              <h4 className="font-semibold text-blue-800 mb-3 relative z-10">50% Faster Onboarding</h4>
              <p className="text-blue-700 text-sm relative z-10">
                New hires reach basic competency in half the time with structured digital learning paths and on-demand resources.
              </p>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-xl p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -mr-16 -mt-16" />
              <h4 className="font-semibold text-green-800 mb-3 relative z-10">82% Better Retention</h4>
              <p className="text-green-700 text-sm relative z-10">
                Employees who experience structured onboarding are far more likely to stay, reducing costly turnover cycles.
              </p>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-xl p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full -mr-16 -mt-16" />
              <h4 className="font-semibold text-purple-800 mb-3 relative z-10">70% Trainer Time Saved</h4>
              <p className="text-purple-700 text-sm relative z-10">
                Supervisors spend less time on repetitive training, freeing them to focus on complex coaching and guest service.
              </p>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full -mr-16 -mt-16" />
              <h4 className="font-semibold text-amber-800 mb-3 relative z-10">Multilingual Support</h4>
              <p className="text-amber-700 text-sm relative z-10">
                Automatic translation ensures every team member learns in their native language, improving comprehension and confidence.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lucy-dark-gray to-gray-800 rounded-xl p-6 md:p-8 text-white my-8">
            <h4 className="font-semibold text-xl mb-4">Ready to Transform Your Hotel&#39;s Onboarding?</h4>
            <p className="text-gray-300 mb-6">
              See how Lucy&#39;s <Link to="/addons" className="text-lucy-neon-yellow hover:underline">Knowledgebase and Onboarding features</Link> can help your hotel reduce training time, improve retention, and build stronger teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center justify-center gap-2 bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <Link
                to="/fördelar"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Learn More About Lucy
              </Link>
            </div>
          </div>
        </ArticleSection>

        {/* FAQ Section */}
        <FAQSection />

        {/* Sources Section */}
        <ArticleSection id="sources" title="Sources">
          <p className="text-lucy-dark-gray mb-4">
            This article draws on research and data from the following authoritative sources:
          </p>
          <ul className="space-y-2 text-sm text-lucy-dark-gray">
            <li>
              <a href="https://oysterlink.com/spotlight/high-turnover-in-hospitality-2025/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                OysterLink - Hospitality Turnover Rates 2025
              </a>
            </li>
            <li>
              <a href="https://www.cloudbeds.com/articles/hotel-turnover/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Cloudbeds - Hotel Turnover: How Hotels Can Increase Retention
              </a>
            </li>
            <li>
              <a href="https://www.shrm.org/topics-tools/topics/onboarding/measuring-success" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                SHRM - How to Measure Onboarding Success
              </a>
            </li>
            <li>
              <a href="https://thehotelblueprint.com/2025-hospitality-workforce-trends-and-challenges/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                The Hotel Blueprint - 2025 Hospitality Workforce Trends
              </a>
            </li>
            <li>
              <a href="https://www.devlinpeck.com/content/employee-onboarding-statistics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Devlin Peck - Employee Onboarding Statistics 2025
              </a>
            </li>
            <li>
              <a href="https://bloomfire.com/blog/types-of-knowledge-management-systems/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Bloomfire - Types of Knowledge Management Systems
              </a>
            </li>
            <li>
              <a href="https://www.lingio.com/blog/how-to-train-hotel-staff" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Lingio - How to Train Hotel Staff in 2025
              </a>
            </li>
            <li>
              <a href="https://www.canarytechnologies.com/post/hotel-staff-training-strategies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Canary Technologies - Hotel Staff Training Strategies
              </a>
            </li>
          </ul>
        </ArticleSection>

      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelStaffOnboarding;
