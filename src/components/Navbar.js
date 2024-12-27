  

  import { BrowserRouter as Router, Routes, Route, Link } from
  'react-router-dom';
  import 'react-toastify/dist/ReactToastify.css';
  
  import Login from './login';
  import Signup from './signup';
  import Home from './Home';
  import AddEmployeeForm from './AddEmployeeForm';
  import EmployeeList from './EmployeeList';
  import UpdateEmployee from './updateEmployee';
  import LeaveRequestForm from './LeaveRequestForm';
  import LeaveList from './LeaveList';
  import LeaveApproval from './LeaveApproval';
  import Dashboard from './Dashboard/Dashboard';
  
  function Navbar() {
    
    return (
     
      
        <nav className="bg-white-500 p-4 flex items-center justify-between">
      {/* Logo Image */}
      <div className="flex items-center">
        
        <h1 className="text-xl font-bold">MyApp</h1>
        </div>
      {/* Navigation Links */}
      <ul className="flex space-x-4 text-black">
        <li>
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
        </li>
  
        <li>
          <Link to="/signup" className="hover:text-blue-200">
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-200">
            Login
          </Link>
        </li>
      </ul>
    </nav>

    );
  }

export default Navbar;
