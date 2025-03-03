// Define the return type of the API function
import axios from "axios";
import {BASE_URL} from "../../../constants/constant";
import { SecretData } from '../../../types/models/secret';

export const getSecretData = async (id: string): Promise<SecretData> => {
    try {
        const response = await axios.get(`${BASE_URL}/secret/${id}`);
        // Return the secret data
        return response.data;
    } catch (error: any) {
        // Handle errors and throw them for the caller to handle
        if (error.response) {
            console.error('Server responded with a non-2xx status:', error.response.status);
            throw new Error(error.response.status);
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('No response from server. Please try again later.');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error in request setup. Please check your network.');
        }
    }
};