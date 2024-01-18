import React from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TranslationButton from "./TranslationButton";


const SignUp = () => {
  const { t ,i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formBackground = useColorModeValue("blue.100", "blue.700");

  const signUphandler = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((eroor) => {
        console.log("Eroor", eroor.message);
      });
  };
  return (
    <>
      <div className="Sign_Up">
        <form onSubmit={signUphandler}>
          <Flex
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex
              direction={"column"}
              background={formBackground}
              p={12}
              rounded={6}
            >
              <Heading mb={6} textAlign={"center"}>
                {t("signUpPage.title")}
              </Heading>
              <Input
                placeholder={t("signUpPage.emailPlaceholder")}
                variant={"filled"}
                mb={3}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
              <Input
                placeholder={t("signUpPage.passwordPlaceholder")}
                variant={"filled"}
                mb={6}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <Button colorScheme={"teal"} type="submit">
                {t("signUpPage.signUpButton")}
              </Button>
              <div>
                <p>
                  {t("signUpPage.haveAccountMessage")} :
                  <Link to="/">
                    <Button
                      colorScheme="teal"
                      size="sm"
                      mb={1}
                      variant={"outline"}
                      borderWidth={0}
                    >
                      {t("signUpPage.signInButton")}
                    </Button>
                  </Link>
                </p>
              </div>
            </Flex>
          </Flex>
        </form>
      </div>
      <TranslationButton />
    </>
  );
};

export default SignUp;
