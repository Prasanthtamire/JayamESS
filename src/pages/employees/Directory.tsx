import React, { useState } from 'react';
import { Search, Filter, Users, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const employees = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Developer',
      department: 'Engineering',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'active'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      department: 'Product',
      email: 'michael.chen@company.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Employee Directory</h1>
          <p className="text-gray-600 text-lg">Browse and search through all company employees</p>
        </div>
      </div>

      {/* Search and Filters */}
      <AnimatedCard className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
            </select>
            <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </AnimatedCard>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee, index) => (
          <AnimatedCard key={employee.id} delay={index * 100} className="p-6">
            <div className="text-center mb-6">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
              <p className="text-sm text-gray-600">{employee.position}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mt-2">
                {employee.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail size={16} />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone size={16} />
                <span>{employee.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin size={16} />
                <span>{employee.location}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
                View Profile
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                Contact
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default Directory;