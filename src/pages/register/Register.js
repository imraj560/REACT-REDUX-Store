import React from 'react'
import { useState } from 'react';
import './Register.css';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {auth} from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';
import { loginUser, logout } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';



const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[cPassword, setCpassword] = useState('');

     const dispatch = useDispatch();

    const navigate = useNavigate();

    const signUp = (e)=>{

        e.preventDefault();

        if(password != cPassword){

            toast.error('Password does not match');
        }

        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user)
         
          toast.success("Registration successfull")
          navigate('/login')
  
  
         
        })
        .catch((error) => {
         
          toast.error(error.message);
         
         
        });

    }

    const handleSuccess = (credentialResponse) => {
   
       const decoded = jwtDecode(credentialResponse.credential);
       
       dispatch(loginUser({
           
         uid:decoded.sub,
         email:decoded.email,
   
       }))
   
       toast.success('Successfully Logged In !', {
         position: toast.POSITION.TOP_RIGHT
     });
       navigate('/store');
   
      
   
     };
   
     const handleError = () => {
   
         console.error("Login Failed");
     };

    return (
        <div className='register_div'>
           <div className='registerformContainer'>
            <h2>Register </h2>
          <form>
           
            <input type="email" name="email" value={email} placeholder='please type your email'
            onChange={(e) => setEmail(e.target.value)}
            />
           
            <input type="password" name="password" value={password} placeholder='please type your password'
            onChange={(e)=>setPassword(e.target.value)}
            />

            <input type="password" name="password" value={cPassword} placeholder='confirm password'
            onChange={(e)=>setCpassword(e.target.value)}
            />
    
            <button className='login__button' onClick={signUp}>Register</button>
          </form>
    
          <h5>Already Registered? <NavLink to="/login" style={{textDecoration:'none', color:'green'}}><span className='register__title'>Login</span></NavLink></h5>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} /> 
           </div>
            
          
         
    
        </div>
      )
}

export default Register;