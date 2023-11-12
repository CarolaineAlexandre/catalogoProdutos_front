import axios from "axios";

export const api = axios.create({
    baseURL:'https://api-catalogo-pi.onrender.com'
})

if(typeof window!== undefined){
  const token = await localStorage.getItem("token");
  if(token){
    api.defaults.headers.common['authorization'] = `Bearer ${token}`;
  }
}
