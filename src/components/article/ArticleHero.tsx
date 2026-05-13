import { Link } from "react-router-dom";

interface ArticleHeroProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  publishDate: string;
  readTime: string;
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
  authorLinkedIn?: string;
}

export function ArticleHero({
  title,
  subtitle,
  breadcrumbLabel,
  publishDate,
  readTime,
  authorName = "Björn Treje",
  authorRole = "Co-Founder, Lucy Analytics",
  authorImage = "/bjorn_portrait.jpeg",
  authorLinkedIn = "https://www.linkedin.com/in/bjorntreje/",
}: ArticleHeroProps) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-lucy-medium-gray" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-lucy-black transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/articles" className="hover:text-lucy-black transition-colors">
              Articles
            </Link>
          </li>
          <li>/</li>
          <li className="text-lucy-black">{breadcrumbLabel}</li>
        </ol>
      </nav>

      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-lucy-black">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-lucy-medium-gray font-normal">
          {subtitle}
        </p>
      </header>

      {/* Author Section */}
      <div className="flex items-center justify-between pb-8 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <a
            href={authorLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={authorImage}
              alt={authorName}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100 hover:ring-lucy-neon-yellow transition-all"
            />
          </a>
          <div>
            <div className="flex items-center gap-2">
              <a
                href={authorLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lucy-black hover:text-lucy-neon-yellow transition-colors"
              >
                {authorName}
              </a>
              <a
                href={authorLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-lucy-medium-gray">{authorRole}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-sm text-lucy-medium-gray">
          <span>{publishDate}</span>
          <span className="text-gray-300">|</span>
          <span>{readTime}</span>
        </div>
      </div>
    </>
  );
}
