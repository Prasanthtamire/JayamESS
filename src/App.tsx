import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Payroll from './pages/Payroll';
import Performance from './pages/Performance';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Addemployee from './pages/AddEmployee';
import { Calendar } from 'lucide-react';
import CompanyPolicy from './pages/CompanyPolicies'; // ⬅️ Add this at the top
import EditEmployee from './pages/EditEmployee';
import ViewEmployee from './pages/EditEmployee';
import NewEmployee from './pages/EditEmployee';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-poppins">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Layout> <Dashboard /> </Layout> } />
            <Route path="/employees" element={<Layout> <Employees /></Layout> } />
            <Route path="/company-policy" element={ <Layout><CompanyPolicy /></Layout>} />
            <Route path="/attendance" element={<Layout><Attendance /></Layout>} />
            <Route path="/leave" element={<Layout><Leave /><Calendar/></Layout> } />
            <Route path="/payroll" element={<Layout><Payroll /></Layout> } />
            <Route path="/performance" element={<Layout><Performance /></Layout>} />
            <Route path="/reports" element={  <Layout><Reports /></Layout>} />
            <Route path="/settings" element={ <Layout><Settings /></Layout>   } />
            <Route path="/profile" element={ <Layout> <Profile /> </Layout>   } />
            <Route path="/Addemployee" element={ <Layout> <Addemployee /> </Layout>   } />
            <Route path="/EditEmployee" element={ <Layout> <EditEmployee /> </Layout>   } />
            <Route path="/ViewEmployee" element={ <Layout> <ViewEmployee /> </Layout>   } />
            <Route path="/NewEmployee" element={ <Layout> <NewEmployee /> </Layout>   } />

          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;