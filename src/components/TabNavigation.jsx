export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`${
            activeTab === 'upcoming'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
        >
          Upcoming Bookings
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`${
            activeTab === 'past'
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
        >
          Past Bookings
        </button>
      </nav>
    </div>
  );
} 