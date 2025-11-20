import {API_ENDPOINT} from '../utils/constants';

export const fetchUsers = async () => {
    try {
        const response = await fetch(API_ENDPOINT.USERS);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
};

export const fetchPosts = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.POSTS);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch posts: ${error.message}`);
    }
};