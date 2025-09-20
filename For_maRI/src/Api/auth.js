import axios from "./axios"

export const registerRequest = async (user) =>  await axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const verifyTokenRequest = async () =>  axios.get(`/verify`)

export const documentUser = async () => axios.get(`/user`)