import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./components/pages/Home";
import Todo from "./components/pages/Todo";
import Calendar from "./components/pages/Calendar";
import Reminder from "./components/pages/Reminder";
import Planning from "./components/pages/Planning";
import History from "./components/pages/History";
import Careers from "./components/pages/Careers";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import OurTeam from "./components/pages/OurTeam";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
       
          <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
          <Route path='/calendar' element={<Calendar />}></Route>
          <Route path='/reminder' element={<Reminder />}></Route>
          <Route path='/planning' element={<Planning />}></Route>
          <Route path='/ourteam' element={<OurTeam />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/history' element={<History />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
