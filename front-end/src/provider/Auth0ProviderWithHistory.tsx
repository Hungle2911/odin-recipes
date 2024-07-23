// src/auth/Auth0ProviderWithAxios.tsx
import { ReactNode, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const baseURL = "http://localhost:3000/api/v1/";
interface Auth0ProviderWithAxiosProps {
  children: ReactNode;
}
const API = axios.create({
  baseURL,
});

const AxiosContext = createContext({ API });

export const Auth0ProviderWithAxios = ({
  children,
}: Auth0ProviderWithAxiosProps) => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use(
      async (config) => {
        try {
          const token = await getAccessTokenSilently();
          config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
          console.error("Error getting access token:", error);
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      API.interceptors.request.eject(requestInterceptor);
    };
  }, [getAccessTokenSilently]);

  return (
    <AxiosContext.Provider value={{ API }}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(AxiosContext);
};
