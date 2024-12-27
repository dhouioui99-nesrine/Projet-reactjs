import React, { useEffect, useState } from 'react';
import LeaveService from '../service/LeaveService'; 
import '../css/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
const LeaveList = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const data = await LeaveService.getLeaveRequests();
        setLeaveRequests(data);
      } catch (err) {
        setError('Erreur lors de la récupération des congés');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveRequests();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const updatedLeave = await LeaveService.updateLeaveStatus(id, status);
      setLeaveRequests((prevRequests) =>
        prevRequests.map((leave) =>
          leave._id === id ? { ...leave, status: updatedLeave.status } : leave
        )
      );
    } catch (err) {
      setError('Erreur lors de la mise à jour du statut');
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Chargement...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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
              <main className="flex-1 p-6"></main>
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Liste des demandes de congé</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left border-b">Date de début</th>
            <th className="py-2 px-4 text-left border-b">Date de fin</th>
            <th className="py-2 px-4 text-left border-b">Type de congé</th>
            <th className="py-2 px-4 text-left border-b">Commentaires</th>
            <th className="py-2 px-4 text-left border-b">Statut</th>
            <th className="py-2 px-4 text-left border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leave) => (
            <tr key={leave._id} className="border-b">
              <td className="py-2 px-4">{new Date(leave.startDate).toLocaleDateString()}</td>
              <td className="py-2 px-4">{new Date(leave.endDate).toLocaleDateString()}</td>
              <td className="py-2 px-4">{leave.leaveType}</td>
              <td className="py-2 px-4">{leave.comments}</td>
              <td className="py-2 px-4">{leave.status}</td>
              <td className="py-2 px-4">
                {leave.status === 'en attente' && (
                  <>
                    <button
                      onClick={() => handleStatusChange(leave._id, 'Approuvé')}
                      className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
                    >
                      Approuver
                    </button>
                    <button
                      onClick={() => handleStatusChange(leave._id, 'Rejeté')}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Rejeter
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default LeaveList;
