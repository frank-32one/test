import { format } from 'date-fns';

const STATUS_COLORS = {
  confirmed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800'
};

export default function BookingCard({ booking, userType, onStatusChange }) {
  const isProvider = userType === 'provider';
  const canUpdateStatus = isProvider && booking.status === 'pending';

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {isProvider ? booking.client.full_name : booking.provider.full_name}
          </h3>
          <p className="text-sm text-gray-500">
            {booking.service.name}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[booking.status]}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="text-sm font-medium text-gray-900">
            {format(new Date(booking.booking_date), 'PPP')}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Time</p>
          <p className="text-sm font-medium text-gray-900">
            {format(new Date(booking.booking_date), 'p')}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <p className="text-sm font-medium text-gray-900">
            {booking.service.duration} minutes
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-sm font-medium text-gray-900">
            ${booking.service.price}
          </p>
        </div>
      </div>

      {canUpdateStatus && (
        <div className="mt-6 flex space-x-3">
          <button
            onClick={() => onStatusChange(booking.id, 'confirmed')}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Confirm
          </button>
          <button
            onClick={() => onStatusChange(booking.id, 'cancelled')}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
} 