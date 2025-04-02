import { supabase } from './supabase';

export const logError = async (error, context = {}) => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.error('Error:', error);
    console.error('Context:', context);
  }

  try {
    // Log to Supabase
    const { error: logError } = await supabase
      .from('error_logs')
      .insert({
        error: error.message,
        stack: error.stack,
        context: JSON.stringify(context),
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      });

    if (logError) {
      console.error('Failed to log error to database:', logError);
    }
  } catch (e) {
    console.error('Error logging failed:', e);
  }
};

export const logInfo = (message, context = {}) => {
  if (import.meta.env.DEV) {
    console.log(message, context);
  }
};

export const logWarning = (message, context = {}) => {
  if (import.meta.env.DEV) {
    console.warn(message, context);
  }
}; 