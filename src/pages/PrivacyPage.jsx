export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
        <p className="text-gray-600 mb-6">
          We take your privacy seriously. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use our
          service provider platform. Please read this privacy policy carefully. If
          you do not agree with the terms of this privacy policy, please do not
          access the platform.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
        <p className="text-gray-600 mb-6">
          We may collect personal information that you voluntarily provide to us
          when you register on the platform, express interest in obtaining
          information about us or our products and services, participate in
          activities on the platform, or contact us. The personal information we
          collect may include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Name and contact information</li>
          <li className="mb-2">Email address</li>
          <li className="mb-2">Phone number</li>
          <li className="mb-2">Address</li>
          <li className="mb-2">Payment information</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Usage Information</h3>
        <p className="text-gray-600 mb-6">
          We automatically collect certain information when you visit, use, or
          navigate the platform. This information may include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Device and usage information</li>
          <li className="mb-2">IP address</li>
          <li className="mb-2">Browser type</li>
          <li className="mb-2">Operating system</li>
          <li className="mb-2">Time and date of visits</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Provide and maintain our platform</li>
          <li className="mb-2">Process your transactions</li>
          <li className="mb-2">Send you technical notices and support messages</li>
          <li className="mb-2">Communicate with you about products, services, and events</li>
          <li className="mb-2">Improve our platform and services</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
        <p className="text-gray-600 mb-6">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Service providers and business partners</li>
          <li className="mb-2">Other users (with your consent)</li>
          <li className="mb-2">Law enforcement (when required by law)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
        <p className="text-gray-600 mb-6">
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information we
          process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or information
          storage technology can be guaranteed to be 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
        <p className="text-gray-600 mb-6">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Access your personal information</li>
          <li className="mb-2">Correct inaccurate information</li>
          <li className="mb-2">Request deletion of your information</li>
          <li className="mb-2">Opt-out of marketing communications</li>
          <li className="mb-2">Export your data</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about this Privacy Policy, please contact us
          through our{' '}
          <a href="/help" className="text-indigo-600 hover:text-indigo-900">
            Help & Support
          </a>{' '}
          page.
        </p>
      </div>
    </div>
  );
} 