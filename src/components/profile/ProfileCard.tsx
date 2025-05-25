import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { Profile } from '../../types/profile';
import Button from '../ui/Button';

interface ProfileCardProps {
  profile: Profile;
  onSelect: (profile: Profile) => void;
  onViewDetails: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSelect, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={profile.photo} 
          alt={profile.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{profile.jobTitle} at {profile.company}</p>
        
        <div className="flex items-start mt-1 text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0 text-gray-400" />
          <span>{profile.address.city}, {profile.address.state}</span>
        </div>
        
        <p className="mt-3 text-sm text-gray-700 line-clamp-2">{profile.description}</p>
        
        <div className="mt-4 flex justify-between items-center pt-2 border-t border-gray-100">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails(profile)}
            className="flex items-center"
          >
            <Info className="h-4 w-4 mr-1" />
            Details
          </Button>
          
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => onSelect(profile)}
            className="flex items-center"
          >
            <MapPin className="h-4 w-4 mr-1" />
            Show on Map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;