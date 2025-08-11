import React, { useState, useEffect } from 'react';
import { Home, User, Calendar, FileText, GraduationCap, RotateCcw, Users, LogOut, ChevronDown, ChevronRight, Download, Clock, MapPin, Building2, CheckCircle2 } from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onLogout }) => {
  const [currentSection, setCurrentSection] = useState<'home' | 'examination' | 'timetable' | 'revaluation' | 'convocation' | 'migration'>('home');
  const [examSubSection, setExamSubSection] = useState<'form' | 'backlog' | 'admitcard' | 'marksheet' | null>(null);
  const [selectedYear, setSelectedYear] = useState('');
  const [expandedActivities, setExpandedActivities] = useState<number[]>([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [activities, setActivities] = useState<Array<{
    id: number;
    date: string;
    endDate: string;
    action: string;
    timeAgo: string;
  }>>([]);

  // Update current date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate time ago string
  const getTimeAgo = (timestamp: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  // Generate current and previous activities with real timestamps
  useEffect(() => {
    const generateActivities = () => {
      const now = new Date();
      const currentActivities = [
        // Current Activities (2)
        {
          id: 1,
          date: now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          endDate: now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          action: 'Currently Active - Student Dashboard Session',
          timeAgo: 'Just now'
        },
        {
          id: 2,
          date: new Date(now.getTime() - 5 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          endDate: new Date(now.getTime() - 5 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          action: 'Login In System with the OTP - ashwin1245',
          timeAgo: getTimeAgo(new Date(now.getTime() - 5 * 60 * 1000))
        },
        // Previous Days Activities
        // {
        //   id: 3,
        //   date: new Date(now.getTime() - 24 * 60 * 60 * 1000).toLocaleString('en-US', {
        //     year: 'numeric',
        //     month: 'short',
        //     day: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit',
        //     second: '2-digit',
        //     hour12: true
        //   }),
        //   endDate: new Date(now.getTime() - 24 * 60 * 60 * 1000).toLocaleString('en-US', {
        //     year: 'numeric',
        //     month: 'short',
        //     day: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit',
        //     second: '2-digit',
        //     hour12: true
        //   }),
        //   action: 'View Examination Results - June-2025',
        //   timeAgo: getTimeAgo(new Date(now.getTime() - 24 * 60 * 60 * 1000))
        // },
        {
          id: 4,
          date: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          endDate: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          action: 'Download Marks Statement of The Examination June-2025',
          timeAgo: getTimeAgo(new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000))
        },
        {
          id: 5,
          date: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          endDate: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          action: 'Update Personal Information by Admin',
          timeAgo: getTimeAgo(new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000))
        },
        {
          id: 6,
          date: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          endDate: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }),
          action: 'Download Marks Statement of The Examination June-2025',
          timeAgo: getTimeAgo(new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000))
        }
      ];
      setActivities(currentActivities);
    };

    generateActivities();
    // Update activities every 30 seconds to keep time ago accurate
    const activityTimer = setInterval(generateActivities, 30000);
    
    return () => clearInterval(activityTimer);
  }, [currentDateTime]);


  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };

  const getCurrentDateTimeString = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return currentDateTime.toLocaleDateString('en-US', options);
  };

  const examYears = [
    'Select...',
    'December-2024',
    'May-2024',
    'May-2023',
    'December-2023',
    'June-2025',
    'January-2023'
  ];

  const getAdmitCardFileUrlByYear = (year: string): string | null => {
    if (year === 'June-2025') return '/pdf/June-2025.pdf';
    if (year === 'December-2024') return '/pdf/December-2024.pdf';
    if (year === 'May-2024') return '/pdf/May-2024.pdf';
    if (year === 'December-2023') return '/pdf/December-2023.pdf';
    if (year === 'May-2023') return '/pdf/May-2023.pdf';
    if (year === 'January-2023') return '/pdf/January-2023.pdf';
    return null;
  };

  const getMarksheetFileByYear = (year: string): { href: string; filename: string } | null => {
    if (year === 'June-2025') {
      return {
        href: '/Marksheet/JUNE-2025ASHWINKUMAR KASHINATH CHAVAN  Result.pdf',
        filename: 'JUNE-2025ASHWINKUMAR KASHINATH CHAVAN  Result.pdf'
      };
    }
    if (year === 'May-2024') {
      return {
        href: '/Marksheet/MAY-2024ASHWINKUMAR KASHINATH CHAVAN  Result.pdf',
        filename: 'MAY-2024ASHWINKUMAR KASHINATH CHAVAN  Result.pdf'
      };
    }
    if (year === 'December-2024') {
      return {
        href: '/Marksheet/DEC-2024ASHWINKUMAR KASHINATH CHAVAN  Result.pdf',
        filename: 'DEC-2024ASHWINKUMAR KASHINATH CHAVAN  Result.pdf'
      };
    }
    return null;
  };

  const toggleActivity = (id: number) => {
    setExpandedActivities(prev => 
      prev.includes(id) 
        ? prev.filter(actId => actId !== id)
        : [...prev, id]
    );
  };

  const handleDownload = (type: 'admitcard' | 'marksheet') => {
    if (!selectedYear || selectedYear === 'Select...') {
      alert('Please select an examination year first');
      return;
    }

    if (type === 'admitcard') {
      const fileUrl = getAdmitCardFileUrlByYear(selectedYear);
      if (!fileUrl) {
        alert(`Admit Card not available for ${selectedYear}`);
        return;
      }

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `AdmitCard-${selectedYear}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    if (type === 'marksheet') {
      const file = getMarksheetFileByYear(selectedYear);
      if (!file) {
        alert(`Marksheet not available for ${selectedYear}`);
        return;
      }

      const link = document.createElement('a');
      link.href = file.href;
      link.download = file.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Default behavior for other types (if any)
    alert(`Downloading ${type} for ${selectedYear}...`);
  };

  const renderSkipNavigation = () => (
    <div className="bg-blue-50 border-b border-blue-200 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-600">Skip Navigation Links:</span>
          <button 
            onClick={() => setCurrentSection('home')}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderNavigation = () => (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => { setCurrentSection('home'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="mr-2" size={16} />
              Home
            </button>
            
            <button
              onClick={() => { setCurrentSection('examination'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'examination' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="mr-2" size={16} />
              Examination
            </button>
            
            <button
              onClick={() => { setCurrentSection('timetable'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'timetable' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="mr-2" size={16} />
              Time Table
            </button>
            
            <button
              onClick={() => { setCurrentSection('revaluation'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'revaluation' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <RotateCcw className="mr-2" size={16} />
              Revaluation
            </button>
            
            <button
              onClick={() => { setCurrentSection('convocation'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'convocation' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <GraduationCap className="mr-2" size={16} />
              Convocation
            </button>
            
            <button
              onClick={() => { setCurrentSection('migration'); setExamSubSection(null); }}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentSection === 'migration' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="mr-2" size={16} />
              Migration
            </button>
          </div>
          
          <button
            onClick={onLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            <LogOut className="mr-2" size={16} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );

  const renderHomeContent = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome CHAVAN ASHWINKUMAR KASHINATH</h2>
            <p className="text-gray-600 mt-1">{getCurrentDate()}</p>
          </div>
          <img 
            src="/tmvlogo.png" 
            alt="TMV Logo" 
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Current Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Current Activities</h3>
          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
            <Clock size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-800">
              {getCurrentDateTimeString()}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          {activities.map((activity) => (
            <div key={activity.id} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggleActivity(activity.id)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  {expandedActivities.includes(activity.id) ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">
                      {activity.action}
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-blue-600 font-medium">
                        {activity.date}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        • {activity.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
              
              {expandedActivities.includes(activity.id) && (
                <div className="px-6 pb-3 text-sm text-gray-600 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span>{activity.action}</span>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500">
                        {activity.date}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        {activity.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExaminationContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Examination</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => setExamSubSection('form')}
            className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
            <h3 className="font-semibold text-gray-900">Examination Form</h3>
          </button>
          
          <button
            onClick={() => setExamSubSection('backlog')}
            className="group bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105"
          >
            <RotateCcw className="text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
            <h3 className="font-semibold text-gray-900">Backlog Form</h3>
          </button>
          
          <button
            onClick={() => setExamSubSection('admitcard')}
            className="group bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105"
          >
            <User className="text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
            <h3 className="font-semibold text-gray-900">Admit Card</h3>
          </button>
          
          <button
            onClick={() => setExamSubSection('marksheet')}
            className="group bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
          >
            <GraduationCap className="text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
            <h3 className="font-semibold text-gray-900">Marksheet</h3>
          </button>
        </div>

        {/* Examination Sub-sections */}
        {examSubSection === 'form' && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-center text-lg font-medium text-gray-900">
              Next Examination Not Declare For Your Course..!
            </p>
          </div>
        )}

        {examSubSection === 'backlog' && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-center text-lg font-medium text-gray-900">
              Next Examination Not Declare For Your Course..!
            </p>
          </div>
        )}

        {examSubSection === 'admitcard' && (
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Admit Card</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Examination Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {examYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => handleDownload('admitcard')}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="mr-2" size={16} />
                Download Admit Card
              </button>
              {/* {getAdmitCardFileUrlByYear(selectedYear) && (
                <div>
                  <a
                    href={getAdmitCardFileUrlByYear(selectedYear) as string}
                    download
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {(getAdmitCardFileUrlByYear(selectedYear) as string).split('/').pop()}
                  </a>
                </div>
              )} */}
            </div>
          </div>
        )}

        {examSubSection === 'marksheet' && (
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Marksheet</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Examination Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {examYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => handleDownload('marksheet')}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <Download className="mr-2" size={16} />
                Download Marksheet
              </button>
              {/* Removed inline download links under the button as requested */}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderTimeTableContent = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Time Table</h2>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-center text-lg font-medium text-gray-900">
          Next Examination Not Declare For Your Course..!
        </p>
      </div>
    </div>
  );

  const renderRevaluationContent = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Revaluation</h2>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Application For Verification Of Marks</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Building2 className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Center</p>
                <p className="text-gray-900 font-medium">Tilak Maharashtra Vidyapeeth, Pune</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Exam Center</p>
                <p className="text-gray-900 font-medium">Tilak Maharashtra Vidyapeeth, Pune</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Course</p>
                <p className="text-gray-900 font-medium">Bachelor of Computer Applications- R- Third Year</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Calendar className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Academic Year</p>
                <p className="text-gray-900 font-medium">June 2023 - May 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-blue-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Batch Year</p>
                <p className="text-gray-900 font-medium">June 2022 - May 2023</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-1" size={22} />
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Status</p>
                <p className="text-green-600 font-semibold">Regular</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );

  const renderConvocationContent = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Convocation</h2>
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-center text-lg font-medium text-gray-900">
          Convocation information will be updated here when available.
        </p>
      </div>
    </div>
  );

  const renderMigrationContent = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Migration</h2>
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-center text-lg font-medium text-gray-900">
          Migration information will be updated here when available.
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return renderHomeContent();
      case 'examination':
        return renderExaminationContent();
      case 'timetable':
        return renderTimeTableContent();
      case 'revaluation':
        return renderRevaluationContent();
      case 'convocation':
        return renderConvocationContent();
      case 'migration':
        return renderMigrationContent();
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderSkipNavigation()}
      
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/tmvlogo.png" 
                alt="TMV Logo" 
                className="h-12 w-auto mr-4"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">TMV Online Student Portal</h1>
                <p className="text-sm text-gray-600">Tilak Maharashtra Vidyapeeth</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {renderNavigation()}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default StudentDashboard;