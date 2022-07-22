import React from "react";
import { Button,Link, Text, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';


export function Calendar() {
  return (
    <>
    <ChakraProvider>
      <Text fontSize='larger'>Calendar</Text>
    </ChakraProvider>
   </>
  );
 }
  
 export default Calendar;
