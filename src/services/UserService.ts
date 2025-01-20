import axios from "axios";
import { apiBaseURL } from "../config";

export const getAllUser = () => {
  return axios.get(`${apiBaseURL}/auth`);
};

export const createUser = (data: any) => {
  return axios.post(`${apiBaseURL}/auth`, data);
};

export const getUserByEmail = (email: string, password: string) => {
  return axios.get(`${apiBaseURL}/auth?email=${email}&password=${password}`);
};
