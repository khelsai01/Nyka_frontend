import {Image, Td} from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({ name, gender, category, price, description }) => {
    return (
        <>
            <Td m="auto" textAlign="center"><Image src="https://w7.pngwing.com/pngs/965/959/png-transparent-women-s-assorted-cosmetic-lot-illustration-lakmxe9-cosmetics-lipstick-lakme-fashion-week-the-cosmetic-composition-miscellaneous-cream-fashion-thumbnail.png" alt="nyka" h="43px" w="43px"  />{name}</Td>
            <Td>{gender}</Td>
            <Td>{category}</Td>
            <Td>{price}</Td>
            <Td>{description}</Td>
        </>



    )
}

export default ProductCard