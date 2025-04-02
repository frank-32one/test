import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: localStorage,
  }
});

// Custom typed hooks
export const useSupabase = () => {
  return supabase;
};

// Table-specific operations
export const BookingsService = {
  getBookings: async (userId, userType, filter = 'upcoming', page = 1, limit = 10) => {
    const now = new Date().toISOString();
    const column = userType === 'provider' ? 'provider_id' : 'client_id';
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    
    let query = supabase
      .from('bookings')
      .select(`
        *,
        service:services(*),
        provider:profiles(*),
        client:profiles(*)
      `, { count: 'exact' })
      .eq(column, userId);

    if (filter === 'upcoming') {
      query = query.gte('booking_date', now);
    } else {
      query = query.lt('booking_date', now);
    }

    return await query
      .order('booking_date', { ascending: filter === 'upcoming' })
      .range(start, end);
  },

  updateStatus: async (bookingId, newStatus) => {
    return await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', bookingId);
  }
}; 