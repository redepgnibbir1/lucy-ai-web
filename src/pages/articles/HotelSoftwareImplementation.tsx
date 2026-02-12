import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "why-implementations-fail", label: "Why Implementations Fail" },
  { id: "phased-rollout-approach", label: "Phased Rollout Approach" },
  { id: "staff-training", label: "Staff Training Strategies" },
  { id: "integration-planning", label: "Integration Planning" },
  { id: "measuring-success", label: "Measuring Success" },
  { id: "readiness-assessment", label: "Readiness Assessment" },
  { id: "implementation-checklist", label: "Implementation Checklist" },
  { id: "faq", label: "FAQs" },
  { id: "getting-started", label: "Getting Started" },
];

// Interactive Implementation Readiness Calculator
const ReadinessCalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const categories = [
    {
      id: "leadership",
      name: "Leadership Buy-in",
      question: "How committed is your leadership team to the new software implementation?",
      options: [
        { label: "Fully committed with dedicated budget and resources", score: 5 },
        { label: "Supportive but resources are limited", score: 3 },
        { label: "Skeptical or divided on the decision", score: 1 },
      ],
    },
    {
      id: "staff",
      name: "Staff Readiness",
      question: "How would you describe your staff's openness to new technology?",
      options: [
        { label: "Eager adopters who embrace change", score: 5 },
        { label: "Generally open but need training support", score: 3 },
        { label: "Resistant to change, prefer current methods", score: 1 },
      ],
    },
    {
      id: "infrastructure",
      name: "Technical Infrastructure",
      question: "What is the current state of your hotel's technical infrastructure?",
      options: [
        { label: "Modern devices, reliable WiFi, cloud-ready", score: 5 },
        { label: "Adequate but needs some upgrades", score: 3 },
        { label: "Outdated hardware, connectivity issues", score: 1 },
      ],
    },
    {
      id: "processes",
      name: "Documented Processes",
      question: "How well-documented are your current operational processes?",
      options: [
        { label: "Comprehensive SOPs for all departments", score: 5 },
        { label: "Some documentation, mostly tribal knowledge", score: 3 },
        { label: "No formal documentation exists", score: 1 },
      ],
    },
    {
      id: "timeline",
      name: "Timeline Flexibility",
      question: "How flexible is your implementation timeline?",
      options: [
        { label: "Flexible - quality over speed", score: 5 },
        { label: "Moderate - some deadlines but adjustable", score: 3 },
        { label: "Rigid - must launch by specific date", score: 1 },
      ],
    },
  ];

  const handleSelect = (categoryId: string, score: number) => {
    setScores({ ...scores, [categoryId]: score });
  };

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((sum, score) => sum + score, 0);
  }, [scores]);

  const maxScore = categories.length * 5;
  const readinessPercentage = Math.round((totalScore / maxScore) * 100);

  const allAnswered = Object.keys(scores).length === categories.length;

  const getReadinessLevel = () => {
    if (readinessPercentage >= 80) {
      return {
        level: "High Readiness",
        color: "bg-green-500",
        textColor: "text-green-700",
        bgColor: "bg-green-50",
        message: "Your hotel is well-prepared for a smooth software implementation. You have the leadership support, staff readiness, and infrastructure needed for success.",
        recommendation: "Consider a 2-3 week implementation timeline with parallel rollout across departments.",
      };
    } else if (readinessPercentage >= 50) {
      return {
        level: "Moderate Readiness",
        color: "bg-yellow-500",
        textColor: "text-yellow-700",
        bgColor: "bg-yellow-50",
        message: "Your hotel has a solid foundation but some areas need attention before implementation. Focus on the lower-scoring categories first.",
        recommendation: "Plan for a 4-6 week phased implementation with dedicated change management support.",
      };
    } else {
      return {
        level: "Preparation Needed",
        color: "bg-orange-500",
        textColor: "text-orange-700",
        bgColor: "bg-orange-50",
        message: "Your hotel would benefit from preparatory work before beginning implementation. Rushing could lead to adoption challenges.",
        recommendation: "Invest 2-4 weeks in preparation before starting a 6-8 week phased rollout.",
      };
    }
  };

  const readinessResult = getReadinessLevel();

  return (
    <ArticleSection id="readiness-assessment" title="Implementation Readiness Assessment">
      <p className="text-lucy-dark-gray mb-6">
        Before implementing new hotel software, assess your property&apos;s readiness.
        Answer these five questions to get a personalized readiness score and implementation recommendations.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {!showResults ? (
          <div className="p-6 md:p-8">
            <div className="space-y-8">
              {categories.map((category, index) => (
                <div key={category.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-lucy-neon-yellow flex items-center justify-center text-sm font-semibold text-lucy-black">
                      {index + 1}
                    </span>
                    <h4 className="font-medium text-lucy-black">{category.name}</h4>
                    {scores[category.id] && (
                      <svg className="w-5 h-5 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-lucy-medium-gray text-sm mb-4">{category.question}</p>
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <button
                        key={option.score}
                        onClick={() => handleSelect(category.id, option.score)}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 text-sm ${
                          scores[category.id] === option.score
                            ? "border-lucy-neon-yellow bg-yellow-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowResults(true)}
              disabled={!allAnswered}
              className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                allAnswered
                  ? "bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {allAnswered ? "Calculate My Readiness Score" : `Answer all ${categories.length} questions to continue`}
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            {/* Score visualization */}
            <div className="text-center mb-8">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke={readinessPercentage >= 80 ? "#22C55E" : readinessPercentage >= 50 ? "#EAB308" : "#F97316"}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${readinessPercentage * 4.4} 440`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-lucy-black">{readinessPercentage}%</span>
                  <span className="text-sm text-lucy-medium-gray">Readiness</span>
                </div>
              </div>

              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${readinessResult.textColor} ${readinessResult.bgColor}`}>
                {readinessResult.level}
              </div>
            </div>

            {/* Category breakdown */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h4 className="font-medium text-lucy-black mb-4">Your Scores by Category</h4>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <span className="text-sm text-lucy-medium-gray w-32 flex-shrink-0">{category.name}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          scores[category.id] === 5 ? "bg-green-500" : scores[category.id] === 3 ? "bg-yellow-500" : "bg-orange-500"
                        }`}
                        style={{ width: `${(scores[category.id] / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-lucy-black w-8">{scores[category.id]}/5</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation */}
            <div className="border border-gray-200 rounded-xl p-5 mb-6">
              <h4 className="font-medium text-lucy-black mb-2">Assessment Summary</h4>
              <p className="text-lucy-dark-gray text-sm mb-4">{readinessResult.message}</p>
              <div className="bg-lucy-neon-yellow/10 rounded-lg p-4">
                <p className="text-sm text-lucy-black">
                  <strong>Recommended approach:</strong> {readinessResult.recommendation}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-lucy-dark-gray rounded-xl p-6 text-center">
              <h4 className="text-white font-medium mb-2">Get a Personalized Implementation Plan</h4>
              <p className="text-gray-300 text-sm mb-4">
                Our team can help you create a tailored rollout strategy based on your specific situation.
              </p>
              <button
                onClick={onDemoClick}
                className="inline-block bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Book a Free Consultation
              </button>
            </div>

            <button
              onClick={() => {
                setScores({});
                setShowResults(false);
              }}
              className="w-full mt-4 text-lucy-medium-gray hover:text-lucy-dark-gray text-sm underline"
            >
              Retake Assessment
            </button>
          </div>
        )}
      </div>
    </ArticleSection>
  );
};

const HotelSoftwareImplementation = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  const toggleCheckItem = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Implement Hotel Software Without Disrupting Operations",
    "description": "A practical guide for hotel operations managers on implementing new software with phased rollouts, staff training strategies, and integration planning.",
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
        "url": "https://lucyanalytics.com/logo.png"
      }
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://lucyanalytics.com/articles/hotel-software-implementation"
    },
    "image": "https://lucyanalytics.com/hotel-software-implementation.jpg"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does hotel software implementation typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most cloud-based hotel software, implementation takes 1-3 weeks for basic setup. However, a comprehensive phased rollout with proper training typically spans 4-8 weeks depending on property size, number of integrations, and staff readiness."
        }
      },
      {
        "@type": "Question",
        "name": "What is the biggest cause of hotel software implementation failure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to Gartner, 45% of enterprise software implementations fail to deliver expected value. The most common causes are inadequate staff training, poor change management, rushing the timeline, and insufficient integration planning."
        }
      },
      {
        "@type": "Question",
        "name": "Should we do a big bang or phased rollout for hotel software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research shows phased rollouts result in 42% higher user adoption rates and 35% fewer implementation issues. A phased approach allows you to identify and resolve issues in a contained scope, collect feedback, and build momentum before expanding."
        }
      },
      {
        "@type": "Question",
        "name": "How do we train hotel staff on new software without disrupting operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schedule training just before each department goes live to keep information fresh. Use role-based training focused on specific workflows. Identify super-users in each department to provide peer support. Organizations offering ongoing learning see 28% higher adoption rates."
        }
      },
      {
        "@type": "Question",
        "name": "What ROI can hotels expect from new software implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hotels typically see 3-4 hours saved daily on administrative tasks, 10-15 point improvement in guest satisfaction scores, and technology investments typically pay back within 14-18 months. Properties also report 15-20% improvement in operational efficiency."
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
        "name": "Hotel Software Implementation Guide",
        "item": "https://lucyanalytics.com/articles/hotel-software-implementation"
      }
    ]
  };

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="How to Implement Hotel Software Without Disrupting Operations"
          subtitle="A practical guide for operations managers worried about change management. Learn phased rollout strategies, staff training approaches, and success metrics that leading hotels use to implement new technology smoothly."
          breadcrumbLabel="Hotel Software Implementation"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Organizations using <strong>phased rollouts</strong> experience 42% higher user adoption and 35% fewer implementation issues than big-bang deployments.</>,
            <>Cloud-based hotel software can be implemented in <strong>1-3 weeks</strong> for basic setup, with comprehensive rollouts spanning 4-8 weeks.</>,
            <>Hotels investing in proper implementation see <strong>3-4 hours saved daily</strong> on administrative tasks and 10-15 point improvements in guest satisfaction.</>,
            <>The key to success is <strong>role-based training</strong> scheduled just before go-live, with ongoing support from departmental super-users.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            <strong>Implementing hotel software</strong> is one of the most significant operational decisions a property can make. The Hotel &amp; Hospitality Management Software Market grew from $5.57 billion in 2025 to{" "}
            <a href="https://www.globenewswire.com/news-release/2026/01/19/3220768/0/en/Hotel-Hospitality-Management-Software-Markets-and-Competitive-Landscape-Analysis-2026-2032.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              $6.12 billion in 2026
            </a>
            , reflecting the industry&apos;s accelerating digital transformation. Yet for every successful implementation, there are stories of frustrated staff, abandoned systems, and wasted investments.
          </p>
          <p className="text-lucy-dark-gray">
            The difference between success and failure rarely comes down to the software itself. It&apos;s about how you implement it. This guide shares proven strategies from hotels that have navigated the transition smoothly—maintaining service quality while modernizing their operations.
          </p>
          <p className="text-lucy-dark-gray">
            Whether you&apos;re implementing a new property management system, communication platform like{" "}
            <Link to="/" className="text-blue-600 hover:underline">Lucy Team Communications</Link>, or housekeeping software, these principles will help you avoid common pitfalls and set your team up for success.
          </p>
        </ArticleSection>

        <ArticleSection id="why-implementations-fail" title="Why Hotel Software Implementations Fail">
          <p className="text-lucy-dark-gray">
            According to{" "}
            <a href="https://www.graphapp.ai/blog/understanding-phased-rollout-a-step-by-step-guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Gartner research
            </a>
            , 45% of enterprise software implementations fail to deliver expected value, and 70% of digital transformations fall short of their objectives. In hospitality specifically, these failures often trace back to predictable causes.
          </p>

          {/* Visual: Common Failure Points */}
          <div className="my-8">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">The Five Most Common Implementation Failures</h3>
            <div className="grid gap-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Rushing the Timeline",
                  description: "Pressure to launch quickly leads to skipped training and inadequate testing. Properties that rush implementation see 2-3x more support tickets in the first month.",
                  stat: "2-3x more issues",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Inadequate Training",
                  description: "Only one-third of users report satisfaction with training on all-in-one platforms. Undertrained staff revert to old methods or create workarounds.",
                  stat: "33% satisfaction rate",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Poor Integration Planning",
                  description: "69% of hospitality professionals say integrating new tech with legacy systems is their biggest challenge. Siloed systems create data gaps and duplicate work.",
                  stat: "69% cite as top challenge",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "No Change Champion",
                  description: "Without a dedicated internal advocate, implementation becomes just another IT project. Staff need a go-to person who understands both the technology and operations.",
                  stat: "Critical success factor",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Undefined Success Metrics",
                  description: "Without clear KPIs, there is no way to know if implementation succeeded. Teams need measurable goals tied to operational outcomes, not just go-live dates.",
                  stat: "Prevents accountability",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-lucy-black">{item.title}</h4>
                      <span className="flex-shrink-0 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-sm text-lucy-dark-gray mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            The good news? These failures are preventable. Research from{" "}
            <a href="https://www.graphapp.ai/blog/understanding-phased-rollout-a-step-by-step-guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              industry analysts
            </a>{" "}
            shows that organizations employing a phased rollout experience <strong>42% higher user adoption rates</strong> and <strong>35% fewer implementation issues</strong> compared to those attempting immediate company-wide deployment.
          </p>
        </ArticleSection>

        <ArticleSection id="phased-rollout-approach" title="The Phased Rollout Approach">
          <p className="text-lucy-dark-gray">
            A phased rollout means implementing your new software in controlled stages rather than switching everything at once. This approach has become the gold standard in hospitality technology for good reason: it dramatically reduces risk while building organizational confidence.
          </p>

          {/* Visual: Phase Timeline */}
          <div className="my-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">Recommended Implementation Phases</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-lucy-neon-yellow via-lucy-neon-yellow to-gray-200 hidden md:block" />

              <div className="space-y-6">
                {[
                  {
                    phase: "1",
                    name: "Preparation",
                    duration: "Week 1-2",
                    tasks: [
                      "Assemble implementation team with departmental representatives",
                      "Document current workflows and pain points",
                      "Define success metrics and KPIs",
                      "Configure system settings and integrations",
                      "Prepare training materials and communication plan",
                    ],
                  },
                  {
                    phase: "2",
                    name: "Pilot Launch",
                    duration: "Week 3-4",
                    tasks: [
                      "Start with one department (often front desk or management)",
                      "Train pilot group with hands-on sessions",
                      "Run parallel systems during transition",
                      "Collect daily feedback and adjust configuration",
                      "Document lessons learned for broader rollout",
                    ],
                  },
                  {
                    phase: "3",
                    name: "Expanded Rollout",
                    duration: "Week 5-6",
                    tasks: [
                      "Roll out to remaining departments in sequence",
                      "Deploy super-users to support each department",
                      "Conduct role-specific training sessions",
                      "Monitor adoption metrics and address resistance",
                      "Refine workflows based on pilot learnings",
                    ],
                  },
                  {
                    phase: "4",
                    name: "Optimization",
                    duration: "Week 7-8+",
                    tasks: [
                      "Decommission legacy systems",
                      "Advanced training for power features",
                      "Review KPIs against baseline",
                      "Identify automation opportunities",
                      "Plan for ongoing training and updates",
                    ],
                  },
                ].map((phase, index) => (
                  <div key={index} className="relative flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black z-10">
                      {phase.phase}
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="font-semibold text-lucy-black">{phase.name}</h4>
                        <span className="text-xs font-medium text-lucy-medium-gray bg-gray-100 px-2 py-1 rounded">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm text-lucy-dark-gray">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Why Phased Rollout Works</h3>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            {[
              {
                title: "Lower Risk",
                description: "Issues are identified and resolved within a contained scope before broader deployment. This mitigates risk and reduces widespread disruption.",
              },
              {
                title: "Progressive Learning",
                description: "Feedback from earlier phases informs improvements in later stages. This learning loop enhances user adoption and system optimization.",
              },
              {
                title: "Operational Continuity",
                description: "Business continues with minimal interruption, as legacy systems remain active in areas not yet transitioned.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-green-50 border border-green-100 rounded-xl p-5">
                <h4 className="font-semibold text-lucy-black mb-2">{benefit.title}</h4>
                <p className="text-sm text-lucy-dark-gray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ArticleSection>

        <ArticleSection id="staff-training" title="Staff Training Strategies That Work">
          <p className="text-lucy-dark-gray">
            Training is where many hotel implementations fall apart. With 67% of hotels reporting staffing shortages according to the{" "}
            <a href="https://www.netsuite.com/portal/resource/articles/erp/hospitality-industry-trends.shtml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              American Hotel &amp; Lodging Association
            </a>
            , finding time for training feels impossible. Yet organizations that provide ongoing learning opportunities see{" "}
            <strong>28% higher adoption rates</strong> than those offering only initial training.
          </p>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The Just-in-Time Training Model</h3>
          <p className="text-lucy-dark-gray">
            Rather than training everyone at once (and having them forget by go-live), schedule training just before each department&apos;s launch. This keeps information fresh and immediately applicable.
          </p>

          {/* Training comparison table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Training Approach</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Pros</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Cons</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">All-at-once classroom</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Efficient scheduling, consistent message</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">High forgetting rate, hard to cover all roles</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Small properties (&lt;50 staff)</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-4 border-b border-gray-100 font-medium">Just-in-time by department</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Fresh knowledge, role-specific, immediate practice</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">More sessions to schedule</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Most hotels (recommended)</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">Self-paced video only</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Flexible timing, replayable</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">No hands-on practice, easy to skip</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Refresher training, new hires</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Peer-to-peer with super-users</td>
                  <td className="p-4 text-sm text-lucy-dark-gray">Contextual learning, builds internal expertise</td>
                  <td className="p-4 text-sm text-lucy-dark-gray">Inconsistent quality, relies on super-user availability</td>
                  <td className="p-4 text-sm text-lucy-dark-gray">Ongoing support after initial training</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Building Your Super-User Network</h3>
          <p className="text-lucy-dark-gray">
            Super-users are staff members who receive advanced training and serve as go-to resources for their departments. They&apos;re critical for sustainable adoption.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-lucy-black mb-4">Super-User Selection Criteria</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { trait: "Respected by peers", why: "Their endorsement carries weight with colleagues" },
                { trait: "Comfortable with technology", why: "Can troubleshoot basic issues independently" },
                { trait: "Patient and helpful", why: "Will support struggling colleagues without frustration" },
                { trait: "Reliable schedule", why: "Available during critical implementation phases" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-lucy-black">{item.trait}</p>
                    <p className="text-sm text-lucy-medium-gray">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Platforms designed for non-desk workers, like{" "}
            <Link to="/articles/introducing-lucy-analytics" className="text-blue-600 hover:underline">Lucy</Link>
            , include built-in knowledge bases and video training libraries specifically to address the challenge of training shift-based, multilingual hotel teams.
          </p>
        </ArticleSection>

        <ArticleSection id="integration-planning" title="Integration Planning: Connecting Your Tech Stack">
          <p className="text-lucy-dark-gray">
            Modern hotels run on an ecosystem of connected systems: PMS, channel manager, revenue management, POS, accounting, door locks, and more. Your new software needs to work seamlessly within this ecosystem—and{" "}
            <a href="https://oysterlink.com/spotlight/digital-transformation-hospitality-industry/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              69% of hospitality professionals
            </a>{" "}
            cite integration with legacy systems as their biggest technology challenge.
          </p>

          {/* Integration mapping visual */}
          <div className="my-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">Common Hotel Software Integration Points</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { system: "Property Management System (PMS)", importance: "Critical", dataFlow: "Reservations, guest profiles, room status" },
                { system: "Channel Manager / CRS", importance: "Critical", dataFlow: "OTA bookings, rate updates, availability" },
                { system: "Revenue Management (RMS)", importance: "High", dataFlow: "Pricing recommendations, demand forecasts" },
                { system: "Point of Sale (POS)", importance: "High", dataFlow: "Charges, folio postings, F&B data" },
                { system: "Accounting / ERP", importance: "High", dataFlow: "Financial transactions, reporting" },
                { system: "Door Locks / Access Control", importance: "Medium", dataFlow: "Key codes, access permissions" },
              ].map((integration, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-lucy-black text-sm">{integration.system}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      integration.importance === "Critical"
                        ? "bg-red-100 text-red-700"
                        : integration.importance === "High"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {integration.importance}
                    </span>
                  </div>
                  <p className="text-xs text-lucy-medium-gray">{integration.dataFlow}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Integration Planning Checklist</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <ol className="space-y-4">
              {[
                {
                  step: "Map your current system landscape",
                  detail: "Document every system that touches hotel operations, including informal tools like spreadsheets and WhatsApp groups.",
                },
                {
                  step: "Identify data flows and dependencies",
                  detail: "Which systems feed into which? Where does duplicate data entry occur? What breaks if a system goes down?",
                },
                {
                  step: "Prioritize integration by business impact",
                  detail: "PMS integration is usually non-negotiable. Other integrations can often be phased in after initial go-live.",
                },
                {
                  step: "Test in a sandbox environment",
                  detail: "Execute initial data migration and integration testing before touching production systems.",
                },
                {
                  step: "Plan for edge cases",
                  detail: "Walk-ins, early arrivals, room moves, split folios—test the scenarios that happen daily in hotels.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-lucy-black">{item.step}</p>
                    <p className="text-sm text-lucy-dark-gray mt-1">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ArticleSection>

        <ArticleSection id="measuring-success" title="Measuring Implementation Success">
          <p className="text-lucy-dark-gray">
            How do you know if your implementation succeeded? Without clear metrics established upfront, there&apos;s no accountability and no way to justify the investment. The most successful hotels define success metrics before day one.
          </p>

          {/* ROI Statistics */}
          <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: "3-4 hrs", label: "Daily time saved on administrative tasks", source: "Hotelogix" },
              { stat: "10-15 pts", label: "Guest satisfaction score improvement", source: "Industry average" },
              { stat: "14 months", label: "Typical payback period for technology investment", source: "Vynta research" },
              { stat: "22%", label: "Increase in upselling conversion rates", source: "AI automation study" },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-lucy-neon-yellow/20 to-white border border-lucy-neon-yellow/30 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-lucy-black">{item.stat}</p>
                <p className="text-sm text-lucy-dark-gray mt-1">{item.label}</p>
                <p className="text-xs text-lucy-medium-gray mt-2">Source: {item.source}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Key Metrics to Track</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">Metric Category</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">What to Measure</th>
                  <th className="text-left p-4 font-semibold text-lucy-black border-b border-gray-200">When to Measure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">Adoption</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Daily active users, feature utilization, login frequency</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Weekly during rollout, monthly after</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">Efficiency</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Time saved on tasks, manual errors reduced, response times</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Baseline before, then 30/60/90 days</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">Guest Experience</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Satisfaction scores, review ratings, complaint resolution time</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Monthly comparison to baseline</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-100 font-medium">Financial</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Labor cost per occupied room, RevPAR, upsell conversion</td>
                  <td className="p-4 border-b border-gray-100 text-sm text-lucy-dark-gray">Quarterly review</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Staff Satisfaction</td>
                  <td className="p-4 text-sm text-lucy-dark-gray">Employee NPS, training feedback, support ticket volume</td>
                  <td className="p-4 text-sm text-lucy-dark-gray">Pulse survey at 30 and 90 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lucy-dark-gray mt-6">
            According to{" "}
            <a href="https://whatfix.com/blog/digital-adoption-in-hospitality/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Whatfix research
            </a>
            , 82% of hospitality companies report improved operational efficiency through digital transformation—but only when implementations are measured against clear baseline metrics.
          </p>
        </ArticleSection>

        {/* Interactive Readiness Assessment */}
        <ReadinessCalculator onDemoClick={handleDemoClick} />

        <ArticleSection id="implementation-checklist" title="Your Implementation Checklist">
          <p className="text-lucy-dark-gray">
            Use this comprehensive checklist to guide your hotel software implementation. Each phase builds on the previous, creating a foundation for long-term success.
          </p>

          {/* Downloadable/Printable Checklist */}
          <div className="my-8 bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-lucy-black">Complete Implementation Checklist</h3>
            </div>

            <div className="p-6 space-y-8">
              {[
                {
                  phase: "Pre-Implementation (2 weeks before)",
                  id: "pre",
                  items: [
                    "Assemble cross-functional implementation team",
                    "Document current workflows and pain points",
                    "Define 3-5 measurable success metrics with baselines",
                    "Identify 2-3 super-users per department",
                    "Create internal communication plan for staff",
                    "Verify technical infrastructure requirements",
                    "Schedule training sessions aligned with rollout phases",
                  ],
                },
                {
                  phase: "Configuration & Testing (Week 1)",
                  id: "config",
                  items: [
                    "Complete system configuration with vendor",
                    "Set up integrations with critical systems (PMS, etc.)",
                    "Import historical data (guest profiles, reservations)",
                    "Test common workflows in sandbox environment",
                    "Test edge cases (walk-ins, room moves, late checkouts)",
                    "Prepare FAQ document for common questions",
                  ],
                },
                {
                  phase: "Pilot Launch (Week 2-3)",
                  id: "pilot",
                  items: [
                    "Train pilot department with hands-on sessions",
                    "Launch pilot with parallel system running as backup",
                    "Conduct daily check-ins with pilot users",
                    "Document issues and resolutions",
                    "Gather feedback and adjust configuration",
                    "Celebrate pilot wins to build momentum",
                  ],
                },
                {
                  phase: "Full Rollout (Week 4-6)",
                  id: "rollout",
                  items: [
                    "Train remaining departments in sequence",
                    "Deploy super-users to provide peer support",
                    "Monitor adoption metrics daily",
                    "Address resistance with one-on-one support",
                    "Conduct mid-rollout retrospective",
                    "Begin decommissioning legacy systems",
                  ],
                },
                {
                  phase: "Optimization (Week 7+)",
                  id: "optimize",
                  items: [
                    "Complete legacy system decommission",
                    "Review success metrics against baselines",
                    "Conduct advanced training for power features",
                    "Identify and implement automation opportunities",
                    "Establish ongoing training cadence for new hires",
                    "Schedule quarterly review of system utilization",
                  ],
                },
              ].map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="font-semibold text-lucy-black mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-lucy-neon-yellow rounded text-sm flex items-center justify-center">
                      {sectionIndex + 1}
                    </span>
                    {section.phase}
                  </h4>
                  <ul className="space-y-2 ml-8">
                    {section.items.map((item, itemIndex) => {
                      const key = `${section.id}-${itemIndex}`;
                      return (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm text-lucy-dark-gray">
                          <button
                            type="button"
                            onClick={() => toggleCheckItem(key)}
                            className={`w-4 h-4 border rounded flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors cursor-pointer ${
                              checkedItems[key]
                                ? "bg-green-500 border-green-500"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {checkedItems[key] && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                          <span className={checkedItems[key] ? "line-through text-lucy-medium-gray" : ""}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="faq" title="Frequently Asked Questions">
          <div className="space-y-6">
            {[
              {
                question: "How long does hotel software implementation typically take?",
                answer: "For most cloud-based hotel software, implementation takes 1-3 weeks for basic setup. However, a comprehensive phased rollout with proper training typically spans 4-8 weeks depending on property size, number of integrations, and staff readiness. Rushing this timeline is one of the primary causes of implementation failure.",
              },
              {
                question: "What is the biggest cause of hotel software implementation failure?",
                answer: "According to Gartner, 45% of enterprise software implementations fail to deliver expected value. The most common causes are inadequate staff training (only 33% satisfaction rate reported), poor change management, rushing the timeline, and insufficient integration planning. All of these are preventable with proper planning.",
              },
              {
                question: "Should we do a big bang or phased rollout for hotel software?",
                answer: "Research consistently favors phased rollouts. Organizations using phased approaches experience 42% higher user adoption rates and 35% fewer implementation issues. A phased approach allows you to identify and resolve issues in a contained scope, collect feedback, and build organizational momentum before expanding to all departments.",
              },
              {
                question: "How do we train hotel staff on new software without disrupting operations?",
                answer: "The most effective approach is just-in-time training—scheduling training sessions just before each department goes live to keep information fresh. Use role-based training focused on specific workflows rather than generic overviews. Identify super-users in each department to provide ongoing peer support. Organizations offering ongoing learning see 28% higher adoption rates than those providing only initial training.",
              },
              {
                question: "What ROI can hotels expect from new software implementation?",
                answer: "Hotels with successful implementations typically see 3-4 hours saved daily on administrative tasks, 10-15 point improvement in guest satisfaction scores, and 15-20% improvement in operational efficiency. Technology investments typically pay back within 14-18 months when properly implemented. Properties also report increased upselling conversion (22% average) and reduced staffing pressure.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-lucy-black mb-3">{faq.question}</h3>
                <p className="text-lucy-dark-gray text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ArticleSection>

        <ArticleSection id="getting-started" title="Ready to Implement New Software at Your Hotel?">
          <p className="text-lucy-dark-gray">
            Implementing new hotel software does not have to mean weeks of chaos and frustrated staff. With the right approach—phased rollout, role-based training, clear success metrics—you can modernize your operations while maintaining the service quality your guests expect.
          </p>
          <p className="text-lucy-dark-gray">
            <Link to="/" className="text-blue-600 hover:underline">Lucy</Link> was built specifically for non-desk teams in hospitality and other frontline industries. Our guided implementation process includes dedicated onboarding support, multilingual training materials, and a mobile-first design that makes adoption effortless for staff who are always on their feet.
          </p>

          <div className="mt-8 bg-gradient-to-br from-lucy-dark-gray to-gray-900 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Get a Personalized Implementation Plan
                </h3>
                <p className="text-gray-300 mb-6">
                  Our team has helped hotels of all sizes implement communication and operations software smoothly. Book a free consultation to discuss your specific challenges and get a tailored rollout strategy.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Complimentary readiness assessment",
                    "Custom implementation timeline based on your property",
                    "Integration planning for your existing tech stack",
                    "Training approach designed for your team structure",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <svg className="w-5 h-5 text-lucy-neon-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleDemoClick}
                  className="inline-block bg-lucy-neon-yellow text-lucy-black px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Book Your Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/articles/introducing-lucy-analytics"
                className="group p-5 bg-white border border-gray-200 rounded-xl hover:border-lucy-neon-yellow transition-colors"
              >
                <span className="text-xs font-medium text-lucy-medium-gray">Product</span>
                <h4 className="font-semibold text-lucy-black mt-1 group-hover:text-lucy-dark-gray transition-colors">
                  Introducing Lucy: AI-Powered Communication for Hotels
                </h4>
                <p className="text-sm text-lucy-medium-gray mt-2">
                  Learn how Lucy is replacing WhatsApp chaos with streamlined hotel communication.
                </p>
              </Link>
              <Link
                to="/addons"
                className="group p-5 bg-white border border-gray-200 rounded-xl hover:border-lucy-neon-yellow transition-colors"
              >
                <span className="text-xs font-medium text-lucy-medium-gray">Features</span>
                <h4 className="font-semibold text-lucy-black mt-1 group-hover:text-lucy-dark-gray transition-colors">
                  Lucy Add-ons for Hospitality
                </h4>
                <p className="text-sm text-lucy-medium-gray mt-2">
                  Explore housekeeping planner, review management, and other hotel-specific tools.
                </p>
              </Link>
            </div>
          </div>
        </ArticleSection>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelSoftwareImplementation;
