import './App.css';
import Navbar from './Compunent/Navbar/Navbar';

import About from './Pages/About';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {

useEffect(() => {
  AOS.init();
},[])  
  return (
    <div>
<Navbar />


<Routes>
  
  <Route path='/' element={<Home />} />
  <Route path='/home' element={<Home />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/service' element={<Service />}></Route>
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/login' element={<Login />}></Route>
</Routes>
    </div>
  );
}

export default App;
