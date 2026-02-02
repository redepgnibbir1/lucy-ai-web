import { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function ArticleSection({ id, title, children }: ArticleSectionProps) {
  return (
    <section id={id} className="space-y-6 scroll-mt-28">
      <h2 className="text-3xl font-medium text-lucy-black">{title}</h2>
      {children}
    </section>
  );
}
