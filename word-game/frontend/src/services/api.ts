import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const fetchWords = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/words`);
        return response.data;
    } catch (error) {
        console.error('Error fetching words:', error);
        throw error;
    }
};

export const submitScore = async (score) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/scores`, { score });
        return response.data;
    } catch (error) {
        console.error('Error submitting score:', error);
        throw error;
    }
};