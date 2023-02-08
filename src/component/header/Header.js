import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import LoginLink from '../authNav/LoginLink';
import LogoutLink from '../authNav/LogoutLink';

const Header = () => {

 const navigate = useNavigate();  
 const dispatch = useDispatch();

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
    <header>
       <div className='logo'><NavLink to="/">Logo</NavLink></div>
       <div className='hamburger' onClick={toggleClass}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
       </div>

       <nav className='nav-bar'>
          <ul>
            <li><LogoutLink><NavLink to="/login"><a>Login</a></NavLink></LogoutLink></li>
            <li><LoginLink><NavLink to="/movie"><a>Movies</a></NavLink></LoginLink></li>
            <li><LoginLink><a>Hi Raju</a></LoginLink></li>
            <li><LoginLink><a onClick={logOut}>Logout</a></LoginLink></li>
          </ul>
       </nav>
    </header>
  )
}

export default Header;