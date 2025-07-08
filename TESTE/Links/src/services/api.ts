import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.168.0.107:3333/generate-qr', // Endereço do nosso novo serviço
});
export { api };