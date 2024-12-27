import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; 



const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, employeeData);
    return response.data; 
  } catch (error) {
    throw new Error('Error adding employee: ' + error.message);
  }
};
const getEmployees = async () => {
    try {
      const response = await axios.get(`${API_URL}/all`);
      return response.data; 
    } catch (error) {
      throw new Error('Error fetching employees: ' + error.message);
    }
  };



  //update
  export const updateEmployee = async (employeeId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${employeeId}`, updatedData);
        return response.data; 
    } catch (error) {
        throw new Error('Error updating employee: ' + error.message);
    }
};
  



export const getEmployeeById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération de l'employé avec ID ${id}: ${response.statusText}`);
    }

    const employee = await response.json();
    return employee;
  } catch (error) {
    console.error('Erreur dans getEmployeeById:', error);
    throw error;
  }
};


export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    console.log(`Employee with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting employee with ID ${id}:`, error.message);
    throw error; // Re-throw the error to handle it in the caller
  }
};
  export { addEmployee, getEmployees };