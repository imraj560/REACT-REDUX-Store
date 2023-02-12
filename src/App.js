import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Movie from './pages/movie/Movie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';




function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //this useeffect is needed to dispatch the user action payload
  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(userAuth)=>{

      if(userAuth){

        dispatch(login({

          uid:userAuth.uid,
          email:userAuth.email,

        }))

      }else{

        dispatch(logout());

      }
    })

  },[])

  return (
    <div className="App" style={{ width:'100%' }}>
      
      <BrowserRouter>
     

         <ToastContainer/>
        <Header/>
        
          <Routes>       
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/movie" element={<Movie/>}/>
          </Routes>

     
          
        <Footer/>
      
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
