import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "pricing-models", label: "Pricing Models" },
  { id: "cost-breakdown", label: "Cost Breakdown by Category" },
  { id: "hidden-costs", label: "Hidden Costs to Watch" },
  { id: "roi-calculator", label: "ROI Calculator" },
  { id: "comparison-table", label: "Software Comparison" },
  { id: "budget-planning", label: "Budget Planning Tips" },
  { id: "lucy-pricing", label: "Where Lucy Fits In" },
  { id: "faqs", label: "FAQs" },
];

// Interactive ROI Calculator Component
const ROICalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [rooms, setRooms] = useState(50);
  const [currentSoftwareCost, setCurrentSoftwareCost] = useState(500);
  const [staffCount, setStaffCount] = useState(20);
  const [avgHourlyWage, setAvgHourlyWage] = useState(18);
  const [hoursLostPerWeek, setHoursLostPerWeek] = useState(5);
  const [turnoverRate, setTurnoverRate] = useState(40);
  const [showResults, setShowResults] = useState(false);

  const calculations = useMemo(() => {
    // Communication inefficiency costs (hours lost to poor communication)
    const weeklyLaborWaste = staffCount * hoursLostPerWeek * avgHourlyWage;
    const annualLaborWaste = weeklyLaborWaste * 52;

    // Turnover costs (industry average $5,000 per employee to replace)
    const replacementCostPerEmployee = 5000;
    const annualTurnoverCost = (staffCount * (turnoverRate / 100)) * replacementCostPerEmployee;

    // Potential savings with better software (conservative 30% reduction in inefficiencies)
    const communicationSavings = annualLaborWaste * 0.30;

    // Turnover reduction (industry data shows 15-20% improvement with better tools)
    const turnoverSavings = annualTurnoverCost * 0.15;

    // Total potential annual savings
    const totalPotentialSavings = communicationSavings + turnoverSavings;

    // Estimated modern software cost (using industry average of $4-8 per room)
    const estimatedModernSoftwareCost = rooms * 6 * 12; // $6 per room per month

    // Net savings
    const currentAnnualSoftwareCost = currentSoftwareCost * 12;
    const netSavings = totalPotentialSavings - estimatedModernSoftwareCost + currentAnnualSoftwareCost;

    // ROI percentage
    const roi = estimatedModernSoftwareCost > 0
      ? ((netSavings / estimatedModernSoftwareCost) * 100).toFixed(0)
      : 0;

    // Payback period in months
    const monthlyNetSavings = netSavings / 12;
    const paybackMonths = monthlyNetSavings > 0
      ? Math.ceil(estimatedModernSoftwareCost / (totalPotentialSavings / 12))
      : 0;

    return {
      annualLaborWaste: Math.round(annualLaborWaste),
      annualTurnoverCost: Math.round(annualTurnoverCost),
      communicationSavings: Math.round(communicationSavings),
      turnoverSavings: Math.round(turnoverSavings),
      totalPotentialSavings: Math.round(totalPotentialSavings),
      estimatedModernSoftwareCost: Math.round(estimatedModernSoftwareCost),
      netSavings: Math.round(netSavings),
      roi: roi,
      paybackMonths: paybackMonths > 0 ? paybackMonths : 1,
    };
  }, [rooms, currentSoftwareCost, staffCount, avgHourlyWage, hoursLostPerWeek, turnoverRate]);

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
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-lucy-neon-yellow rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-lucy-black">Hotel Software ROI Calculator</h3>
          <p className="text-sm text-lucy-medium-gray">Estimate your potential savings with modern hotel software</p>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {/* Property Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Number of Rooms
              </label>
              <input
                type="number"
                value={rooms}
                onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lucy-neon-yellow focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Current Monthly Software Cost ($)
              </label>
              <input
                type="number"
                value={currentSoftwareCost}
                onChange={(e) => setCurrentSoftwareCost(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lucy-neon-yellow focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Staff Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Number of Staff Members
              </label>
              <input
                type="number"
                value={staffCount}
                onChange={(e) => setStaffCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lucy-neon-yellow focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Average Hourly Wage ($)
              </label>
              <input
                type="number"
                value={avgHourlyWage}
                onChange={(e) => setAvgHourlyWage(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-lucy-neon-yellow focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Efficiency Metrics */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Hours Lost to Poor Communication (per staff/week)
              </label>
              <input
                type="range"
                min="1"
                max="15"
                value={hoursLostPerWeek}
                onChange={(e) => setHoursLostPerWeek(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
              />
              <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
                <span>1 hr</span>
                <span className="font-medium text-lucy-black">{hoursLostPerWeek} hours</span>
                <span>15 hrs</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-lucy-dark-gray mb-2">
                Annual Staff Turnover Rate (%)
              </label>
              <input
                type="range"
                min="10"
                max="80"
                value={turnoverRate}
                onChange={(e) => setTurnoverRate(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
              />
              <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
                <span>10%</span>
                <span className="font-medium text-lucy-black">{turnoverRate}%</span>
                <span>80%</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowResults(true)}
            className="w-full bg-lucy-neon-yellow text-lucy-black font-medium py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md"
          >
            Calculate My ROI
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Results Summary */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <p className="text-sm text-lucy-medium-gray mb-1">Potential Annual Savings</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(calculations.totalPotentialSavings)}</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <p className="text-sm text-lucy-medium-gray mb-1">Estimated ROI</p>
              <p className="text-2xl font-bold text-lucy-black">{calculations.roi}%</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <p className="text-sm text-lucy-medium-gray mb-1">Payback Period</p>
              <p className="text-2xl font-bold text-lucy-black">{calculations.paybackMonths} months</p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h4 className="font-semibold text-lucy-black mb-4">Savings Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-lucy-dark-gray">Current Annual Labor Waste (communication)</span>
                <span className="font-medium text-red-500">{formatCurrency(calculations.annualLaborWaste)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-lucy-dark-gray">Current Annual Turnover Cost</span>
                <span className="font-medium text-red-500">{formatCurrency(calculations.annualTurnoverCost)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-lucy-dark-gray">Communication Efficiency Savings (30%)</span>
                <span className="font-medium text-green-600">+{formatCurrency(calculations.communicationSavings)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-lucy-dark-gray">Turnover Reduction Savings (15%)</span>
                <span className="font-medium text-green-600">+{formatCurrency(calculations.turnoverSavings)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-lucy-dark-gray">Estimated Modern Software Cost</span>
                <span className="font-medium">{formatCurrency(calculations.estimatedModernSoftwareCost)}/year</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-3 -mx-3">
                <span className="font-semibold text-lucy-black">Net Annual Benefit</span>
                <span className="font-bold text-green-600 text-lg">{formatCurrency(calculations.netSavings)}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-lucy-dark-gray rounded-xl p-6 text-center">
            <p className="text-white mb-3">Want a personalized cost analysis for your property?</p>
            <button
              onClick={onDemoClick}
              className="inline-block bg-lucy-neon-yellow text-lucy-black font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get a Custom Quote
            </button>
          </div>

          <button
            onClick={() => setShowResults(false)}
            className="w-full text-lucy-medium-gray hover:text-lucy-dark-gray text-sm underline"
          >
            Recalculate with different values
          </button>
        </div>
      )}

      <p className="text-xs text-lucy-medium-gray mt-6 text-center">
        * Calculations based on industry averages from{" "}
        <a href="https://www.cloudbeds.com/articles/hotel-turnover/" target="_blank" rel="noopener noreferrer" className="underline">Cloudbeds</a>,{" "}
        <a href="https://www.roarforgood.com/blog/the-cost-of-hotel-staff-turnover/" target="_blank" rel="noopener noreferrer" className="underline">ROAR</a>, and{" "}
        <a href="https://moldstud.com/articles/p-maximizing-roi-in-depth-case-studies-on-hospitality-software-cost-benefit-analysis" target="_blank" rel="noopener noreferrer" className="underline">Moldstud</a> research.
        Actual results may vary.
      </p>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
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
      {isOpen && (
        <div className="pb-5 text-lucy-dark-gray leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does hotel management software cost per month?",
      answer: "Hotel management software typically costs between $3 and $15 per room per month for cloud-based solutions. For a 50-room property, expect monthly costs ranging from $150 to $750. Enterprise solutions like Oracle OPERA can cost significantly more, with license fees starting at $40-$100 per room plus annual support fees. Many vendors also charge setup fees between $500 and $5,000."
    },
    {
      question: "What are the hidden costs of hotel software?",
      answer: "Hidden costs can increase your total cost of ownership by 20-30% annually. Common hidden fees include: implementation and setup costs ($1,000-$10,000), training fees ($500-$2,000 per session), integration fees with OTAs and payment processors ($100-$1,500/month), premium support packages ($50-$300/month), and transaction fees on bookings (2.6-3.5%). A 2025 survey found that 45% of hotels experienced unexpected charges in their first year."
    },
    {
      question: "Is it worth investing in hotel software for small properties?",
      answer: "Yes, even small properties benefit significantly from modern hotel software. Research shows hotels using advanced management solutions see a 25% average improvement in operational efficiency, 30-50% reduction in check-in times, and up to 15-25% increase in RevPAR. Small hotels can start with budget-friendly options like Hotelogix (from $3.99/room/month) or even free tier options, then scale as they grow."
    },
    {
      question: "How long does it take to see ROI on hotel software?",
      answer: "Most hotels report seeing positive ROI within 3-14 months of implementing modern hotel software. Quick wins include reduced check-in times (saving staff hours immediately), fewer booking errors, and improved direct booking rates. One case study showed a boutique hotel chain achieving 30% more direct bookings within six months, saving $250,000 annually in OTA commissions alone."
    },
    {
      question: "Should I choose per-room or flat-rate pricing?",
      answer: "Per-room pricing works best for smaller properties (under 50 rooms) as costs scale with your size. Flat-rate pricing often benefits larger properties where per-room fees would add up quickly. Consider your growth plans too: if you are expanding, per-room pricing means your costs will increase proportionally, while flat-rate gives more predictability. Always factor in staff communication tools, which may use per-user pricing instead."
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
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
  );
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://lucyanalytics.com/articles/hotel-software-cost#article",
      "headline": "Hotel Software Cost: A Transparent Pricing Guide 2026",
      "description": "Comprehensive guide to hotel management software pricing in 2026. Compare costs, understand pricing models, and calculate ROI for your property.",
      "author": {
        "@type": "Person",
        "name": "Björn Treje",
        "url": "https://www.linkedin.com/in/bjorntreje/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lucy Analytics",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lucyanalytics.com/lucy_analytics_logo.png"
        }
      },
      "datePublished": "2026-02-01",
      "dateModified": "2026-02-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://lucyanalytics.com/articles/hotel-software-cost"
      },
      "image": "https://lucyanalytics.com/hotel-software-cost-guide.jpg"
    },
    {
      "@type": "FAQPage",
      "@id": "https://lucyanalytics.com/articles/hotel-software-cost#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does hotel management software cost per month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel management software typically costs between $3 and $15 per room per month for cloud-based solutions. For a 50-room property, expect monthly costs ranging from $150 to $750. Enterprise solutions like Oracle OPERA can cost significantly more, with license fees starting at $40-$100 per room plus annual support fees."
          }
        },
        {
          "@type": "Question",
          "name": "What are the hidden costs of hotel software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hidden costs can increase your total cost of ownership by 20-30% annually. Common hidden fees include implementation costs ($1,000-$10,000), training fees ($500-$2,000), integration fees ($100-$1,500/month), premium support ($50-$300/month), and transaction fees (2.6-3.5%)."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth investing in hotel software for small properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, even small properties benefit significantly. Research shows hotels using advanced management solutions see 25% average improvement in operational efficiency, 30-50% reduction in check-in times, and up to 15-25% increase in RevPAR."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see ROI on hotel software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most hotels report seeing positive ROI within 3-14 months of implementing modern hotel software. Quick wins include reduced check-in times, fewer booking errors, and improved direct booking rates."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose per-room or flat-rate pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per-room pricing works best for smaller properties (under 50 rooms). Flat-rate pricing often benefits larger properties. Consider your growth plans: per-room pricing scales with size, while flat-rate gives more predictability."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://lucyanalytics.com/articles/hotel-software-cost#breadcrumb",
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
          "name": "Hotel Software Cost Guide",
          "item": "https://lucyanalytics.com/articles/hotel-software-cost"
        }
      ]
    }
  ]
};

