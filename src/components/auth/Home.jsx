import React from "react";
import { Button, Flex, Heading} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bg="gray.100" 
    >
      <Heading mb={4}>This Is The Homepage</Heading>
      <Flex w="100%" justifyContent="flex-start" alignItems="center">
       
        <Button colorScheme="teal"  variant="ghost"
            position="fixed"
            top={4}
            left={4} >
          HOME
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
