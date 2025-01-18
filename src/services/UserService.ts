import axios from "axios";
import { apiBaseURL } from "../config";

export const getAllUser = () => {
  return axios.get(`${apiBaseURL}/auth`);
};
