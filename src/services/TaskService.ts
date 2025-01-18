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

export const updateTaskService = (id: string, data: createTaskprops) => {
  return axios.put(`${apiBaseURL}/todo/${id}`, data);
};

export const deleteTaskService = (id: string) => {
  return axios.delete(`${apiBaseURL}/todo/${id}`);
};
