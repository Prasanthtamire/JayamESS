import React, { useState } from 'react';
import { Calendar, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const LeaveRequests: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const leaveRequests = [
    {
      id: 1,
      type: 'Annual Leave',
      startDate: '2024-12-20',
      endDate: '2024-12-24',
      days: 5,
      status: 'approved',
      reason: 'Holiday vacation',
      submittedDate: '2024-12-01'
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2024-12-15',
      endDate: '2024-12-15',
      days: 1,
      status: 'pending',
      reason: 'Medical appointment',
      submittedDate: '2024-12-10'
    }
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting leave request:', formData);
    setShowForm(false);
    setFormData({ type: '', startDate: '', endDate: '', reason: '' });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Leave Requests</h1>
          <p className="text-gray-600 text-lg">Manage your leave requests and view history</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>New Request</span>
        </button>
      </div>

      {/* Leave Balance */}
      <AnimatedCard delay={100} className="p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Leave Balance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { type: 'Annual Leave', used: 8, total: 25, color: 'blue' },
            { type: 'Sick Leave', used: 2, total: 10, color: 'green' },
            { type: 'Personal Leave', used: 1, total: 5, color: 'purple' }
          ].map((leave) => (
            <div key={leave.type} className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">{leave.type}</h3>
              <div className="relative w-24 h-24 mx-auto mb-2">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={`text-${leave.color}-500`}
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${(leave.used / leave.total) * 100}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">{leave.total - leave.used}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Days remaining</p>
            </div>
          ))}
        </div>
      </AnimatedCard>

      {/* New Request Form */}
      {showForm && (
        <AnimatedCard delay={200} className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">New Leave Request</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select leave type</option>
                  <option value="annual">Annual Leave</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Leave</option>
                  <option value="emergency">Emergency Leave</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
              <textarea
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Please provide a reason for your leave request..."
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </AnimatedCard>
      )}

      {/* Request History */}
      <AnimatedCard delay={300} className="p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Request History</h2>
        <div className="space-y-4">
          {leaveRequests.map((request, index) => (
            <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                {getStatusIcon(request.status)}
                <div>
                  <h3 className="font-semibold text-gray-900">{request.type}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()} ({request.days} days)
                  </p>
                  <p className="text-xs text-gray-500">Submitted: {new Date(request.submittedDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(request.status)}`}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
                <p className="text-xs text-gray-500 mt-1">{request.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
};

export default LeaveRequests;