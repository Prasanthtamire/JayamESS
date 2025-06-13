import React from 'react';
import { Building2, Users, MapPin, Phone, Mail, Globe } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Organization: React.FC = () => {
  const departments = [
    {
      id: 1,
      name: 'Engineering',
      head: 'Sarah Johnson',
      employees: 45,
      budget: '$2.5M',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Product',
      head: 'Michael Chen',
      employees: 12,
      budget: '$800K',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      name: 'Design',
      head: 'Emma Davis',
      employees: 8,
      budget: '$600K',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      name: 'Marketing',
      head: 'James Wilson',
      employees: 15,
      budget: '$1.2M',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      name: 'Sales',
      head: 'David Rodriguez',
      employees: 25,
      budget: '$1.8M',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      name: 'Human Resources',
      head: 'Lisa Anderson',
      employees: 6,
      budget: '$400K',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const offices = [
    {
      id: 1,
      name: 'Headquarters',
      location: 'New York, NY',
      address: '123 Business Ave, Suite 100',
      employees: 85,
      phone: '+1 (555) 123-4567',
      email: 'ny@company.com'
    },
    {
      id: 2,
      name: 'West Coast Office',
      location: 'San Francisco, CA',
      address: '456 Tech Street, Floor 15',
      employees: 62,
      phone: '+1 (555) 234-5678',
      email: 'sf@company.com'
    },
    {
      id: 3,
      name: 'Austin Branch',
      location: 'Austin, TX',
      address: '789 Innovation Blvd, Building C',
      employees: 38,
      phone: '+1 (555) 345-6789',
      email: 'austin@company.com'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Organization</h1>
        <p className="text-gray-600">Overview of company structure, departments, and locations</p>
      </div>

      {/* Company Overview */}
      <AnimatedCard className="p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Building2 className="text-white" size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">TechCorp Solutions</h2>
            <p className="text-gray-600 mt-1">Leading technology solutions provider</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span>Founded 2015</span>
              <span>•</span>
              <span>185+ Employees</span>
              <span>•</span>
              <span>3 Locations</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">$12.5M</div>
            <div className="text-sm text-gray-600">Annual Revenue</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">150+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
        </div>
      </AnimatedCard>

      {/* Departments */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <AnimatedCard key={dept.id} delay={index * 100} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center`}>
                  <Building2 className="text-white" size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{dept.employees}</div>
                  <div className="text-sm text-gray-500">Employees</div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Department Head: {dept.head}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Budget</span>
                <span className="font-semibold text-gray-900">{dept.budget}</span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Locations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <AnimatedCard key={office.id} delay={index * 150} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{office.name}</h3>
                  <p className="text-sm text-gray-600">{office.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{office.employees}</div>
                  <div className="text-xs text-gray-500">Employees</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="text-gray-400 mt-0.5" size={16} />
                  <span className="text-gray-600">{office.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="text-gray-400" size={16} />
                  <span className="text-gray-600">{office.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="text-gray-400" size={16} />
                  <span className="text-gray-600">{office.email}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                  View Details
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Organizational Chart Preview */}
      <AnimatedCard delay={400} className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Organizational Structure</h2>
          <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
            View Full Chart
          </button>
        </div>
        
        <div className="text-center">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-6">
            <div className="font-semibold">CEO</div>
            <div className="text-sm opacity-90">John Smith</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['CTO', 'COO', 'CFO'].map((role, index) => (
              <div key={role} className="p-3 bg-gray-100 rounded-lg">
                <div className="font-medium text-gray-900">{role}</div>
                <div className="text-sm text-gray-600">Executive Team</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Organization;