const HotelSoftwareCost = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Hotel Software Cost: A Transparent Pricing Guide for 2026"
          subtitle="Everything you need to know about hotel management software pricing—from per-room fees to hidden costs. Plus an interactive ROI calculator to estimate your potential savings."
          breadcrumbLabel="Hotel Software Cost"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Hotel software costs range from <strong>$3 to $15 per room per month</strong> for cloud solutions, with enterprise systems requiring custom quotes.</>,
            <>Hidden costs (implementation, training, integrations) can add <strong>20-30% to your annual spend</strong>—always ask vendors for total cost of ownership.</>,
            <>Hotels using modern software report <strong>25% efficiency gains</strong> and <strong>15-25% RevPAR improvements</strong>, with ROI typically achieved within 3-14 months.</>,
            <>Communication tools are often priced separately at <strong>$15-50 per user/month</strong>—factor this into your budget alongside your PMS.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Understanding Hotel Software Costs in 2026">
          <p className="text-lucy-dark-gray">
            Hotel management software cost is one of the most searched yet least transparent topics in hospitality technology. Whether you are running a boutique property or managing a hotel chain, understanding what you should pay—and what you are actually getting—is crucial for making smart technology investments.
          </p>
          <p className="text-lucy-dark-gray">
            The global hospitality property management software market has grown to an estimated{" "}
            <a href="https://www.softwareadvice.com/hotel-management/" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              USD 1.62 billion in 2025
            </a>{" "}
            and is projected to reach USD 2.26 billion by 2030. This growth reflects a fundamental shift in how hotels operate—and why choosing the right software at the right price matters more than ever.
          </p>
          <p className="text-lucy-dark-gray">
            In this guide, we break down every pricing model, reveal the hidden costs vendors do not always mention upfront, and provide you with tools to calculate whether a software investment makes financial sense for your property.
          </p>
        </ArticleSection>

        <ArticleSection id="pricing-models" title="Hotel Software Pricing Models Explained">
          <p className="text-lucy-dark-gray">
            Hotel software vendors use several different pricing structures. Understanding each model helps you compare apples to apples when evaluating solutions.
          </p>

          {/* Pricing Models Visual */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 border border-blue-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full -mr-12 -mt-12 opacity-50" />
              <h3 className="text-lg font-semibold text-lucy-black mb-3 relative z-10">Per-Room Pricing</h3>
              <p className="text-sm text-lucy-dark-gray mb-4 relative z-10">
                Most common for cloud-based PMS solutions. You pay based on your property size.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 relative z-10">
                <p className="text-2xl font-bold text-lucy-black">$3 - $15</p>
                <p className="text-sm text-lucy-medium-gray">per room / month</p>
              </div>
              <p className="text-xs text-lucy-medium-gray mt-3 relative z-10">
                Example: 50 rooms at $6/room = $300/month
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 border border-purple-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-200 rounded-full -mr-12 -mt-12 opacity-50" />
              <h3 className="text-lg font-semibold text-lucy-black mb-3 relative z-10">Flat Monthly Rate</h3>
              <p className="text-sm text-lucy-dark-gray mb-4 relative z-10">
                Fixed pricing regardless of property size. Common for comprehensive platforms.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 relative z-10">
                <p className="text-2xl font-bold text-lucy-black">$197 - $500+</p>
                <p className="text-sm text-lucy-medium-gray">per month</p>
              </div>
              <p className="text-xs text-lucy-medium-gray mt-3 relative z-10">
                Often includes multiple user accounts
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 border border-amber-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200 rounded-full -mr-12 -mt-12 opacity-50" />
              <h3 className="text-lg font-semibold text-lucy-black mb-3 relative z-10">Per-User Pricing</h3>
              <p className="text-sm text-lucy-dark-gray mb-4 relative z-10">
                Common for communication and collaboration tools. Scales with team size.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 relative z-10">
                <p className="text-2xl font-bold text-lucy-black">$15 - $50</p>
                <p className="text-sm text-lucy-medium-gray">per user / month</p>
              </div>
              <p className="text-xs text-lucy-medium-gray mt-3 relative z-10">
                Example: 20 staff at $20/user = $400/month
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-6 border border-green-200">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full -mr-12 -mt-12 opacity-50" />
              <h3 className="text-lg font-semibold text-lucy-black mb-3 relative z-10">One-Time License</h3>
              <p className="text-sm text-lucy-dark-gray mb-4 relative z-10">
                Traditional model for on-premise systems. Higher upfront, lower ongoing.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 relative z-10">
                <p className="text-2xl font-bold text-lucy-black">$40 - $100</p>
                <p className="text-sm text-lucy-medium-gray">per room (one-time)</p>
              </div>
              <p className="text-xs text-lucy-medium-gray mt-3 relative z-10">
                + annual support fees (10-20%)
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
            <h4 className="font-semibold text-lucy-black mb-3">Which model is best for you?</h4>
            <ul className="space-y-2 text-lucy-dark-gray">
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow font-bold">→</span>
                <span><strong>Small properties (under 50 rooms):</strong> Per-room pricing keeps costs proportional to your size</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow font-bold">→</span>
                <span><strong>Large properties (100+ rooms):</strong> Flat-rate or enterprise pricing often provides better value</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lucy-neon-yellow font-bold">→</span>
                <span><strong>Large teams:</strong> Look for unlimited user plans or team-based pricing to avoid per-user costs adding up</span>
              </li>
            </ul>
          </div>
        </ArticleSection>

        <ArticleSection id="cost-breakdown" title="Cost Breakdown by Software Category">
          <p className="text-lucy-dark-gray">
            Hotels typically need multiple software solutions working together. Here is what each category costs:
          </p>

          {/* Cost Breakdown Table */}
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-lucy-dark-gray text-white">
                  <th className="text-left p-4 rounded-tl-xl">Software Category</th>
                  <th className="text-left p-4">Typical Price Range</th>
                  <th className="text-left p-4">Pricing Model</th>
                  <th className="text-left p-4 rounded-tr-xl">Key Players</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Property Management (PMS)</td>
                  <td className="p-4">$3 - $15/room/month</td>
                  <td className="p-4">Per-room or flat</td>
                  <td className="p-4 text-sm text-lucy-medium-gray">Oracle OPERA, Mews, Cloudbeds</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium">Channel Manager</td>
                  <td className="p-4">$50 - $300/month</td>
                  <td className="p-4">Flat or per-room</td>
                  <td className="p-4 text-sm text-lucy-medium-gray">SiteMinder, Cloudbeds</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Revenue Management (RMS)</td>
                  <td className="p-4">$300 - $1,000/month</td>
                  <td className="p-4">Per-room</td>
                  <td className="p-4 text-sm text-lucy-medium-gray">IDeaS, Duetto, RoomPriceGenie</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-4 font-medium">Guest Messaging</td>
                  <td className="p-4">$50 - $300/month</td>
                  <td className="p-4">Flat or per-room</td>
                  <td className="p-4 text-sm text-lucy-medium-gray">Canary, Duve, Alliants</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-medium">Staff Communication</td>
                  <td className="p-4">$15 - $50/user/month</td>
                  <td className="p-4">Per-user</td>
                  <td className="p-4 text-sm text-lucy-medium-gray">Lucy, HelloShift, Beekeeper</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium rounded-bl-xl">Housekeeping Management</td>
                  <td className="p-4">$100 - $400/month</td>
                  <td className="p-4">Flat or per-room</td>
                  <td className="p-4 rounded-br-xl text-sm text-lucy-medium-gray">Optii, Flexkeeping, Lucy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lucy-dark-gray mt-6">
            According to{" "}
            <a href="https://hoteltechreport.com/operations/property-management-systems" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              Hotel Tech Report
            </a>, Cloudbeds and Mews both hold a 4.6/5 rating from over 1,000 user reviews each, making them the highest-rated PMS options for mid-market hotels. Oracle OPERA remains the standard for enterprise chains but requires custom pricing discussions.
          </p>
        </ArticleSection>

        <ArticleSection id="hidden-costs" title="Hidden Costs to Watch For">
          <p className="text-lucy-dark-gray">
            The sticker price is rarely the full story. A{" "}
            <a href="https://www.getmonetizely.com/articles/how-much-should-you-pay-for-hotel-management-software-a-complete-pricing-guide" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              2025 survey found that 45% of hotels experienced hidden charges
            </a>{" "}
            in their first year after implementation. Here is what to ask about before signing:
          </p>

          {/* Hidden Costs Visual */}
          <div className="relative mt-8 mb-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-red-300 to-red-200 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {/* Left side items */}
              <div className="space-y-6">
                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:mr-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Implementation & Setup</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">One-time fees ranging from $500 to $10,000 depending on complexity</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Can add 20% to first-year costs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:mr-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Integration Fees</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">OTA connections, payment processors: $100-$1,500/month each</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Revenue systems: $3,000-$12,000 setup</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:mr-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Transaction Fees</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">Payment processing typically 2.6-3.5% per transaction</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Plus $25-$50/month gateway fees</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side items */}
              <div className="space-y-6 md:mt-12">
                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:ml-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Training Costs</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">$500-$2,000 per training session for small teams</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Enterprise: dedicated trainers + manuals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:ml-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Premium Support</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">Enhanced SLAs and phone support: $50-$300/month</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">Basic support often email-only</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-red-100 rounded-xl p-5 shadow-sm md:ml-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lucy-black">Updates & Maintenance</h4>
                      <p className="text-sm text-lucy-dark-gray mt-1">Annual costs of 10-20% of initial software cost</p>
                      <p className="text-xs text-red-600 mt-2 font-medium">On-premise systems especially</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Pro Tip: Always Ask for TCO</h4>
                <p className="text-sm text-amber-800">
                  Request a Total Cost of Ownership breakdown for years 1, 2, and 3. Reputable vendors will provide this. If they refuse or cannot give clear numbers, consider it a red flag.
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="roi-calculator" title="Calculate Your Hotel Software ROI">
          <p className="text-lucy-dark-gray mb-6">
            Use our interactive calculator to estimate potential savings from upgrading your hotel software. Based on{" "}
            <a href="https://moldstud.com/articles/p-maximizing-roi-in-depth-case-studies-on-hospitality-software-cost-benefit-analysis" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              industry research
            </a>, hotels using modern software see an average 25% improvement in operational efficiency and 15-20% reduction in staff turnover-related costs.
          </p>

          <ROICalculator onDemoClick={handleDemoClick} />
        </ArticleSection>

        <ArticleSection id="comparison-table" title="2026 Hotel Software Cost Comparison">
          <p className="text-lucy-dark-gray">
            Based on our research and data from{" "}
            <a href="https://hoteltechreport.com/operations/property-management-systems" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              Hotel Tech Report
            </a>{" "}
            and{" "}
            <a href="https://www.softwareadvice.com/hotel-management/" target="_blank" rel="noopener noreferrer" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              Software Advice
            </a>, here is how popular solutions compare:
          </p>

          {/* Comparison Cards */}
          <div className="grid gap-4 mt-8">
            {/* Budget Tier */}
            <div className="bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Budget-Friendly</span>
                <span className="text-sm text-lucy-medium-gray">Best for: Small properties, B&Bs</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Hotelogix</h4>
                  <p className="text-lg font-bold text-green-600 mt-1">$3.99 - $5.99/room</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">Min $65-$90/month invoice</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Little Hotelier</h4>
                  <p className="text-lg font-bold text-green-600 mt-1">~$100/month</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">All-in-one for small props</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">eZee Absolute</h4>
                  <p className="text-lg font-bold text-green-600 mt-1">$50 - $150/month</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">Cloud PMS with channel mgr</p>
                </div>
              </div>
            </div>

            {/* Mid-Market Tier */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Mid-Market</span>
                <span className="text-sm text-lucy-medium-gray">Best for: Independent hotels, boutiques</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Mews</h4>
                  <p className="text-lg font-bold text-blue-600 mt-1">~$8/room/month</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">4.6/5 rating (779 reviews)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Cloudbeds</h4>
                  <p className="text-lg font-bold text-blue-600 mt-1">Custom quote</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">4.6/5 rating (1,329 reviews)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">RoomRaccoon</h4>
                  <p className="text-lg font-bold text-blue-600 mt-1">$197 - $250/month</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">Flat rate, 2-8 users</p>
                </div>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Enterprise</span>
                <span className="text-sm text-lucy-medium-gray">Best for: Chains, large resorts</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Oracle OPERA</h4>
                  <p className="text-lg font-bold text-purple-600 mt-1">$40-$100/room license</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">+ annual support fees</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Infor HMS</h4>
                  <p className="text-lg font-bold text-purple-600 mt-1">Custom enterprise</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">Full-service implementation</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h4 className="font-semibold text-lucy-black">Amadeus HotSOS</h4>
                  <p className="text-lg font-bold text-purple-600 mt-1">Custom enterprise</p>
                  <p className="text-xs text-lucy-medium-gray mt-1">Service optimization focus</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-lucy-medium-gray mt-6">
            * Prices as of February 2026. Contact vendors directly for current quotes. Sources:{" "}
            <a href="https://www.softwareadvice.com/hotel-management/" target="_blank" rel="noopener noreferrer" className="underline">Software Advice</a>,{" "}
            <a href="https://hoteltechreport.com/operations/property-management-systems" target="_blank" rel="noopener noreferrer" className="underline">Hotel Tech Report</a>,{" "}
            <a href="https://blog.hotelogix.com/oracle-opera-pms-alternatives/" target="_blank" rel="noopener noreferrer" className="underline">Hotelogix</a>
          </p>
        </ArticleSection>

        <ArticleSection id="budget-planning" title="Budget Planning Tips for Hotel Software">
          <p className="text-lucy-dark-gray">
            Smart budgeting means looking beyond monthly subscription costs. Here is how to plan effectively:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-lucy-black">Year 1 Budget Checklist</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Software subscription</span>
                    <p className="text-sm text-lucy-medium-gray">12 months of base pricing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Implementation fees</span>
                    <p className="text-sm text-lucy-medium-gray">One-time setup costs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Initial training</span>
                    <p className="text-sm text-lucy-medium-gray">Onboarding for current staff</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Integration setup</span>
                    <p className="text-sm text-lucy-medium-gray">Connecting existing systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-lucy-black">Ongoing Annual Costs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Software renewal</span>
                    <p className="text-sm text-lucy-medium-gray">May increase 5-10% annually</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">New staff training</span>
                    <p className="text-sm text-lucy-medium-gray">Account for 40%+ turnover rate</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Support packages</span>
                    <p className="text-sm text-lucy-medium-gray">Premium support if needed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <span className="font-medium text-lucy-black">Additional modules</span>
                    <p className="text-sm text-lucy-medium-gray">As needs grow</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-lucy-dark-gray to-gray-800 rounded-xl p-6 mt-8 text-white">
            <h4 className="font-semibold mb-3">The Real Cost of Doing Nothing</h4>
            <p className="text-gray-300 text-sm mb-4">
              Before deciding software is too expensive, consider what inefficiency costs you:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-lucy-neon-yellow">40-70%</p>
                <p className="text-sm text-gray-300">Annual staff turnover in hospitality</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-lucy-neon-yellow">$5,000+</p>
                <p className="text-sm text-gray-300">Cost to replace one employee</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-lucy-neon-yellow">5+ hrs</p>
                <p className="text-sm text-gray-300">Weekly time lost to poor communication</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Source:{" "}
              <a href="https://www.cloudbeds.com/articles/hotel-turnover/" target="_blank" rel="noopener noreferrer" className="underline">Cloudbeds</a>,{" "}
              <a href="https://www.roarforgood.com/blog/the-cost-of-hotel-staff-turnover/" target="_blank" rel="noopener noreferrer" className="underline">ROAR</a>
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="lucy-pricing" title="Where Lucy Fits In Your Tech Stack">
          <p className="text-lucy-dark-gray">
            Lucy is an AI-powered communication platform designed specifically for{" "}
            <Link to="/articles/introducing-lucy-analytics" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              frontline hotel teams
            </Link>. Rather than replacing your PMS, Lucy complements it by solving the communication challenges that generic tools like WhatsApp or Slack were not built to handle.
          </p>

          <div className="bg-gradient-to-br from-[#C9FD59]/20 via-white to-gray-50 border border-[#C9FD59]/30 rounded-2xl p-6 md:p-8 mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-lucy-neon-yellow rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lucy-black">Lucy Team Communications</h3>
                <p className="text-sm text-lucy-medium-gray">Built for hotels, not retrofitted for them</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-lucy-black mb-3">What Lucy Replaces</h4>
                <ul className="space-y-2 text-sm text-lucy-dark-gray">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Multiple WhatsApp groups
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Paper-based shift handovers
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Manual translation between staff
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Scattered work order tracking
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lucy-black mb-3">What You Get</h4>
                <ul className="space-y-2 text-sm text-lucy-dark-gray">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered shift report summaries
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automatic real-time translation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Built-in work order management
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Role-based onboarding flows
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-lucy-medium-gray text-sm">Transparent pricing for hotels of all sizes</p>
                  <p className="text-lucy-black font-medium">Contact us for a personalized quote based on your property</p>
                </div>
                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center bg-lucy-neon-yellow text-lucy-black font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all whitespace-nowrap"
                >
                  Get a Quote
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray mt-6">
            Learn more about{" "}
            <Link to="/fördelar" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              Lucy&apos;s features
            </Link>{" "}
            or explore our{" "}
            <Link to="/addons" className="text-lucy-black underline hover:text-lucy-neon-yellow transition-colors">
              specialized add-ons
            </Link>{" "}
            for housekeeping, review management, and more.
          </p>
        </ArticleSection>

        <ArticleSection id="faqs" title="Frequently Asked Questions">
          <p className="text-lucy-dark-gray mb-6">
            Common questions about hotel software pricing and costs:
          </p>
          <FAQSection />
        </ArticleSection>

        {/* Final CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-lucy-dark-gray via-gray-800 to-gray-900 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to See What Lucy Would Cost for Your Hotel?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a personalized quote with transparent pricing. No hidden fees, no surprises. Our team will help you understand exactly what you need and what it will cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDemoClick}
              className="w-full sm:w-auto bg-lucy-neon-yellow text-lucy-black px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg"
            >
              Get Your Custom Quote
            </button>
            <Link
              to="/articles"
              className="w-full sm:w-auto text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelSoftwareCost;
