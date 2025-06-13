import React from 'react';
import { Target, Award, Users, Clock } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Metrics: React.FC = () => {
  const keyMetrics = [
    { title: 'Employee Satisfaction', value: '87%', target: '90%', status: 'good', icon: Award },
    { title: 'Productivity Index', value: '94.2%', target: '95%', status: 'excellent', icon: Target },
    { title: 'Retention Rate', value: '91.5%', target: '90%', status: 'excellent', icon: Users },
    { title: 'Average Response Time', value: '2.3h', target: '2h', status: 'warning', icon: Clock }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Key Metrics</h1>
          <p className="text-gray-600 text-lg">Monitor your organization's key performance indicators</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyMetrics.map((metric, index) => (
          <AnimatedCard key={metric.title} delay={index * 100} className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <metric.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(metric.status)}`}>
                    {metric.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current</span>
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Target</span>
                <span className="text-lg font-semibold text-gray-700">{metric.target}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: '85%' }}
                />
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <AnimatedCard delay={400} className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Metrics Comparison</h2>
        <div className="h-64 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Target className="mx-auto text-indigo-500 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Metrics Visualization</h3>
            <p className="text-gray-600">Interactive metrics comparison chart would be displayed here</p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Metrics;