import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, Filter, Search, Calendar, User, FileText } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Approvals: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const approvals = [
    {
      id: 1,
      type: 'Leave Request',
      employee: 'Michael Chen',
      department: 'Product',
      requestDate: '2024-12-10',
      startDate: '2024-12-15',
      endDate: '2024-12-20',
      duration: '5 days',
      reason: 'Annual vacation with family',
      status: 'pending',
      priority: 'normal',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      type: 'Expense Claim',
      employee: 'Emma Davis',
      department: 'Design',
      requestDate: '2024-12-09',
      amount: '$1,250.00',
      category: 'Business Travel',
      reason: 'Client meeting in Chicago - flights and accommodation',
      status: 'pending',
      priority: 'high',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      type: 'Overtime Request',
      employee: 'James Wilson',
      department: 'Marketing',
      requestDate: '2024-12-08',
      hours: '10 hours',
      period: 'Dec 11-15, 2024',
      reason: 'Product launch campaign preparation',
      status: 'approved',
      priority: 'normal',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      type: 'Training Request',
      employee: 'Lisa Anderson',
      department: 'HR',
      requestDate: '2024-12-07',
      course: 'Advanced HR Analytics',
      cost: '$2,500.00',
      duration: '3 days',
      reason: 'Enhance data analysis skills for better HR insights',
      status: 'rejected',
      priority: 'low',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      type: 'Equipment Request',
      employee: 'David Rodriguez',
      department: 'Sales',
      requestDate: '2024-12-06',
      item: 'MacBook Pro 16"',
      cost: '$3,200.00',
      reason: 'Current laptop performance issues affecting productivity',
      status: 'pending',
      priority: 'high',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Requests', count: approvals.length },
    { id: 'pending', label: 'Pending', count: approvals.filter(a => a.status === 'pending').length },
    { id: 'approved', label: 'Approved', count: approvals.filter(a => a.status === 'approved').length },
    { id: 'rejected', label: 'Rejected', count: approvals.filter(a => a.status === 'rejected').length }
  ];

  const filteredApprovals = approvals.filter(approval => {
    const matchesFilter = activeFilter === 'all' || approval.status === activeFilter;
    const matchesSearch = approval.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         approval.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'rejected':
        return <XCircle className="text-red-500" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
      default:
        return <Clock className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'normal':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApproval = (id: number, action: 'approve' | 'reject') => {
    console.log(`${action} approval ${id}`);
    // Handle approval logic here
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Approvals</h1>
          <p className="text-gray-600">Review and manage pending requests from your team</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
            Bulk Approve
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
            Export
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <AnimatedCard className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </AnimatedCard>

      {/* Approvals List */}
      <div className="space-y-4">
        {filteredApprovals.map((approval, index) => (
          <AnimatedCard key={approval.id} delay={index * 100} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Left Section - Employee Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={approval.avatar}
                  alt={approval.employee}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{approval.employee}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(approval.priority)}`}>
                      {approval.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{approval.department} • {approval.type}</p>
                  <p className="text-xs text-gray-500">Requested on {new Date(approval.requestDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Middle Section - Request Details */}
              <div className="flex-1 lg:mx-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {approval.type === 'Leave Request' && (
                    <>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Dates:</span>
                        <span className="ml-2 font-medium text-gray-900">
                          {new Date(approval.startDate!).toLocaleDateString()} - {new Date(approval.endDate!).toLocaleDateString()}
                        </span>
                      </div>
                    </>
                  )}
                  {approval.type === 'Expense Claim' && (
                    <>
                      <div>
                        <span className="text-gray-500">Amount:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.amount}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.category}</span>
                      </div>
                    </>
                  )}
                  {approval.type === 'Overtime Request' && (
                    <>
                      <div>
                        <span className="text-gray-500">Hours:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.hours}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Period:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.period}</span>
                      </div>
                    </>
                  )}
                  {approval.type === 'Training Request' && (
                    <>
                      <div>
                        <span className="text-gray-500">Course:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.course}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Cost:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.cost}</span>
                      </div>
                    </>
                  )}
                  {approval.type === 'Equipment Request' && (
                    <>
                      <div>
                        <span className="text-gray-500">Item:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.item}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Cost:</span>
                        <span className="ml-2 font-medium text-gray-900">{approval.cost}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-3">
                  <span className="text-gray-500 text-sm">Reason:</span>
                  <p className="text-sm text-gray-700 mt-1">{approval.reason}</p>
                </div>
              </div>

              {/* Right Section - Status and Actions */}
              <div className="flex flex-col items-end space-y-3">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(approval.status)}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(approval.status)}`}>
                    {approval.status.charAt(0).toUpperCase() + approval.status.slice(1)}
                  </span>
                </div>

                {approval.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApproval(approval.id, 'approve')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleApproval(approval.id, 'reject')}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                    >
                      Reject
                    </button>
                  </div>
                )}

                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {filteredApprovals.length === 0 && (
        <AnimatedCard className="p-12 text-center">
          <FileText className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
          <p className="text-gray-600">There are no approval requests matching your current filters.</p>
        </AnimatedCard>
      )}
    </div>
  );
};

export default Approvals;