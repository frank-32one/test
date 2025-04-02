import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import { Suspense, lazy } from 'react';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceProviderPage = lazy(() => import('./pages/ServiceProviderPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const BookingsPage = lazy(() => import('./pages/BookingsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const AuthCallbackPage = lazy(() => import('./pages/AuthCallbackPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HelpPage = lazy(() => import('./pages/HelpPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const BrowsePage = lazy(() => import('./pages/BrowsePage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/browse" element={<BrowsePage />} />
                  <Route path="/provider/:id" element={<ServiceProviderPage />} />
                  <Route path="/auth/callback" element={<AuthCallbackPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  
                  {/* Protected Routes */}
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/bookings" element={<BookingsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  
                  {/* 404 Route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Toaster position="top-right" />
          </div>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
