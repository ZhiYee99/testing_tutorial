import React, { useState, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
  Link as NavLink,
  Box,
  Flex,
  Spacer,
  Icon,
  UnorderedList,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  HamburgerIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import logo from "../components/images/logo.svg";
import todoIcon from "../components/images/icon-todo.svg";
import calendarIcon from "../components/images/icon-calendar.svg";
import remindersIcon from "../components/images/icon-reminders.svg";
import planningIcon from "../components/images/icon-planning.svg";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function Navbar() {
  let navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/** Nav button for desktop */}
      <Box display={["none", "none", "none", "block"]} m='10px'>
        <Flex>
          {/**Logo Box*/}
          <Box>
            <Link to='/'>
              <Image src={logo} m={["15px", "20px", "20px"]} />
            </Link>
          </Box>

          {/**Button Box */}
          <Box alignSelf='center'>
            <Menu>
              <MenuButton>Features {<ChevronDownIcon />}</MenuButton>
              <MenuList bg='aliceblue' p='10px'>
                <MenuItem>
                  <NavLink as={Link} to='/todo'>
                    <Flex>
                      <Image src={todoIcon} m='5px' h='15px' w='15px' />
                      Todo List
                    </Flex>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink as={Link} to='/calendar'>
                    <Flex>
                      <Image src={calendarIcon} m='5px' h='15px' w='15px' />
                      Calendar
                    </Flex>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink as={Link} to='/reminder'>
                    <Flex>
                      <Image src={remindersIcon} m='5px' h='15px' w='15px' />
                      Reminder
                    </Flex>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink as={Link} to='/planning'>
                    <Flex>
                      <Image src={planningIcon} m='5px' h='15px' w='15px' />
                      Planning
                    </Flex>
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton> Company {<ChevronDownIcon />}</MenuButton>
              <MenuList bg='aliceblue' p='10px'>
                <MenuItem>
                  <NavLink as={Link} to='./history'>
                    History
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink as={Link} to='/our-teams'>
                    Our Teams
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink as={Link} to='/blog'>
                    Blog
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box alignSelf='center'>
            <Flex>
              <Menu w='20%'>
                <MenuItem w='80px'>
                  <NavLink as={Link} to='/careers'>
                    Careers
                  </NavLink>
                </MenuItem>
              </Menu>

              <Menu w='20%'>
                <MenuItem w='80px'>
                  <NavLink as={Link} to='/about'>
                    About
                  </NavLink>
                </MenuItem>
              </Menu>
            </Flex>
          </Box>

          <Spacer />
          {/**Login, Register Box*/}
          <Box alignSelf='center'>
            <Flex>
              <Menu>
                <MenuItem w='60px'>
                  <NavLink as={Link} to='/login'>
                    Login
                  </NavLink>
                </MenuItem>
              </Menu>

              <Menu>
                <MenuItem w='90px'>
                  <NavLink
                    as={Link}
                    to='/register'
                    border='1px solid gray'
                    borderRadius='5px'
                    p='5px'
                    _hover={{ bg: "blue", color: "white" }}
                  >
                    Register
                  </NavLink>
                </MenuItem>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/** Hidden Nav button for mobile */}
      <Box>
        <Box display={["block", "block", "block", "none", "none"]} m='10px'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Link to='/'>
              <Image src={logo} m={["15px", "20px", "15px"]} />
            </Link>

            <Button
              ref={btnRef}
              color='black'
              onClick={onOpen}
              display={["block", "block", "block", "none", "none"]}
              float='right'
            >
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                  <Box m='10px 0px'>
                    <UnorderedList listStyleType='none'>
                      <ListItem>
                        <Menu>
                          <MenuButton p='5px' m='5px'>
                            Features {<ChevronDownIcon />}
                          </MenuButton>
                          <MenuList bg='aliceblue' p='10px'>
                            <MenuItem>
                              <NavLink as={Link} to='/todo'>
                                <Flex>
                                  <Image
                                    src={todoIcon}
                                    m='5px'
                                    h='15px'
                                    w='15px'
                                  />
                                  Todo List
                                </Flex>
                              </NavLink>
                            </MenuItem>
                            <MenuItem>
                              <NavLink as={Link} to='/calendar'>
                                <Flex>
                                  <Image
                                    src={calendarIcon}
                                    m='5px'
                                    h='15px'
                                    w='15px'
                                  />
                                  Calendar
                                </Flex>
                              </NavLink>
                            </MenuItem>
                            <MenuItem>
                              <NavLink as={Link} to='/reminder'>
                                <Flex>
                                  <Image
                                    src={remindersIcon}
                                    m='5px'
                                    h='15px'
                                    w='15px'
                                  />
                                  Reminder
                                </Flex>
                              </NavLink>
                            </MenuItem>
                            <MenuItem>
                              <NavLink as={Link} to='/planning'>
                                <Flex>
                                  <Image
                                    src={planningIcon}
                                    m='5px'
                                    h='15px'
                                    w='15px'
                                  />
                                  Planning
                                </Flex>
                              </NavLink>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </ListItem>
                      <ListItem>
                        <Menu>
                          <MenuButton p='5px' m='5px'>
                            Company {<ChevronDownIcon />}
                          </MenuButton>
                          <MenuList bg='aliceblue' p='10px'>
                            <MenuItem>
                              <NavLink as={Link} to='./history'>
                                History
                              </NavLink>
                            </MenuItem>
                            <MenuItem>
                              <NavLink as={Link} to='/OurTeam'>
                                Our Teams
                              </NavLink>
                            </MenuItem>
                            <MenuItem>
                              <NavLink as={Link} to='/blog'>
                                Blog
                              </NavLink>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </ListItem>
                      <ListItem>
                        <Menu>
                          <MenuItem p='5px' m='5px' w='80px' h='30px'>
                            <NavLink as={Link} to='/careers'>
                              Careers
                            </NavLink>
                          </MenuItem>
                        </Menu>
                      </ListItem>
                      <ListItem>
                        <Menu>
                          <MenuItem p='5px' m='5px' w='80px' h='30px'>
                            <NavLink as={Link} to='/about'>
                              About
                            </NavLink>
                          </MenuItem>
                        </Menu>
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box m='10px 0px'>
                    <Flex></Flex>
                  </Box>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant='outline' mr={3}>
                    <NavLink as={Link} to='/login'>
                      Login
                    </NavLink>
                  </Button>
                  <Button colorScheme='blue'>
                    <NavLink as={Link} to='/register'>
                      Register
                    </NavLink>
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
export default Navbar;
