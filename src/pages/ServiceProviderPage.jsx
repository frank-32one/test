import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { toast } from 'react-hot-toast';

export default function ServiceProviderPage() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProviderData();
  }, [id]);

  async function loadProviderData() {
    try {
      setLoading(true);
      
      // Load provider profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (profileError) throw profileError;

      // Load provider's services
      const { data: servicesData, error: servicesError } = await supabase
        .from('services')
        .select('*')
        .eq('provider_id', id);

      if (servicesError) throw servicesError;

      setProvider(profileData);
      setServices(servicesData);
    } catch (error) {
      console.error('Error loading provider data:', error);
      toast.error('Failed to load provider information');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Provider not found</h2>
          <p className="mt-2 text-gray-500">The service provider you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Provider Profile */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">
                {provider.full_name.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{provider.full_name}</h1>
            <p className="text-gray-500">{provider.location}</p>
          </div>
        </div>

        {provider.bio && (
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">About</h2>
            <p className="mt-2 text-gray-500">{provider.bio}</p>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
          <div className="mt-2 space-y-2">
            <p className="text-gray-500">
              <span className="font-medium">Phone:</span> {provider.phone_number}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">Email:</span> {provider.email}
            </p>
          </div>
        </div>
      </div>

      {/* Provider's Services */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{service.description}</p>
              <div className="mt-4">
                <span className="text-lg font-semibold text-indigo-600">
                  ${service.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No services available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
} 