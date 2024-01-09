import React from "react";
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';
import {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";

const SignIn = () => {
    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const { toggleColorMode } = useColorMode();
const formBackground = useColorModeValue("blue.100", "blue.700");

 const signInhandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth , email , password)
    .then((userCredential) => {
        console.log(userCredential);

    }).catch((eroor) => {
        console.log("Eroor" , eroor.message);
    });

 }
 return (
           <div className="Sign_In">
            <form onSubmit={signInhandler}>
            <Button onClick={toggleColorMode}>Night Mode</Button>
            <Heading mb={1}> Login in to account</Heading>
             <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Flex direction={'column'} background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Login Page</Heading>
          <Input placeholder='Email' variant={"filled"} mb={3} type='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
          <Input placeholder='Password' variant={"filled"} mb={6} type='password'value={password} onChange={(e) => setPassword(e.target.value)}></Input>
          <Button colorScheme={'teal'} type="submit">Log In</Button>
        </Flex>
      </Flex>
      </form>
        </div>
    )
}

export default SignIn;