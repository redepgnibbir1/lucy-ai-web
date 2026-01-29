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
