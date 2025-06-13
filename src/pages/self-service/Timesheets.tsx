import React, { useState } from 'react';
import { Clock, Plus, Save, Calendar } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Timesheets: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('2024-12-09');
  const [timeEntries, setTimeEntries] = useState([
    { day: 'Monday', date: '2024-12-09', hours: 8, project: 'Project Alpha', description: 'Development work' },
    { day: 'Tuesday', date: '2024-12-10', hours: 8, project: 'Project Beta', description: 'Code review and testing' },
    { day: 'Wednesday', date: '2024-12-11', hours: 7.5, project: 'Project Alpha', description: 'Bug fixes' },
    { day: 'Thursday', date: '2024-12-12', hours: 8, project: 'Project Gamma', description: 'New feature development' },
    { day: 'Friday', date: '2024-12-13', hours: 8, project: 'Project Alpha', description: 'Documentation' }
  ]);

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);

  const handleHoursChange = (index: number, hours: number) => {
    const updatedEntries = [...timeEntries];
    updatedEntries[index].hours = hours;
    setTimeEntries(updatedEntries);
  };

  const handleSubmit = () => {
    console.log('Submitting timesheet:', timeEntries);
    alert('Timesheet submitted successfully!');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Timesheets</h1>
          <p className="text-gray-600 text-lg">Track your working hours and submit timesheets</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="2024-12-09">Week of Dec 9, 2024</option>
            <option value="2024-12-02">Week of Dec 2, 2024</option>
            <option value="2024-11-25">Week of Nov 25, 2024</option>
          </select>
        </div>
      </div>

      {/* Weekly Summary */}
      <AnimatedCard delay={100} className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Weekly Summary</h2>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{totalHours}</p>
              <p className="text-sm text-gray-600">Total Hours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">40</p>
              <p className="text-sm text-gray-600">Target Hours</p>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.min((totalHours / 40) * 100, 100)}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {totalHours >= 40 ? 'Target achieved!' : `${40 - totalHours} hours remaining to reach target`}
        </p>
      </AnimatedCard>

      {/* Time Entries */}
      <AnimatedCard delay={200} className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Time Entries</h2>
          <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium flex items-center space-x-2">
            <Plus size={16} />
            <span>Add Entry</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Day</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Project</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                <th className="text-center py-3 px-4 font-medium text-gray-900">Hours</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{entry.day}</td>
                  <td className="py-4 px-4 text-gray-600">{new Date(entry.date).toLocaleDateString()}</td>
                  <td className="py-4 px-4 text-gray-900">{entry.project}</td>
                  <td className="py-4 px-4 text-gray-600">{entry.description}</td>
                  <td className="py-4 px-4 text-center">
                    <input
                      type="number"
                      value={entry.hours}
                      onChange={(e) => handleHoursChange(index, parseFloat(e.target.value) || 0)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                      max="24"
                      step="0.5"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            Save Draft
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Save size={20} />
            <span>Submit Timesheet</span>
          </button>
        </div>
      </AnimatedCard>

      {/* Recent Timesheets */}
      <AnimatedCard delay={300} className="p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Timesheets</h2>
        <div className="space-y-4">
          {[
            { week: 'Week of Dec 2, 2024', hours: 40, status: 'approved' },
            { week: 'Week of Nov 25, 2024', hours: 38, status: 'approved' },
            { week: 'Week of Nov 18, 2024', hours: 42, status: 'pending' }
          ].map((timesheet, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-900">{timesheet.week}</h3>
                <p className="text-sm text-gray-600">{timesheet.hours} hours logged</p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                timesheet.status === 'approved' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {timesheet.status.charAt(0).toUpperCase() + timesheet.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Timesheets;