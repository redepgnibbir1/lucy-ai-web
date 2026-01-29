"use client";

import { useEffect, useState, useCallback } from "react";

export interface TocItem {
  id: string;
  label: string;
}

interface ArticleTableOfContentsProps {
  items: TocItem[];
}

// Ease-in-out cubic: slow start, fast middle, slow end
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration: number = 800) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function ArticleTableOfContents({ items }: ArticleTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY - 80;
      smoothScrollTo(targetY, 800);
      history.pushState(null, "", `#${id}`);
    }
  }, []);

  return (
    <nav className="space-y-1">
      <p className="text-xs font-semibold text-lucy-medium-gray uppercase tracking-wider mb-4">
        On this page
      </p>
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`block py-1.5 text-sm border-l-2 pl-3 transition-colors ${
            activeId === id
              ? "border-lucy-neon-yellow text-lucy-black font-medium"
              : "border-transparent text-lucy-medium-gray hover:text-lucy-black hover:border-gray-300"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
