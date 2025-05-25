import React from 'react';
import ProfileCard from './ProfileCard';
import { Profile } from '../../types/profile';
import { useNavigate } from 'react-router-dom';

interface ProfileGridProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ profiles, onSelectProfile }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = (profile: Profile) => {
    navigate(`/profile/${profile.id}`);
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {profiles.map(profile => (
        <ProfileCard 
          key={profile.id}
          profile={profile}
          onSelect={onSelectProfile}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;