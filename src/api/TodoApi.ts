import axios from "axios";
const TODOAPI = import.meta.env.VITE_TODO_API_URL;

export const addTodo = (task: string) => {
  return axios.post(`${TODOAPI}/todo`, {
    task: task,
  });
};
