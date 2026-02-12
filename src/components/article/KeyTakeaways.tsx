import { ReactNode } from "react";

interface KeyTakeawaysProps {
  items: ReactNode[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C9FD59]/20 via-[#C9FD59]/10 to-gray-50 p-8 border border-[#C9FD59]/30">
      <div className="relative z-10">
        <h2 className="text-lg font-semibold mb-5 flex items-center gap-2.5 text-lucy-black">
          <svg
            className="w-5 h-5 text-lucy-dark-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Key Takeaways
        </h2>
        <ul className="space-y-4 text-base text-lucy-dark-gray">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-lucy-black mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
