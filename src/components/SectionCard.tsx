import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border-l-4 border-blue-600 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-blue-600">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default SectionCard;