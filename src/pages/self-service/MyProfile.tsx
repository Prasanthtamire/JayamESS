import React, { useState } from 'react';
import { User, Edit, Save, Camera } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const MyProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    department: 'Human Resources',
    position: 'HR Manager',
    manager: 'Jane Smith',
    startDate: '2020-05-18',
    location: 'New York, NY'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600 text-lg">Manage your personal information and settings</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <Edit size={20} />
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Picture */}
        <AnimatedCard delay={100} className="p-8 text-center">
          <div className="relative inline-block mb-6">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                <Camera size={16} />
              </button>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {profileData.firstName} {profileData.lastName}
          </h3>
          <p className="text-gray-600 mb-1">{profileData.position}</p>
          <p className="text-sm text-gray-500">{profileData.department}</p>
        </AnimatedCard>

        {/* Profile Information */}
        <AnimatedCard delay={200} className="lg:col-span-2 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <User className="text-blue-500" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-900 py-3">{profileData.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-900 py-3">{profileData.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-900 py-3">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              ) : (
                <p className="text-gray-900 py-3">{profileData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <p className="text-gray-900 py-3">{profileData.department}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <p className="text-gray-900 py-3">{profileData.position}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manager</label>
              <p className="text-gray-900 py-3">{profileData.manager}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <p className="text-gray-900 py-3">{new Date(profileData.startDate).toLocaleDateString()}</p>
            </div>
          </div>

          {isEditing && (
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            </div>
          )}
        </AnimatedCard>
      </div>
    </div>
  );
};

export default MyProfile;