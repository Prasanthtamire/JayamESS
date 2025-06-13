import React from 'react';
import { BarChart3, Users, TrendingUp, Calendar } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600 text-lg">Comprehensive view of your organization's key metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Employees', value: '1,247', icon: Users, color: 'from-blue-500 to-blue-600' },
          { title: 'Active Projects', value: '89', icon: BarChart3, color: 'from-green-500 to-green-600' },
          { title: 'Growth Rate', value: '+12%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
          { title: 'Events This Month', value: '15', icon: Calendar, color: 'from-orange-500 to-orange-600' }
        ].map((stat, index) => (
          <AnimatedCard key={stat.title} delay={index * 100} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <AnimatedCard delay={400} className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview Analytics</h2>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Detailed overview charts would be displayed here</p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Overview;