import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Login() {
  return <Button>
    Login
  </Button>
}

function User() {
  return <Flex gapX={1}>
    <Button variant="solid">My Profile</Button>
    <Button variant="outline">Log Out</Button>
  </Flex>
  
  
}

export default function Header({isLogin}: {isLogin: boolean}) {
  return <Box w="full">
    <Flex align="center">
      <Navbar />
      <Spacer />
      {
        isLogin ? <User /> : <Login />
      }
      
    </Flex>
    
  </Box>
}