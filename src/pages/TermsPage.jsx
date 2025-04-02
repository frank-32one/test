export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
        <p className="text-gray-600 mb-6">
          By accessing or using our service provider platform, you agree to be
          bound by these Terms of Service. If you disagree with any part of the
          terms, you may not access the platform.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definitions</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">"Platform" refers to our service provider website and services</li>
          <li className="mb-2">"User" refers to any individual or entity using our platform</li>
          <li className="mb-2">"Service Provider" refers to users offering services through our platform</li>
          <li className="mb-2">"Customer" refers to users seeking services through our platform</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Accounts</h2>
        <p className="text-gray-600 mb-6">
          When you create an account with us, you must provide accurate,
          complete, and current information. Failure to do so constitutes a
          breach of the Terms, which may result in immediate termination of your
          account.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Provider Responsibilities</h2>
        <p className="text-gray-600 mb-6">
          Service providers must:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Provide accurate and complete information about their services</li>
          <li className="mb-2">Maintain professional standards of service</li>
          <li className="mb-2">Respond to customer inquiries in a timely manner</li>
          <li className="mb-2">Comply with all applicable laws and regulations</li>
          <li className="mb-2">Maintain appropriate insurance coverage</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Customer Responsibilities</h2>
        <p className="text-gray-600 mb-6">
          Customers must:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Provide accurate booking information</li>
          <li className="mb-2">Pay for services as agreed</li>
          <li className="mb-2">Treat service providers with respect</li>
          <li className="mb-2">Cancel bookings in a timely manner if necessary</li>
          <li className="mb-2">Provide honest feedback and reviews</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
        <p className="text-gray-600 mb-6">
          All payments are processed securely through our platform. Service
          providers will receive payment after the service is completed and
          confirmed by the customer. We reserve the right to withhold payment in
          cases of disputes or violations of our terms.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cancellation Policy</h2>
        <p className="text-gray-600 mb-6">
          Cancellations must be made at least 24 hours before the scheduled
          service. Late cancellations may result in a fee. Service providers may
          cancel bookings in case of emergencies or unforeseen circumstances.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
        <p className="text-gray-600 mb-6">
          In case of disputes between service providers and customers, we will
          mediate to reach a fair resolution. Our decision in such matters is
          final and binding.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          We are not liable for any indirect, incidental, special, consequential,
          or punitive damages resulting from your use of or inability to use the
          platform.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify these terms at any time. We will notify
          users of any material changes via email or through the platform.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service, please contact
          us through our{' '}
          <a href="/help" className="text-indigo-600 hover:text-indigo-900">
            Help & Support
          </a>{' '}
          page.
        </p>
      </div>
    </div>
  );
} 