import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/notes'

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