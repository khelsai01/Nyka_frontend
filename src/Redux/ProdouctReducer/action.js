import axios from "axios";
import { PRODUCT_ADD_SUCCESS, PRODUCT_FAILED, PRODUCT_LODING, PRODUCT_SUCCESS } from "./actionTypes"
const url = "https://odd-fly-costume.cyclic.app/api";
// const url = "http://localhost:8080/api";


export const getProduct = (paramsobj) =>async(dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({ type: PRODUCT_LODING })

    let responce = await axios.get(`${url}/products`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: paramsobj,
    }).then((res) => {
      console.log(res.data)
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data })
    }).catch(() => {
      dispatch({ type:PRODUCT_FAILED})
    })
    
    return responce;

  } catch (error) {
    console.error('Error fetching products:', error);
    dispatch({ type: PRODUCT_FAILED });
  }
};

export const addProduct = (obj) => (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LODING })
    fetch(`${url}/products`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data })

    })
  } catch (error) {
    dispatch({ type: PRODUCT_LODING })

    dispatch({ type: PRODUCT_FAILED })
  }
}

export const deleteProduct = (id) => async (dispatch) => {
  await fetch(`${url}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
}