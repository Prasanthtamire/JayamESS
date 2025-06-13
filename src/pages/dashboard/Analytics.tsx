import React from 'react';
import { TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600 text-lg">Deep insights into your organization's performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatedCard delay={100} className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Performance Trends</h2>
            <TrendingUp className="text-blue-500" size={24} />
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LineChart className="mx-auto text-blue-500 mb-4" size={48} />
              <p className="text-gray-600">Performance trend chart</p>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200} className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Department Distribution</h2>
            <PieChart className="text-green-500" size={24} />
          </div>
          <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="mx-auto text-green-500 mb-4" size={48} />
              <p className="text-gray-600">Department pie chart</p>
            </div>
          </div>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={300} className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Detailed Analytics</h2>
          <BarChart3 className="text-purple-500" size={24} />
        </div>
        <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="mx-auto text-purple-500 mb-4" size={64} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">Comprehensive analytics dashboard would be displayed here</p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Analytics;