import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../service/EmployeeServce';
import '../css/EmployeeList.css';
import { useNavigate } from 'react-router-dom';

import '../css/Dashboard.css';

import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    console.log('Editing employee:', employee);

    const employeeId = employee._id;
console.log('id emlpoyee : ', employeeId);
    if (employeeId) {
      navigate(`/updateEmployee/${employeeId}`);
    } else {
      console.error('Employee ID is missing!');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (!confirmDelete) return;

    try {
      await deleteEmployee(id); // Call the service to delete the employee
      setEmployees((prev) => prev.filter((emp) => emp._id !== id)); // Update the state
      console.log(`Employee with ID ${id} deleted.`);
    } catch (err) {
      console.error(`Error deleting employee with ID ${id}:`, err.message);
      alert('Failed to delete employee. Please try again.');
    }
  };

  if (error) return <div className="error">{error}</div>;


  return (
    <div className="dashboard flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="sidebar bg-blue-600 text-white w-64 p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
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
        <li className="mb-4">
          <Link to="/EmployeeList" className="hover:text-blue-200">
            Employee List
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/LeaveList" className="hover:text-blue-200">
            Leave List
          </Link>
        </li>
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
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Employee List</h2>
      
      {employees.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Position</th>
                <th className="py-3 px-6">Salary</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6">{employee.name}</td>
                  <td className="py-3 px-6">{employee.email}</td>
                  <td className="py-3 px-6">{employee.position}</td>
                  <td className="py-3 px-6">${employee.salary}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-all"
                      onClick={() => handleEdit(employee)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition-all"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No employees found</p>
      )}
    </main>
  </div>
);
};

export default EmployeeList;