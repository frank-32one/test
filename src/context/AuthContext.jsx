import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { toast } from 'react-hot-toast';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error(error.message || 'Google sign-in failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password, metadata) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: metadata.fullName,
            phone: metadata.phone,
            user_type: metadata.userType,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;

      // Verify user was created
      if (data?.user) {
        await supabase.from('profiles').upsert({
          id: data.user.id,
          email: data.user.email,
          ...metadata,
        });
      }

      return data;
    } catch (error) {
      console.error('Sign-up error:', error);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  };

  const verifyEmail = async (token) => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        type: 'signup',
        token_hash: token,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Email verification error:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signUp,
    signIn,
    signOut,
    verifyEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 