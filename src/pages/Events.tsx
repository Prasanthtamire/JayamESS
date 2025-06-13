import React, { useState } from 'react';
import { Calendar, Plus, MapPin, Clock, Users, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const Events: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'list'>('month');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Team Building Workshop',
      description: 'Interactive team building activities and exercises',
      date: '2024-12-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Conference Room A',
      category: 'team-building',
      attendees: 25,
      organizer: 'HR Team',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Performance Review Sessions',
      description: 'Quarterly performance reviews with managers',
      date: '2024-12-18',
      time: '9:00 AM - 5:00 PM',
      location: 'Various Meeting Rooms',
      category: 'performance',
      attendees: 45,
      organizer: 'Management',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Holiday Party',
      description: 'Annual company holiday celebration',
      date: '2024-12-22',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Ballroom',
      category: 'social',
      attendees: 120,
      organizer: 'Events Committee',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'New Employee Orientation',
      description: 'Onboarding session for new hires',
      date: '2024-12-20',
      time: '9:00 AM - 12:00 PM',
      location: 'Training Room B',
      category: 'training',
      attendees: 8,
      organizer: 'HR Team',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Product Launch Meeting',
      description: 'Q1 2025 product roadmap discussion',
      date: '2024-12-16',
      time: '2:00 PM - 4:00 PM',
      location: 'Executive Conference Room',
      category: 'meeting',
      attendees: 15,
      organizer: 'Product Team',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Safety Training Workshop',
      description: 'Mandatory workplace safety training',
      date: '2024-12-19',
      time: '1:00 PM - 3:00 PM',
      location: 'Main Auditorium',
      category: 'training',
      attendees: 60,
      organizer: 'Safety Committee',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', color: 'gray' },
    { id: 'meeting', label: 'Meetings', color: 'blue' },
    { id: 'training', label: 'Training', color: 'green' },
    { id: 'social', label: 'Social', color: 'purple' },
    { id: 'team-building', label: 'Team Building', color: 'orange' },
    { id: 'performance', label: 'Performance', color: 'red' }
  ];

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'gray';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Events & Calendar</h1>
          <p className="text-gray-600">Manage company events, meetings, and important dates</p>
        </div>
        <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
          <Plus size={20} />
          <span>Create Event</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Events', value: events.length, color: 'from-blue-500 to-blue-600' },
          { title: 'This Week', value: 3, color: 'from-green-500 to-green-600' },
          { title: 'Attendees', value: '273', color: 'from-purple-500 to-purple-600' },
          { title: 'Upcoming', value: upcomingEvents.length, color: 'from-orange-500 to-orange-600' }
        ].map((stat, index) => (
          <AnimatedCard key={stat.title} delay={index * 100} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <Calendar className="text-white" size={24} />
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Filters and View Controls */}
      <AnimatedCard className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* View Mode and Search */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              {['month', 'week', 'list'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  className={`
                    px-3 py-1 rounded-md text-sm font-medium transition-all duration-200
                    ${viewMode === mode
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Events List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {selectedCategory === 'all' ? 'All Events' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          
          {filteredEvents.map((event, index) => (
            <AnimatedCard key={event.id} delay={index * 100} className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Calendar className="text-white" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-800`}>
                      {categories.find(c => c.id === event.category)?.label}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Organized by {event.organizer}</span>
                    <div className="flex space-x-2">
                      <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium">
                        View Details
                      </button>
                      <button className="bg-gray-50 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Mini Calendar */}
          <AnimatedCard delay={400} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">December 2024</h3>
              <div className="flex space-x-1">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="p-2 text-gray-500 font-medium">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <button
                  key={day}
                  className={`
                    p-2 rounded hover:bg-blue-100 transition-colors duration-200
                    ${[15, 16, 18, 19, 20, 22].includes(day) 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'text-gray-700'
                    }
                  `}
                >
                  {day}
                </button>
              ))}
            </div>
          </AnimatedCard>

          {/* Upcoming Events */}
          <AnimatedCard delay={500} className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h4>
                  <div className="flex items-center text-xs text-gray-600 space-x-2">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{event.time.split(' - ')[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>

          {/* Event Categories */}
          <AnimatedCard delay={600} className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Categories</h3>
            <div className="space-y-2">
              {categories.slice(1).map((category) => {
                const count = events.filter(e => e.category === category.id).length;
                return (
                  <div key={category.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-${category.color}-500`} />
                      <span className="text-sm text-gray-700">{category.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{count}</span>
                  </div>
                );
              })}
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Events;