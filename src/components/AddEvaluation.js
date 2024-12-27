import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EvaluationService from '../service/EvaluationService';  
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
const AddEvaluationForm = () => {

  const validationSchema = Yup.object({
    email: Yup.string().email('Adresse e-mail invalide').required('L\'email est requis'),
    DateE: Yup.date().required('La date est obligatoire'),
    Note: Yup.string().required('La note est obligatoire').oneOf(['1', '2', '3', '4', '5'], 'Note doit être entre 1 et 5'),
    comments: Yup.string().max(500, 'Les commentaires ne doivent pas dépasser 500 caractères'),
  });

  const navigate = useNavigate();


  const handleSubmit = async (values, { resetForm }) => {
    try {
 
      await EvaluationService.addEvaluation(values);
      alert('Évaluation ajoutée avec succès !');
      navigate('/EvaluationList');  
      resetForm();
    } catch (error) {
      alert('Erreur lors de l\'ajout de l\'évaluation.');
    }
  };

  return (
    <div className="dashboard flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="sidebar bg-blue-600 text-white w-64 p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/DashAdmin" className="hover:text-blue-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AddEmployeeForm" className="hover:text-blue-300">
            Add Employee
          </Link>
        </li>
        <li>
          <Link to="/EmployeeList" className="hover:text-blue-300">
            Employee List
          </Link>
        </li>
        <li>
          <Link to="/LeaveList" className="hover:text-blue-300">
            List des Congés
          </Link>
        </li>
        <li>
          <Link to="/EvaluationList" className="hover:text-blue-300">
            List d'Évaluation
          </Link>
        </li>
        <li>
          <Link to="/Logout" className="hover:text-blue-300">
            Logout
          </Link>
        </li>
      </ul>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">
          Ajouter une Évaluation
        </h2>
        <Formik
          initialValues={{
            email: '',
            DateE: '',
            Note: '',
            comments: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email :
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Date Field */}
              <div>
                <label htmlFor="DateE" className="block text-sm font-medium text-gray-700">
                  Date :
                </label>
                <Field
                  type="date"
                  id="DateE"
                  name="DateE"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="DateE" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Note Field */}
              <div>
                <label htmlFor="Note" className="block text-sm font-medium text-gray-700">
                  Note :
                </label>
                <Field
                  as="select"
                  id="Note"
                  name="Note"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" label="Sélectionnez une note" />
                  {[1, 2, 3, 4, 5].map((note) => (
                    <option key={note} value={note} label={note.toString()} />
                  ))}
                </Field>
                <ErrorMessage name="Note" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Comments Field */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                  Commentaires :
                </label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="comments" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
export default AddEvaluationForm;
