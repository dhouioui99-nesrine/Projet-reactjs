import axios from 'axios';

const API_URL = 'http://localhost:3001/auth/login'; // Remplacez par votre URL API

const LoginService = {
  login: async (userData) => {
    try {
      const response = await axios.post(API_URL, userData);
      return response.data; // Supposons que la réponse contient un token JWT ou un statut de succès
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      throw error.response ? error.response.data : new Error('Erreur de réseau');
    }
  }
};

export default LoginService;