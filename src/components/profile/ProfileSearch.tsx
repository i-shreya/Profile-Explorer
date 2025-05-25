import React from 'react';
import { Search } from 'lucide-react';
import { useProfiles } from '../../context/ProfileContext';

const ProfileSearch: React.FC = () => {
  const { searchTerm, setSearchTerm, filterBy, setFilterBy } = useProfiles();
  
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search profiles..."
          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm h-10"
        />
      </div>
      
      <div className="flex-shrink-0">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm h-10"
        >
          <option value="all">All Profiles</option>
          <option value="location">Filter by Location</option>
          <option value="skill">Filter by Skills</option>
        </select>
      </div>
    </div>
  );
};

export default ProfileSearch;