import Home from './components/home/Home';
import BottomBar from './components/footer/BottomBar';
import NavBar  from './components/header/NavBar';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css'
import ContactUs from './components/contact/ContactUs';
import { Salons } from './components/cart/Salons';
import About from './components/about/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import YourAppoinments from './components/your_appoinments/YourAppoinments';
function App() {
  return (
    <Container className='body'  style = {{padding:"0px",margin:"0px"}} fluid size='lg'>
     <NavBar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/carts' element={<Salons/>}/>
      <Route path='/your_appoinments' element={<YourAppoinments/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>

     <BottomBar/>
    
    </Container>
   
  );
}

export default App;
