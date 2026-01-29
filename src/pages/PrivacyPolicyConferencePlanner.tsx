
import React from "react";

const PrivacyPolicyConferencePlanner = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-5xl font-medium mb-8">
        Privacy Policy for Lucy Conference Planner
      </h1>
      
      <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
        <p className="text-lg leading-relaxed">
          This privacy policy explains how personal data is collected and processed when you fill out forms 
          in preparation for a conference using Lucy Conference Planner.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">1. Data Controller</h2>
          <p className="leading-relaxed">
            The conference venue where you are planning your event is the data controller for any personal 
            information you provide. Lucy AB ("Lucy") provides the technical tool and acts as a data processor 
            on behalf of the venue.
          </p>
          <p className="leading-relaxed">
            For contact details regarding the data controller, please refer to the invitation or form, or 
            contact the venue directly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">2. What Data Is Collected?</h2>
          <p className="leading-relaxed">
            When you fill in forms in the Conference Planner, the following types of data may be collected:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Name and contact details (e.g., email address, phone number)</li>
            <li>Company or organization affiliation</li>
            <li>Participant information (e.g., number of attendees, name lists)</li>
            <li>Dietary preferences or allergies</li>
            <li>Technical requirements, schedule requests, or other event-specific information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">3. Purpose of Data Collection</h2>
          <p className="leading-relaxed">Your personal data is collected in order to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Plan and deliver your conference according to your preferences</li>
            <li>Communicate with you in the lead-up to the event</li>
            <li>Ensure smooth logistics and personalized service</li>
            <li>Fulfill legal obligations related to food handling, safety, etc.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">4. Legal Basis</h2>
          <p className="leading-relaxed">
            Data processing is carried out in accordance with the General Data Protection Regulation (GDPR), 
            based on:
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>
              <strong>Contract:</strong><br />
              To fulfill the agreement regarding your event.
            </li>
            <li>
              <strong>Consent:</strong><br />
              For the processing of sensitive data such as allergies or dietary needs.
            </li>
            <li>
              <strong>Legitimate interest:</strong><br />
              To ensure effective communication and planning.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">5. Data Retention</h2>
          <p className="leading-relaxed">
            Your data will not be stored longer than necessary.
          </p>
          <p className="leading-relaxed">
            Normally, data is deleted or anonymized no later than 6 months after the event, 
            unless longer retention is required by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">6. Who Has Access to Your Data?</h2>
          <p className="leading-relaxed">
            Only authorized personnel at the conference venue and, where applicable, partners directly involved 
            in the event will have access to your data.
          </p>
          <p className="leading-relaxed">
            Lucy AB has technical access as the system provider and processes your data in accordance with a 
            data processing agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium mt-10 mb-4">7. Your Rights</h2>
          <p className="leading-relaxed">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Request access to your data</li>
            <li>Request correction or deletion</li>
            <li>Restrict or object to processing</li>
            <li>Lodge a complaint with your national data protection authority</li>
          </ul>
          <p className="leading-relaxed mt-6">
            If you have questions about your rights or how your data is handled, please contact the conference 
            venue directly.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyConferencePlanner;
