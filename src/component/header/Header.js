import React from 'react'
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { logout } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoginLink from '../authNav/LoginLink';
import LogoutLink from '../authNav/LogoutLink';
//import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import { Cart } from 'react-bootstrap-icons';
import { Unlock } from 'react-bootstrap-icons';

const Header = () => {

 const navigate = useNavigate();  
 const dispatch = useDispatch();

 const cartItem = useSelector((state) => state.cart.cart);

 let totalQty = 0;
 cartItem.forEach(item => {

   totalQty += item.quantity;

   return totalQty;

 });

 const toggleClass = () => {

    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

 } 

 const logOut = ()=>{

   signOut(auth).then(() => {
          
      toast.success("Successfully signed out");
      dispatch(logout());
      navigate('/login');

      
    }).catch((error) => {
     
      toast.error(error.message);

    })

 }


  return (
    <>
  
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><NavLink to={'/'}><img src={logo} width={45} height={40} /></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <LoginLink>
              <Nav.Link href="#deets"><NavLink to={'/cart'}><Cart size={25} color='black'/></NavLink><span style={{fontSize:'18px', fontWeight:'bold'}}>{totalQty}</span></Nav.Link>
              <Nav.Link><NavLink to={'/store'} style={{textDecoration:"none", color:"black",fontWeight:"bold"}}>Store</NavLink></Nav.Link>
              <Nav.Link href="#deets"><span onClick={logOut} style={{fontWeight:"bold",color:"black"}}>Logout</span></Nav.Link>
              
            </LoginLink>
          
            <LogoutLink>
              <Nav.Link href="#deets"><span style={{fontWeight:"bold"}}><NavLink to={'/login'}><Unlock color='black' size={32}/></NavLink></span></Nav.Link>
            </LogoutLink>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;