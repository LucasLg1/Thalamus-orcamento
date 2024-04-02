import axios from "axios";

  const baseURL = process.env.VUE_APP_ROOT_API



   const api = axios.create({
    baseURL: baseURL
 });

//local de armazenamento das fotos de visitante e colaborador
export const urlFoto = {
  caminhoFoto: `http://192.168.0.5:8000/storage/`,
};


api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );


export default api;