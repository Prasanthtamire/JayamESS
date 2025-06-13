import React, { useState } from 'react';
import { User, Calendar, Clock, FileText, CreditCard, Settings, Bell, Shield } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const SelfService: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const quickActions = [
    {
      id: 'leave',
      title: 'Request Leave',
      description: 'Apply for vacation or sick leave',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'timesheet',
      title: 'Submit Timesheet',
      description: 'Log your working hours',
      icon: Clock,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'expense',
      title: 'Expense Report',
      description: 'Submit expense claims',
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'documents',
      title: 'My Documents',
      description: 'Access personal documents',
      icon: FileText,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const recentRequests = [
    { id: 1, type: 'Leave Request', status: 'Approved', date: '2024-12-10', description: 'Annual Leave - 3 days' },
    { id: 2, type: 'Expense Claim', status: 'Pending', date: '2024-12-08', description: 'Business Travel Expenses' },
    { id: 3, type: 'Timesheet', status: 'Submitted', date: '2024-12-06', description: 'Week ending Dec 6, 2024' },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Self Service</h1>
        <p className="text-gray-600">Manage your personal information and requests</p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <AnimatedCard key={action.id} delay={index * 100} className="p-6 cursor-pointer hover:shadow-xl">
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                <action.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Summary */}
        <AnimatedCard delay={400} className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">Senior Developer</p>
              <p className="text-sm text-gray-500">Engineering Department</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Employee ID</span>
              <span className="text-sm font-medium text-gray-900">EMP001</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Join Date</span>
              <span className="text-sm font-medium text-gray-900">Mar 15, 2022</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Manager</span>
              <span className="text-sm font-medium text-gray-900">John Smith</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-gray-600">Location</span>
              <span className="text-sm font-medium text-gray-900">New York, NY</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
            Edit Profile
          </button>
        </AnimatedCard>

        {/* Recent Requests */}
        <AnimatedCard delay={500} className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Requests</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>

          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900">{request.type}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{request.description}</p>
                  <p className="text-xs text-gray-500">{new Date(request.date).toLocaleDateString()}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>

      {/* Leave Balance & Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leave Balance */}
        <AnimatedCard delay={600} className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Leave Balance</h2>
          <div className="space-y-4">
            {[
              { type: 'Annual Leave', used: 8, total: 25, color: 'blue' },
              { type: 'Sick Leave', used: 2, total: 10, color: 'green' },
              { type: 'Personal Leave', used: 1, total: 5, color: 'purple' }
            ].map((leave) => (
              <div key={leave.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{leave.type}</span>
                  <span className="text-sm text-gray-600">{leave.total - leave.used} days remaining</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${leave.color}-500 h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${(leave.used / leave.total) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Used: {leave.used} days</span>
                  <span>Total: {leave.total} days</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Benefits Overview */}
        <AnimatedCard delay={700} className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Benefits Overview</h2>
          <div className="space-y-4">
            {[
              { name: 'Health Insurance', status: 'Active', coverage: 'Family Plan' },
              { name: 'Dental Insurance', status: 'Active', coverage: 'Individual' },
              { name: '401(k) Plan', status: 'Active', coverage: '6% Match' },
              { name: 'Life Insurance', status: 'Active', coverage: '2x Salary' }
            ].map((benefit, index) => (
              <div key={benefit.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{benefit.name}</h3>
                  <p className="text-sm text-gray-600">{benefit.coverage}</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  {benefit.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
            View All Benefits
          </button>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default SelfService;