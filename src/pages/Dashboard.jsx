import { Container, HStack } from '@chakra-ui/react'
import React from 'react'
import SideNavbar from './SideNavbar'
import Products from './Products'

const Dashboard = () => {
  return (
    <Container w="1501px" h="1241px" bg="#F8F8F8" m="auto">
      <HStack>
        <SideNavbar />
        <Products />
      </HStack>
    </Container>
  )
}

export default Dashboard