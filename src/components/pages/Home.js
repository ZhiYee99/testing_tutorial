import React from 'react';
import {ChakraProvider, Grid, GridItem, Box, Button, Text, Image, Flex} from '@chakra-ui/react';
import {Heading, Link} from '@chakra-ui/react';
import heroImage from '../images/image-hero-desktop.png';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import theme from '../theme'

export function Home() {
  return (
    <>
    <ChakraProvider theme = {theme}>
     
    
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

    <Flex m='10px 80px' >
      <Box w='50%'>
        <Text fontSize='68px' fontWeight='bold' p='20px 50px'>Make {'\n'} remote work</Text>
        <Text p='50px' w='80%' color='grey'>Get your team in sync, no matter you location. 
          Streamline processes, create team rituals, and watch productivity soar.
        </Text>
        <Button m='50px' bg={['red','green','black']} color='white' _hover={{bg:'white', color:'black'}}>Learn more</Button>
        <Flex ml='30px'>
          <Image src={databiz} m='5px 20px'/>
          <Image src={audiophile} m='5px 20px'/>
          <Image src={meet} m='5px 20px'/>
          <Image src={maker} m='5px 20px'/>
        </Flex>
      </Box>
      <Box w='50%'>
        <Image src={heroImage} h='750px'/>
      </Box>

    </Flex>
    </ChakraProvider>
    </>
  );
 }
  
 export default Home;
