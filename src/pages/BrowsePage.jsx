import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { toast } from 'react-hot-toast';

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, [category]);

  async function loadServices() {
    try {
      setLoading(true);
      let query = supabase.from('services').select('*');

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error loading services:', error);
      toast.error('Failed to load services');
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Services` : 'All Services'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{service.description}</p>
              <div className="mt-4">
                <span className="text-lg font-semibold text-indigo-600">
                  ${service.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No services found in this category.</p>
        </div>
      )}
    </div>
  );
} 