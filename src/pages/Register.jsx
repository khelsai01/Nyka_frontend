import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";

const Register = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [gender,setgender]= useState("")
    const [avatar,setavatar] =useState("")
    const toast = useToast();

    const dispatch = useDispatch()
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e)=>{
      e.preventDefault();
        if(email && password && name && gender && avatar){
            if (!isEmailValid(email)) {
                toast({
                    title: "Invalid Email",
                    description: "Please enter a valid email address.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                return;
            }
        let newuser={email,password,name,gender,avatar}
        dispatch(register(newuser))
        }
     
    }
  return (
    <Flex
      justifyContent={"space-around"}
      width={"90%"}
    
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      gap="30px"
      alignItems={"center"}
      margin={"auto"}
    >
      <Box
       
        width={{
          base: "60%",
          sm: "60%",
          md: "60%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
      >
        <Image src="https://www.artbikashkendra.com/admin/assets/images/login.gif" />
      </Box>
      <Box
       
        padding={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} 
        mt={"2%"}
        width={{
          base: "40%",
          sm: "40%",
          md: "40%",
          lg: "40%",
          xl: "40%",
          "2xl": "50%",
        }}
      >
        
        <Heading fontFamily={"poppins"} size='lg' color={"#013CC6"} >Register at Nyka</Heading>
        <FormControl   isRequired>
          <FormLabel marginTop={"8px"} >Enter Name</FormLabel>
          <InputGroup>
          
            <Input isRequired="true" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter gender</FormLabel>
          <InputGroup>
          
            <Input  isRequired="true" onChange={(e)=>{setgender(e.target.value)}} value={gender} type="text" placeholder="gender" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Email</FormLabel>
          <InputGroup>
            
            <Input isRequired="true" onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter Password</FormLabel>
          <InputGroup>
           
            <Input isRequired="true" onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
          </InputGroup>
          <FormLabel marginTop={"8px"} >Enter avatar URL</FormLabel>
          <InputGroup>
            
            <Input isRequired="true" onChange={(e)=>{setavatar(e.target.value)}} value={avatar} type="text" placeholder="avatar.jpg" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            onClick={handleSubmit}
            type='submit'
            mb={2}
            fontFamily={"poppins"}
            bg={"#fe5285"}
          border={"none"}
            p="7px" borderRadius="5px"
          >
            Sign Up
          </Button>
          
        </FormControl>
        <Text fontFamily={"poppins"} size={"md"}>Already have an account ? <Link style={{color:"teal",fontWeight:"600",}}  to={'/login'}>Sign In</Link></Text>
      </Box>
    </Flex>
  );
};

export default Register;