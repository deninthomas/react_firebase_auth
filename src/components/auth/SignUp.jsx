import React from "react";
import { Button, Flex, Heading, Input,useColorModeValue } from '@chakra-ui/react';
import {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";

const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   
    const formBackground = useColorModeValue("blue.100", "blue.700");
    
     const signUphandler = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
    
        }).catch((eroor) => {
            console.log("Eroor",eroor.message);
        });
    
     }
     return (
               <div className="Sign_Up">
                <form onSubmit={signUphandler}>
                    <Heading mb={5} >Create an account</Heading>
              
                 <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Flex direction={'column'} background={formBackground} p={12} rounded={6}>
              <Heading mb={6}>Sign Up </Heading>
              <Input placeholder='Email' variant={"filled"} mb={3} type='email' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
              <Input placeholder='Password' variant={"filled"} mb={6} type='password'value={password} onChange={(e) => setPassword(e.target.value)}></Input>
              <Button colorScheme={'teal'} type="submit">Sign UP</Button>
            </Flex>
          </Flex>
          </form>
            </div>
        )
    }
    
    export default SignUp;