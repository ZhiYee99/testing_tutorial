import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Button,
  Text,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Heading, Link } from "@chakra-ui/react";
import heroImage from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

function Home() {
  return (
    <>
      {/*<Grid m='10px 80px'
      h='750px'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap={1}
    >

      <GridItem colSpan={1}>
        <Text fontSize='68px' fontWeight='bold' p='20px 50px'>Make {'\n'} remote work</Text>
      </GridItem>

      <GridItem rowSpan={4} colSpan={1}>
        <Image src={heroImage} h='750px'/>
      </GridItem>

      <GridItem colSpan={1}>
        <Text p='50px' w='80%' color='grey'>Get your team in sync, no matter you location. 
          Streamline processes, create team rituals, and watch productivity soar.
        </Text>
      </GridItem>

      <GridItem colSpan={1}>
        <Button m='50px' bg={['red','green','black']} color='white' _hover={{bg:'white', color:'black'}}>Learn more</Button>
      </GridItem>

      <GridItem colSpan={1}>
        <Flex ml='30px'>
          <Image src={databiz} m='5px 20px'/>
          <Image src={audiophile} m='5px 20px'/>
          <Image src={meet} m='5px 20px'/>
          <Image src={maker} m='5px 20px'/>
        </Flex>
        
      </GridItem>
      
      
  </Grid>*/}

      <Flex
        m={["20px 40px", "20px 60px", "20px 80px"]}
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Box w={['100%','100%','50%']}>
          <Text
            fontSize={["20px", "40px", "60px"]}
            fontWeight='bold'
            p='5px'  
          >
            Make {"\n"} remote work
          </Text>
          <Text
            fontSize={["12px", "15px", "24px"]}
            p='5px'
            color='grey'
            w={["100%", "80%", "80%"]}
          >
            Get your team in sync, no matter you location. Streamline processes,
            create team rituals, and watch productivity soar.
          </Text>
          <Center>
            <Button
              m={["30px 0px", "30px 0px", "50px 0px"]}
              bg={["red", "green", "blue", "purple", "black"]}
              color='white'
              _hover={{ bg: "white", color: "black" }}
            >
              Learn more
            </Button>
          </Center>
          <Center>
            <Flex flexDir={["column", "column", "column", "row", "row"]}>
              <Image
                src={databiz}
                m={["30px 2px", "20px 5px", "15px 5px", "7px", "15px"]}
              />
              <Image
                src={audiophile}
                m={["30px 2px", "20px 5px", "15px 5px", "7px", "15px"]}
              />
              <Image
                src={meet}
                m={["30px 2px", "20px 5px", "15px 5px", "7px", "15px"]}
              />
              <Image
                src={maker}
                m={["30px 2px", "20px 5px", "15px 5px", "7px", "15px"]}
              />
            </Flex>
          </Center>
        </Box>
        <Box w={['100%','100%','50%']}>
          <Image
            src={heroImage}
            h={["350px", "500px", "750px"]}
            w={["820px", "560px", "800px"]}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Home;
