import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, Users, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Map className="h-8 w-8 text-teal-600" />
                <span className="text-xl font-bold text-gray-900">ProfileExplorer</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') 
                    ? 'border-teal-600 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="mr-2 h-4 w-4" />
                Profiles
              </Link>
              <Link
                to="/admin"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/admin') 
                    ? 'border-teal-600 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Settings className="mr-2 h-4 w-4" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile bottom navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around">
          <Link
            to="/"
            className={`flex flex-col items-center py-2 px-3 ${
              isActive('/') ? 'text-teal-600' : 'text-gray-500'
            }`}
          >
            <Users className="h-6 w-6" />
            <span className="text-xs mt-1">Profiles</span>
          </Link>
          <Link
            to="/admin"
            className={`flex flex-col items-center py-2 px-3 ${
              isActive('/admin') ? 'text-teal-600' : 'text-gray-500'
            }`}
          >
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;