import React, { useState } from 'react';
import { CreditCard, Plus, Upload, Receipt } from 'lucide-react';
import AnimatedCard from '../../components/AnimatedCard';

const Expenses: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    date: '',
    description: '',
    merchant: ''
  });

  const expenses = [
    {
      id: 1,
      category: 'Travel',
      amount: 450.00,
      date: '2024-12-10',
      description: 'Flight to client meeting',
      merchant: 'Airlines Inc.',
      status: 'pending',
      receipt: true
    },
    {
      id: 2,
      category: 'Meals',
      amount: 85.50,
      date: '2024-12-08',
      description: 'Business lunch with client',
      merchant: 'Restaurant ABC',
      status: 'approved',
      receipt: true
    }
  ];

  const categories = [
    'Travel',
    'Meals & Entertainment',
    'Office Supplies',
    'Software & Subscriptions',
    'Training & Education',
    'Other'
  ];

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
    console.log('Submitting expense:', formData);
    setShowForm(false);
    setFormData({ category: '', amount: '', date: '', description: '', merchant: '' });
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Expense Reports</h1>
          <p className="text-gray-600 text-lg">Submit and track your business expenses</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>New Expense</span>
        </button>
      </div>

      {/* Expense Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedCard delay={100} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-gray-900">${totalExpenses.toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <CreditCard className="text-white" size={24} />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={150} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-bold text-gray-900">$450.00</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <Receipt className="text-white" size={24} />
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Approved</p>
              <p className="text-2xl font-bold text-gray-900">$85.50</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <CreditCard className="text-white" size={24} />
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* New Expense Form */}
      {showForm && (
        <AnimatedCard delay={250} className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">New Expense Report</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="0.00"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Merchant</label>
                <input
                  type="text"
                  value={formData.merchant}
                  onChange={(e) => setFormData({ ...formData, merchant: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Merchant name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Describe the business purpose..."
                required
              />
            </div>
            
            {/* Receipt Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Receipt</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-300">
                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-gray-600 mb-1">Upload receipt</p>
                <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
                <input type="file" className="hidden" accept="image/*,.pdf" />
              </div>
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
                Submit Expense
              </button>
            </div>
          </form>
        </AnimatedCard>
      )}

      {/* Expense History */}
      <AnimatedCard delay={300} className="p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Expenses</h2>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{expense.description}</h3>
                  <p className="text-sm text-gray-600">{expense.merchant} • {expense.category}</p>
                  <p className="text-xs text-gray-500">{new Date(expense.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">${expense.amount.toFixed(2)}</p>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(expense.status)}`}>
                  {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                </span>
                {expense.receipt && (
                  <p className="text-xs text-green-600 mt-1">✓ Receipt attached</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
};

export default Expenses;