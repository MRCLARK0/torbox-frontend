import axios from 'axios';

export const fetchUpStatus = async () => {
    try {
        const response = await axios.get('http://localhost:7000/torbox/status');
        console.log("Up Status:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching up status:', error);
        throw error;
    }
};

export const fetchUserData = async () => {
    try {
        const response = await axios.get('http://localhost:7000/torbox/user/me');
        console.log("User Data:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
