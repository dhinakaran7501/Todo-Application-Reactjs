import axios from "axios";
import { apiBaseURL } from "../config";
import { CreateTaskProps } from "../@types/pages";
import { createTaskprops } from "../@types/service";

export const createTaskService = (data: CreateTaskProps) => {
  return axios.post(`${apiBaseURL}/todo`, data);
};

export const getAllTaskListsService = () => {
  return axios.get(`${apiBaseURL}/todo`);
};

export const getTaskService = (page: number, limit: number) => {
  return axios.get(`${apiBaseURL}/todo?_page=${page}&_limit=${limit}`);
};

export const updateTaskService = (id: string, data: createTaskprops) => {
  return axios.put(`${apiBaseURL}/todo/${id}`, data);
};

export const deleteTaskService = (id: string) => {
  return axios.delete(`${apiBaseURL}/todo/${id}`);
};

export const fetchPaginatedTasks = async (page: number, limit: number) => {
  return await axios.get(`${apiBaseURL}/todo?_page=${page}&_limit=${limit}`);
};

export const getFilteredTasks = (query: string) => {
  return axios.get(`${apiBaseURL}/todo${query}`);
};
