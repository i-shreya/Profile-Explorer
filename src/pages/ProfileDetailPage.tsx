import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';
import ProfileDetail from '../components/profile/ProfileDetail';
import Button from '../components/ui/Button';

const ProfileDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { profiles, loading, error, setSelectedProfile } = useProfiles();
  
  const profile = profiles.find(p => p.id === id);
  
  useEffect(() => {
    // Reset selected profile when leaving the page
    return () => {
      setSelectedProfile(null);
    };
  }, [setSelectedProfile]);
  
  const handleShowOnMap = () => {
    if (profile) {
      setSelectedProfile(profile);
      navigate('/');
    }
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
  
  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Profile not found. The profile may have been deleted or you may have followed an invalid link.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profiles
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Profiles
        </Button>
      </div>
      
      <ProfileDetail 
        profile={profile} 
        onShowOnMap={handleShowOnMap} 
      />
    </div>
  );
};

export default ProfileDetailPage;