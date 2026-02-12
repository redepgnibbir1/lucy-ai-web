import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "hidden-costs", label: "The Hidden Cost" },
  { id: "types-of-incidents", label: "Types of Incidents" },
  { id: "shift-handover-problem", label: "Shift Handover Problem" },
  { id: "paper-vs-digital", label: "Paper vs. Digital" },
  { id: "benefits", label: "Benefits of Digital" },
  { id: "cost-calculator", label: "Cost Calculator" },
  { id: "how-lucy-helps", label: "How Lucy Helps" },
  { id: "implementation", label: "Implementation" },
  { id: "faqs", label: "FAQs" },
];

const faqData = [
  {
    question: "What should be included in a hotel incident report?",
    answer: "A comprehensive hotel incident report should include: date, time, and exact location of the incident; names and contact information of all parties involved; detailed description of what happened; names of witnesses; photos or video evidence if available; immediate actions taken; follow-up actions required; and signature of the reporting staff member. Digital systems can automatically capture timestamps and user information, reducing manual entry errors."
  },
  {
    question: "How long should hotels keep incident reports on file?",
    answer: "Hotels should retain incident reports for a minimum of 3-7 years, depending on local regulations and the nature of the incident. For incidents involving injuries or potential liability claims, many legal experts recommend keeping records for at least 7 years or longer. Digital incident management systems make long-term storage and retrieval much easier than paper-based systems."
  },
  {
    question: "What are the most common types of incidents in hotels?",
    answer: "The most common hotel incidents include: slip and fall accidents (accounting for nearly 30% of liability cases), guest complaints about room conditions or service, theft or security breaches, maintenance issues like plumbing or HVAC failures, food safety incidents, noise complaints, property damage, and medical emergencies. Proper documentation of all incident types helps identify patterns and prevent future occurrences."
  },
  {
    question: "How can hotels reduce incident-related liability?",
    answer: "Hotels can reduce liability by implementing proper incident reporting procedures, training staff on safety protocols, maintaining detailed documentation of all incidents and responses, conducting regular safety audits, using digital systems for consistent record-keeping, responding promptly to hazards, and establishing clear communication channels between shifts. Documentation that holds up in litigation is crucial for legal protection."
  },
  {
    question: "What is the ROI of digital incident management software?",
    answer: "Hotels implementing digital incident management typically see 25-30% improvement in work order completion rates, significant reduction in administrative time spent on documentation, better legal protection through consistent records, faster incident resolution times, and improved ability to identify and prevent recurring issues. The ROI varies by property size but often includes reduced liability costs, lower insurance premiums, and improved guest satisfaction scores."
  }
];

// JSON-LD Structured Data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Hotel Incident Management: How to Document, Learn, and Prevent Issues",
  "description": "Learn how digital incident reporting helps hotels prevent guest complaints, reduce liability risks, and improve operations with proper documentation systems.",
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
      "url": "https://lucyanalytics.com/lucy_logo.svg"
    }
  },
  "datePublished": "2026-02-01",
  "dateModified": "2026-02-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://lucyanalytics.com/articles/hotel-incident-management"
  },
  "image": "https://lucyanalytics.com/og-incident-management.jpg"
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
      "name": "Hotel Incident Management",
      "item": "https://lucyanalytics.com/articles/hotel-incident-management"
    }
  ]
};

