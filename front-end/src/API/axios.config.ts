import axios from 'axios';
import { Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const baseURL = "http://localhost:3000/api/v1/";

let auth0Client: Auth0ContextInterface | null = null;

export const setAuth0Client = (client: Auth0ContextInterface) => {
  auth0Client = client;
};

const API = axios.create({
  baseURL,
});

API.interceptors.request.use(
  async (config) => {
    if (auth0Client) {
      try {
        const token = await auth0Client.getAccessTokenSilently();
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;


export const useApi = () => {
  const auth0 = useAuth0();

  useEffect(() => {
    setAuth0Client(auth0);
  }, [auth0]);

  return API;
};