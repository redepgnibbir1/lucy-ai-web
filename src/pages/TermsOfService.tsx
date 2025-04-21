
import React from "react";

const TermsOfService = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="container max-w-3xl mx-auto px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-medium mb-8">Terms of Service</h1>
      <div className="prose max-w-none text-gray-800">
        <p>
          <strong>Welcome to Lucy!</strong>
        </p>
        <p>
          These Terms of Service ("Terms") govern your access to and use of Lucy ("the App"), a communication application developed and provided by Lucy Analytics ("we," "us," or "our"), registered in Sweden. The App is designed for internal communication among employees within hotels and includes various tools tailored for the hotel industry.
        </p>
        <p>
          By downloading, accessing, or using the App, you agree to be bound by these Terms. If you are using the App on behalf of a company or other legal entity, you are agreeing to these Terms for that entity and representing that you have the authority to bind such entity to these Terms, in which case "you" and "your" will refer to that entity.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Use of the App</strong><br />
            The App is intended for professional communication and collaboration among hotel employees. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </li>
          <li>
            <strong>User Conduct</strong><br />
            You agree not to use the App for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You shall not use the App to harass, abuse, or harm another person, or in any way that infringes the rights of others.
          </li>
          <li>
            <strong>Intellectual Property</strong><br />
            All intellectual property rights in the App, including but not limited to its design, text, graphics, and software, are owned by Lucy Analytics or its licensors. You are granted a non-exclusive, non-transferable, revocable license to use the App for its intended purpose in accordance with these Terms.
          </li>
          <li>
            <strong>Data Protection</strong><br />
            In compliance with Swedish data protection laws and applicable international regulations, we are committed to protecting the privacy and security of the personal data we process. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
          </li>
          <li>
            <strong>Limitation of Liability</strong><br />
            To the fullest extent permitted by law, Lucy Analytics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.
          </li>
          <li>
            <strong>Termination</strong><br />
            We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms.
          </li>
          <li>
            <strong>Governing Law</strong><br />
            These Terms shall be governed by and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions.
          </li>
          <li>
            <strong>Changes to Terms</strong><br />
            We reserve the right to modify these Terms at any time. You are advised to review these Terms periodically for any changes.
          </li>
          <li>
            <strong>Contact Us</strong><br />
            If you have any questions about these Terms, please contact us at:
            <br /><br />
            Lucy Analytics<br />
            Belevägen 7 A<br />
            182 64 Djursholm<br />
            Sweden<br />
            <br />
            contact@lucyanalytics.com
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default TermsOfService;
