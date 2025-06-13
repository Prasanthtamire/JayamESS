import React from 'react';
import { Shield, Users, Settings, Lock } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const RolesPermissions: React.FC = () => {
  const roles = [
    {
      id: 1,
      name: 'Administrator',
      description: 'Full system access and management',
      users: 3,
      permissions: ['All Permissions'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Human resources management',
      users: 5,
      permissions: ['Employee Management', 'Reports', 'Approvals'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Department Head',
      description: 'Department-level management',
      users: 12,
      permissions: ['Team Management', 'Approvals', 'Reports'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'Employee',
      description: 'Standard employee access',
      users: 1227,
      permissions: ['Self Service', 'View Profile', 'Submit Requests'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Roles & Permissions</h1>
          <p className="text-gray-600 text-lg">Manage user roles and access permissions</p>
        </div>
        <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Create New Role
        </button>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <AnimatedCard key={role.id} delay={index * 100} className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center`}>
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                <Settings size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Users</span>
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="font-semibold text-gray-900">{role.users}</span>
                </div>
              </div>

              <div>
                <span className="text-sm text-gray-600 mb-2 block">Permissions</span>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
                Edit Role
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                View Users
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Permissions Matrix */}
      <AnimatedCard delay={400} className="p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Lock className="text-blue-500" size={24} />
          <h2 className="text-xl font-bold text-gray-900">Permissions Matrix</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Permission</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Admin</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">HR Manager</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Dept. Head</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Employee</th>
              </tr>
            </thead>
            <tbody>
              {[
                'View Dashboard',
                'Manage Employees',
                'Approve Requests',
                'Generate Reports',
                'System Settings',
                'User Management'
              ].map((permission, index) => (
                <tr key={permission} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-900">{permission}</td>
                  <td className="text-center py-3 px-4">
                    <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`w-4 h-4 ${index < 4 ? 'bg-green-500' : 'bg-red-500'} rounded-full inline-block`}></span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`w-4 h-4 ${index < 3 ? 'bg-green-500' : 'bg-red-500'} rounded-full inline-block`}></span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`w-4 h-4 ${index === 0 ? 'bg-green-500' : 'bg-red-500'} rounded-full inline-block`}></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default RolesPermissions;