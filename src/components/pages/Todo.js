import React from "react";
import { Button, Link, Text, Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export function Todo() {
  return (
    <>
      <Box m={["20px 40px", "20px 60px", "20px 80px"]}>
        <Text fontSize='larger'>To-do List</Text>
        <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab>Todo</Tab>
            <Tab>Pending</Tab>
            <Tab>Done</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Todo list</p>
            </TabPanel>
            <TabPanel>
              <p>Halfway done......</p>
            </TabPanel>
            <TabPanel>
              <p>Done!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default Todo;
