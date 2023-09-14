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
import Thankyou from './pages/thankyou/Thankyou';
import Cart from './pages/cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthComponent from './component/authNav/AuthComponent';
import ProductView from './pages/product/ProductView';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';




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
    <div className="App">
      <PayPalScriptProvider options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}>

     
      <BrowserRouter>
     
        <ToastContainer/>
        
          <Routes>       
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/productview/:id" element={<ProductView/>}/>
              <Route element={<AuthComponent/>}>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/thankyou" element={<Thankyou/>}/>
              </Route>
              
          </Routes>

     
          
        
      
     
      </BrowserRouter>

      </PayPalScriptProvider>
     
    </div>
  );
}

export default App;
