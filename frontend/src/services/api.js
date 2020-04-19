import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'   // parte url a ser mantida durante todas as chamadas
})

export default api 