// Interactive Cost Calculator Component
const IncidentCostCalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [rooms, setRooms] = useState(100);
  const [incidentsPerMonth, setIncidentsPerMonth] = useState(15);
  const [hoursPerIncident, setHoursPerIncident] = useState(1.5);
  const [showResults, setShowResults] = useState(false);

  const hourlyWage = 18; // Average hourly wage for hotel staff
  const paperInefficiencyMultiplier = 1.4; // Paper takes 40% more time
  const liabilityRiskReduction = 0.35; // 35% reduction in liability risk
  const averageLiabilityCost = 15000; // Average cost per liability incident

  const currentMonthlyCost = incidentsPerMonth * hoursPerIncident * hourlyWage * paperInefficiencyMultiplier;
  const digitalMonthlyCost = incidentsPerMonth * hoursPerIncident * hourlyWage;
  const monthlySavings = currentMonthlyCost - digitalMonthlyCost;
  const annualSavings = monthlySavings * 12;

  const estimatedLiabilityIncidents = Math.ceil(incidentsPerMonth * 0.05 * 12); // 5% become liability issues
  const liabilitySavings = estimatedLiabilityIncidents * averageLiabilityCost * liabilityRiskReduction;

  const totalAnnualBenefit = annualSavings + liabilitySavings;

  const handleCalculate = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setRooms(100);
    setIncidentsPerMonth(15);
    setHoursPerIncident(1.5);
  };

  return (
    <ArticleSection id="cost-calculator" title="Calculate Your Incident Management Costs">
      <p className="text-lucy-dark-gray mb-6">
        Use this interactive calculator to estimate how much poor incident documentation might be costing your hotel—and what you could save with a digital system.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
        {!showResults ? (
          <>
            <div className="space-y-8">
              {/* Rooms Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lucy-black font-medium">Number of Rooms</label>
                  <span className="text-2xl font-bold text-lucy-black">{rooms}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
                />
                <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
                  <span>20 rooms</span>
                  <span>500 rooms</span>
                </div>
              </div>

              {/* Incidents Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lucy-black font-medium">Average Incidents per Month</label>
                  <span className="text-2xl font-bold text-lucy-black">{incidentsPerMonth}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={incidentsPerMonth}
                  onChange={(e) => setIncidentsPerMonth(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
                />
                <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
                  <span>5 incidents</span>
                  <span>100 incidents</span>
                </div>
              </div>

              {/* Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lucy-black font-medium">Hours Spent per Incident (Documentation)</label>
                  <span className="text-2xl font-bold text-lucy-black">{hoursPerIncident}h</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4"
                  step="0.5"
                  value={hoursPerIncident}
                  onChange={(e) => setHoursPerIncident(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
                />
                <div className="flex justify-between text-sm text-lucy-medium-gray mt-1">
                  <span>30 min</span>
                  <span>4 hours</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full mt-8 bg-lucy-neon-yellow text-lucy-black px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-lg"
            >
              Calculate My Potential Savings
            </button>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-lucy-black mb-2">Your Estimated Annual Savings</h3>
              <p className="text-lucy-medium-gray">Based on your inputs, here is what you could save with digital incident management</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {/* Time Savings */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {Math.round(incidentsPerMonth * hoursPerIncident * 0.4 * 12)}h
                </div>
                <div className="text-sm text-green-600 font-medium">Hours Saved Annually</div>
              </div>

              {/* Cost Savings */}
              <div className="bg-gradient-to-br from-lucy-neon-yellow/20 to-lucy-neon-yellow/40 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-lucy-black mb-1">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-sm text-lucy-dark-gray font-medium">Labor Cost Savings</div>
              </div>

              {/* Risk Reduction */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  ${liabilitySavings.toLocaleString()}
                </div>
                <div className="text-sm text-blue-600 font-medium">Est. Liability Reduction</div>
              </div>
            </div>

            {/* Total */}
            <div className="bg-lucy-black rounded-xl p-6 text-center mb-6">
              <div className="text-lucy-medium-gray mb-2">Estimated Total Annual Benefit</div>
              <div className="text-4xl md:text-5xl font-bold text-lucy-neon-yellow">
                ${totalAnnualBenefit.toLocaleString()}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-lucy-medium-gray text-center">
                <strong>Note:</strong> These estimates are based on industry averages. Actual savings may vary based on your specific operations, incident types, and current processes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="flex-1 bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
              >
                See How Lucy Can Help
              </button>
              <button
                onClick={resetCalculator}
                className="flex-1 border border-gray-300 text-lucy-dark-gray px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Recalculate
              </button>
            </div>
          </>
        )}
      </div>
    </ArticleSection>
  );
};

// FAQ Accordion Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ArticleSection id="faqs" title="Frequently Asked Questions">
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-lucy-black pr-4">{faq.question}</h3>
              <svg
                className={`w-5 h-5 text-lucy-medium-gray flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="p-5 pt-0 text-lucy-dark-gray">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </ArticleSection>
  );
};

const HotelIncidentManagement = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const handleDemoClick = () => { setIsCalendlyOpen(true); };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <><ArticleLayout tocItems={tocItems}>
        <ArticleHero
          title="Hotel Incident Management: How to Document, Learn, and Prevent Issues"
          subtitle="Discover why proper incident documentation is crucial for hotel operations—and how digital systems can reduce liability, improve guest satisfaction, and help you learn from every issue."
          breadcrumbLabel="Hotel Incident Management"
          publishDate="February 1, 2026"
          readTime="12 min read"
        />

        <KeyTakeaways
          items={[
            <>Up to <strong>80% of serious workplace errors</strong> involve miscommunication during shift transitions—proper incident documentation bridges these gaps.</>,
            <>Slip and fall incidents account for <strong>nearly 30% of hotel liability cases</strong>, making thorough documentation essential for legal protection.</>,
            <>Hotels using digital incident management see <strong>25-30% improvement</strong> in work order completion rates and faster resolution times.</>,
            <>A single negative review can result in a <strong>22% reduction in potential bookings</strong>—proper incident handling protects your reputation.</>,
          ]}
        />

        <ArticleSection id="introduction" title="Introduction">
          <p className="text-lucy-dark-gray">
            Every hotel experiences incidents. From a guest slipping in the lobby to a maintenance issue that disrupts a stay, how your team documents, responds to, and learns from these events can mean the difference between a minor hiccup and a major crisis. Effective <strong>hotel incident management</strong> using modern <strong>hotel communication software</strong> is no longer optional—it is essential for protecting your property, your guests, and your reputation.
          </p>
          <p className="text-lucy-dark-gray">
            Yet many hotels still rely on paper forms, scattered WhatsApp messages, or verbal reports that disappear into the ether. This approach creates dangerous information gaps, especially during shift changes when critical details can be lost. In this comprehensive guide, we will explore why proper incident documentation matters, the true cost of poor management, and how digital solutions are transforming the way hotels handle everything from guest complaints to safety incidents.
          </p>
        </ArticleSection>

        <ArticleSection id="hidden-costs" title="The Hidden Cost of Poor Incident Documentation">
          <p className="text-lucy-dark-gray">
            Poor incident management does not just create operational headaches—it directly impacts your bottom line. The financial consequences extend far beyond the immediate cost of resolving individual issues.
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-xl p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">$2B+</div>
              <div className="text-lucy-dark-gray font-medium">Annual Industry Cost</div>
              <p className="text-sm text-lucy-medium-gray mt-2">
                The hospitality industry spends over $2 billion annually on slip and fall-related injuries alone, with costs increasing approximately 10% per year according to{" "}
                <a
                  href="https://claraanalytics.com/blog/5-common-hospitality-insurance-claims-and-how-to-mitigate-them/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  industry insurance reports
                </a>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-600 mb-2">30%</div>
              <div className="text-lucy-dark-gray font-medium">Liability Cases</div>
              <p className="text-sm text-lucy-medium-gray mt-2">
                Slip and fall incidents account for nearly 30% of all hotel liability cases, making them a leading cause of expensive lawsuits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">22%</div>
              <div className="text-lucy-dark-gray font-medium">Booking Reduction</div>
              <p className="text-sm text-lucy-medium-gray mt-2">
                A single negative review—often the result of poorly handled incidents—can result in a 22% reduction in potential bookings according to{" "}
                <a
                  href="https://deliverback.com/blog/the-cost-of-a-bad-review-for-hotels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  hospitality research
                </a>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">79%</div>
              <div className="text-lucy-dark-gray font-medium">Guest Avoidance</div>
              <p className="text-sm text-lucy-medium-gray mt-2">
                79% of travelers will not book a hotel with more than three negative reviews—making incident prevention and proper handling critical.
              </p>
            </div>
          </div>

          <p className="text-lucy-dark-gray">
            Beyond these direct costs, poor documentation creates operational inefficiencies that compound over time. Mid-sized hotels can lose <strong>$50,000 or more yearly</strong> from various operational inefficiencies, and inadequate incident tracking is often a significant contributor.
          </p>
        </ArticleSection>

        <ArticleSection id="types-of-incidents" title="Types of Hotel Incidents That Require Documentation">
          <p className="text-lucy-dark-gray">
            Hotels face a wide range of incidents that require proper documentation. Understanding the categories helps ensure nothing falls through the cracks.
          </p>

          {/* Incident Types Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-lucy-black text-white">
                  <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Category</th>
                  <th className="px-4 py-3 text-left font-semibold">Examples</th>
                  <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-4 font-medium text-lucy-black">Safety Incidents</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Slips and falls, burns, cuts, equipment injuries</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Critical</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 font-medium text-lucy-black">Guest Complaints</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Service issues, room problems, noise, cleanliness</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">High</span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-4 font-medium text-lucy-black">Security Issues</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Theft, unauthorized access, suspicious activity</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Critical</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 font-medium text-lucy-black">Maintenance Failures</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">HVAC issues, plumbing, electrical, elevator problems</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">High</span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-4 font-medium text-lucy-black">Property Damage</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Room damage, vehicle incidents, vandalism</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Medium</span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-4 font-medium text-lucy-black">Medical Emergencies</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Guest illness, allergic reactions, injuries</td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Critical</span>
                  </td>
                </tr>
                <tr className="bg-white rounded-b-lg">
                  <td className="px-4 py-4 font-medium text-lucy-black rounded-bl-lg">Food Safety</td>
                  <td className="px-4 py-4 text-lucy-dark-gray">Contamination, allergies, temperature violations</td>
                  <td className="px-4 py-4 rounded-br-lg">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">Critical</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lucy-dark-gray">
            Each category requires specific documentation approaches, but all share a common need: <strong>accurate, timely, and accessible records</strong> that can inform both immediate response and long-term prevention strategies.
          </p>
        </ArticleSection>

        <ArticleSection id="shift-handover-problem" title="The Shift Handover Problem">
          <p className="text-lucy-dark-gray">
            One of the biggest challenges in hotel incident management is ensuring information flows smoothly between shifts. Research shows that <strong>up to 80% of serious workplace errors involve miscommunication during shift transitions</strong>—a statistic that has profound implications for hotels operating 24/7.
          </p>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 my-8 text-white">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">The 40-Minute Problem</h4>
                <p className="text-gray-300">
                  According to{" "}
                  <a
                    href="https://www.myshyft.com/blog/shift-handovers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lucy-neon-yellow hover:underline"
                  >
                    workforce management research
                  </a>, shift transitions without proper handoffs can add up to <strong className="text-white">40 minutes of wasted time per employee per shift</strong>. For a hotel with multiple departments operating around the clock, this adds up to thousands of lost hours annually.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Common Handover Failures</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h4 className="font-medium text-lucy-black">Information Omission</h4>
                <p className="text-sm text-lucy-medium-gray">Critical details left unshared due to time pressure or assumptions</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h4 className="font-medium text-lucy-black">Verbal-Only Communication</h4>
                <p className="text-sm text-lucy-medium-gray">Reliance on spoken handoffs without written backup creates information loss</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h4 className="font-medium text-lucy-black">End-of-Shift Fatigue</h4>
                <p className="text-sm text-lucy-medium-gray">Tired employees are more likely to forget or misremember details</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <h4 className="font-medium text-lucy-black">Lack of Standardization</h4>
                <p className="text-sm text-lucy-medium-gray">Inconsistent approaches lead to variable information quality</p>
              </div>
            </div>
          </div>

          <p className="text-lucy-dark-gray mt-6">
            The good news? Organizations that implement structured handoff protocols report <strong>up to 65% reduction in transition-related errors</strong>. Digital incident management systems make this standardization possible and sustainable.
          </p>
        </ArticleSection>

        <ArticleSection id="paper-vs-digital" title="Paper vs. Digital: A Clear Comparison">
          <p className="text-lucy-dark-gray">
            Many hotels still rely on paper-based incident reporting or informal digital tools like WhatsApp. Here is how these approaches compare to purpose-built digital incident management systems.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-4 text-left font-semibold text-lucy-black">Feature</th>
                  <th className="px-4 py-4 text-center font-semibold text-lucy-black">Paper/WhatsApp</th>
                  <th className="px-4 py-4 text-center font-semibold text-lucy-black bg-lucy-neon-yellow/20">Digital System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Real-time access</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Automatic timestamps</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Photo/video attachments</td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-yellow-600 font-medium">Limited</span>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Searchable history</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Pattern recognition</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Automatic translation</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Legal-grade audit trail</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Task assignment & tracking</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-lucy-dark-gray">Management dashboards</td>
                  <td className="px-4 py-4 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center bg-lucy-neon-yellow/10">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lucy-dark-gray">
            The limitations of paper-based systems become especially apparent during legal proceedings.{" "}
            <a
              href="https://www.incidentxpress.com/submit-hotel-incident-reports-w-software-for-hotel-industry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Industry experts note
            </a>{" "}
            that digital incident reporting software helps protect businesses from liability by tracking details that will hold up in litigation situations—something paper forms and informal messaging simply cannot guarantee.
          </p>
        </ArticleSection>

        <ArticleSection id="benefits" title="Key Benefits of Digital Incident Reporting">
          <p className="text-lucy-dark-gray">
            Moving to a digital incident management system delivers measurable improvements across multiple dimensions of hotel operations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">25-30% More Work Orders Completed</h3>
              <p className="text-lucy-medium-gray text-sm">
                Hotels using CMMS software see significant improvements in work order completion rates, with automatic updates and real-time tracking ensuring nothing falls through the cracks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">Legal Protection</h3>
              <p className="text-lucy-medium-gray text-sm">
                Digital records with timestamps, user attribution, and complete audit trails provide documentation that stands up in legal proceedings and insurance claims.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">Pattern Recognition</h3>
              <p className="text-lucy-medium-gray text-sm">
                Digital systems can analyze incident data to identify trends—like recurring maintenance issues in specific rooms or peak times for guest complaints—enabling proactive prevention.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">Multilingual Support</h3>
              <p className="text-lucy-medium-gray text-sm">
                With diverse hotel teams often speaking multiple languages, automatic translation ensures every team member can report and read incidents in their native language.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">Faster Response Times</h3>
              <p className="text-lucy-medium-gray text-sm">
                Instant notifications alert the right people immediately when incidents are reported, dramatically reducing response times compared to paper forms or phone calls.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lucy-black mb-2">Regulatory Compliance</h3>
              <p className="text-lucy-medium-gray text-sm">
                Digital systems can automate OSHA 300, 300A, and 301 reporting requirements, helping hotels stay compliant while reducing the administrative burden on staff.
              </p>
            </div>
          </div>
        </ArticleSection>

        <IncidentCostCalculator onDemoClick={handleDemoClick} />

        <ArticleSection id="how-lucy-helps" title="How Lucy Streamlines Hotel Incident Reporting">
          <p className="text-lucy-dark-gray">
            <Link to="/articles/introducing-lucy-analytics" className="text-blue-600 hover:underline">Lucy</Link> is an AI-powered communication platform built specifically for hotel teams. Unlike generic tools that were not designed for hospitality operations, Lucy addresses the unique challenges hotels face with incident management and team communication.
          </p>

          <div className="bg-gradient-to-br from-lucy-neon-yellow/10 via-white to-gray-50 border border-lucy-neon-yellow/30 rounded-2xl p-6 md:p-8 my-8">
            <h3 className="text-xl font-semibold text-lucy-black mb-6">Lucy Incident Management Features</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black">Structured Incident Reporting</h4>
                  <p className="text-lucy-medium-gray text-sm mt-1">
                    Easy-to-use forms guide staff through capturing all essential details, with photo attachments and automatic timestamps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black">AI-Powered Shift Reports</h4>
                  <p className="text-lucy-medium-gray text-sm mt-1">
                    Lucy automatically summarizes shift activities, ensuring nothing gets lost during handovers. Learn more about our{" "}
                    <Link to="/addons" className="text-blue-600 hover:underline">add-on features</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black">Real-Time Translation</h4>
                  <p className="text-lucy-medium-gray text-sm mt-1">
                    Every incident report is automatically translated so all team members can read and respond in their preferred language.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black">Work Order Integration</h4>
                  <p className="text-lucy-medium-gray text-sm mt-1">
                    Incidents can automatically trigger work orders, assigned to the right team members with tracking through completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lucy-black">Daily Feed & Analytics</h4>
                  <p className="text-lucy-medium-gray text-sm mt-1">
                    Management dashboards provide visibility into incident trends, resolution times, and team performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-6">
            <p className="text-lucy-dark-gray italic text-center">
              &ldquo;Lucy replaces scattered WhatsApp groups with one professional platform where your entire team can communicate, manage tasks, and handle incidents—all in one place.&rdquo;
            </p>
          </div>
        </ArticleSection>

        <ArticleSection id="implementation" title="Implementation Best Practices">
          <p className="text-lucy-dark-gray">
            Successfully transitioning to digital incident management requires thoughtful planning. Here is a proven approach based on{" "}
            <a
              href="https://hospitality.institute/BHA505/digital-hotel-record-keeping-modern-systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              hospitality industry best practices
            </a>.
          </p>

          <div className="my-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                1
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black text-lg">Audit Current Processes</h4>
                <p className="text-lucy-medium-gray mt-1">
                  Document your existing incident reporting workflow, including how information flows between departments and shifts. Identify pain points and gaps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                2
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black text-lg">Define Incident Categories</h4>
                <p className="text-lucy-medium-gray mt-1">
                  Create clear categories and severity levels for your property. This standardization ensures consistent reporting across all team members.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                3
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black text-lg">Train All Staff</h4>
                <p className="text-lucy-medium-gray mt-1">
                  Mobile-first systems like Lucy require minimal training, but ensure every team member understands when and how to report incidents.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                4
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black text-lg">Phased Rollout</h4>
                <p className="text-lucy-medium-gray mt-1">
                  Start with one department or shift before expanding. This allows you to refine processes and build internal champions who can support wider adoption.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
                5
              </div>
              <div>
                <h4 className="font-semibold text-lucy-black text-lg">Establish Review Cadence</h4>
                <p className="text-lucy-medium-gray mt-1">
                  Set up regular reviews of incident data with department heads. Use insights to drive preventive measures and recognize teams with improving metrics.
                </p>
              </div>
            </div>
          </div>
        </ArticleSection>

        <FAQSection />

        {/* Final CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-lucy-black via-gray-900 to-lucy-black rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Hotel&apos;s Incident Management?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            See how Lucy can help your hotel document incidents properly, learn from patterns, and prevent issues before they impact guests. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDemoClick}
              className="inline-block bg-lucy-neon-yellow text-lucy-black px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-lg"
            >
              Book a Demo
            </button>
            <Link
              to="/"
              className="inline-block border border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Learn More About Lucy
            </Link>
          </div>
        </div>
      </ArticleLayout>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HotelIncidentManagement;
