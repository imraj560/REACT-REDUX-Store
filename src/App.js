import React from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Movie from './pages/movie/Movie';
import Thankyou from './pages/thankyou/Thankyou';
import Cart from './pages/cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthComponent from './component/authNav/AuthComponent';
import ProductView from './pages/product/ProductView';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function App() {


  return (
    <div className="App">
      <PayPalScriptProvider options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}>

     
      <BrowserRouter>
     
          <Routes>       
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/productview/:category/:id" element={<ProductView/>}/>
              <Route path="/store" element={<Movie/>}/>
              <Route element={<AuthComponent/>}>
               
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
