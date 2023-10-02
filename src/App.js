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
import PrivetRoute from './Authentication/PrivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddService from './Pages/Dashboard/AddService';
import SignIn from './Pages/SignIn';
import RequireAuth from './Authentication/PrivetRoute';
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
  <Route path='/service' element={<PrivetRoute> <Service /></PrivetRoute>}></Route>
    <Route path='/dashboard'  element={<PrivetRoute> <Dashboard /> </PrivetRoute>}>
      <Route path='addService' element={<RequireAuth>
        <AddService />
      </RequireAuth>} />
      <Route path='makeAdmin' element={<MakeAdmin />} />
     </Route>
  <Route path='/signin' element={<SignIn />} />
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/login' element={<Login />}></Route>
</Routes>
    </div>
  );
}

export default App;
