export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Welcome to our service provider platform! We're dedicated to connecting
          skilled professionals with customers who need their services. Our mission
          is to make it easy for people to find and book the services they need,
          while helping service providers grow their businesses.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2024, we recognized the growing need for a platform that
          bridges the gap between service providers and customers. We've built our
          platform with a focus on user experience, trust, and convenience.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to empower service providers to showcase their skills and
          connect with customers who need their services. We believe in creating
          a community where quality service providers can thrive and customers can
          easily find the services they need.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li className="mb-2">Trust and Transparency</li>
          <li className="mb-2">Quality Service</li>
          <li className="mb-2">User Experience</li>
          <li className="mb-2">Community Building</li>
          <li className="mb-2">Innovation</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Customers</h3>
            <p className="text-gray-600">
              Browse services, compare providers, and book appointments with just a
              few clicks. Our platform makes it easy to find the right service
              provider for your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Service Providers</h3>
            <p className="text-gray-600">
              Create your profile, showcase your services, and connect with
              customers. Our platform helps you grow your business and manage your
              appointments efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">For Everyone</h3>
            <p className="text-gray-600">
              Join our community of service providers and customers. We're
              committed to creating a platform that benefits everyone involved.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you! Visit our{' '}
          <a href="/help" className="text-indigo-600 hover:text-indigo-900">
            Help & Support
          </a>{' '}
          page to get in touch with our team.
        </p>
      </div>
    </div>
  );
} 