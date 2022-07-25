import React from "react";
import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";

import heroImage from "../images/image-hero-desktop.png";
import heroImageMobile from "../images/image-hero-mobile.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

function Home() {
  return (
    <>
      <Flex
        m={["20px 10px", "20px 30px", "20px 50px"]}
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Flex
          w={["100%", "100%", "50%"]}
          flexDir='column'
          justifyContent='space-between'
        >
          <Box>
            <Text fontSize={["20px", "40px", "60px"]} fontWeight='bold' p='5px'>
              Make {"\n"} remote work
            </Text>
            <Text
              fontSize={["12px", "15px", "24px"]}
              p='5px'
              color='grey'
              w={["100%", "80%", "80%"]}
            >
              Get your team in sync, no matter you location. Streamline
              processes, create team rituals, and watch productivity soar.
            </Text>
            <Flex
              justifyContent={["center", "normal", "normal"]}
              alignItems={["center", "normal", "normal"]}
            >
              <Button
                m={["30px 0px", "30px 0px", "50px 0px"]}
                bg='black'
                color='white'
                _hover={{ bg: "white", color: "black" }}
              >
                Learn more
              </Button>
            </Flex>
          </Box>

          <Box position='bottom'>
            <Flex flexDir={["row", "row", "row", "row", "row"]} gap='30px'>
              <Box w='100%'>
                <Image src={databiz} />
              </Box>
              <Box w='100%'>
                <Image src={audiophile} />
              </Box>
              <Box w='100%'>
                <Image src={meet} />
              </Box>
              <Box w='100%'>
                <Image src={maker} />
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box w={["100%", "100%", "50%"]}>
          <Image
            src={heroImage}
            w='80%'
            h='100%'
            display={["none", "none", "none", "block"]}
          />
          <Image
            src={heroImageMobile}
            w='100%'
            h='100%'
            display={["block", "block", "block", "none", "none"]}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Home;
