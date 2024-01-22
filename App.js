import logo from './logo.svg';
import './App.css';
import Enquiry from './Enquiry.js';
import Sign from './Signup.js';
import Navbar from "./Navbar";
import Home from "./Home";
import {app} from "./Firebaseconfig.js";
import Login from "./Login1.js";

import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Sign/>}/>
      
      <Route path="/Login1" element={<Login/>}/>
      
      <Route path="/Enquiry" element={<Enquiry/>}/>
      <Route path="/Home" element={<Home/>}/>

    </Routes>
    </BrowserRouter>
	</div>
  );
}

export default App;
