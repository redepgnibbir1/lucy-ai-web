import { Link } from "react-router-dom";
import { Animate } from "@/components/ui/animate";
import { fadeInUp } from "@/lib/utils";

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: string;
}

const ArticleCard = ({ slug, title, description, publishDate, readTime, category }: ArticleCardProps) => {
  return (
    <Link
      to={`/articles/${slug}`}
      className="group block bg-white rounded-lg border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-lucy-neon-yellow/20 text-lucy-dark-gray rounded-full">
            {category}
          </span>
          <span className="text-sm text-lucy-medium-gray">{publishDate}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-lucy-black mb-3 group-hover:text-lucy-dark-gray transition-colors">
          {title}
        </h2>
        <p className="text-lucy-medium-gray mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-lucy-medium-gray">{readTime}</span>
          <span className="text-sm font-medium text-lucy-black group-hover:text-lucy-neon-yellow transition-colors flex items-center gap-1">
            Read more
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

const Articles = () => {
  const articles = [
    {
      slug: "ai-guest-experience",
      title: "7 Ways AI is Transforming Hotel Guest Experience in 2026",
      description: "Discover how AI-powered tools are revolutionizing hotel guest experiences—from smart shift reports to predictive housekeeping. Includes ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "AI & Technology"
    },
    {
      slug: "automate-hotel-guest-communication",
      title: "How to Automate Hotel Guest Communication Without Losing the Personal Touch",
      description: "Learn how to automate pre-arrival, during-stay, and post-stay guest communication while maintaining personalization. Includes ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Guest Experience"
    },
    {
      slug: "hotel-software-cost",
      title: "Hotel Software Cost: Complete Pricing Guide for 2026",
      description: "Understand hotel software pricing models, hidden costs, and how to budget for technology investments. Includes ROI calculator and comparison table.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Guide"
    },
    {
      slug: "hotel-software-trends-2026",
      title: "Hotel Software Trends 2026: What's Changing and Why It Matters",
      description: "Explore the key hotel technology trends for 2026—from AI transformation to unified platforms. Includes tech readiness calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Trends"
    },
    {
      slug: "choose-hotel-management-software",
      title: "How to Choose Hotel Management Software: A Complete Guide",
      description: "A step-by-step guide to selecting the right hotel management software. Includes feature comparison, ROI calculator, and evaluation checklist.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Guide"
    },
    {
      slug: "whatsapp-for-hotels",
      title: "WhatsApp for Hotels: Why It's Not Enough for Professional Operations",
      description: "Understand the GDPR, operational, and hidden cost issues with using WhatsApp for hotel communication. Includes cost calculator and alternatives.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Communication"
    },
    {
      slug: "hotel-communication-slack-teams",
      title: "Why Slack and Microsoft Teams Don't Work for Hotels",
      description: "Discover why generic communication tools fail in hospitality and what hotels need instead. Includes ROI calculator and feature comparison.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Communication"
    },
    {
      slug: "hotel-shift-handovers",
      title: "Hotel Shift Handovers: How to Avoid Information Gaps with AI",
      description: "Learn how AI-powered shift reports eliminate communication gaps between hotel shifts, reducing errors by 37% and improving guest satisfaction by 23%. Includes interactive cost calculator.",
      publishDate: "February 1, 2026",
      readTime: "10 min read",
      category: "Operations"
    },
    {
      slug: "hotel-staff-onboarding",
      title: "Hotel Staff Onboarding: Cut Training Time 50% with Digital Knowledge Sharing",
      description: "Hospitality faces 40-74% annual turnover. Learn how digital knowledge bases help hotels reduce onboarding time by 50%, improve retention, and build stronger teams. Includes interactive cost calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Training"
    },
    {
      slug: "what-is-hotel-software",
      title: "What is Hotel Software and Why Does Your Property Need It?",
      description: "A comprehensive guide to hotel technology in 2026: understand PMS, revenue management, channel managers, and AI-powered communication tools. Includes market statistics, comparison tables, and interactive ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Guide"
    },
    {
      slug: "ai-conference-planning-hotels",
      title: "AI Conference Planning for Hotels: The Future of Meeting Sales",
      description: "Discover how AI is transforming hotel conference planning in 2026. Learn about automated proposal generation, guest preference tracking, collaborative planning tools, and calculate your potential ROI.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "MICE"
    },
    {
      slug: "hotel-incident-management",
      title: "Hotel Incident Management: How to Document, Learn, and Prevent Issues",
      description: "Discover why proper incident documentation is crucial for hotel operations—and how digital systems can reduce liability, improve guest satisfaction, and help you learn from every issue.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Operations"
    },
    {
      slug: "hotel-communication-software-comparison",
      title: "Best Hotel Management Software: Lucy vs Traditional Communication Tools",
      description: "An honest comparison of hotel communication solutions—WhatsApp, Slack, Microsoft Teams, and purpose-built platforms like Lucy. Discover which software best fits your property.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Comparison"
    },
    {
      slug: "hotel-review-management",
      title: "Hotel Review Management: How AI Helps You Respond Faster and Better",
      description: "Learn how AI-powered reputation management software helps hotels achieve 100% response rates, improve guest satisfaction, and turn reviews into revenue. Includes interactive ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Reputation Management"
    },
    {
      slug: "hotel-communication-guide",
      title: "Hotel Communication: The Complete Guide From Chaos to Clarity",
      description: "Learn how leading hotels transform internal communication to reduce errors by 65%, cut turnover costs, and improve guest satisfaction. Includes interactive cost calculator and shift handover checklist.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Communication"
    },
    {
      slug: "housekeeping-efficiency",
      title: "Housekeeping Efficiency: From Paper to Digital Planning",
      description: "How leading hotels are reducing labor costs by 21% and guest complaints by 35% by replacing paper logs with digital housekeeping management. Includes interactive ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Operations"
    },
    {
      slug: "hotel-software-implementation",
      title: "How to Implement Hotel Software Without Disrupting Operations",
      description: "A practical guide for operations managers: phased rollout strategies, staff training approaches, and success metrics. Includes interactive readiness assessment and complete implementation checklist.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Implementation"
    },
    {
      slug: "multilingual-hotel-staff",
      title: "Multilingual Hotel Staff: How to Solve the Communication Challenge",
      description: "Hotels with 5+ languages face unique communication hurdles. Learn how AI-powered translation reduces $2,500-per-incident costs and transforms operations. Includes interactive cost calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Communication"
    },
    {
      slug: "data-driven-hotel-operations",
      title: "Data-Driven Hotel Operations: How to Use Insights for Better Decisions",
      description: "Learn how leading hotels use data analytics to improve RevPAR, reduce costs, and make smarter operational decisions. Includes metrics guide, tools comparison, and interactive ROI calculator.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Operations"
    },
    {
      slug: "hotel-employee-surveys",
      title: "Hotel Employee Surveys: Measure and Improve Staff Engagement",
      description: "With 74% annual turnover devastating hospitality, measuring employee engagement is no longer optional. Learn how pulse surveys can help you retain your best staff and reduce costs.",
      publishDate: "February 1, 2026",
      readTime: "12 min read",
      category: "Employee Engagement"
    },
    {
      slug: "introducing-lucy-analytics",
      title: "Introducing Lucy Analytics: AI-Powered Communication for Non-Desk Teams",
      description: "Discover how Lucy Analytics is transforming the way non-desk teams communicate and collaborate. From hospitality to manufacturing, learn how our AI-powered super app streamlines operations and boosts productivity.",
      publishDate: "January 29, 2026",
      readTime: "8 min read",
      category: "Product"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-lucy-light-gray min-h-screen">
      <div className="container">
        <Animate variants={fadeInUp}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-lucy-black mb-4">
              Articles
            </h1>
            <p className="text-lg text-lucy-medium-gray max-w-2xl mx-auto">
              Insights, updates, and guides from the Lucy Analytics team
            </p>
          </div>
        </Animate>

        <div className="max-w-3xl mx-auto space-y-6">
          {articles.map((article, index) => (
            <Animate key={article.slug} variants={fadeInUp} transition={{ delay: index * 0.1 }}>
              <ArticleCard {...article} />
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
