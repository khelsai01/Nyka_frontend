import axios from "axios"
import { LOGIN_FAILTUE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS ,LOGOUT} from "./actionTypes";
export const URL = "https://odd-fly-costume.cyclic.app/api"
// export const URL = "http://localhost:8080/api";


export const login = (obj)=>(dispatch) => {
  // Complete login logic here

  dispatch({type:LOGIN_REQUEST})
  return axios.post(`${URL+"/login"}`,obj).then((res)=>{
    console.log(res.data)
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
    localStorage.setItem("token",(res.data.token))
  }).catch(()=>{
  dispatch({type:LOGIN_FAILTUE})
  })
};

export const register =(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`${URL+"/register"}`,obj).then((res)=>{
      console.log(res.data)
      dispatch({type:REGISTER_SUCCESS,payload:res.data})
    }).catch(()=>{
    dispatch({type:LOGIN_FAILTUE})
    })
}

export const logout = () => (dispatch) => {

  localStorage.removeItem('token');

  dispatch({ type:"LOGOUT" });
};