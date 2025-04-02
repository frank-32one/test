import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';
import { toast } from 'react-hot-toast';

export default function AuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Check for error in URL
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');
        const code = searchParams.get('code');
        
        if (error) {
          console.error('Auth error:', error, errorDescription);
          toast.error(errorDescription || 'Authentication failed. Please try again.');
          navigate('/login');
          return;
        }

        if (!code) {
          console.error('No code found in URL');
          toast.error('Authentication failed. Please try again.');
          navigate('/login');
          return;
        }

        // Exchange the code for a session
        const { data: { session }, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          toast.error('Failed to get session. Please try again.');
          navigate('/login');
          return;
        }

        if (session?.user) {
          // Check if user has a profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profileError && profileError.code !== 'PGRST116') {
            console.error('Profile error:', profileError);
            toast.error('Failed to load user profile');
            navigate('/login');
            return;
          }

          // If no profile exists, create one
          if (!profile) {
            const { error: insertError } = await supabase
              .from('profiles')
              .insert([
                {
                  id: session.user.id,
                  email: session.user.email,
                  full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0],
                  user_type: 'customer',
                },
              ]);

            if (insertError) {
              console.error('Profile creation error:', insertError);
              toast.error('Failed to create user profile. Please try again.');
              navigate('/login');
              return;
            }
          }

          // Redirect based on user type
          const userType = profile?.user_type || 'customer';
          navigate(userType === 'provider' ? '/dashboard' : '/browse');
        } else {
          toast.error('No user session found');
          navigate('/login');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        toast.error('Authentication failed. Please try again.');
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );
} 