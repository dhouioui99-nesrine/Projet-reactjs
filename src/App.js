import './App.css';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/login';
import Signup from './components/signup';
import Home from './components/Home';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/updateEmployee';
import LeaveRequestForm from './components/LeaveRequestForm';
import LeaveList from './components/LeaveList';
import LeaveApproval from './components/LeaveApproval';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar  from './components/Navbar';
import Logout from './components/Logout';
import DashAdmin from './components/Dashboard/DashAdmin';
import AddEvaluation from './components/AddEvaluation';
import EvaluationList from './components/EvaluationList';
  function App() {
    
    return (
      <Router>
         
        <div className="min-h-screen bg-gray-100">
    
          <div className="p-2 ">
      
            <Routes>
           
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/AddEmployeeForm" element={<AddEmployeeForm />} />
              <Route path="/EmployeeList" element={<EmployeeList />} />
              <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />     
              <Route path="/LeaveRequestForm" element={<LeaveRequestForm />} />     
              <Route path="/LeaveList" element={<LeaveList />} />  
              <Route path="/LeaveApproval" element={<LeaveApproval />} />  
              <Route path="/Dashboard" element={<Dashboard />} />  
              <Route path="/DashAdmin" element={<DashAdmin />} />  
              <Route path="/Navbar" element={<Navbar />} />
              <Route path="/Logout" element={<Logout />} />  
              <Route path="/AddEvaluation" element={<AddEvaluation />} /> 
              <Route path="/EvaluationList" element={<EvaluationList />} /> 
               </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;