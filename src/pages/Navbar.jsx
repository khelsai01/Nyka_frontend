import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Flex, Heading, Image} from "@chakra-ui/react"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {isAuth} = useSelector((store)=>store.authReducer.isAuth)
  return (
    <Container>
      <Flex h="45px"  justifyContent="space-between" m="auto" p="10px">
        <Link to="/" style={{textDecoration:'none', bottom:"20px"}}>
      {/* <Image h="100%" src="https://finshiksha.com/wp-content/uploads/2022/04/Nykaa-Banner-Image.jpg" /> */}
      <Heading width="150px" bottom="20px" m="auto"  left={"18px"} fontFamily={"poppins"} fontWeight={"500"} fontSize={"24px"} lineHeight={"36px"} color={"#013CC6"}>
                    Nyka
                    </Heading>
        </Link>
        <Link  to="/login" style={{fontFamily:"poppins", textDecoration:"none",fontSize:'25px' ,textAlign:"center"}}>Login</Link>
        <Link to="/register" style={{fontFamily:"poppins", textDecoration:"none",fontSize:'25px' ,textAlign:"center"}}>SignUp</Link>
      </Flex>

    </Container>
  )
}

export default Navbar