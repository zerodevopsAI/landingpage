import { Navbar } from '@/components/Navbar';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-green-400">Privacy Policy</h1>
          <div className="space-y-8 text-gray-300 text-lg">
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-gray-100">Introduction</h2>
              <p>
                MonkCI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">What We Collect</h2>
              <ul className="list-disc list-inside ml-4">
                <li>Personal information (name, email, phone) you provide via forms or sign-up.</li>
                <li>Usage data (pages visited, actions taken, device/browser info).</li>
                <li>Cookies and similar tracking technologies.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">How We Use Data</h2>
              <ul className="list-disc list-inside ml-4">
                <li>To provide, maintain, and improve MonkCI services.</li>
                <li>To communicate with you about your account, updates, or support.</li>
                <li>To analyze usage and improve user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">Data Security</h2>
              <p>
                We use industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure. We encourage you to use strong passwords and keep your credentials confidential.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">Third-Party Services</h2>
              <p>
                We may use third-party services (such as analytics or payment processors) that collect, monitor, and analyze information to improve our service. These providers have their own privacy policies.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">Your Rights</h2>
              <ul className="list-disc list-inside ml-4">
                <li>You can request access, correction, or deletion of your personal data.</li>
                <li>You can opt out of marketing communications at any time.</li>
                <li>Contact us for any privacy-related requests or questions.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-100">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or your data, please contact us at <a href="mailto:info@ezaix.com" className="text-green-400 underline">info@ezaix.com</a>.
              </p>
            </section>
            <div className="text-sm text-gray-500 pt-8">Last updated: {new Date().getFullYear()}</div>
          </div>
        </div>
      </section>
    </main>
  );
} 