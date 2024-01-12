import { Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import SideNavbar from './SideNavbar'
import Products from './Products'

const Dashboard = () => {
  return (
    <Container maxW={"100%"} mt="25px"  bg="#F8F8F8">
      <HStack maxW={"100%"}> 
        <SideNavbar />
        <Products />
      </HStack>
    </Container>
  )
}

export default Dashboard