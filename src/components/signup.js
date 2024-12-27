import React, { useState } from 'react';
import SignupService from '../service/signupservice';
import { useNavigate } from 'react-router-dom';  
import Navbar from './Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignupService.signup(formData);
      setMessage('Inscription réussie !');
      setError(null);
      alert("Connexion réussie !");
        navigate('/login');
      
    } catch (err) {
      setError('Échec de l’inscription');
      setMessage('');
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center h-auto min-h-screen bg-gradient-to-r ">
  
    <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Inscription</h2>
    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <br></br>
          <button
            type="submit"
            className="w-full bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
