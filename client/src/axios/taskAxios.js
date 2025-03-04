import axios from "axios"

// This file sends api request for task resource
const API_BASE_URL = import.meta.env.PROD ? 'https://ntdl-fullstack-oct.onrender.com' : import.meta.env.VITE_API_BASE_URL
const TASK_ENPOINT = '/api/tasks'

// FRONTEND CRUD OPERATIONS
// Sending Request

// GET | Get all the task
export const getTasks = () => {
  const response = axios
                    .get(API_BASE_URL+TASK_ENPOINT)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}

// POST | Create a task
export const createTask = (taskObject) => {
  const response = axios
                    .post(API_BASE_URL+TASK_ENPOINT, taskObject)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}

// DELETE | Delete a task
export const deleteTaskRequest = (id) => {
  const response = axios
                    .delete(API_BASE_URL+TASK_ENPOINT+ `/${id}`)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}

//update a task
export const updateTask = (id, updatedFieldObj) => {
  const response = axios.patch(API_BASE_URL + TASK_ENPOINT + `/${id}`, updatedFieldObj)
                    .then(res => res.data)
                    .catch(error => error)

  return response
}