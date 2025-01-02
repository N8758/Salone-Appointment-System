
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/nailogo.png'
import profile from './profile.jpg'

import './navbar.css'
import '../../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function NavBar() {
  const [isLogin,setLogin]=useState(false);
  const [isAdmin,setAdmin]=useState(false);
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('email');
    localStorage.setItem('isAdmin',false);
    localStorage.setItem('isLogin',false);
    
    navigate('/');
    alert('logout successful !')
    window.location.reload();
    
  }
  useEffect(()=>{
    
   
    if(localStorage.getItem('isLogin')==='true'){
      setLogin(true);
    }else{
      setLogin(false)
    }
    if(localStorage.getItem('isAdmin')==='true'){
      setAdmin(true);
    }else{
      setAdmin(false);
    }
  },[isLogin])
  return (
    <Navbar expand="lg" className="bg-body-primary container-fluid">
      <Container>
        <Navbar.Brand ><Link to='/' ><img src={logo} alt='Logo' style={{height:"50px"}}/></Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="d-flex" style={{ }}>
        <Nav.Link className="nav-link-custom">
        <Link to='/' style={{ color: 'white' ,textDecoration:'none'}}>Home</Link>
      </Nav.Link>
      <Nav.Link className="nav-link-custom">
        <Link to='/carts' style={{ color: 'white',textDecoration:'none' }}>Cart</Link>
      </Nav.Link>
      { isAdmin && <Nav.Link className="nav-link-custom">
        <Link to='/your_appoinments' style={{ color: 'white',textDecoration:'none' }}>Your Appoinments</Link>
      </Nav.Link>}
      <Nav.Link className="nav-link-custom">
        <Link to='/about' style={{ color: 'white',textDecoration:'none' }}>About</Link>
      </Nav.Link>
      <Nav.Link className="nav-link-custom">
        <Link to='/contact' style={{ color: 'white',textDecoration:'none' }}>Contact</Link>
      </Nav.Link>
      {!isLogin && <Nav.Link className="nav-link-custom">
        <Link to='/login' style={{ color: 'white',textDecoration:'none' }}>Login</Link>
      </Nav.Link>}
      {!isLogin&&
      <Nav.Link className="nav-link-custom">
        <Link to='/register' style={{ color: 'white',textDecoration:'none' }}>Register</Link>
      </Nav.Link>}
</Nav>
<Form className="d-flex ml-auto" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="ml-2 ml-md-0 ">Search</Button>
            
           { isLogin && <Button variant="outline" className="ml-2 ml-md-0" style={{color:'white',marginLeft:"10px"}} onClick={handleLogout}>Logout</Button>}
          </Form>

        </Navbar.Collapse>
      
      </Container>
      
     
         
          <Nav>
            <Container  style={{color:'white',display:"flex", alignItems:'center',textAlign:'right',alignContent:'flex-end'}}>
              <img src={profile} alt='Logo' style={{height:"40px", borderRadius:"30px"}}/>
              <pre> </pre>
              {isLogin ?
              <h6 >{localStorage.getItem('email')}</h6>
              :  <h6 style={{color:'grey'}}>Login</h6>
}
            </Container>
          </Nav>
    </Navbar>
  );
}

export default NavBar;