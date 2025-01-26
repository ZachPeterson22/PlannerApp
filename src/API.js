import axios from 'axios';

// local for now
// TODO
// get .env to store url
const apiUrl = 'http://localhost:5000/notes';
// const apiUrl = `${process.env.REACT_APP_API_URL}`;

export const getNotes = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
