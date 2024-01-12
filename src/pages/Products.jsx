import { Box, Button, Container, Flex, HStack, Image, Input,Table, Tbody,Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/ProdouctReducer/action'
import ProductCard from './ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom'
import FilterData from './FilterData'
import LoadingSkull from './LoadingSkull'
const Products = () => {
    const dispatch = useDispatch()
    const [searchParams ] = useSearchParams()
    const paramsobj = {
        params: {
          gender: searchParams.getAll('gender'),
          category: searchParams.getAll('category'),
          sort: searchParams.get('order') && 'price',
          order: searchParams.get('order'),
        },
      };
    const { product, isLoading, isError } = useSelector((store) => {
        return {
            isLoading: store.productReducer.isLoading,
            isError: store.productReducer.isError,
            product: store.productReducer.product

        }
        // console.log(store)
    }, shallowEqual)

const navigates = useNavigate();
    useEffect(() => {
        dispatch(getProduct(paramsobj))
    }, [searchParams])

    const handleChange = ()=>{
        navigates("/addProduct")
    }
    
    if(isLoading){
        return <LoadingSkull />
    }
    return (
        <Container maxW="100%">
            <Flex h="52px" top="56.1px" left="271px" justifyContent="space-between">

                <Input type="text" placeholder="Search" w="655px" h="52px" border="1px Mixed solid rgba(0, 0, 0, 0.2)" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px"
                />
                <HStack w="124px" h="52px" gap="20px">
                    <Image src="profile.jpg" w="52px" h="52px" borderRadius="10px"
                    />


                </HStack>
            </Flex>
            <br />
            <Flex h="150px" mt="56.1px" left="271px" justifyContent="space-evenly">
                <FilterData />
                <Box>
                    <Button w="248px" h="58px" top="70px" boxShadow="0px 4px 8px 0px rgba(50, 50, 71, 0.06)"
                     fontFamily="Inter" fontWeight={800} fontSize={"16px"} lineHeight="22px" textAlign="center" border="none" bg="rgba(14, 24, 102, 1)" color="rgba(255, 255, 255, 1)"
                    onClick={handleChange} >ADD PRODUCT</Button>
                </Box>

            </Flex>
            <Box maxW="100%" h="830px" top="354px" left="263px" borderRadius="5px" bg="rgba(255, 255, 255, 1)" boxShadow="0px 8px 32px 0px rgba(51, 38, 174, 0.08)">
                <Box top="94px">
                    <Table w="1152px" h="64px" m="auto" top="94px" left="32px" borderRadius={"8px, 8px, 0px, 0px"}>
                        <Thead maxW="100%" h="64px" m="auto" top="94px" left="32px" borderRadius={"8px, 8px, 0px, 0px"} bg="rgba(248, 248, 248, 1)">
                            <Tr>
                                <Th w="62px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Producet</Th>
                                <Th w="51px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Gender</Th>
                                <Th w="64px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Category</Th>
                                <Th w="35px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Price</Th>
                                <Th w="79px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Description</Th>
                                <Th w="52px" h="22px" fontFamily="Inter" fontWeight="600" fontSize="14px" lineHeight="22px">Actions</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(product) && product?.map((el) => (
                                <Tr key={el._id} w="1152px" h="64px" top="158px" left="32px" borderRadius="4px, 4px, 0px, 0px" bg="rgba(255, 255, 255, 1)">
                                    <ProductCard {...el} />
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Container>
    )
}

export default Products