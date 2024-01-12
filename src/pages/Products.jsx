import { Box, Button, Container, Flex, HStack, Image, Input, select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Redux/ProdouctReducer/action'
import ProductCard from './ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom'
const Products = () => {
    const dispatch = useDispatch()
    const [searchParms ] = useSearchParams()
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
        dispatch(getProduct())
    }, [searchParms])

    const handleChange = ()=>{
        navigates("/addProduct")
    }
    // console.log(product)
    // const data = [
    //     {
    //         _id: 1,
    //         name: "name",
    //         gender: "male",
    //         category: "xyz",
    //         price: 123,
    //         description: "styxxl;a;foioijj"
    //     },
    //     {
    //         _id: 2,
    //         name: "name",
    //         gender: "male",
    //         category: "xyz",
    //         price: 123,
    //         description: "styxxl;a;foioijj"
    //     }
    // ]
    return (
        <Container>
            <Flex w="1129px" h="52px" top="56.1px" left="271px" justifyContent="space-between">

                <Input type="text" placeholder="Search" w="655px" h="52px" border="1px Mixed solid rgba(0, 0, 0, 0.2)" fontFamily="poppins" fontWeight={400} fontSize="16px" lineHeight="24px"
                />
                <HStack w="124px" h="52px" gap="20px">
                    <Image src="profile.jpg" w="52px" h="52px" borderRadius="10px"
                    />


                </HStack>
            </Flex>
            <br />
            <Flex w="1129px" h="150px" top="56.1px" left="271px" justifyContent="space-between">
                <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
                    <select style={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}>
                        <option vlaue=""> Filter by Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                </Box>
                <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
                    <select style={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}>
                        <option value="">Filter By Category </option>
                        <option value="makeup">Makeup</option>
                        <option value="skincare">Skincare</option>
                        <option value="haircare">Haircare</option>
                    </select>
                </Box>
                <Box w="229.2px" h="166px" top="142px" borderRadius="8px" >
                    <select style={{ height: "51.8px", top: "142px", left: "291px", border: "2px", padding: "0px 12px 0px 12px", gap: "8px", borderColor: "rgba(121, 73, 255, 1)" }}>
                        <option> Sort By Price</option>
                        <option value="asc">Ascending</option>
                        <option value="dsc">Descending</option>

                    </select>
                </Box>
                <Box>
                    <Button w="248px" h="58px" top="70px" boxShadow="0px 4px 8px 0px rgba(50, 50, 71, 0.06)"
                     fontFamily="Inter" fontWeight={800} fontSize={"16px"} lineHeight="22px" textAlign="center" border="none" bg="rgba(14, 24, 102, 1)" color="rgba(255, 255, 255, 1)"
                    onClick={handleChange} >ADD PRODUCT</Button>
                </Box>

            </Flex>
            <Box w="1216px" h="830px" top="354px" left="263px" borderRadius="5px" bg="rgba(255, 255, 255, 1)" boxShadow="0px 8px 32px 0px rgba(51, 38, 174, 0.08)">
                <Box top="94px">
                    <Table w="1152px" h="64px" m="auto" top="94px" left="32px" borderRadius={"8px, 8px, 0px, 0px"}>
                        <Thead w="1152px" h="64px" m="auto" top="94px" left="32px" borderRadius={"8px, 8px, 0px, 0px"} bg="rgba(248, 248, 248, 1)">
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