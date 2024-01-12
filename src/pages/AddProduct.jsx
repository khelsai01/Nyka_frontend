import { Box, Button, Container, FormControl, Input, Textarea } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../Redux/ProdouctReducer/action';

const AddProduct = () => {
const dispatch = useDispatch();
const product = useSelector((store)=>store.productReducer.product);

const [name,setName] = useState("")
const [avatar,setAvatar] = useState("")
const [description,setDescription] = useState("")
const [price,setPrice] = useState(0)
const [category,setCategory] = useState("")
const [gender,setGender] = useState("")


const handleAdd = (e)=>{

  e.preventDefault()
  const newData ={
    name,
    avatar,
    description,
    price,
    category,
    gender
  }
  console.log(newData)

 dispatch(addProduct(newData))
}
    return (
        <Container>
            <FormControl w="500px" m="auto" p="15px" textAlign={"end"}>
                <Box>

                    <label>Name of Producet :-
                        <Input type='text' placeholder='Name of Product' value={name} onChange={(e)=>setName(e.target.value)} />
                    </label> 
                </Box>
                    <br />
                
                <Box>
                    <label>avatar of Product :-
                        <Input  type='text' placeholder="avatar of Product" value={avatar} onChange={(e)=>setAvatar(e.target.value)} />
                    </label>
                </Box>
                    <br />
                <Box>
                    <label>Price of Producet :-
                        <Input  type='Number' placeholder='Price of Product' value={price} onChange={(e)=>setPrice(e.target.value)}  />
                    </label>
                </Box>
                    <br />

                    <Box w="500px" borderRadius="8px" >
                        <label>Product for :-</label>
                    <select style={{ border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }} value={gender} onChange={(e)=>setGender(e.target.value)}>
                        <option vlaue=""> Select by Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                </Box>
                <Box w="500px"  borderRadius="8px" >
                    <label>Product category :-</label>
                    <select style={{ height: "51.8px" ,border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }} value={ category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="">Select By Category </option>
                        <option value="makeup">Makeup</option>
                        <option value="skincare">Skincare</option>
                        <option value="haircare">Haircare</option>
                    </select>
                </Box>
              
                <Box>
                    <label>Description of Producet :-
                        <Textarea type='text' marginTop="20px" placeholder='Name of Product' value={description} onChange={(e)=>setDescription(e.target.value)}  />
                    </label>
                </Box>
                <br/>
                <Box>

                <Button m="auto" w="70px" p="10px"  color="white" bg="rgba(14, 24, 102, 1)" onClick={handleAdd} border={"none"}>Add</Button>
                </Box>
            </FormControl>
        </Container>
    )
}

export default AddProduct