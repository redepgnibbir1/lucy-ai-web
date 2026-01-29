import { ArticleLayout, ArticleHero, ArticleSection, KeyTakeaways, TocItem } from "@/components/article";
import { Link } from "react-router-dom";
import { useState } from "react";

const tocItems: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "the-challenge", label: "The Challenge" },
  { id: "what-is-lucy", label: "What is Lucy?" },
  { id: "core-products", label: "Core Products" },
  { id: "key-features", label: "Key Features" },
  { id: "is-lucy-right-for-you", label: "Is Lucy Right for You?" },
  { id: "getting-started", label: "Getting Started" },
];

interface QuizQuestion {
  question: string;
  options: { label: string; points: number }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "How does your hotel team currently communicate?",
    options: [
      { label: "Multiple WhatsApp groups", points: 3 },
      { label: "Walkie-talkies and phone calls", points: 2 },
      { label: "Email and in-person meetings", points: 2 },
      { label: "A mix of all the above", points: 3 },
    ],
  },
  {
    question: "How often do tasks or messages get lost between shifts?",
    options: [
      { label: "Daily—it's a constant problem", points: 3 },
      { label: "A few times a week", points: 2 },
      { label: "Occasionally", points: 1 },
      { label: "Rarely or never", points: 0 },
    ],
  },
  {
    question: "Do you have multilingual staff?",
    options: [
      { label: "Yes, we speak 3+ languages", points: 3 },
      { label: "Yes, 2 main languages", points: 2 },
      { label: "Some staff, but it's manageable", points: 1 },
      { label: "No, everyone speaks the same language", points: 0 },
    ],
  },
  {
    question: "How do you track maintenance and housekeeping tasks?",
    options: [
      { label: "Paper notes or verbal requests", points: 3 },
      { label: "WhatsApp messages", points: 3 },
      { label: "Basic spreadsheets", points: 2 },
      { label: "A dedicated system that works well", points: 0 },
    ],
  },
  {
    question: "What's your biggest communication frustration?",
    options: [
      { label: "No visibility into task completion", points: 3 },
      { label: "Information doesn't reach the right people", points: 3 },
      { label: "Too many different tools and channels", points: 2 },
      { label: "Staff training and adoption", points: 1 },
    ],
  },
];

const FitQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = quizQuestions.length * 3;
  const fitPercentage = Math.round((totalScore / maxScore) * 100);

  const getFitMessage = () => {
    if (fitPercentage >= 80) {
      return {
        title: "You're a great fit for Lucy!",
        message: "Based on your answers, Lucy could significantly improve your hotel's communication and operations. Your team is facing exactly the challenges Lucy was built to solve.",
        color: "bg-green-500",
      };
    } else if (fitPercentage >= 50) {
      return {
        title: "Lucy could help your hotel",
        message: "You're experiencing some of the common communication challenges that Lucy addresses. A demo would help you see if it's the right fit for your specific needs.",
        color: "bg-lucy-neon-yellow",
      };
    } else {
      return {
        title: "Let's explore if Lucy is right for you",
        message: "Your hotel may have some unique needs. We'd love to chat and understand your situation better—Lucy might still be a great fit.",
        color: "bg-blue-500",
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const fitResult = getFitMessage();

  return (
    <ArticleSection id="is-lucy-right-for-you" title="Is Lucy Right for Your Hotel?">
      <p className="text-lucy-dark-gray mb-6">
        Take this quick quiz to see if Lucy is a good fit for your hotel's communication needs.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        {!showResult ? (
          <>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-lucy-medium-gray mb-2">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion) / quizQuestions.length) * 100)}% complete</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lucy-neon-yellow transition-all duration-300"
                  style={{ width: `${(currentQuestion / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl font-semibold text-lucy-black mb-4">
              {quizQuestions[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.points)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-lucy-neon-yellow hover:bg-yellow-50 transition-all duration-200"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Result */}
            <div className="text-center">
              {/* Score visualization */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke={fitPercentage >= 80 ? "#22C55E" : fitPercentage >= 50 ? "#EBFF00" : "#3B82F6"}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${fitPercentage * 3.51} 351`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-lucy-black">{fitPercentage}%</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-lucy-black mb-3">{fitResult.title}</h3>
              <p className="text-lucy-dark-gray mb-8 max-w-md mx-auto">{fitResult.message}</p>

              <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-lucy-dark-gray mb-4 font-medium">
                  Ready to see Lucy in action?
                </p>
                <Link
                  to="/kom-igang"
                  className="block w-full bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
                >
                  Book a demo
                </Link>
              </div>

              <button
                onClick={resetQuiz}
                className="mt-6 text-lucy-medium-gray hover:text-lucy-dark-gray text-sm underline"
              >
                Take the quiz again
              </button>
            </div>
          </>
        )}
      </div>
    </ArticleSection>
  );
};

const IntroducingLucyAnalytics = () => {
  return (
    <ArticleLayout tocItems={tocItems}>
      <ArticleHero
        title="Introducing Lucy: AI-Powered Communication for Hotels"
        subtitle="Discover how Lucy is transforming the way hotel teams communicate, collaborate, and coordinate their daily operations—replacing fragmented WhatsApp groups with one unified platform."
        breadcrumbLabel="Introducing Lucy Analytics"
        publishDate="January 29, 2026"
        readTime="8 min read"
      />

      <KeyTakeaways
        items={[
          <>Lucy is an AI-powered communication and management platform designed specifically for <strong>hotel teams</strong>—a professional alternative to WhatsApp.</>,
          <>The platform combines <strong>team communications, conference planning, and hotel-specific add-ons</strong> in one unified solution.</>,
          <>Built-in AI features include <strong>real-time translation, smart scheduling, and automated work order management</strong>.</>,
          <>Lucy replaces scattered chat groups with a <strong>simple, mobile-first platform</strong> built for how hotels actually work.</>,
        ]}
      />

      <ArticleSection id="introduction" title="Introduction">
        <p className="text-lucy-dark-gray">
          In the hotel industry, effective communication is the backbone of operational success. From housekeeping to front desk, from maintenance to management—every team needs to stay connected. Yet most hotels still rely on fragmented WhatsApp groups, walkie-talkies, and paper notes to coordinate their daily operations.
        </p>
        <p className="text-lucy-dark-gray">
          That's why we built <strong>Lucy</strong>—a communication and management platform designed specifically for hotels. Think of it as a professional replacement for WhatsApp, but built from the ground up to handle everything hotel teams actually need: shift handovers, work orders, guest requests, and multilingual communication.
        </p>
      </ArticleSection>

      <ArticleSection id="the-challenge" title="The Challenge">
        <p className="text-lucy-dark-gray">
          Hotel teams face unique communication challenges that consumer apps like WhatsApp weren't designed to solve:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-lucy-dark-gray">
          <li><strong>Too many WhatsApp groups:</strong> Staff juggle multiple chat groups—housekeeping, maintenance, front desk, management—and important messages get buried.</li>
          <li><strong>No structure or accountability:</strong> WhatsApp doesn't track who's responsible for what. Tasks fall through the cracks between shifts.</li>
          <li><strong>Language barriers:</strong> Hotel teams are often multilingual, and manually translating messages slows everything down.</li>
          <li><strong>Personal and work mixed:</strong> Using personal phones for work blurs boundaries and creates security concerns.</li>
          <li><strong>No management oversight:</strong> Managers can't see if work orders are completed or how teams are performing.</li>
        </ul>
        <p className="text-lucy-dark-gray">
          These challenges lead to missed guest requests, delayed maintenance, frustrated staff, and ultimately, poor reviews. Lucy was designed from the ground up to solve these exact problems.
        </p>
      </ArticleSection>

      <ArticleSection id="what-is-lucy" title="What is Lucy?">
        <p className="text-lucy-dark-gray">
          Lucy is a <strong>communication and management platform</strong> built specifically for hotels. Think of it as a professional upgrade from WhatsApp—one app where your entire team can communicate, manage tasks, handle work orders, and coordinate across departments.
        </p>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 my-6">
          <p className="text-lucy-dark-gray italic text-center">
            "Everything your hotel team needs. One app. No more WhatsApp chaos."
          </p>
        </div>
        <p className="text-lucy-dark-gray">
          Unlike generic chat apps, Lucy understands how hotels work. It's designed for shift-based teams, multilingual staff, and the fast-paced nature of hospitality. With built-in AI translation, structured work orders, and management dashboards, Lucy gives you the oversight and efficiency that WhatsApp never could.
        </p>
      </ArticleSection>

      <ArticleSection id="core-products" title="Core Products">
        <p className="text-lucy-dark-gray">
          Lucy's product suite is designed to address the full spectrum of hotel operations:
        </p>

        <div className="space-y-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Lucy Team Communications</h3>
            <p className="text-lucy-dark-gray mb-4">
              Replace your scattered WhatsApp groups with one professional platform. Lucy Team Communications gives your hotel staff structured channels, automatic translation, and clear accountability—everything WhatsApp lacks.
            </p>
            <p className="text-lucy-medium-gray text-sm">
              Features include shift management, real-time translation, employee onboarding, work orders, and team surveys.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Lucy Conference Planner</h3>
            <p className="text-lucy-dark-gray mb-4">
              Plan conferences smarter. Lucy Conference Planner brings everything together—registration, dietary needs, schedules, and customer dialogue—in one smart workflow.
            </p>
            <p className="text-lucy-medium-gray text-sm">
              Perfect for hotels and conference venues looking to streamline their planning process.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-lucy-black mb-3">Hotel-Specific Add-ons</h3>
            <p className="text-lucy-dark-gray mb-4">
              Extend Lucy's capabilities with specialized tools built for hotels: guest communication, housekeeping planning, automated reviews, reputation management, custom AI agents, and secure incident reporting.
            </p>
            <p className="text-lucy-medium-gray text-sm">
              Each add-on integrates seamlessly with the core platform.
            </p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection id="key-features" title="Key Features">
        <p className="text-lucy-dark-gray">
          What makes Lucy different from WhatsApp and other workplace tools? Here are the features that set us apart:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-lucy-black">Shift Management</h4>
              <p className="text-sm text-lucy-medium-gray">Smart scheduling that adapts to your team's needs</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-lucy-black">Real-time Translation</h4>
              <p className="text-sm text-lucy-medium-gray">Break language barriers with AI-powered translation</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-lucy-black">Employee Onboarding</h4>
              <p className="text-sm text-lucy-medium-gray">Get new team members up to speed quickly</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-lucy-neon-yellow rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-lucy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-lucy-black">Work Orders</h4>
              <p className="text-sm text-lucy-medium-gray">Track and manage tasks from request to completion</p>
            </div>
          </div>
        </div>
      </ArticleSection>

      <FitQuiz />

      <ArticleSection id="getting-started" title="Getting Started">
        <p className="text-lucy-dark-gray">
          Ready to replace WhatsApp chaos with streamlined hotel communication? Getting started with Lucy is simple:
        </p>

        <ol className="list-decimal pl-6 space-y-4 mt-6 text-lucy-dark-gray">
          <li><strong>Book a demo:</strong> See Lucy in action and learn how it can work for your hotel.</li>
          <li><strong>Configure your workspace:</strong> Our team will help you set up Lucy to match your operational needs.</li>
          <li><strong>Onboard your team:</strong> With Lucy's intuitive interface, training takes minutes, not days.</li>
          <li><strong>Say goodbye to WhatsApp:</strong> Experience the difference of having everything in one professional platform.</li>
        </ol>

        <div className="mt-8 p-6 bg-lucy-dark-gray rounded-xl text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Ready to see Lucy in action?</h3>
          <p className="text-lucy-light-gray-new mb-4">
            Book a personalized demo and discover how Lucy can transform your hotel's communication.
          </p>
          <Link
            to="/kom-igang"
            className="inline-block bg-lucy-neon-yellow text-lucy-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </ArticleSection>
    </ArticleLayout>
  );
};

export default IntroducingLucyAnalytics;
