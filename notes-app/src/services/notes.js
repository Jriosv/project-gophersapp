import axios from 'axios';

const API_URL_SERVER = import.meta.env.VITE_API_URL_SERVER
const API_SERVER_PORT = import.meta.env.VITE_API_SERVER_PORT
const API_END_POINT = import.meta.env.VITE_API_END_POINT

const baseUrl = import.meta.env.VITE_APP_ENV === 'development'
  ? `${API_URL_SERVER}:${API_SERVER_PORT}/${API_END_POINT}`
  : `${API_URL_SERVER}/${API_END_POINT}`

export const getAll = () => {
  const request = axios.get(baseUrl)
  return  request.then(({ data }) => data)
}

export const create = (params) => {
  const request = axios.post(baseUrl, params)
  return request.then(({ data }) => data) 
}

export const update = (id, params) => {
  const request = axios.put(`${baseUrl}/${id}`, params)
  return request.then(({ data }) => data) 
}