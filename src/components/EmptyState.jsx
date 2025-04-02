export default function EmptyState({ activeTab }) {
  return (
    <div className="text-center py-12">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings</h3>
      <p className="mt-1 text-sm text-gray-500">
        {activeTab === 'upcoming'
          ? "You don't have any upcoming bookings."
          : "You don't have any past bookings."}
      </p>
    </div>
  );
} 