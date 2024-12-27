import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/conge'; 



const LeaveService = {

  createLeaveRequest: async (leaveData) => {
    try {
      //const response = await axios.post(`${API_BASE_URL/create}`, leaveData);
      const response = await axios.post('http://localhost:3001/conge/create', leaveData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la demande de congé :", error);
      throw error;
    }
  },

  getLeaveRequests: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des demandes de congé :", error);
      throw error;
    }
  },

  updateLeaveStatus: async (id, status) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      throw error;
    }
  },
  updateLeaveRequest: async (id, leaveData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, leaveData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la demande de congé :", error);
      throw error;
    }
  },


  deleteLeaveRequest: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression de la demande de congé :", error);
      throw error;
    }
  },
};

export default LeaveService;
