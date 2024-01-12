
import axios from "axios";
import { PRODUCT_ADD_SUCCESS, PRODUCT_FAILED, PRODUCT_LODING, PRODUCT_SUCCESS } from "./actionTypes"
const url = "https://odd-fly-costume.cyclic.app/api";
// const url = "http://localhost:8080/api";


export const  getProduct = ()=>(dispatch)=>{

    try {
        dispatch({type:PRODUCT_LODING})
        
        axios.get(`${url}/products`).then((data)=>{
            console.log(data)
            dispatch({type:PRODUCT_SUCCESS,payload:data})
        })
    } catch (error) {
        dispatch({type:PRODUCT_LODING})
        
        dispatch({type:PRODUCT_FAILED})
    }
  
};

export const addProduct = (obj)=>(dispatch)=>{
    try {
        dispatch({type:PRODUCT_LODING})
        fetch(`${url}/products`,{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }).then((res)=>res.json()).then((data)=>{
            console.log(data)
            dispatch({type:PRODUCT_ADD_SUCCESS,payload:data})

        })
    } catch (error) {
        dispatch({type:PRODUCT_LODING})
        
        dispatch({type:PRODUCT_FAILED})
    }
}