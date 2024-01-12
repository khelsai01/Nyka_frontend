import {Image, Td} from '@chakra-ui/react'
import {DeleteIcon} from "@chakra-ui/icons"
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../Redux/ProdouctReducer/action';

const ProductCard = ({_id, name, gender, category, price, description }) => {
    const dispatch =useDispatch();

    const handleDelete =(id)=>{

        // console.log(id)
        dispatch(deleteProduct(id))
        // dispatch(getProduct())
        alert("Product has been deleted!")
    }
    return (
        <>
            <Td m="auto" textAlign="center"><Image src="https://w7.pngwing.com/pngs/965/959/png-transparent-women-s-assorted-cosmetic-lot-illustration-lakmxe9-cosmetics-lipstick-lakme-fashion-week-the-cosmetic-composition-miscellaneous-cream-fashion-thumbnail.png" alt="nyka" h="43px" w="43px"  />{name}</Td>
            <Td>{gender}</Td>
            <Td>{category}</Td>
            <Td>{price}</Td>
            <Td>{description}</Td>
            {/* <Td color="red" onClick={()=>handleDelete(_id)}>Delete</Td> */}
            <DeleteIcon onClick={()=>handleDelete(_id)} />
        </>



    )
}

export default ProductCard