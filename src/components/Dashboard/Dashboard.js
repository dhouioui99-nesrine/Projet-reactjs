
import React from "react";
import '../../css/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Logout from "../Logout";
const Dashboard = () => {
  return (
     <div className="dashboard">
          {/* Sidebar */}
          <aside className="sidebar">
            <h2>Dashboard</h2>
            <ul>
            <li> <Link to="/Dashboard" className="hover:text-blue-200">
                          Home
                        </Link></li>
            <li> <Link to="/LeaveRequestForm" className="hover:text-blue-200">
                          Add
                        </Link></li>
    
              
                      
                        <li> <Link to="/LeaveApproval" className="hover:text-blue-200">
                          List des Congés
                        </Link></li>
    
    
    
              <li> <Link to="/Logout" className="hover:text-blue-200">
                          logout
                        </Link></li>
            </ul>
          </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">MonApplication</div>
        
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur MonApplication</h1>
          <p className="text-lg text-gray-700 mb-6">
            La plateforme qui simplifie votre gestion quotidienne.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Commencer maintenant
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Service 1</h3>
            <p className="text-gray-600">Demande congé.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Service 2</h3>
            <p className="text-gray-600">Consulter les evaluation.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Service 3</h3>
            <p className="text-gray-600">Consulter liste des congés.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Témoignages</h2>
          <p className="text-gray-700 italic">
            "Une expérience incroyable, je recommande vivement !"
          </p>
          <p className="text-gray-700 italic mt-4">
            "Une interface simple et intuitive. Bravo !"
          </p>
        </div>
      </section>
       {/* Footer */}
       <footer id="contact" className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 MonApplication. Tous droits réservés.</p>
        <div className="space-x-4 mt-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
      </main>
      
    </div>
     
  );
};

export default Dashboard;
