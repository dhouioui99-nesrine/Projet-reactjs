import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/eval'; 

const EvaluationService = {

  addEvaluation: async (evaluationData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, evaluationData);
      return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'évaluation :", error.response?.data || error.message);
        alert('Erreur lors de l\'ajout de l\'évaluation.');
      }
  },
  getEvaluations: async () => {
    try {
      // Appel à l'API pour récupérer toutes les évaluations
      const response = await axios.get('http://localhost:3001/eval/all');
  
      // Retour des données récupérées
      return response.data;
    } catch (error) {
      // Gestion de l'erreur avec un log descriptif
      console.error("Erreur lors de la récupération des évaluations :", error);
  
      // Relance de l'erreur pour la gestion côté client
      throw error;
    }
  },
  

  // Mettre à jour une évaluation existante (exemple : mise à jour de la note ou des commentaires)
  updateEvaluation: async (id, evaluationData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, evaluationData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'évaluation :", error);
      throw error;
    }
  },

  // Supprimer une évaluation
  deleteEvaluation: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'évaluation :", error);
      throw error;
    }
  },
};

export default EvaluationService;
