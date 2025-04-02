export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-indigo-600">🚧</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Under Maintenance
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We're currently performing scheduled maintenance to improve our
            services. Please check back later.
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Estimated completion time: 2 hours
          </p>
        </div>
      </div>
    </div>
  );
} 