import Link from "next/link"

export default function Terms() {
    return (
      <main className="min-h-screen" style={{ background: "linear-gradient(170deg, #DDE3FF 0%, #EEF1FF 25%, #F7F8FF 55%, #FFFFFF 100%)", color: "#1A1D3B" }}>
        <div className="px-10 py-12 max-w-3xl mx-auto leading-relaxed" style={{ color: "#5E6388" }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: "#1A1D3B" }}>Kritikos Messaging Terms and Conditions</h1>
        <p className="mb-6"><strong>Effective Date:</strong> February 19, 2026</p>
        <p className="mb-6">
          By using the Kritikos messaging service via SMS or messaging platforms such as WhatsApp, you agree to the following Terms and Conditions.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">1. Program Name</h2>
        <p className="mb-6">Kritikos AI Tutoring Messaging Service</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">2. Program Description</h2>
        <p className="mb-4">
          Kritikos provides an AI-powered educational support service that allows students to receive academic assistance and learning insights through messaging platforms such as SMS and WhatsApp.
        </p>
        <p className="mb-4">Users can initiate a conversation with Kritikos to receive:</p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          <li>Homework assistance</li>
          <li>Educational prompts and questions</li>
          <li>Academic progress support</li>
          <li>Personalized learning guidance</li>
        </ul>
        <p className="mb-6">Messaging is used strictly for educational and service-related purposes.</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">3. Opt-In</h2>
        <p className="mb-4">
          Users opt in to receive messaging from Kritikos by initiating a conversation with our service via supported messaging platforms such as SMS or WhatsApp. By sending the first message, users provide consent to receive service-related responses from Kritikos.
        </p>
        <p className="mb-6">Consent to receive messages is not a condition of using Kritikos services.</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">4. Message Frequency</h2>
        <p className="mb-6">
          Message frequency may vary depending on the user&apos;s level of interaction with the Kritikos AI tutoring service.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">5. Message and Data Rates</h2>
        <p className="mb-6">
          Message and data rates may apply based on your mobile carrier&apos;s terms and conditions.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">6. Opt-Out Instructions</h2>
        <p className="mb-6">
          You may opt out of receiving messages from Kritikos at any time by replying <strong>STOP</strong> to any message received.
        </p>

        <h2 className="text-lg font-semibold mt-8 mb-3">7. Help Instructions</h2>
        <p className="mb-4">
          For assistance with the Kritikos messaging service, reply <strong>HELP</strong> or contact support at:
        </p>
        <p className="mb-6">contact@usekritikos.com</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">8. Data Usage</h2>
        <p className="mb-4">
          Information collected through messaging interactions is used solely to support educational services and may be shared with assigned teachers only after appropriate user or guardian consent has been obtained.
        </p>
        <p className="mb-6">Kritikos does not share personal information with third parties for marketing or promotional purposes.</p>

        <h2 className="text-lg font-semibold mt-8 mb-3">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions regarding these Terms and Conditions, please contact us at:
        </p>
        <p className="mb-4">contact@usekritikos.com</p>
        <p className="mb-0">
          By using Kritikos messaging services, you acknowledge and agree to these Terms and Conditions.
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
