import React from 'react'
import { useState, useEffect } from 'react';
import { addMovies } from '../../features/movieSlice';
import './Login.css';
import { toast} from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { loginUser, logout } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';


const Login = () => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const login = (e)=>{

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

         const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{
        
              if(userAuth){
        
                dispatch(loginUser({
        
                  uid:userAuth.uid,
                  email:userAuth.email,
        
                }))
        
              }else{
        
                dispatch(logout());
        
              }
            })
        
        toast.success('Successfully Logged In !', {
          position: toast.POSITION.TOP_RIGHT
      });
        navigate('/store');

        
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
    <div className='login_div'>
      <div className='formContainer'>
         <h2>Login </h2>
        <form>
        
          <input type="email" name="email" value={email} placeholder='please type your email'
          onChange={(e)=>setEmail(e.target.value)}
          />
        
          <input type="password" name="password" value={password} placeholder='please type your password'
          onChange={(e)=>setPassword(e.target.value)}
          />

          <button className='login__button' onClick={login}>Sign In</button>
        </form>

        <h5>No Account? <NavLink to="/register" style={{textDecoration:'none', color:"black"}}><span className='register__title'>Register</span></NavLink></h5>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
     

    </div>
  )
}

export default Login 