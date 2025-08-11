import React, { useState } from 'react';
import { ArrowLeft, Mail, User } from 'lucide-react';

const EmployeeForgotPassword: React.FC = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`If the Employee ID and email match our records, a reset link will be sent to ${email}.`);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/bg1.png)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <img src="/tmvlogo.png" alt="TMV Logo" className="h-16 w-auto mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Employee - Forgot Password</h2>
            <p className="text-gray-600 mt-2">Enter your Employee ID and registered email</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Registered Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your registered email"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 flex justify-between">
            <a href="/admin" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2" size={16} /> Back to Login
            </a>
            <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="mr-2" size={16} /> Back to Main Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForgotPassword; 