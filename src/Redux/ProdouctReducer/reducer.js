import { PRODUCT_LODING, PRODUCT_SUCCESS, PRODUCT_FAILED, PRODUCT_ADD_SUCCESS } from "./actionTypes" 

const initstate ={
 product:[],
    isLoading:false,
    isError:false

}

export const reducer = (state=initstate ,{type,payload})=>{

    switch(type){

        case PRODUCT_LODING:{
            return {...state ,isLoading:true}
        }
        case PRODUCT_SUCCESS:{
            return {...state , isLoading:false,isError:false,product:payload.data}
        }
        case PRODUCT_ADD_SUCCESS:{
            return {...state, isLoading:false, isError:false,product:payload}
        }
        case PRODUCT_FAILED:{
            return {...state, isLoading:false,isError:true}
        }
        default:return state
    }
}