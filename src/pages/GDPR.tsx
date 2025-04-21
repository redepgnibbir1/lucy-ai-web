import React from "react";

const GDPR = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="container max-w-3xl mx-auto px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-medium mb-8">Right to be Forgotten (Data Erasure Request)</h1>
      <div className="prose max-w-none text-gray-800">
        <h2>Overview</h2>
        <p>
          Under the General Data Protection Regulation (GDPR), individuals within the European Union have the right to request the deletion of their personal data in certain circumstances. This right is also known as the "Right to be Forgotten". At Lucy Analytics, we are committed to ensuring the privacy and protection of your personal data.
        </p>
        <h2>When Can You Request Data Erasure?</h2>
        <p>You can request the erasure of your personal data when:</p>
        <ul>
          <li>The data is no longer necessary for the purpose for which it was originally collected or processed.</li>
          <li>You withdraw consent and there is no other legal ground for processing.</li>
          <li>You object to the processing and there are no overriding legitimate grounds for the processing.</li>
          <li>The personal data has been unlawfully processed.</li>
          <li>The personal data has to be erased to comply with a legal obligation.</li>
        </ul>
        <h2>How to Submit a Request</h2>
        <p>To submit a request for data erasure, please follow these steps:</p>
        <ol>
          <li><strong>Contact Us:</strong> Reach out to us through our designated contact channels, which can be found on our website or send an email to <a href="mailto:privacy@lucyanalytics.com">privacy@lucyanalytics.com</a>. Please provide sufficient information to identify yourself and any relevant data you wish to be erased.</li>
          <li><strong>Verification:</strong> We may need to verify your identity to process the request. This is a security measure to ensure that personal data is not deleted at the request of someone who does not have the right to make such a request.</li>
          <li><strong>Review and Response:</strong> We will review your request and respond within one month of receipt. If your request is particularly complex, we may extend this period by two additional months, but we will inform you of this extension and the reasons for the delay.</li>
        </ol>
        <h2>Exceptions to the Right to be Forgotten</h2>
        <p>
          Please note that this right is not absolute, and we may not be able to comply with your request if processing of your data is necessary:
        </p>
        <ul>
          <li>For exercising the right of freedom of expression and information.</li>
          <li>For compliance with a legal obligation which requires processing by EU or Member State law to which we are subject, or for the performance of a task carried out in the public interest.</li>
          <li>For reasons of public health in accordance with specific EU or Member State law.</li>
          <li>For archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes, where erasure is likely to render impossible or seriously impair the achievement of such processing.</li>
          <li>For the establishment, exercise, or defense of legal claims.</li>
        </ul>
        <h2>Contact Information</h2>
        <p>
          For any further questions or to submit a request, please contact our Data Protection Officer at <a href="mailto:privacy@lucyanalytics.com">privacy@lucyanalytics.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default GDPR;
