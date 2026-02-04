import React from "react";

const CookiePolicy = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-5xl font-medium mb-8">Cookie Policy for Lucy Analytics</h1>
      <div className="prose max-w-none text-gray-800">
        <p>
          This Cookie Policy explains how Lucy Analytics ("we", "us", or "our") uses cookies and similar technologies on the website lucyanalytics.com.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, mobile phone, or tablet) when you visit a website. They are used to ensure the website functions properly, improve the user experience, and collect information about how the website is used.
        </p>

        <h2>What types of cookies do we use?</h2>
        <p>We use the following types of cookies:</p>

        <h3>Strictly necessary cookies</h3>
        <p>
          These cookies are essential for the proper functioning of the website. They enable basic functions such as security, page navigation, and access to secure areas of the website. The website cannot function properly without these cookies.
        </p>

        <h3>Analytics cookies</h3>
        <p>
          These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. The information is used to improve the website's functionality and performance.
        </p>

        <h3>Functional cookies</h3>
        <p>
          Functional cookies are used to remember choices you make (such as language or preferences) in order to provide a more personalized experience.
        </p>

        <h2>Third-party cookies</h2>
        <p>
          We may use third-party services that place cookies on your device, for example for analytics or performance measurement purposes. These cookies are governed by the respective third party's privacy policies.
        </p>

        <h2>How can you manage cookies?</h2>
        <p>
          You can manage or withdraw your consent to cookies at any time through our cookie settings or by adjusting the settings in your web browser. Most browsers allow you to block or delete cookies. Please note that some parts of the website may not function properly if you disable cookies.
        </p>

        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. The latest version will always be available on our website.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at{" "}
          <a href="mailto:contact@lucyanalytics.com" className="text-lucy-dark-gray underline hover:text-lucy-neon-yellow">
            contact@lucyanalytics.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default CookiePolicy;
