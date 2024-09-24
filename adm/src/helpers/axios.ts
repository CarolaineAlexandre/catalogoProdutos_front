import axios from "axios";

export const api = axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:'https://api-catalogo-pi-1.onrender.com'
})

if(typeof window!== undefined){
  const token = localStorage.getItem("token");
  if(token){
    api.defaults.headers.common['authorization'] = `Bearer ${token}`;
  }
}

