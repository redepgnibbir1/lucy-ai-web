import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticleTableOfContents, TocItem } from "./ArticleTableOfContents";

interface ArticleLayoutProps {
  children: ReactNode;
  tocItems: TocItem[];
}

export function ArticleLayout({ children, tocItems }: ArticleLayoutProps) {
  return (
    <div className="article-layout min-h-screen bg-white text-lucy-black">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12">
            {/* Sticky TOC Sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0 self-start sticky top-28 mt-[420px]">
              <ArticleTableOfContents items={tocItems} />
            </aside>

            {/* Main Article Content */}
            <main className="flex-1 min-w-0 max-w-3xl py-8">
              <article className="space-y-10 leading-relaxed text-lg">
                {children}
              </article>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
