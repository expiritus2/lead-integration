import axios, { AxiosError } from 'axios';
import logger from '../logger/logger';
import * as dotenv from 'dotenv';
import { cleanSensitiveData } from '../utils/data';
dotenv.config();

export const providerApi = axios.create({
  baseURL: process.env.PROVIDER_BASE_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.PROVIDER_API_KEY}`,
  },
});

// providerApi.interceptors.request.use((config) => {
//   const cleanHeaders = cleanSensitiveData(config.headers);
//
//   logger.log(
//     `Provider Request: ${config.method} ${config.url} - Body: ${JSON.stringify(config.data)} - Headers: ${JSON.stringify(cleanHeaders)}`,
//   );
//   return config;
// });
//
// providerApi.interceptors.response.use(
//   (response) => {
//     logger.log(
//       `Provider Response: ${response.status} - Body: ${JSON.stringify(response.data)}`,
//     );
//     return response;
//   },
//   (error) => {
//     const axiosError = error as AxiosError;
//     const cleanHeaders = cleanSensitiveData(axiosError.config?.headers || {});
//     logger.error(
//       `Provider Response Error: ${axiosError.config?.method} ${axiosError.config?.url} - Body: ${JSON.stringify(axiosError.config?.data)} - Headers: ${JSON.stringify(cleanHeaders)}`,
//     );
//     throw error;
//   },
// );

export const providerS2SApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.PROVIDER_S2S_TOKEN}`,
  },
});

providerS2SApi.interceptors.request.use((config) => {
  const cleanHeaders = cleanSensitiveData(config.headers);

  logger.log(
    `Provider Request: ${config.method} ${config.url} - Body: ${JSON.stringify(config.data)} - Headers: ${JSON.stringify(cleanHeaders)}`,
  );
  return config;
});

providerS2SApi.interceptors.response.use(
  (response) => {
    logger.log(
      `Provider Response: ${response.status} - Body: ${JSON.stringify(response.data)}`,
    );
    return response;
  },
  (error) => {
    const axiosError = error as AxiosError;
    const cleanHeaders = cleanSensitiveData(axiosError.config?.headers || {});
    logger.error(
      `Provider Response Error: Message: ${axiosError.message} - ${axiosError.config?.method} ${axiosError.config?.url} - Body: ${JSON.stringify(axiosError.config?.data)} - Headers: ${JSON.stringify(cleanHeaders)}`,
    );
    throw error;
  },
);
