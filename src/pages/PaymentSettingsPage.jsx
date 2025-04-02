import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../services/supabase';

export default function PaymentSettingsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [settings, setSettings] = useState({
    defaultPaymentMethod: '',
    autoPay: false,
    emailReceipts: true,
    paperStatements: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('payment_settings')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        if (data) {
          setSettings(data);
        }
      } catch (error) {
        console.error('Error loading payment settings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, [user, navigate]);

  const handleSettingChange = async (setting, value) => {
    try {
      const { error } = await supabase
        .from('payment_settings')
        .upsert({
          user_id: user.id,
          [setting]: value,
        });

      if (error) throw error;
      setSettings(prev => ({ ...prev, [setting]: value }));
    } catch (error) {
      console.error('Error updating payment settings:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Loading settings...</h2>
          <p className="mt-2 text-gray-600">Please wait while we fetch your payment settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Payment Settings</h1>
          <p className="mt-2 text-gray-600">Manage your payment preferences</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Default Payment Method</h3>
                <p className="text-sm text-gray-500">Select your preferred payment method</p>
              </div>
              <select
                value={settings.defaultPaymentMethod}
                onChange={(e) => handleSettingChange('defaultPaymentMethod', e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a payment method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="bank">Bank Account</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Auto-Pay</h3>
                <p className="text-sm text-gray-500">Automatically pay bills when they're due</p>
              </div>
              <button
                onClick={() => handleSettingChange('autoPay', !settings.autoPay)}
                className={`${
                  settings.autoPay ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.autoPay ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email Receipts</h3>
                <p className="text-sm text-gray-500">Receive payment receipts via email</p>
              </div>
              <button
                onClick={() => handleSettingChange('emailReceipts', !settings.emailReceipts)}
                className={`${
                  settings.emailReceipts ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.emailReceipts ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Paper Statements</h3>
                <p className="text-sm text-gray-500">Receive paper statements in the mail</p>
              </div>
              <button
                onClick={() => handleSettingChange('paperStatements', !settings.paperStatements)}
                className={`${
                  settings.paperStatements ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${
                    settings.paperStatements ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 