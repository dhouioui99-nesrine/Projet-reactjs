import React, { useEffect, useState } from 'react';
import EvaluationService from '../service/EvaluationService';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les évaluations au chargement du composant
    const fetchEvaluations = async () => {
      try {
        const data = await EvaluationService.getEvaluations();
        setEvaluations(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des évaluations", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvaluations();
  }, []);

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Évaluations</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Note</th>
              <th className="border border-gray-300 px-4 py-2">Commentaires</th>
            </tr>
          </thead>
          <tbody>
            {evaluations.map((evaluation) => (
              <tr key={evaluation._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{evaluation.email}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(evaluation.DateE).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">{evaluation.Note}</td>
                <td className="border border-gray-300 px-4 py-2">{evaluation.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default EvaluationList;
