import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Payroll from './pages/Payroll';
import Performance from './pages/Performance';
import Reports from './pages/Reports';
import ScrollTop from './pages/ScrollTop';
import Profile from './pages/Profile';
import Addemployee from './pages/AddEmployee';
import { Calendar } from 'lucide-react';
import CompanyPolicy from './pages/CompanyPolicies'; 
import EditEmployee from './pages/EditEmployee';
import ViewEmployee from './pages/ViewEmployee';
import NewEmployee from './pages/NewEmployee';
import Department from './Masters/Department';
import Designation from './Masters/Designation';
import Band from './Masters/Band';
import Languages from './Masters/Languages';
import LeavesCode from './Masters/LeavesCode';
import Employeerelatives from './Masters/Employeesrelatives';
import LeaveApplication from './pages/LeaveApplicationPage';
// import Paycreation from './pages/Paycategorycreation';




function App() {
  return (
    <Router>
      <ScrollTop />
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
            <Route path="/profile" element={ <Layout> <Profile /> </Layout>   } />
            <Route path="/Addemployee" element={ <Layout> <Addemployee /> </Layout>   } />
            <Route path="/EditEmployee" element={ <Layout> <EditEmployee /> </Layout>   } />
            <Route path="/ViewEmployee" element={ <Layout> <ViewEmployee /> </Layout>   } />
            <Route path="/NewEmployee" element={ <Layout> <NewEmployee /> </Layout>   } />
            <Route path="/department" element={ <Layout> <Department /> </Layout>   } />
            <Route path="/designation" element={ <Layout> <Designation /> </Layout>   } />
            <Route path="/LeaveApplication" element={ <Layout> <LeaveApplication /> </Layout>   } />
            <Route path="/band" element={ <Layout> <Band /> </Layout>   } />
            <Route path="/languages" element={ <Layout> <Languages /> </Layout>   } />
            <Route path="/LeavesCode" element={ <Layout> <LeavesCode /> </Layout>   } />
            <Route path="/Employeerelatives" element={ <Layout> <Employeerelatives /> </Layout>   } />
            {/* <Route path="/payroll/Paycategorycreation" element={ <Layout> <Paycreation /> </Layout>   } /> */}

      </Routes>
      </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;