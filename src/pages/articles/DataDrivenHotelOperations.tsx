import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "why-data-matters", label: "Why Data Matters" },
  { id: "key-metrics", label: "Key Hotel Metrics" },
  { id: "types-of-analytics", label: "Types of Analytics" },
  { id: "operational-insights", label: "Operational Insights" },
  { id: "technology-comparison", label: "Technology Comparison" },
  { id: "roi-calculator", label: "ROI Calculator" },
  { id: "implementation", label: "Implementation Guide" },
  { id: "faqs", label: "FAQs" },
];

// Interactive ROI Calculator Component
const ROICalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [rooms, setRooms] = useState(100);
  const [occupancy, setOccupancy] = useState(65);
  const [adr, setAdr] = useState(150);
  const [staffCount, setStaffCount] = useState(25);

  const calculations = useMemo(() => {
    const annualRoomNights = rooms * 365;
    const occupiedNights = annualRoomNights * (occupancy / 100);
    const currentRevenue = occupiedNights * adr;

    // Data-driven improvements based on industry research
    const revparImprovement = 0.05; // 5% RevPAR improvement from better analytics
    const laborEfficiencyGain = 0.12; // 12% labor efficiency gain
    const avgHourlyWage = 18;
    const hoursPerStaffPerYear = 2080;

    const revenueGain = currentRevenue * revparImprovement;
    const laborSavings = staffCount * hoursPerStaffPerYear * avgHourlyWage * laborEfficiencyGain;
    const totalAnnualBenefit = revenueGain + laborSavings;

    return {
      currentRevenue: Math.round(currentRevenue),
      revenueGain: Math.round(revenueGain),
      laborSavings: Math.round(laborSavings),
      totalBenefit: Math.round(totalAnnualBenefit),
      monthlyBenefit: Math.round(totalAnnualBenefit / 12),
    };
  }, [rooms, occupancy, adr, staffCount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-[#C9FD59]/10 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-lucy-black mb-2">
        Calculate Your Potential ROI
      </h3>
      <p className="text-lucy-medium-gray mb-6 text-sm">
        See how data-driven operations could impact your hotel based on industry benchmarks.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Input: Number of Rooms */}
        <div>
          <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
            Number of Rooms
          </label>
          <input
            type="range"
            min="20"
            max="500"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
            <span>20</span>
            <span className="font-semibold text-lucy-black">{rooms} rooms</span>
            <span>500</span>
          </div>
        </div>

        {/* Input: Occupancy Rate */}
        <div>
          <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
            Current Occupancy Rate
          </label>
          <input
            type="range"
            min="30"
            max="95"
            value={occupancy}
            onChange={(e) => setOccupancy(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
            <span>30%</span>
            <span className="font-semibold text-lucy-black">{occupancy}%</span>
            <span>95%</span>
          </div>
        </div>

        {/* Input: ADR */}
        <div>
          <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
            Average Daily Rate (ADR)
          </label>
          <input
            type="range"
            min="75"
            max="400"
            step="5"
            value={adr}
            onChange={(e) => setAdr(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
            <span>$75</span>
            <span className="font-semibold text-lucy-black">${adr}</span>
            <span>$400</span>
          </div>
        </div>

        {/* Input: Staff Count */}
        <div>
          <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
            Number of Staff
          </label>
          <input
            type="range"
            min="5"
            max="150"
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
          />
          <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
            <span>5</span>
            <span className="font-semibold text-lucy-black">{staffCount} staff</span>
            <span>150</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h4 className="text-sm font-semibold text-lucy-medium-gray uppercase tracking-wide mb-4">
          Estimated Annual Benefits
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-lucy-medium-gray mb-1">Revenue Improvement</p>
            <p className="text-2xl font-bold text-lucy-black">{formatCurrency(calculations.revenueGain)}</p>
            <p className="text-xs text-lucy-medium-gray mt-1">5% RevPAR gain</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-lucy-medium-gray mb-1">Labor Efficiency Savings</p>
            <p className="text-2xl font-bold text-lucy-black">{formatCurrency(calculations.laborSavings)}</p>
            <p className="text-xs text-lucy-medium-gray mt-1">12% efficiency gain</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-[#C9FD59]/30 to-[#C9FD59]/10 rounded-lg border border-[#C9FD59]/30">
            <p className="text-sm text-lucy-dark-gray mb-1 font-medium">Total Annual Benefit</p>
            <p className="text-2xl font-bold text-lucy-black">{formatCurrency(calculations.totalBenefit)}</p>
            <p className="text-xs text-lucy-dark-gray mt-1">{formatCurrency(calculations.monthlyBenefit)}/month</p>
          </div>
        </div>
        <p className="text-xs text-lucy-medium-gray mt-4 text-center">
          *Estimates based on industry research from{" "}
          <a
            href="https://www.hospitalitynet.org/opinion/4122160.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-lucy-black"
          >
            Hospitality Net
          </a>{" "}
          and{" "}
          <a
            href="https://www.cloudbeds.com/articles/hotel-data-analytics/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-lucy-black"
          >
            Cloudbeds
          </a>
          . Actual results may vary.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <button
          onClick={onDemoClick}
          className="inline-block bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Get a Personalized Analysis
        </button>
      </div>
    </div>
  );
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-1"
      >
        <span className="font-medium text-lucy-black pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-lucy-medium-gray flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-lucy-dark-gray px-1">{answer}</p>
      </div>
    </div>
  );
};

const DataDrivenHotelOperations = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleDemoClick = () => {
    setIsCalendlyOpen(true);
  };

  const faqs = [
    {
      question: "What is data-driven hotel management?",
      answer: "Data-driven hotel management is the practice of collecting, analyzing, and acting on operational data to make strategic decisions. This includes tracking metrics like RevPAR, occupancy rates, guest satisfaction scores, and staff productivity to optimize performance across all departments."
    },
    {
      question: "What are the most important hotel KPIs to track?",
      answer: "The most critical hotel KPIs include RevPAR (Revenue Per Available Room), ADR (Average Daily Rate), occupancy rate, GOPPAR (Gross Operating Profit Per Available Room), guest satisfaction scores, and labor cost per occupied room. Modern hotels also track NRevPAR to account for distribution costs."
    },
    {
      question: "How much can hotels save with data analytics?",
      answer: "According to industry research, hotels using AI-driven analytics report 15-20% reduction in operational costs and 8-10% higher profit margins. Labor efficiency gains of 7-15% have been documented, along with 30-40% improvements in housekeeping efficiency through better scheduling."
    },
    {
      question: "What is the difference between descriptive and predictive analytics?",
      answer: "Descriptive analytics tells you what happened (historical reports and dashboards), while predictive analytics forecasts what will happen (demand forecasting, pricing optimization). Prescriptive analytics goes further by recommending specific actions to take based on predictions."
    },
    {
      question: "How does Lucy Analytics help with data-driven decisions?",
      answer: "Lucy Analytics provides real-time operational insights through features like AI-summarized shift reports, automated daily feeds with KPIs, and staff performance metrics. Unlike traditional BI tools focused on revenue, Lucy captures frontline operational data that is often invisible to management."
    }
  ];

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Data-Driven Hotel Operations: How to Use Insights for Better Decisions",
    "description": "Learn how leading hotels use data analytics to improve RevPAR, reduce costs, and make smarter operational decisions. Includes metrics, tools comparison, and ROI calculator.",
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
        "url": "https://lucyanalytics.com/lucy_logo_dark.png"
      }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lucyanalytics.com/articles/data-driven-hotel-operations"
    },
    "image": "https://lucyanalytics.com/og-data-driven-operations.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
        "name": "Data-Driven Hotel Operations",
        "item": "https://lucyanalytics.com/articles/data-driven-hotel-operations"
      }
    ]
  };

  return (
    <>
    <ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Data-Driven Hotel Operations: How to Use Insights for Better Decisions"
          subtitle="Discover how modern hotels leverage analytics to improve revenue, optimize staffing, and deliver exceptional guest experiences. Learn which metrics matter most and how to turn data into action."
          breadcrumbLabel="Data-Driven Hotel Operations"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Hotels using <strong>data-driven strategies</strong> report 8-10% higher profit margins than competitors, according to Deloitte research.</>,
            <>Key metrics to track include <strong>RevPAR, GOPPAR, NRevPAR</strong>, and increasingly, operational efficiency KPIs like labor cost per occupied room.</>,
            <>Only <strong>34% of hotels</strong> currently centralize guest data correctly, creating a significant opportunity for early adopters.</>,
            <>The combination of <strong>revenue analytics and operational insights</strong> provides a complete picture that traditional BI tools often miss.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            <strong>Data-driven hotel operations</strong> have become essential for properties looking to compete in today&apos;s hospitality landscape. With the global hotel management software market valued at{" "}
            <a
              href="https://www.360researchreports.com/market-reports/hotel-management-software-market-213596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              $11.9 billion in 2026
            </a>{" "}
            and growing at 12.55% annually, the industry is clearly betting on technology to drive better decisions.
          </p>
          <p className="text-lucy-dark-gray">
            Yet there&apos;s a gap between having data and using it effectively. A{" "}
            <a
              href="https://hoteltechreport.com/revenue-management/business-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              2025 survey of hotel IT decision-makers
            </a>{" "}
            found that fewer than 24% of hotels have fully integrated core systems, and only 34% centralize guest data correctly. The hotels that bridge this gap are seeing measurable results: better RevPAR, lower operational costs, and more engaged teams.
          </p>
          <p className="text-lucy-dark-gray">
            This guide explores how to build a data-driven operation at your property, covering the metrics that matter most, the technology options available, and practical steps for implementation. Whether you manage a boutique hotel or a multi-property portfolio, the principles remain the same: collect the right data, analyze it intelligently, and act on the insights.
          </p>
        </ArticleSection>

        <ArticleSection id="why-data-matters" title="Why Data Matters for Hotel Operations">
          <p className="text-lucy-dark-gray">
            The hospitality industry generates enormous amounts of data daily: reservations, guest preferences, staff schedules, maintenance requests, reviews, and more. The challenge is not collection but utilization. According to{" "}
            <a
              href="https://www.hospitalitynet.org/opinion/4122160.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              Hospitality Net
            </a>
            , hotels and tourism enterprises that embrace analytics-driven strategies report 8-10% higher profit margins than competitors who don&apos;t.
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-gradient-to-br from-[#C9FD59]/20 to-transparent p-6 rounded-xl border border-[#C9FD59]/30">
              <p className="text-3xl font-bold text-lucy-black">8-10%</p>
              <p className="text-sm text-lucy-dark-gray mt-1">Higher profit margins with analytics</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-transparent p-6 rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-lucy-black">15-20%</p>
              <p className="text-sm text-lucy-dark-gray mt-1">Cost reduction from AI-driven tools</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-transparent p-6 rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-lucy-black">26%</p>
              <p className="text-sm text-lucy-dark-gray mt-1">Better forecasting accuracy</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The Problem with Intuition-Based Decisions</h3>
          <p className="text-lucy-dark-gray">
            Many hotel managers still rely on experience and intuition for critical decisions. While valuable, this approach has limitations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lucy-dark-gray mt-4">
            <li><strong>Blind spots:</strong> You cannot see patterns across hundreds of data points without tools</li>
            <li><strong>Recency bias:</strong> Recent events disproportionately influence decisions</li>
            <li><strong>Inconsistency:</strong> Different managers make different calls on similar situations</li>
            <li><strong>Slow response:</strong> By the time you notice a trend, it may be too late to act</li>
          </ul>
          <p className="text-lucy-dark-gray mt-4">
            Data-driven approaches eliminate biases and guide strategies based on actual behavior and past transactional information. As{" "}
            <a
              href="https://www.cloudbeds.com/articles/hotel-data-analytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              Cloudbeds research
            </a>{" "}
            notes, this helps hotels make more objective decisions across pricing, staffing, marketing, and operations.
          </p>
        </ArticleSection>

        <ArticleSection id="key-metrics" title="Key Hotel Metrics Every Operator Should Track">
          <p className="text-lucy-dark-gray">
            Understanding which metrics to track is the foundation of data-driven operations. Here are the KPIs that matter most in 2026, with current industry benchmarks.
          </p>

          {/* Metrics Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Metric</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">What It Measures</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">2026 Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-lucy-black">RevPAR</td>
                  <td className="p-4 text-lucy-dark-gray">Revenue per available room</td>
                  <td className="p-4 text-lucy-dark-gray">$102.78 (US avg)</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-lucy-black">ADR</td>
                  <td className="p-4 text-lucy-dark-gray">Average daily rate</td>
                  <td className="p-4 text-lucy-dark-gray">$162 (US avg)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-lucy-black">Occupancy Rate</td>
                  <td className="p-4 text-lucy-dark-gray">Percentage of rooms sold</td>
                  <td className="p-4 text-lucy-dark-gray">63.4% - 66.2%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-lucy-black">GOPPAR</td>
                  <td className="p-4 text-lucy-dark-gray">Gross operating profit per room</td>
                  <td className="p-4 text-lucy-dark-gray">Varies by segment</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-lucy-black">NRevPAR</td>
                  <td className="p-4 text-lucy-dark-gray">Net revenue after distribution costs</td>
                  <td className="p-4 text-lucy-dark-gray">Emerging metric</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-lucy-black">Labor Cost/Room</td>
                  <td className="p-4 text-lucy-dark-gray">Staff cost per occupied room</td>
                  <td className="p-4 text-lucy-dark-gray">Rose 2-11% in 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-lucy-medium-gray mb-6">
            Source:{" "}
            <a
              href="https://takeup.ai/2025-revpar-benchmarks/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lucy-black"
            >
              TakeUp AI 2025 Benchmarks
            </a>,{" "}
            <a
              href="https://www.priority-software.com/resources/hotel-performance-metrics/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lucy-black"
            >
              Priority Software
            </a>
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Beyond Revenue: Operational KPIs</h3>
          <p className="text-lucy-dark-gray">
            While revenue metrics dominate industry discussions, operational KPIs are equally important for day-to-day management. According to{" "}
            <a
              href="https://www.hospitalitynet.org/news/4130143.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              the 2025 Hotel Labor Costs Report
            </a>
            , labor defined hotel performance more than any other cost category, with productivity increasing 7-15% in frontline roles through better forecasting and scheduling.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-lucy-black mb-3">Operational Metrics to Track:</h4>
            <ul className="space-y-2 text-lucy-dark-gray">
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow mt-1">&#9679;</span>
                <span><strong>Hours per occupied room</strong> - Dropped 7-15% in 2025 for efficient properties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow mt-1">&#9679;</span>
                <span><strong>Task completion rate</strong> - Track work orders and maintenance requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow mt-1">&#9679;</span>
                <span><strong>Shift handover quality</strong> - Information transfer between teams</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow mt-1">&#9679;</span>
                <span><strong>Response time to incidents</strong> - Guest complaints and maintenance issues</span>
              </li>
            </ul>
          </div>

          <p className="text-lucy-dark-gray">
            These operational metrics are where platforms like{" "}
            <Link to="/" className="text-lucy-black underline hover:text-lucy-medium-gray">Lucy Analytics</Link>{" "}
            provide unique value. While traditional BI tools focus on revenue data, Lucy captures the frontline operational information that often remains invisible to management, including{" "}
            <Link to="/articles/introducing-lucy-analytics" className="text-lucy-black underline hover:text-lucy-medium-gray">
              AI-summarized shift reports
            </Link>{" "}
            and real-time work order tracking.
          </p>
        </ArticleSection>

        <ArticleSection id="types-of-analytics" title="Types of Hotel Analytics">
          <p className="text-lucy-dark-gray">
            Hotel analytics falls into three categories, each serving different decision-making needs. Understanding these categories helps you choose the right tools and approaches.
          </p>

          <div className="space-y-6 my-8">
            {/* Descriptive Analytics */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lucy-black mb-2">Descriptive Analytics</h3>
                  <p className="text-lucy-dark-gray mb-3">
                    <strong>What happened?</strong> Historical reports and dashboards showing past performance.
                  </p>
                  <p className="text-sm text-lucy-medium-gray">
                    Examples: Monthly revenue reports, occupancy trends, guest satisfaction summaries, staff productivity reports
                  </p>
                </div>
              </div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C9FD59]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lucy-black mb-2">Predictive Analytics</h3>
                  <p className="text-lucy-dark-gray mb-3">
                    <strong>What will happen?</strong> Forecasts and projections based on patterns and trends.
                  </p>
                  <p className="text-sm text-lucy-medium-gray">
                    Examples: Demand forecasting, booking pace predictions, staffing requirements, maintenance scheduling
                  </p>
                </div>
              </div>
            </div>

            {/* Prescriptive Analytics */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-lucy-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lucy-black mb-2">Prescriptive Analytics</h3>
                  <p className="text-lucy-dark-gray mb-3">
                    <strong>What should we do?</strong> AI-powered recommendations for specific actions.
                  </p>
                  <p className="text-sm text-lucy-medium-gray">
                    Examples: Dynamic pricing recommendations, optimal staff scheduling, targeted marketing suggestions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            According to{" "}
            <a
              href="https://www.numberanalytics.com/blog/transforming-hospitality-tourism-predictive-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              Allied Market Research
            </a>
            , the global predictive analytics market is projected to reach $35.45 billion by 2027, with hospitality being a major driver. Hotels that combine all three types of analytics gain a significant competitive advantage through more complete and actionable insights.
          </p>
        </ArticleSection>

        <ArticleSection id="operational-insights" title="Operational Insights: The Missing Piece">
          <p className="text-lucy-dark-gray">
            Most hotel analytics discussions focus on revenue management. But operational efficiency, particularly among frontline staff, often determines whether revenue targets translate into actual profits.
          </p>

          {/* Visual: The Gap */}
          <div className="my-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-semibold text-lucy-black mb-4 text-center">The Data Visibility Gap</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex-1 text-center p-4">
                <div className="text-4xl font-bold text-green-600 mb-2">72%</div>
                <p className="text-sm text-lucy-dark-gray">Hotels using management software</p>
              </div>
              <div className="text-2xl text-lucy-medium-gray">vs</div>
              <div className="flex-1 text-center p-4">
                <div className="text-4xl font-bold text-red-500 mb-2">34%</div>
                <p className="text-sm text-lucy-dark-gray">Hotels with centralized data</p>
              </div>
            </div>
            <p className="text-xs text-lucy-medium-gray text-center mt-4">
              Source:{" "}
              <a
                href="https://hoteltechreport.com/revenue-management/business-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Hotel Tech Report 2025 Survey
              </a>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">What Frontline Data Reveals</h3>
          <p className="text-lucy-dark-gray">
            Frontline staff are your best source of insight, as noted by{" "}
            <a
              href="https://www.hijiffy.com/resources/articles/hotel-productivity-strategies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              HiJiffy&apos;s productivity research
            </a>
            . They see daily friction points, system limitations, and guest pain moments long before they appear in KPI dashboards.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-medium text-lucy-black mb-2">Shift Reports</h4>
              <p className="text-sm text-lucy-dark-gray">
                Capture what actually happened during each shift: challenges faced, guest issues, maintenance problems, and wins.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-medium text-lucy-black mb-2">Work Order Trends</h4>
              <p className="text-sm text-lucy-dark-gray">
                Identify recurring maintenance issues, response times, and bottlenecks in task completion.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-medium text-lucy-black mb-2">Communication Patterns</h4>
              <p className="text-sm text-lucy-dark-gray">
                Track how information flows between departments and where handovers break down.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-medium text-lucy-black mb-2">Incident Tracking</h4>
              <p className="text-sm text-lucy-dark-gray">
                Document and analyze safety issues, guest complaints, and operational problems over time.
              </p>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            This is where{" "}
            <Link to="/fördelar" className="text-lucy-black underline hover:text-lucy-medium-gray">
              Lucy&apos;s operational benefits
            </Link>{" "}
            become clear. Unlike revenue-focused BI tools, Lucy captures the operational layer: what&apos;s happening on the floor, how teams communicate, and where processes break down. The{" "}
            <Link to="/addons" className="text-lucy-black underline hover:text-lucy-medium-gray">
              Daily Feed add-on
            </Link>{" "}
            automatically compiles shift reports, sales figures, and work orders into actionable daily briefings for management.
          </p>
        </ArticleSection>

        <ArticleSection id="technology-comparison" title="Technology Comparison: BI Tools for Hotels">
          <p className="text-lucy-dark-gray">
            The hotel technology landscape offers various tools for data-driven decision making. Here&apos;s how the major categories compare.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Category</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Best For</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Limitations</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-lucy-black">Revenue Management Systems</td>
                  <td className="p-4 text-lucy-dark-gray">Dynamic pricing, demand forecasting</td>
                  <td className="p-4 text-lucy-dark-gray">Revenue-focused only, complex setup</td>
                  <td className="p-4 text-lucy-dark-gray">Duetto, IDeaS</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-lucy-black">Business Intelligence</td>
                  <td className="p-4 text-lucy-dark-gray">Market insights, competitive analysis</td>
                  <td className="p-4 text-lucy-dark-gray">Limited operational data</td>
                  <td className="p-4 text-lucy-dark-gray">Lighthouse, OTA Insight</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium text-lucy-black">PMS Analytics</td>
                  <td className="p-4 text-lucy-dark-gray">Reservation and guest data</td>
                  <td className="p-4 text-lucy-dark-gray">Siloed within PMS ecosystem</td>
                  <td className="p-4 text-lucy-dark-gray">Opera, Mews</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-medium text-lucy-black">Operational Platforms</td>
                  <td className="p-4 text-lucy-dark-gray">Staff efficiency, communication, workflows</td>
                  <td className="p-4 text-lucy-dark-gray">Less revenue optimization</td>
                  <td className="p-4 text-lucy-dark-gray">Lucy Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">2026 Industry Leaders</h3>
          <p className="text-lucy-dark-gray">
            According to the{" "}
            <a
              href="https://hoteltechreport.com/revenue-management/business-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              2025 HotelTechAwards
            </a>{" "}
            (based on 2,379 hotelier surveys across 104 countries):
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs text-lucy-medium-gray uppercase tracking-wide mb-2">Business Intelligence</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#C9FD59] rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span className="font-medium">Lighthouse</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span className="font-medium">Duetto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span className="font-medium">Actabl</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs text-lucy-medium-gray uppercase tracking-wide mb-2">Revenue Management</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#C9FD59] rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span className="font-medium">Duetto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span className="font-medium">IDeaS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span className="font-medium">Atomize</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
            <p className="text-lucy-dark-gray italic">
              &quot;The best properties know that while RevPAR remains important, it&apos;s just one piece of the puzzle. Long-term success depends on building strong measurement systems that deliver actionable insights across all key areas.&quot;
            </p>
            <p className="text-sm text-lucy-medium-gray mt-3">
              &mdash; Priority Software,{" "}
              <a
                href="https://www.priority-software.com/resources/hotel-performance-metrics/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Hotel Performance Metrics 2026
              </a>
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="roi-calculator" title="Calculate Your Data-Driven ROI">
          <p className="text-lucy-dark-gray mb-6">
            Understanding the potential return on investment helps justify technology decisions. Use this calculator to estimate how data-driven operations could impact your property.
          </p>
          <ROICalculator onDemoClick={handleDemoClick} />
        </ArticleSection>

        <ArticleSection id="implementation" title="Implementation Guide: Getting Started">
          <p className="text-lucy-dark-gray">
            Transitioning to data-driven operations does not require a complete technology overhaul. Here&apos;s a practical roadmap based on{" "}
            <a
              href="https://www.mews.com/en/blog/data-driven-hospitality"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lucy-black underline hover:text-lucy-medium-gray"
            >
              Mews&apos; recommendations
            </a>{" "}
            for data-driven hospitality.
          </p>

          <div className="space-y-6 my-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Audit Your Current Data Sources</h4>
                <p className="text-lucy-dark-gray text-sm">
                  Map where data currently lives: PMS, POS, scheduling software, review platforms, communication tools. Identify gaps and silos.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Define Key Questions</h4>
                <p className="text-lucy-dark-gray text-sm">
                  What decisions do you make regularly? What information would improve them? Focus on 3-5 priority areas rather than trying to measure everything.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Start with Operational Visibility</h4>
                <p className="text-lucy-dark-gray text-sm">
                  Before advanced analytics, ensure basic operational data is being captured. Structured shift reports, work orders, and incident logging provide the foundation.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                4
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Integrate and Automate</h4>
                <p className="text-lucy-dark-gray text-sm">
                  Connect systems where possible. Automatic data flows reduce manual work and ensure consistency. Tools with PMS integrations are essential.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                5
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black mb-2">Build Review Cadence</h4>
                <p className="text-lucy-dark-gray text-sm">
                  Data is only valuable if reviewed. Establish daily, weekly, and monthly review rhythms for different metric types.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-10 p-8 bg-gradient-to-br from-lucy-dark-gray to-gray-900 rounded-2xl text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Ready to Make Data-Driven Decisions?</h3>
            <p className="text-lucy-light-gray-new mb-6 max-w-lg mx-auto">
              Lucy Analytics helps hotels capture operational insights that traditional BI tools miss. See how our AI-powered platform can transform your team&apos;s efficiency.
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
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </ArticleSection>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default DataDrivenHotelOperations;
