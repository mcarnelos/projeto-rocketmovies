//arquivo onde ficam as configurações do axios
import axios from "axios"

export const api = axios.create({
  baseURL: 'http://localhost:3333' //endereço do back-end
})