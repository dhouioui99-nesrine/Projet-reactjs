
import React, { useState } from 'react';
import { addEmployee } from '../service/EmployeeServce';
import { useNavigate } from 'react-router-dom'; 
import DashAdmin from './Dashboard/DashAdmin';
import '../css/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    salary: ''
  });
  
  const [error, setError] = useState(null); 
  const navigate = useNavigate();  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedEmployee = await addEmployee(formData);
      console.log('Employee Added:', addedEmployee);
      setFormData({ name: '', email: '', position: '', salary: '' }); 
      alert("Employee created");
      navigate('/EmployeeList');
      setError(null); 
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className="dashboard flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="sidebar bg-blue-600 text-white w-64 p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
        <li className="mb-4">
           <Link to="/DashAdmin" className="hover:text-blue-200">
                                Home
                              </Link></li>
          <li className="mb-4">
            <Link to="/AddEmployeeForm" className="hover:text-blue-200">
              Add Employee
            </Link>
          </li>
          <li className="mb-4">  <Link to="/EmployeeList" className="hover:text-blue-200">
                                List
                              </Link></li>
          <li className="mb-4"><Link to="/LeaveList" className="hover:text-blue-200">
                                List des Congés
                              </Link></li>
                              <li className="mb-4">  <Link to="/AddEvaluation" className="hover:text-blue-200">
                                                                          Evaluation
                                                                        </Link></li>
                                                    <li className="mb-4"><Link to="/EvaluationList" className="hover:text-blue-200">
                                                                          List d'evaluation
                                                                        </Link></li>
          <li>
            <Link to="/Logout" className="hover:text-blue-200">
              Logout
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Add New Employee</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Employee
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddEmployeeForm;