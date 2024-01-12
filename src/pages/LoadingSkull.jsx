import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const LoadingSkull = () => {
    return (
        <Container maxW={"100%"}>
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        </Container>
    )
}

export default LoadingSkull