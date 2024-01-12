import { LOGIN_FAILTUE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"

const inital ={
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    avatar:"",
    name:"",
    gender:""
    
  }

  export const reducer =(state=inital,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case LOGIN_FAILTUE:{
            return{...state,isLoading:false,isError:true}
        }
        case LOGIN_SUCCESS:{
            return{...state,isLoading:false,isAuth:true,token:payload.token,avatar:payload.avatar,name:payload.name}
        }
        case REGISTER_SUCCESS:{
            return{...state,isLoading:false,isAuth:true,avatar:payload.avatar,name:payload.name,gender:payload.gender}
        }
        default :return state;
    }
  }