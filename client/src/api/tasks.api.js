import axios from "axios"

export const getListTask = async () =>
  await axios.get(import.meta.env.VITE_SERVER_URL+'/tasks')

export const createTask = async (task) =>
  await axios.post(import.meta.env.VITE_SERVER_URL+'/task', task)

export const deleteTask = async (id) =>
  await axios.delete(import.meta.env.VITE_SERVER_URL+`/task/${id}`)

export const getTaskDetail = async (id) =>
  await axios.get(import.meta.env.VITE_SERVER_URL+`/task/${id}`)

export const updateTask = async (id, task) =>
  await axios.put(import.meta.env.VITE_SERVER_URL+`/task/${id}`, task)

export const toggleTask = async (id, done) =>
  await axios.put(import.meta.env.VITE_SERVER_URL+`/task/${id}`, {done})

export const queryTask = async (query) =>
  await axios.get(import.meta.env.VITE_SERVER_URL+`/query`, { params: {data: query}})