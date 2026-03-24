import Link from "next/link"

export default function Privacy() {
    return (
      <main className="min-h-screen" style={{ background: "linear-gradient(170deg, #DDE3FF 0%, #EEF1FF 25%, #F7F8FF 55%, #FFFFFF 100%)", color: "#1A1D3B" }}>
        <div className="px-10 py-12 max-w-3xl mx-auto leading-relaxed" style={{ color: "#5E6388" }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1D3B" }}>Kritikos Privacy Policy</h1>
        <p className="mb-4"><strong>Effective Date:</strong> February 19, 2026</p>
        <p className="mb-4">
          Kritikos (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of students, parents, and educators who use our services via messaging platforms such as WhatsApp, SMS, or IMessage.
        </p>
        <p className="mb-6">
          This Privacy Policy explains what information we collect, how we use it, and under what circumstances it may be shared.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          When users interact with Kritikos through supported messaging platforms, we may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          <li>Messages sent to and from the Kritikos AI learning assistant</li>
          <li>Responses to educational prompts or questions</li>
          <li>Interaction timestamps and usage activity</li>
          <li>Messaging platform identifiers (e.g., phone number or user ID)</li>
        </ul>
        <p className="mb-6">
          We do not collect sensitive personal information such as financial data, government-issued identification numbers, or health records.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">2. How We Use This Information</h2>
        <p className="mb-4">
          We collect and process messaging data solely for educational and service-related purposes, including:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          <li>Understanding what a student has learned</li>
          <li>Tracking academic progress over time</li>
          <li>Personalizing future learning interactions</li>
          <li>Providing insights into student comprehension and engagement</li>
          <li>Improving the quality and effectiveness of our AI-based tutoring services</li>
        </ul>

        <h2 className="text-lg font-semibold mt-8 mb-3">3. Information Sharing</h2>
        <p className="mb-4">
          Student interaction data may be shared only with that student&apos;s assigned teachers, parents, or educational institution, and only after explicit consent has been provided by the student or their parent or guardian, where applicable.
        </p>
        <p className="mb-4">
          We may also share necessary data with third-party service providers that support the delivery of our services (such as messaging infrastructure providers), solely for operational purposes.
        </p>
        <p className="mb-6">
          Kritikos does not share personal information with third parties for marketing or promotional purposes.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">4. SMS and Messaging Communications</h2>
        <p className="mb-4">
          Users may opt in to receive messaging communications from Kritikos by initiating a conversation with Kritikos via supported messaging platforms such as SMS or WhatsApp. By sending the first message to Kritikos, users consent to receive service-related responses from our system.
        </p>
        <p className="mb-4">
          Consent to receive messages is not a condition of using Kritikos services.
        </p>
        <p className="mb-4">
          Message frequency may vary depending on usage.
        </p>
        <p className="mb-4">
          Message and data rates may apply.
        </p>
        <p className="mb-4">
          You can opt out of receiving messages at any time by replying <strong>STOP</strong>.
        </p>
        <p className="mb-4">
          For assistance, reply <strong>HELP</strong> or contact us at contact@usekritikos.com.
        </p>
        <p className="mb-6">
          Messaging will only be used for educational and service-related communications. We do not send marketing or promotional messages via SMS.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">5. Data Security</h2>
        <p className="mb-6">
          We implement reasonable administrative and technical safeguards designed to protect the confidentiality and integrity of user data. Access to collected data is restricted to authorized personnel and systems involved in delivering our educational services.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">6. Data Retention</h2>
        <p className="mb-6">
          We retain messaging and interaction data only for as long as necessary to support the student&apos;s learning progress and to provide educational insights to authorized teachers. Users may request deletion of their data at any time by contacting us at the email address below.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or how your information is handled, please contact us at:
        </p>
        <p className="mb-4">
          Email: contact@usekritikos.com
        </p>
        <p className="mb-0">
          By using Kritikos via supported messaging platforms, you acknowledge and agree to the terms of this Privacy Policy.
        </p>
        </div>
        <footer className="py-8 px-6 mt-12" style={{ borderTop: "1px solid #DDE3FF" }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "#5E6388" }}>
            <Link href="/" className="transition-colors" style={{ color: "#4361EE" }}>
              Back to Kritikos
            </Link>
            <a
              href="mailto:contact@usekritikos.com"
              className="transition-colors no-underline" style={{ color: "#4361EE" }}
            >
              contact@usekritikos.com
            </a>
          </div>
        </footer>
      </main>
    );
  }
