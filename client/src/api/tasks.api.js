import axios from "axios"

export const getListTask = async () =>
  await axios.get('http://localhost:4000/tasks')

export const createTask = async (task) =>
  await axios.post('http://localhost:4000/task', task)

export const deleteTask = async (id) =>
  await axios.delete(`http://localhost:4000/task/${id}`)

export const getTaskDetail = async (id) =>
  await axios.get(`http://localhost:4000/task/${id}`)

export const updateTask = async (id, task) =>
  await axios.put(`http://localhost:4000/task/${id}`, task)

export const toggleTask = async (id, done) =>
  await axios.put(`http://localhost:4000/task/${id}`, {done})