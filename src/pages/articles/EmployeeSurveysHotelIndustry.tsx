import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "why-engagement-matters", label: "Why Engagement Matters" },
  { id: "pulse-vs-annual", label: "Pulse vs Annual Surveys" },
  { id: "best-practices", label: "Survey Best Practices" },
  { id: "key-questions", label: "Key Survey Questions" },
  { id: "acting-on-feedback", label: "Acting on Feedback" },
  { id: "cost-calculator", label: "Cost Calculator" },
  { id: "lucy-surveys", label: "Lucy Employee Surveys" },
  { id: "faqs", label: "FAQs" },
];

// Interactive Cost Calculator Component
const EngagementCostCalculator = ({ onDemoClick }: { onDemoClick: () => void }) => {
  const [employees, setEmployees] = useState(50);
  const [turnoverRate, setTurnoverRate] = useState(74);
  const [avgSalary, setAvgSalary] = useState(35000);
  const [showResults, setShowResults] = useState(false);

  const costPerHire = 5864; // Cornell study average
  const engagementImprovementPercent = 31; // Lower turnover with high engagement
  const profitabilityIncrease = 23; // Gallup stat

  const currentTurnoverCost = Math.round((employees * (turnoverRate / 100)) * costPerHire);
  const improvedTurnoverRate = turnoverRate * (1 - engagementImprovementPercent / 100);
  const improvedTurnoverCost = Math.round((employees * (improvedTurnoverRate / 100)) * costPerHire);
  const annualSavings = currentTurnoverCost - improvedTurnoverCost;
  const employeesRetained = Math.round((employees * (turnoverRate / 100)) - (employees * (improvedTurnoverRate / 100)));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-lucy-neon-yellow rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Engagement ROI Calculator</h3>
          <p className="text-gray-400 text-sm">See how much you could save by improving employee engagement</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Input: Number of Employees */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of employees
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="10"
              max="500"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <span className="w-16 text-right font-semibold text-lucy-neon-yellow">{employees}</span>
          </div>
        </div>

        {/* Input: Current Turnover Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Current annual turnover rate (%)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="20"
              max="150"
              value={turnoverRate}
              onChange={(e) => setTurnoverRate(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <span className="w-16 text-right font-semibold text-lucy-neon-yellow">{turnoverRate}%</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Industry average: 74%</p>
        </div>

        {/* Input: Average Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Average annual salary ($)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="25000"
              max="80000"
              step="1000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lucy-neon-yellow"
            />
            <span className="w-20 text-right font-semibold text-lucy-neon-yellow">{formatCurrency(avgSalary)}</span>
          </div>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="w-full bg-lucy-neon-yellow text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-300 transition-colors"
        >
          Calculate My Potential Savings
        </button>

        {showResults && (
          <div className="mt-6 space-y-4 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Current Annual Turnover Cost</p>
                <p className="text-2xl font-bold text-red-400">{formatCurrency(currentTurnoverCost)}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">Improved Turnover Cost</p>
                <p className="text-2xl font-bold text-green-400">{formatCurrency(improvedTurnoverCost)}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-lucy-neon-yellow/20 to-green-500/20 rounded-xl p-6 border border-lucy-neon-yellow/30">
              <div className="text-center">
                <p className="text-sm text-gray-300 mb-2">Potential Annual Savings</p>
                <p className="text-4xl font-bold text-lucy-neon-yellow mb-2">{formatCurrency(annualSavings)}</p>
                <p className="text-sm text-gray-400">by retaining {employeesRetained} more employees per year</p>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-lucy-neon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Based on Gallup research showing 31% lower turnover in engaged organizations and Cornell University data on replacement costs averaging $5,864 per employee.
              </p>
            </div>

            <button
              onClick={onDemoClick}
              className="block w-full text-center bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
            >
              See How Lucy Can Help You Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// FAQ Schema Data
const faqData = [
  {
    question: "How often should hotels conduct employee engagement surveys?",
    answer: "Most hospitality experts recommend quarterly pulse surveys (5-10 questions) supplemented by an annual comprehensive survey. This frequency allows you to track trends, act on feedback promptly, and avoid survey fatigue while maintaining response rates above 50%."
  },
  {
    question: "What is a good response rate for hotel employee surveys?",
    answer: "A response rate of 70% or higher is considered excellent for hotel employee surveys. The industry average is around 50-60%. To improve response rates, keep surveys short (under 10 questions), ensure anonymity, communicate how feedback will be used, and make surveys mobile-friendly for frontline staff."
  },
  {
    question: "Should hotel employee surveys be anonymous?",
    answer: "Yes, anonymous surveys typically yield more honest feedback. Research shows employees are more likely to share genuine concerns about management, workload, and workplace issues when their responses cannot be traced back to them. However, offering an optional contact field for follow-up can help address specific concerns."
  },
  {
    question: "What questions should be included in a hotel employee engagement survey?",
    answer: "Essential questions should cover: pride in working for the hotel, understanding of how work impacts guest experience, manager support and feedback, recognition and appreciation, work-life balance, career development opportunities, and team collaboration. Include at least one open-ended question for qualitative feedback."
  },
  {
    question: "How can hotels act on survey feedback effectively?",
    answer: "Follow the \"you said, we did\" approach: share results transparently with teams, identify 2-3 priority areas for improvement, create action plans with specific timelines, assign ownership for each initiative, and communicate progress regularly. Studies show this approach significantly reduces survey fatigue and increases future participation."
  }
];

const EmployeeSurveysHotelIndustry = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleDemoClick = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <>
    <ArticleLayout tocItems={tocItems}>
      <ArticleHero
        title="Hotel Employee Surveys: Measure and Improve Staff Engagement"
        subtitle="With 74% annual turnover devastating the hospitality industry, measuring employee engagement is no longer optional. Learn how pulse surveys can help you retain your best staff, reduce costs, and build a thriving hotel culture."
        breadcrumbLabel="Hotel Employee Surveys"
        publishDate="February 1, 2026"
        readTime="12 min read"
      />

      <KeyTakeaways
        items={[
          <>The hospitality industry faces a <strong>74% annual turnover rate</strong>—five times higher than other industries, costing hotels $5,864 per departed employee.</>,
          <>Hotels with engaged employees see <strong>31% lower turnover</strong> and <strong>23% higher profitability</strong> according to Gallup research.</>,
          <>Quarterly pulse surveys (5-10 questions) combined with annual comprehensive surveys provide the <strong>optimal feedback frequency</strong> for hotels.</>,
          <>The key to survey success is <strong>acting on feedback</strong>—organizations that communicate actions see significantly higher response rates and engagement.</>,
        ]}
      />

      <ArticleSection id="introduction" title="Introduction">
        <p className="text-lucy-dark-gray">
          <strong>Hotel employee surveys</strong> have become essential tools for hospitality leaders facing one of the industry&apos;s most persistent challenges: staff retention. With the leisure and hospitality sector recording quit rates <a href="https://www.hrdive.com/news/industries-with-highest-quit-rates/721216/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">204% above the national average</a> in 2024, understanding what drives your employees to stay—or leave—has never been more critical.
        </p>
        <p className="text-lucy-dark-gray">
          But traditional annual surveys are no longer enough. By the time you collect, analyze, and act on feedback from an annual survey, disengaged employees have already walked out the door. That&apos;s why leading hotels are turning to pulse surveys: shorter, more frequent check-ins that capture real-time insights and enable rapid response.
        </p>
        <p className="text-lucy-dark-gray">
          In this guide, we&apos;ll explore how to implement effective employee engagement surveys in your hotel, the key questions to ask frontline staff, and how platforms like <Link to="/" className="text-blue-600 hover:underline">Lucy Analytics</Link> make it easy to measure, benchmark, and improve engagement across your property.
        </p>
      </ArticleSection>

      <ArticleSection id="why-engagement-matters" title="Why Employee Engagement Matters in Hotels">
        <p className="text-lucy-dark-gray">
          Employee engagement isn&apos;t just an HR metric—it directly impacts your hotel&apos;s bottom line, guest satisfaction, and operational efficiency. The numbers tell a compelling story:
        </p>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">74%</div>
            <p className="text-sm text-red-800 font-medium">Annual turnover rate in hospitality</p>
            <p className="text-xs text-red-600 mt-2">Source: <a href="https://gemjournaltoday.com/5-reasons-why-the-hospitality-industry-sees-a-74-annual-turnover-rate/" target="_blank" rel="noopener noreferrer" className="underline">Gem Journal Today</a></p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-6">
            <div className="text-4xl font-bold text-amber-600 mb-2">$5,864</div>
            <p className="text-sm text-amber-800 font-medium">Average cost per employee departure</p>
            <p className="text-xs text-amber-600 mt-2">Source: <a href="https://www.cloudbeds.com/articles/hotel-turnover/" target="_blank" rel="noopener noreferrer" className="underline">Cornell University Study</a></p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">31%</div>
            <p className="text-sm text-blue-800 font-medium">Only 31% of hospitality staff feel engaged</p>
            <p className="text-xs text-blue-600 mt-2">Source: <a href="https://www.cultureamp.com/science/insights/hospitality" target="_blank" rel="noopener noreferrer" className="underline">Gallup/Culture Amp</a></p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">23%</div>
            <p className="text-sm text-green-800 font-medium">Higher profitability with engaged employees</p>
            <p className="text-xs text-green-600 mt-2">Source: <a href="https://matterapp.com/blog/employee-engagement-statistics" target="_blank" rel="noopener noreferrer" className="underline">Gallup Research</a></p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The Real Cost of Disengagement</h3>
        <p className="text-lucy-dark-gray">
          According to <a href="https://www.contactmonkey.com/blog/employee-engagement-statistics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">recent research</a>, employee disengagement costs the global economy up to $8.8 trillion yearly—approximately 9% of total global economic output. For hotels specifically, each disengaged employee who quits represents:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lucy-dark-gray mt-4">
          <li><strong>Recruitment costs:</strong> Job postings, interviewing time, and agency fees</li>
          <li><strong>Training costs:</strong> Averaging $821 per new hire in hospitality</li>
          <li><strong>Lost productivity:</strong> New employees take 3-6 months to reach full productivity</li>
          <li><strong>Guest experience impact:</strong> Inexperienced staff often lead to service inconsistencies</li>
          <li><strong>Team morale:</strong> High turnover creates additional stress for remaining employees</li>
        </ul>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-8">
          <p className="text-lucy-dark-gray italic text-center text-lg">
            &quot;Organizations with high employee engagement show 59% lower turnover and 23% higher profitability compared to disengaged workforces.&quot;
          </p>
          <p className="text-sm text-lucy-medium-gray text-center mt-2">— Gallup State of the Global Workplace Report</p>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Why Hospitality Faces Unique Challenges</h3>
        <p className="text-lucy-dark-gray">
          The hotel industry faces engagement challenges that other sectors simply don&apos;t experience at the same scale:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Challenge</th>
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Impact</th>
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Statistic</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Burnout</td>
                <td className="p-4 text-lucy-dark-gray">Direct cause of turnover</td>
                <td className="p-4 text-lucy-dark-gray font-medium">77% of workers experience burnout</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Wage stagnation</td>
                <td className="p-4 text-lucy-dark-gray">Staff seek better pay elsewhere</td>
                <td className="p-4 text-lucy-dark-gray font-medium">40% received no raise in 2024</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Limited career growth</td>
                <td className="p-4 text-lucy-dark-gray">Top reason for voluntary departure</td>
                <td className="p-4 text-lucy-dark-gray font-medium">47% cite as primary reason for leaving</td>
              </tr>
              <tr>
                <td className="p-4 text-lucy-dark-gray">Non-desk workforce</td>
                <td className="p-4 text-lucy-dark-gray">Harder to reach with traditional tools</td>
                <td className="p-4 text-lucy-dark-gray font-medium">80% of workforce is deskless</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-lucy-medium-gray">
          Sources: <a href="https://oysterlink.com/spotlight/high-turnover-in-hospitality-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OysterLink</a>, <a href="https://axonify.com/news/hospitality-survey-2024/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Axonify Hospitality Survey</a>
        </p>
      </ArticleSection>

      <ArticleSection id="pulse-vs-annual" title="Pulse Surveys vs. Annual Surveys: What Hotels Need">
        <p className="text-lucy-dark-gray">
          Understanding the difference between pulse surveys and annual engagement surveys is crucial for building an effective feedback strategy. Here&apos;s how they compare:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-lucy-neon-yellow/20">
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Feature</th>
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Pulse Surveys</th>
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Annual Surveys</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray font-medium">Frequency</td>
                <td className="p-4 text-lucy-dark-gray">Weekly, monthly, or quarterly</td>
                <td className="p-4 text-lucy-dark-gray">Once per year</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray font-medium">Length</td>
                <td className="p-4 text-lucy-dark-gray">5-10 questions</td>
                <td className="p-4 text-lucy-dark-gray">40-60 questions</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray font-medium">Completion time</td>
                <td className="p-4 text-lucy-dark-gray">2-3 minutes</td>
                <td className="p-4 text-lucy-dark-gray">15-30 minutes</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray font-medium">Focus</td>
                <td className="p-4 text-lucy-dark-gray">Specific topics or current issues</td>
                <td className="p-4 text-lucy-dark-gray">Comprehensive engagement assessment</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray font-medium">Action speed</td>
                <td className="p-4 text-lucy-dark-gray">Rapid response possible</td>
                <td className="p-4 text-lucy-dark-gray">Slower, more strategic changes</td>
              </tr>
              <tr>
                <td className="p-4 text-lucy-dark-gray font-medium">Best for</td>
                <td className="p-4 text-lucy-dark-gray">Trend tracking, quick wins</td>
                <td className="p-4 text-lucy-dark-gray">Benchmarking, strategic planning</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The Case for Quarterly Pulse Surveys</h3>
        <p className="text-lucy-dark-gray">
          According to <a href="https://www.cultureamp.com/blog/employee-pulse-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Culture Amp research</a>, quarterly pulse surveys have emerged as the optimal frequency for most hospitality organizations because:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lucy-dark-gray mt-4">
          <li>They align with existing reporting cycles</li>
          <li>They allow sufficient time to review data and implement actions</li>
          <li>They can be slightly longer (10-15 questions) for more comprehensive insights</li>
          <li>They avoid the &quot;survey fatigue&quot; that comes with weekly surveys</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium text-blue-800 mb-1">Key Insight</p>
              <p className="text-blue-700 text-sm">
                According to Achievers&apos; Engagement and Retention Report, <strong>41% of employees surveyed more than four times a year say they are very engaged</strong>—demonstrating the power of regular check-ins.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Avoiding Survey Fatigue</h3>
        <p className="text-lucy-dark-gray">
          The biggest risk with frequent surveys isn&apos;t the frequency itself—it&apos;s failing to act on the feedback. As <a href="https://www.cultureamp.com/blog/employee-pulse-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Culture Amp notes</a>, 90% of companies using continuous weekly or monthly surveys can&apos;t maintain response rates above 50% because employees stop believing their feedback matters.
        </p>
        <p className="text-lucy-dark-gray mt-4">
          The solution? A &quot;you said, we did&quot; approach that demonstrates concrete actions taken based on survey feedback. This builds trust and maintains engagement with future surveys.
        </p>
      </ArticleSection>

      <ArticleSection id="best-practices" title="Survey Best Practices for Hotel Teams">
        <p className="text-lucy-dark-gray">
          Implementing effective employee surveys in hotels requires understanding the unique challenges of frontline hospitality workers. Here are proven best practices:
        </p>

        <div className="space-y-6 mt-6">
          {/* Best Practice 1 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              1
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Make It Mobile-First</h4>
              <p className="text-lucy-dark-gray text-sm">
                Frontline hotel staff rarely sit at desks. Your surveys must be optimized for mobile devices. <a href="https://www.gohappyhub.com/solutions/engagement-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Research shows</a> that text-based surveys have a 98% open rate and are usually read within three minutes—perfect for busy hospitality workers.
              </p>
            </div>
          </div>

          {/* Best Practice 2 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              2
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Keep Surveys Under 3 Minutes</h4>
              <p className="text-lucy-dark-gray text-sm">
                Aim for 5-10 questions maximum for pulse surveys. Employees are more likely to complete short surveys, and the <a href="https://www.aihr.com/blog/employee-pulse-surveys/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AIHR research</a> shows most employees can complete a well-designed pulse survey in under three minutes.
              </p>
            </div>
          </div>

          {/* Best Practice 3 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              3
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Guarantee Anonymity</h4>
              <p className="text-lucy-dark-gray text-sm">
                Anonymous surveys encourage honest feedback. Employees are more likely to share concerns about management, workload, and workplace issues when responses cannot be traced back to them. This is especially important in hospitality where staff may fear repercussions.
              </p>
            </div>
          </div>

          {/* Best Practice 4 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              4
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Offer Multilingual Options</h4>
              <p className="text-lucy-dark-gray text-sm">
                Hotel teams are often multilingual. According to <a href="https://www.culturemonkey.io/employee-engagement/employee-engagement-in-food-and-beverage-industry/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Culture Monkey</a>, offering surveys in multiple languages ensures inclusivity and sends a clear message: &quot;We value your voice no matter what language you speak.&quot;
              </p>
            </div>
          </div>

          {/* Best Practice 5 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              5
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Time Surveys Strategically</h4>
              <p className="text-lucy-dark-gray text-sm">
                Avoid sending surveys during peak check-in/check-out times or during seasonal rushes. Mid-week, during slower shifts, tends to yield better response rates. Consider your property&apos;s unique rhythm when scheduling.
              </p>
            </div>
          </div>

          {/* Best Practice 6 */}
          <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black">
              6
            </div>
            <div>
              <h4 className="font-semibold text-lucy-black mb-2">Segment Results by Department</h4>
              <p className="text-lucy-dark-gray text-sm">
                Housekeeping, front desk, F&amp;B, and maintenance teams face different challenges. Analyzing results by department allows for targeted improvements rather than one-size-fits-all solutions.
              </p>
            </div>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="key-questions" title="Key Survey Questions for Hotel Employees">
        <p className="text-lucy-dark-gray">
          The questions you ask determine the value of your survey. Based on <a href="https://www.supersurvey.com/Employee-Engagement-Survey-For-Hotels" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">hospitality research</a> and industry best practices, here are the most impactful questions for hotel employee surveys:
        </p>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Core Engagement Questions</h3>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-xs font-bold text-lucy-black">1</span>
            <p className="text-lucy-dark-gray">&quot;I am proud to work at this hotel.&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-xs font-bold text-lucy-black">2</span>
            <p className="text-lucy-dark-gray">&quot;I understand how my work contributes to delivering great guest experiences.&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-xs font-bold text-lucy-black">3</span>
            <p className="text-lucy-dark-gray">&quot;My manager provides the support I need to succeed.&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-xs font-bold text-lucy-black">4</span>
            <p className="text-lucy-dark-gray">&quot;I feel my contributions are valued by my team.&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-lucy-neon-yellow rounded-full flex items-center justify-center text-xs font-bold text-lucy-black">5</span>
            <p className="text-lucy-dark-gray">&quot;I have the tools and equipment I need to do my job well.&quot;</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Manager &amp; Leadership Questions</h3>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">6</span>
            <p className="text-lucy-dark-gray">&quot;How often do you receive feedback from your manager?&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">7</span>
            <p className="text-lucy-dark-gray">&quot;How comfortable are you discussing workplace issues with your manager?&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">8</span>
            <p className="text-lucy-dark-gray">&quot;My manager or someone in management has shown genuine interest in my career aspirations.&quot;</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-medium text-amber-800 mb-1">High-Impact Question</p>
              <p className="text-amber-700 text-sm">
                According to <a href="https://www.cultureamp.com/science/insights/hospitality" target="_blank" rel="noopener noreferrer" className="underline">Culture Amp research</a>, the question with the biggest impact on retention is: &quot;My manager or someone else has communicated some clear actions based on recent employee survey results.&quot;
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Wellbeing &amp; Work-Life Balance</h3>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">9</span>
            <p className="text-lucy-dark-gray">&quot;Are you aware of the resources available for mental health support?&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">10</span>
            <p className="text-lucy-dark-gray">&quot;My schedule allows me to maintain a healthy work-life balance.&quot;</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">11</span>
            <p className="text-lucy-dark-gray">&quot;I feel safe while performing my daily job tasks.&quot;</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">Open-Ended Questions</h3>
        <p className="text-lucy-dark-gray">
          Always include at least one open-ended question for qualitative feedback:
        </p>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 mt-4">
          <p className="text-lucy-dark-gray italic">&quot;What is one thing we could do to make this a better place to work?&quot;</p>
        </div>
      </ArticleSection>

      <ArticleSection id="acting-on-feedback" title="Acting on Survey Feedback">
        <p className="text-lucy-dark-gray">
          Collecting survey data is only half the battle. The real value comes from taking action. Research consistently shows that <strong>employees who see action taken on feedback are significantly more likely to participate in future surveys and remain engaged</strong>.
        </p>

        <h3 className="text-xl font-semibold text-lucy-black mt-8 mb-4">The &quot;You Said, We Did&quot; Framework</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-lucy-neon-yellow"></div>
          <div className="space-y-6 pl-10">
            <div className="relative">
              <div className="absolute -left-10 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black text-sm">1</div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-lucy-black mb-2">Share Results Transparently</h4>
                <p className="text-lucy-dark-gray text-sm">Within 2 weeks of survey close, share high-level findings with all teams. Be honest about both positive results and areas needing improvement.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black text-sm">2</div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-lucy-black mb-2">Identify 2-3 Priority Areas</h4>
                <p className="text-lucy-dark-gray text-sm">Don&apos;t try to fix everything at once. Focus on the issues with the biggest impact on engagement and that are feasible to address.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black text-sm">3</div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-lucy-black mb-2">Create Action Plans</h4>
                <p className="text-lucy-dark-gray text-sm">For each priority area, develop specific actions with clear ownership, timelines, and success metrics.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black text-sm">4</div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-lucy-black mb-2">Communicate Progress</h4>
                <p className="text-lucy-dark-gray text-sm">Regularly update teams on what&apos;s being done. Even small wins demonstrate that feedback leads to change.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center font-bold text-lucy-black text-sm">5</div>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-lucy-black mb-2">Measure Impact</h4>
                <p className="text-lucy-dark-gray text-sm">Use the next pulse survey to track whether the actions taken have improved scores in priority areas.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-lucy-black mt-10 mb-4">Common Hotel Engagement Issues &amp; Solutions</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Survey Finding</th>
                <th className="text-left p-4 font-semibold text-lucy-black border-b">Potential Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Low scores on manager feedback</td>
                <td className="p-4 text-lucy-dark-gray">Implement weekly 5-minute check-ins using <Link to="/fördelar" className="text-blue-600 hover:underline">shift report tools</Link></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Feeling undervalued</td>
                <td className="p-4 text-lucy-dark-gray">Launch recognition program, highlight team wins in daily feeds</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Burnout concerns</td>
                <td className="p-4 text-lucy-dark-gray">Review scheduling practices, ensure adequate staffing during peak times</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-lucy-dark-gray">Communication gaps</td>
                <td className="p-4 text-lucy-dark-gray">Adopt unified team communication platform with <Link to="/addons" className="text-blue-600 hover:underline">automatic translation</Link></td>
              </tr>
              <tr>
                <td className="p-4 text-lucy-dark-gray">Lack of career growth</td>
                <td className="p-4 text-lucy-dark-gray">Create cross-training opportunities, document promotion pathways</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="cost-calculator" title="Calculate Your Engagement ROI">
        <p className="text-lucy-dark-gray mb-6">
          Wondering what better employee engagement could mean for your hotel&apos;s bottom line? Use our interactive calculator to estimate your potential savings from reduced turnover.
        </p>
        <EngagementCostCalculator onDemoClick={handleDemoClick} />
        <p className="text-sm text-lucy-medium-gray mt-4">
          This calculator uses industry benchmarks from <a href="https://www.cloudbeds.com/articles/hotel-turnover/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cornell University research</a> and <a href="https://matterapp.com/blog/employee-engagement-statistics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gallup engagement studies</a>. Your actual results may vary based on your specific circumstances.
        </p>
      </ArticleSection>

      <ArticleSection id="lucy-surveys" title="How Lucy Makes Employee Surveys Simple">
        <p className="text-lucy-dark-gray">
          Traditional survey tools weren&apos;t built for frontline hotel teams. That&apos;s why <Link to="/" className="text-blue-600 hover:underline">Lucy Analytics</Link> includes <strong>Employee &amp; Pulse Surveys</strong> as part of our team communication platform—designed specifically for non-desk workers.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-lucy-neon-yellow/10 via-white to-green-50 border border-lucy-neon-yellow/30 rounded-xl p-6">
            <div className="w-12 h-12 bg-lucy-neon-yellow rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lucy-black mb-2">Mobile-First Design</h4>
            <p className="text-sm text-lucy-dark-gray">
              Surveys built for staff on the go. Complete in under 3 minutes on any device—no login required.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h4 className="font-semibold text-lucy-black mb-2">Automatic Translation</h4>
            <p className="text-sm text-lucy-dark-gray">
              Every employee receives surveys in their preferred language. Responses are automatically translated for analysis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 border border-green-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lucy-black mb-2">Industry Benchmarking</h4>
            <p className="text-sm text-lucy-dark-gray">
              Compare your results against other Swedish hotels. See where you excel and where you need to improve.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lucy-black mb-2">Ready-Made Reports</h4>
            <p className="text-sm text-lucy-dark-gray">
              Get instant departmental breakdowns. Identify patterns across housekeeping, F&amp;B, front desk, and more.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Start Measuring Engagement Today</h3>
            <p className="text-gray-300 mb-6">
              Lucy&apos;s Employee &amp; Pulse Surveys integrate seamlessly with our <Link to="/fördelar" className="text-lucy-neon-yellow hover:underline">team communication platform</Link>. Get started with pre-built survey templates or customize your own.
            </p>
            <button
              onClick={handleDemoClick}
              className="inline-block bg-lucy-neon-yellow text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Book a Demo
            </button>
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
                <h3 className="font-medium text-lucy-black pr-4">{faq.question}</h3>
                <svg
                  className="w-5 h-5 text-lucy-medium-gray flex-shrink-0 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-lucy-dark-gray">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </ArticleSection>

      {/* Final CTA Section */}
      <div className="mt-12 p-8 bg-gradient-to-br from-lucy-neon-yellow/20 via-white to-green-50 rounded-2xl border border-lucy-neon-yellow/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-lucy-black mb-4">Ready to Transform Your Hotel&apos;s Culture?</h2>
          <p className="text-lucy-dark-gray mb-6">
            Join leading hotels using Lucy to measure engagement, reduce turnover, and build teams that deliver exceptional guest experiences. See how our Employee &amp; Pulse Surveys can work for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDemoClick}
              className="inline-block bg-lucy-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Book a Demo
            </button>
            <Link
              to="/addons"
              className="inline-block bg-white text-lucy-black font-semibold px-8 py-3 rounded-xl border border-gray-300 hover:border-lucy-black transition-colors"
            >
              Explore Add-ons
            </Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
    <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default EmployeeSurveysHotelIndustry;
