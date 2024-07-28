import React from 'react'
import { useState, useEffect } from 'react';
import { addMovies } from '../../features/movieSlice';
import { useDispatch } from 'react-redux';
import './Login.css';
import { toast} from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(()=>{

   
  //   fetch("utils/data.json")
  //   .then((response) => {
  //     console.log("resolved", response);
  // return response.json();
  //   })
  //   .then((data) => {
  //     dispatch(addMovies(data));
  //   })
  //   .catch((err) => {
  //     console.log("error retrieving data", err);
  //   });


  // },[])


  const login = (e)=>{

    e.preventDefault();
   

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        
        toast.success('Successfully Logged In !', {
          position: toast.POSITION.TOP_RIGHT
      });
        navigate('/store');

        
      })
      .catch((error) => {
        
        toast.error(error.message);
      });
    


  }

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
      </div>
     

    </div>
  )
}

export default Login 