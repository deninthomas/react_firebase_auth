import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button, Box } from "@chakra-ui/react";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    console.log("useEffect Triggered");
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }  
    });
    return () => listen(); //cleanup function to stop listening when the component unmounts
  }, 
  []);
    
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((eroor) => {
        console.error("Eroor", eroor.message);
      });
  };
  return (
    <Box
      position="fixed"
      bottom={0}
      left={620}
      right={50}
      width="20%"
      p={4}
      backgroundColor="teal.500"
      color="white"
      textAlign="center"
    >
      {authUser ? (
        <>
          {" "}
          <p> {`Signed In as ${authUser.email}`}</p>
          <Button
            colorScheme={"teal"}
            onClick={userSignOut}
            variant="ghost"
            position="fixed"
            top={4}
            left={4}
          >
            Signout{" "}
          </Button>{" "}
        </>
      ) : (
        <p> Signed Out</p>
      )}
    </Box>
  );
};

export default AuthDetails;
