import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';
import { toast } from 'react-hot-toast';

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingDate, setBookingDate] = useState('');
  const [location, setLocation] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    loadServiceDetails();
  }, [id]);

  async function loadServiceDetails() {
    try {
      setLoading(true);
      
      // Load service details
      const { data: serviceData, error: serviceError } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single();

      if (serviceError) throw serviceError;

      // Load provider details
      const { data: providerData, error: providerError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', serviceData.provider_id)
        .single();

      if (providerError) throw providerError;

      setService(serviceData);
      setProvider(providerData);
    } catch (error) {
      console.error('Error loading service details:', error);
      toast.error('Failed to load service details');
    } finally {
      setLoading(false);
    }
  }

  async function handleBooking(e) {
    e.preventDefault();
    if (!user) {
      toast.error('Please sign in to book a service');
      navigate('/login');
      return;
    }

    try {
      setBookingLoading(true);
      const { error } = await supabase.from('bookings').insert([
        {
          service_id: service.id,
          provider_id: service.provider_id,
          client_id: user.id,
          booking_date: bookingDate,
          location: location,
          status: 'pending',
        },
      ]);

      if (error) throw error;
      toast.success('Booking request sent successfully');
      navigate('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('Failed to create booking');
    } finally {
      setBookingLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!service || !provider) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
          <p className="mt-2 text-gray-500">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 text-gray-500">{service.description}</p>
          
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Service Provider</h2>
            <div className="mt-2 flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">
                  {provider.full_name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-gray-900">{provider.full_name}</p>
                <p className="text-sm text-gray-500">{provider.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Price</h2>
            <p className="mt-2 text-2xl font-bold text-indigo-600">${service.price}</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Book This Service</h2>
          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <input
                type="datetime-local"
                id="bookingDate"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
                min={new Date().toISOString().slice(0, 16)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Service Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="Enter your address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={bookingLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {bookingLoading ? 'Processing...' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 