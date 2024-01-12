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
  InputLeftElement,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
// localStorage.removeItem("token")
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const toast = useToast();
    const dispatch = useDispatch();
    const navi = useNavigate()

    const {token,isAuth} = useSelector((store=>{
      return{
        token:store.authReducer.token,
        isAuth:store.authReducer.isAuth,

      }
    }))

    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    if (email && password) {
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
  
      let user = { email, password };
  
      try {
        // Assuming dispatch(login(user)) is an asynchronous action
        await dispatch(login(user));
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login failure, e.g., show an error message
      }
    }
  };
  console.log(isAuth)
  
  if (isAuth) {
    navi("/dashboard");
  }
  
   

  return (
    <Flex
  
      width={"90%"}
    
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row"
        
      }}
      alignItems={"center"}
      margin={"auto"}
    >
      <Box
        width={{
          base: "50%",
          sm: "50%",
          md: "50%",
          lg: "50%",
          xl: "50%",
          "2xl": "50%",
        }}
      >
        <Image src="https://www.artbikashkendra.com/admin/assets/images/login.gif"/>
      </Box>
      <Box
        width={{
          base: "40%",
          sm: "40%",
          md: "40%",
          lg: "40%",
          xl: "40%",
          "2xl": "40%",
        }}
        padding={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} 
      >
        <Heading fontFamily={"poppins"} size='lg' color={"#013CC6"} >Sign In Nyka</Heading>
        <FormControl  isRequired>
          <FormLabel marginTop={"10px"} >Enter Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
         
            </InputLeftElement>
            <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="Eg. name@mail.com" />
          </InputGroup>
          <FormLabel marginTop={"10px"} >Enter Password</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
      
            </InputLeftElement>
            <Input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            onClick={handleSubmit}
            type='submit'
            mb={2}
            fontFamily={"poppins"}
          >
            Sign In
          </Button>
          <Text fontFamily={"poppins"} size={"md"}>Do not have an account ? <Link style={{color:"teal",fontWeight:"600"}} to={'/register'}>Sign Up</Link></Text>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Login;
