import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
 
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import TranslationButton from './TranslationButton';
import AuthDetails from "./AuthDetails";



 


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  // const { toggleColorMode } = useColorMode();
   const formBackground = useColorModeValue("blue.100", "blue.700");

  const signInhandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((eroor) => {
        console.log("Eroor", eroor.message);
      });
  };

  return (
    <>
    <div className="Sign_In">
      <form onSubmit={signInhandler}>
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <Flex direction={'column'} background={formBackground} p={12} rounded={6}>
            <Heading mb={6} textAlign={'center'}>{t('loginPage.title')}</Heading>
            <Input
              placeholder={t('loginPage.emailPlaceholder')}
              variant={'filled'}
              mb={3}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              placeholder={t('loginPage.passwordPlaceholder')}
              variant={'filled'}
              mb={6}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button colorScheme={'teal'} type="submit">
              {t('loginPage.loginButton')}
            </Button>
            <div>
              <p>
                {t('loginPage.noAccountMessage')} :
                <Link to="/SignUp">
                  <Button colorScheme="teal" size="sm" mb={1} variant={'outline'} borderWidth={0}>
                    {t('loginPage.signUpButton')}
                  </Button>
                </Link>
              </p>
            </div>
          </Flex>
        </Flex>
      </form>
    </div>
    <TranslationButton/>
    <AuthDetails/>
    </>
  );
};

export default SignIn;