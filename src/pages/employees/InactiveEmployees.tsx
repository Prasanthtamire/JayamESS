import React from 'react';
import { UserMinus, Search, Filter } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const InactiveEmployees: React.FC = () => {
  const inactiveEmployees = [
    {
      id: 1,
      name: 'Alex Thompson',
      position: 'Marketing Specialist',
      department: 'Marketing',
      lastActive: '2024-11-15',
      reason: 'Resignation',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      position: 'UX Designer',
      department: 'Design',
      lastActive: '2024-10-28',
      reason: 'Termination',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Inactive Employees</h1>
          <p className="text-gray-600 text-lg">View employees who are no longer active</p>
        </div>
      </div>

      {/* Search and Filters */}
      <AnimatedCard className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search inactive employees..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Filter size={20} />
          </button>
        </div>
      </AnimatedCard>

      {/* Inactive Employees List */}
      <div className="space-y-4">
        {inactiveEmployees.map((employee, index) => (
          <AnimatedCard key={employee.id} delay={index * 100} className="p-6">
            <div className="flex items-center space-x-6">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-16 h-16 rounded-full object-cover grayscale"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.position} • {employee.department}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-sm text-gray-500">Last Active: {new Date(employee.lastActive).toLocaleDateString()}</span>
                  <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                    {employee.reason}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
                  View Details
                </button>
                <button className="bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200 text-sm font-medium">
                  Reactivate
                </button>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default InactiveEmployees;