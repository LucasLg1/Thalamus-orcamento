import axios from "axios";

  const devURL= 'http://192.168.0.6:8000/api';
  const prodURL = 'http://192.168.0.5:8000/api'
   const baseURL = 'http://192.168.0.5:8082';


   const api = axios.create({
    baseURL: baseURL,
    devURL: devURL,
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

  export {devURL};
  export {prodURL};

export default api;