import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookingsService } from '../services/supabase';
import { toast } from 'react-hot-toast';
import BookingCard from '../components/BookingCard';
import LoadingSpinner from '../components/LoadingSpinner';
import TabNavigation from '../components/TabNavigation';
import EmptyState from '../components/EmptyState';

export default function BookingsPage() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef();
  const lastBookingRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loadingMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadingMore]);

  const fetchBookings = useCallback(async () => {
    const controller = new AbortController();
    
    try {
      setLoadingMore(true);
      const { data, error, count } = await BookingsService.getBookings(
        user.id,
        user.user_type,
        activeTab,
        page,
        10
      );

      if (error) throw error;
      
      if (page === 1) {
        setBookings(data || []);
      } else {
        setBookings(prev => [...prev, ...(data || [])]);
      }
      
      setHasMore((data || []).length === 10);
    } catch (error) {
      if (!error.name === 'AbortError') {
        console.error('Bookings error:', error);
        toast.error(error.message || 'Failed to load bookings');
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }

    return () => controller.abort();
  }, [user, activeTab, page]);

  useEffect(() => {
    setPage(1);
    setBookings([]);
    fetchBookings();
  }, [activeTab]);

  useEffect(() => {
    if (page > 1) {
      fetchBookings();
    }
  }, [page]);

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const { error } = await BookingsService.updateStatus(bookingId, newStatus);
      if (error) throw error;
      toast.success(`Booking ${newStatus}`);
      setPage(1);
      setBookings([]);
      fetchBookings();
    } catch (error) {
      console.error('Status change error:', error);
      toast.error(error.message || 'Status update failed');
    }
  };

  const filteredBookings = useMemo(() => {
    return bookings.filter(b => 
      activeTab === 'upcoming' 
        ? new Date(b.booking_date) >= new Date()
        : new Date(b.booking_date) < new Date()
    );
  }, [bookings, activeTab]);

  if (loading && page === 1) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {filteredBookings.length === 0 ? (
        <EmptyState activeTab={activeTab} />
      ) : (
        <div className="space-y-6">
          {filteredBookings.map((booking, index) => (
            <div
              key={booking.id}
              ref={index === filteredBookings.length - 1 ? lastBookingRef : null}
            >
              <BookingCard 
                booking={booking}
                userType={user.user_type}
                onStatusChange={handleStatusChange}
              />
            </div>
          ))}
          {loadingMore && (
            <div className="flex justify-center py-4">
              <LoadingSpinner />
            </div>
          )}
        </div>
      )}
    </div>
  );
} 