import React from 'react';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  return (
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
              <h1 className="text-xl font-bold text-gray-900">TMV Online</h1>
              <p className="text-sm text-gray-600">Tilak Maharashtra Vidyapeeth</p>
            </div>
          </div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;