import React from 'react';
import { Users, UserCheck, FileText } from 'lucide-react';

interface ExamPortalSectionProps {
  onStudentLogin: () => void;
}

const ExamPortalSection: React.FC<ExamPortalSectionProps> = ({ onStudentLogin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-3">
        Exam Application Portal 
      </h3>
      
      <div className="space-y-6">
        {/* Student Login Section */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Users className="mr-2 text-blue-600" size={20} />
            1. Student Login:
          </h4>
          <p className="text-gray-700 mb-3">
            Click on 
            <button 
              onClick={onStudentLogin}
              className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Link1
            </button>
            <button 
              onClick={onStudentLogin}
              className="mx-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Link2
            </button>
            for applying for examination form.
          </p>
        </div>

        {/* TMV Employee Login Section */}
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <UserCheck className="mr-2 text-green-600" size={20} />
            2. TMV Employee Login:
          </h4>
          <p className="text-gray-700 mb-3">
            Click on 
            <a href="/admin" className="mx-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200">
              Link1
            </a>
            <a href="/admin" className="mx-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200">
              Link2
            </a>
            for verification of examination forms, Generation of Seat Number, Marks Entry and Results.
          </p>
        </div>

        {/* Manual Section */}
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <FileText className="mr-2 text-purple-600" size={20} />
            3. Student Exam Portal Manual
          </h4>
          <a
            href="https://tmvonline.org/onlexam/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200 inline-block"
          >
            Click Here for Student Exam Portal Manual
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExamPortalSection;