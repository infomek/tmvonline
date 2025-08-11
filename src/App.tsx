import { useState } from 'react';
import { Bell, UserPlus } from 'lucide-react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import StudentLogin from './components/StudentLogin';
import ExamPortalSection from './components/ExamPortalSection';
import StudentDashboard from './components/StudentDashboard';
import EmployeeLogin from './components/EmployeeLogin';
import StudentForgotPassword from './components/StudentForgotPassword';
import EmployeeForgotPassword from './components/EmployeeForgotPassword';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'studentLogin' | 'dashboard' | 'studentForgot'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for admin routes first
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path === '/admin/forgot') {
      return <EmployeeForgotPassword />;
    }
    if (path === '/admin') {
      return <EmployeeLogin />;
    }
  }

  const handleStudentLogin = () => {
    setCurrentView('studentLogin');
  };

  const handleBackToHome = () => {
    if (isLoggedIn) {
      setCurrentView('dashboard');
    } else {
      setCurrentView('home');
    }
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
  };

  const handleStudentForgot = () => {
    setCurrentView('studentForgot');
  };

  if (currentView === 'studentLogin') {
    return <StudentLogin onBack={handleBackToHome} onLoginSuccess={handleSuccessfulLogin} onForgotPassword={handleStudentForgot} />;
  }

  if (currentView === 'studentForgot') {
    return <StudentForgotPassword onBackToLogin={() => setCurrentView('studentLogin')} onBackToHome={handleBackToHome} />;
  }

  if (currentView === 'dashboard') {
    return <StudentDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to TMV Online Portal</h1>
            <p className="text-xl text-blue-100">
              Tilak Maharashtra Vidyapeeth - Your Gateway to Academic Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Sections */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hall Ticket Download Link */}
            <a
              href="https://www.tmv.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SectionCard
                title="Important Notices"
                icon={<Bell size={24} />}
                className="hover:bg-blue-50 transition-colors duration-200"
              />
            </a>

            {/* Online Theory Examination Section Link */}
            {/* <a
              href="https://tmv.edu.in/online-theory-exam"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SectionCard
                title="Online Theory Examination Section (Internal/External)"
                icon={<ClipboardList size={24} />}
                className="hover:bg-blue-50 transition-colors duration-200"
              />
            </a> */}
            
            <a
              href="https://tmv.academydesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <SectionCard
                title="Online Admission Section"
                icon={<UserPlus size={24} />}
              />
            </a>

            {/* Exam Application Portal Section */}
            <ExamPortalSection onStudentLogin={handleStudentLogin} />
          </div>

          {/* Right Column - News */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Updates</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="text-sm text-gray-600">Aug 08, 2025</p>
                  <p className="text-gray-900">Result of the Backlog paper examination 
                    has been declared</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="text-sm text-gray-600">Aug 01, 2025</p>
                  <p className="text-gray-900">New admission process guidelines</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="text-sm text-gray-600">July 27, 2025</p>
                  <p className="text-gray-900">Result of the examination has been declared </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;