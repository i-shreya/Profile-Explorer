import React, { useState } from 'react';
import { MapIcon, Users } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';
import ProfileGrid from '../components/profile/ProfileGrid';
import MapView from '../components/map/MapView';
import ProfileSearch from '../components/profile/ProfileSearch';
import { Profile } from '../types/profile';

const HomePage: React.FC = () => {
  const { getFilteredProfiles, loading, error, setSelectedProfile, selectedProfile } = useProfiles();
  const [activeTab, setActiveTab] = useState<'profiles' | 'map'>('profiles');
  
  const handleSelectProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setActiveTab('map');
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
  
  const filteredProfiles = getFilteredProfiles();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Profile Explorer</h1>
        
        <div className="bg-gray-100 p-1 rounded-lg">
          <div className="flex space-x-1">
            <button
              className={`px-4 py-2 rounded-md flex items-center text-sm font-medium ${
                activeTab === 'profiles'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('profiles')}
            >
              <Users className="h-5 w-5 mr-2" />
              Profiles
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center text-sm font-medium ${
                activeTab === 'map'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('map')}
            >
              <MapIcon className="h-5 w-5 mr-2" />
              Map View
            </button>
          </div>
        </div>
      </div>
      
      <ProfileSearch />
      
      {filteredProfiles.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600">No profiles found. Try adjusting your search criteria.</p>
        </div>
      ) : (
        <>
          {activeTab === 'profiles' ? (
            <ProfileGrid 
              profiles={filteredProfiles} 
              onSelectProfile={handleSelectProfile} 
            />
          ) : (
            <div className="space-y-6">
              <MapView 
                profiles={filteredProfiles} 
                selectedProfile={selectedProfile} 
              />
              
              {selectedProfile && (
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600">
                  <div className="flex items-start">
                    <img 
                      src={selectedProfile.photo} 
                      alt={selectedProfile.name} 
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedProfile.name}</h3>
                      <p className="text-sm text-gray-600">
                        {selectedProfile.address.street}, {selectedProfile.address.city}, {selectedProfile.address.state} {selectedProfile.address.zip}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;