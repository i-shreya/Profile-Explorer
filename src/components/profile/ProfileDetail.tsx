import React from 'react';
import { MapPin, Phone, Mail, Globe, Briefcase, Heart, Award } from 'lucide-react';
import { Profile } from '../../types/profile';
import Button from '../ui/Button';

interface ProfileDetailProps {
  profile: Profile;
  onShowOnMap: (profile: Profile) => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile, onShowOnMap }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/3">
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h1>
            <p className="text-gray-600 font-medium">{profile.jobTitle} at {profile.company}</p>
            <p className="mt-4 text-gray-700">{profile.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-0.5 text-teal-600" />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-700">
                  {profile.address.street}<br />
                  {profile.address.city}, {profile.address.state} {profile.address.zip}<br />
                  {profile.address.country}
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-2 mt-0.5 text-teal-600" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-700">{profile.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-2 mt-0.5 text-teal-600" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-700">{profile.email}</p>
              </div>
            </div>
            
            {profile.website && (
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-2 mt-0.5 text-teal-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Website</h3>
                  <p className="text-gray-700">{profile.website}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <Briefcase className="h-5 w-5 mr-2 mt-0.5 text-blue-800" />
              <div>
                <h3 className="font-medium text-gray-900">Skills</h3>
                <div className="flex flex-wrap mt-1">
                  {profile.skills?.map(skill => (
                    <span 
                      key={skill} 
                      className="mr-2 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Heart className="h-5 w-5 mr-2 mt-0.5 text-blue-800" />
              <div>
                <h3 className="font-medium text-gray-900">Interests</h3>
                <div className="flex flex-wrap mt-1">
                  {profile.interests?.map(interest => (
                    <span 
                      key={interest} 
                      className="mr-2 mb-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            onClick={() => onShowOnMap(profile)}
            className="w-full md:w-auto"
          >
            <MapPin className="h-5 w-5 mr-2" />
            Show on Map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;