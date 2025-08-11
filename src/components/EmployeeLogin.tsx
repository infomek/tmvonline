import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, User, Lock, Mail } from 'lucide-react';

const EmployeeLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (employeeId === 'TMV001' && password === 'admin123') {
      alert('Employee login successful');
      window.location.href = '/';
    } else {
      alert('Invalid Employee ID or Password. Please try again.');
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/bg1.png)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-4">
            <img 
              src="/tmvlogo.png" 
              alt="TMV Logo" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">TMV Employee Login</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to access the employee portal</p>
          </div>

          

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                Employee ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="employeeId"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Employee ID"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Login
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm">
              {/* Removed Change Password */}
              <span />
              <a href="/admin/forgot" className="text-blue-600 hover:text-blue-800">Forgot Password?</a>
            </div>
            <div className="text-center">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Employee User Manual</a>
            </div>
          </div>

          {/* Note Section */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Mail className="mr-2" size={16} />
              Note: Email should contain following
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Subject:</strong> Problem statement with from name</li>
              <li><strong>Detail mail:</strong> Employee ID and detailed query/issue with screenshot.</li>
              <li><strong>Our Email:</strong> <a href="mailto:tmvexam@tmv.edu.in" className="text-blue-600 hover:text-blue-800">tmvexam@tmv.edu.in</a></li>
            </ul>
          </div>

          {/* Back Button */}
          <a
            href="/"
            className="mt-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Main Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin; 