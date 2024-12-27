import axios from 'axios';


const API_URL ='http://localhost:3001/auth/register';






const SignupService = {
  signup: async (userData) => {
    try {
      const response = await axios.post(API_URL, userData);
      return response.data;
    
    
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      throw error.response ? error.response.data : new Error('Erreur de réseau');
    }
  }
};

export default SignupService;