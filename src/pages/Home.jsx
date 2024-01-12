import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Container maxW={"100%"}>
        <Box maxW={"100%"} mt="150px">
            <Heading fontFamily={"poppins"} fontSize="40px" textAlign={"center"}>Welcome To the Nyka Home page</Heading>
            <Image src='https://finshiksha.com/wp-content/uploads/2022/04/Nykaa-Banner-Image.jpg' alt="nyka" m="auto" />
        </Box>
        <Image src="" />
    </Container>
  )
}

export default Home