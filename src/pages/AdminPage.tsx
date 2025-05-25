import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';
import ProfileAdminList from '../components/admin/ProfileAdminList';
import ProfileForm from '../components/admin/ProfileForm';
import Button from '../components/ui/Button';
import { Profile } from '../types/profile';

const AdminPage: React.FC = () => {
  const { profiles, loading, error, addProfile, updateProfile, deleteProfile } = useProfiles();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | undefined>(undefined);
  
  const handleAddNew = () => {
    setEditingProfile(undefined);
    setIsFormVisible(true);
  };
  
  const handleEdit = (profile: Profile) => {
    setEditingProfile(profile);
    setIsFormVisible(true);
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this profile? This action cannot be undone.')) {
      deleteProfile(id);
    }
  };
  
  const handleSubmit = (profile: Profile) => {
    if (editingProfile) {
      updateProfile(profile);
    } else {
      addProfile(profile);
    }
    setIsFormVisible(false);
  };
  
  const handleCancel = () => {
    setIsFormVisible(false);
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
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Profile Management</h1>
        
        {!isFormVisible && (
          <Button
            variant="primary"
            onClick={handleAddNew}
            className="flex items-center"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Add New Profile
          </Button>
        )}
      </div>
      
      {isFormVisible ? (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            {editingProfile ? 'Edit Profile' : 'Create New Profile'}
          </h2>
          <ProfileForm
            profile={editingProfile}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      ) : (
        <>
          {profiles.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 mb-4">No profiles found. Get started by adding your first profile.</p>
              <Button
                variant="primary"
                onClick={handleAddNew}
                className="flex items-center mx-auto"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Add New Profile
              </Button>
            </div>
          ) : (
            <ProfileAdminList
              profiles={profiles}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AdminPage;