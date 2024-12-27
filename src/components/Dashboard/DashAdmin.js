
import React from "react";
import '../../css/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Logout from "../Logout";
const DashAdmin = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
        <li> <Link to="/DashAdmin" className="hover:text-blue-200">
                      Home
                    </Link></li>
        <li> <Link to="/AddEmployeeForm" className="hover:text-blue-200">
                      Add
                    </Link></li>

          
                    <li> <Link to="/EmployeeList" className="hover:text-blue-200">
                      List
                    </Link></li>
                    <li> <Link to="/LeaveList" className="hover:text-blue-200">
                      List des Congés
                    </Link></li>
<li className="mb-4">  <Link to="/AddEvaluation" className="hover:text-blue-200">
                                                                          Evaluation
                                                                        </Link></li>
                                                    <li className="mb-4"><Link to="/EvaluationList" className="hover:text-blue-200">
                                                                          List d'evaluation
                                                                        </Link></li>


          <li> <Link to="/Logout" className="hover:text-blue-200">
                      logout
                    </Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h1>Welcome Admin</h1>
        </header>

        {/* Content */}
        <section className="content">
          <div className="card" ></div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </section>
      </main>
    </div>
  );
};

export default DashAdmin;
