import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LeaveService from '../service/LeaveService'; 
import '../css/Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
const LeaveRequestForm = () => {
    const validationSchema = Yup.object({
      startDate: Yup.date().required('La date de début est obligatoire'),
      endDate: Yup.date()
        .required('La date de fin est obligatoire')
        .min(Yup.ref('startDate'), 'La date de fin doit être après la date de début'),
      leaveType: Yup.string().required('Le type de congé est obligatoire'),
      comments: Yup.string().max(500, 'Les commentaires ne doivent pas dépasser 500 caractères'),
    });
    const navigate = useNavigate();  
    const handleSubmit = async (values, { resetForm }) => {
      try {
        await LeaveService.createLeaveRequest(values);
        alert('Demande de congé envoyée avec succès !');
        navigate('/LeaveApproval');
        resetForm();
      } catch (error) {
        alert('Erreur lors de l’envoi de la demande de congé.');
      }
    };
  
    return (
      <div className="dashboard flex min-h-screen bg-gray-100">
           {/* Sidebar */}
           <aside className="sidebar bg-blue-600 text-white w-64 p-4">
             <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
             <ul>
             <li className="mb-4">
                <Link to="/Dashboard" className="hover:text-blue-200">
                                     Home
                                   </Link></li>
               <li className="mb-4">
                 <Link to="/LeaveRequestForm" className="hover:text-blue-200">
                   Add 
                 </Link>
               </li>
            
               <li className="mb-4"><Link to="/LeaveApproval" className="hover:text-blue-200">
                                     List des Congés
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
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Demande de Congé</h2>
        <Formik
          initialValues={{
            startDate: '',
            endDate: '',
            leaveType: '',
            comments: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Date de début :
                </label>
                <Field
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                  Date de fin :
                </label>
                <Field
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>
              <div>
                <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                  Type de congé :
                </label>
                <Field
                  as="select"
                  id="leaveType"
                  name="leaveType"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" label="Sélectionnez un type de congé" />
                  <option value="Congé payé" label="Congé payé" />
                  <option value="Congé sans solde" label="Congé sans solde" />
                  <option value="Congé maladie" label="Congé maladie" />
                </Field>
                <ErrorMessage
                  name="leaveType"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                  Commentaires :
                </label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name="comments"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Soumettre
              </button>
            </Form>
          )}
        </Formik>
      </div>
      </main>
      </div>
    );
  };
  
  export default LeaveRequestForm;