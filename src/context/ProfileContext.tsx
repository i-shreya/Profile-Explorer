import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Profile } from '../types/profile';
import { profiles as initialProfiles } from '../data/profiles';

interface ProfileContextType {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
  selectedProfile: Profile | null;
  searchTerm: string;
  filterBy: string;
  setSelectedProfile: (profile: Profile | null) => void;
  setSearchTerm: (term: string) => void;
  setFilterBy: (filter: string) => void;
  addProfile: (profile: Profile) => void;
  updateProfile: (profile: Profile) => void;
  deleteProfile: (id: string) => void;
  getFilteredProfiles: () => Profile[];
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfiles = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('all');

  useEffect(() => {
    // Simulate API fetch
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        setTimeout(() => {
          setProfiles(initialProfiles);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to fetch profiles');
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const addProfile = (profile: Profile) => {
    setProfiles([...profiles, profile]);
  };

  const updateProfile = (updatedProfile: Profile) => {
    setProfiles(
      profiles.map(profile => 
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
    
    if (selectedProfile?.id === updatedProfile.id) {
      setSelectedProfile(updatedProfile);
    }
  };

  const deleteProfile = (id: string) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
    
    if (selectedProfile?.id === id) {
      setSelectedProfile(null);
    }
  };

  const getFilteredProfiles = () => {
    return profiles.filter(profile => {
      const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           profile.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (filterBy === 'all') return matchesSearch;
      
      // Additional filters could be added here based on location, skills, etc.
      return matchesSearch;
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        loading,
        error,
        selectedProfile,
        searchTerm,
        filterBy,
        setSelectedProfile,
        setSearchTerm,
        setFilterBy,
        addProfile,
        updateProfile,
        deleteProfile,
        getFilteredProfiles
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};