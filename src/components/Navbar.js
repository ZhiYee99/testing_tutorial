import React, { useState } from 'react';
import { Menu,MenuButton,MenuList, MenuItem, Image, Heading, Button, Link as NavLink, Box, Flex, Spacer, Icon, 
  UnorderedList, ListItem } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from "react-router-dom";
import logo from '../images/logo.svg';
import todoIcon from '../images/icon-todo.svg';
import calendarIcon from '../images/icon-calendar.svg';
import remindersIcon from '../images/icon-reminders.svg';
import planningIcon from '../images/icon-planning.svg';


 
export function Navbar() {
  
  let navigate = useNavigate();
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <Navbar>
      <Link to='/' ><Image src={logo}/></Link>
      <Box className='menu-icon' onClick={handleClick}>
        <Icon className={click?HamburgerIcon:SmallCloseIcon}/>
      </Box>
      <UnorderedList>
        <ListItem className='nav-item'></ListItem>
      </UnorderedList>
    </Navbar>
    <Flex>
      
        {/**Logo Box*/}
        <Box w='10%' m='20px'>
          <Link to='/'><Image src={logo}/></Link>
        </Box>
        <Box><HamburgerIcon/><SmallCloseIcon/></Box>
        {/**Button Box */}
        <Box m='10px 0px'>
          <Menu> 
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} p='5px' m='5px'>Features</MenuButton>
            <MenuList bg='aliceblue' p='10px'>
              <MenuItem><NavLink as={Link} to='/todo'><Flex><Image src={todoIcon} m='5px' h='15px' w='15px'/>Todo List</Flex></NavLink></MenuItem>
              <MenuItem><NavLink as={Link} to='/calendar'><Flex><Image src={calendarIcon} m='5px' h='15px' w='15px'/>Calendar</Flex></NavLink></MenuItem>
              <MenuItem><NavLink as={Link} to='/reminder'><Flex><Image src={remindersIcon} m='5px' h='15px' w='15px'/>Reminder</Flex></NavLink></MenuItem>
              <MenuItem><NavLink as={Link} to='/planning'><Flex><Image src={planningIcon} m='5px' h='15px' w='15px'/>Planning</Flex></NavLink></MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} p='5px' m='5px'>Company</MenuButton>
            <MenuList bg='aliceblue' p='10px'>
              <MenuItem><NavLink as={Link} to='./history'>History</NavLink></MenuItem>
              <MenuItem><NavLink as={Link}  to='/our-teams'>Our Teams</NavLink></MenuItem>
              <MenuItem><NavLink as={Link} to='/blog'>Blog</NavLink></MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box m='10px 0px'>
          <Flex>
            <Menu w='20%'>
              <MenuItem p='5px' m='5px' w='80px' h='30px'><NavLink as={Link} to='/careers'>Careers</NavLink></MenuItem>
            </Menu>
            
            <Menu w='20%'>
              <MenuItem p='5px' m='5px' w='80px' h='30px'><NavLink as={Link} to='/about'>About</NavLink></MenuItem>
            </Menu>
          </Flex>
        </Box>

        <Spacer/>
        {/**Login, Register Box*/}
        <Box m='10px 0px'>
          <Flex>
            <Menu w='20%'>
              <MenuItem p='5px' m='5px' w='80px' h='30px'><NavLink as={Link} to='/login'>Login</NavLink></MenuItem>
            </Menu>
            
            <Menu w='20%'>
              <MenuItem p='5px' m='5px' w='80px' h='30px' border='1px solid grey' borderRadius='8px'>
                <NavLink as={Link} to='/register'>Register</NavLink>
              </MenuItem>
            </Menu>
          </Flex>
        </Box>
      
    </Flex>
   </>
  );
 }
 export default Navbar;
 