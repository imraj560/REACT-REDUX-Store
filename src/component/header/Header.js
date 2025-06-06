import React from 'react'
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { logout } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoginLink from '../authNav/LoginLink';
import LogoutLink from '../authNav/LogoutLink';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown, Table } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { Cart, ArrowRightShort, XCircle, PlusCircle, DashCircle, CircleFill } from 'react-bootstrap-icons';
import { Unlock, Cart2, BagFill } from 'react-bootstrap-icons';
import { removeCartItem, incrementQuantity, decrementQuantity} from '../../features/cartSlice';
import CartComponent from '../authNav/CartComponent';

const Header = () => {

 const navigate = useNavigate();  
 const dispatch = useDispatch();

 const cartItem = useSelector((state) => state.cart.cart);

 let totalQty = 0;
 cartItem.forEach(item => {

   totalQty += item.quantity;

   return totalQty;

 });

 const quantityTotal = ()=>{

  let total = 0;

  cartItem.forEach(item => {
      total+= item.quantity
  });

  return total;
}

 let avg = 0;
 const avgTotal = ()=>{

   cartItem.forEach(item=>{

     avg += item.quantity * item.price;

   })
   
   return avg.toFixed(3); 
   
 }

 avgTotal();

 const priceDetail = {"price":avg};

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
           
           {totalQty > 0 ? (

            <NavDropdown title={`Cart ${totalQty}`} style={{fontWeight:660}} id="basic-nav-dropdown">
            
             <Table style={{fontSize:'11PX'}}>

             <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem.map((data)=>{
                      
                    const qtyPrice = ()=>{

                      let price;
                      price = data.price * data.quantity;

                      return price.toFixed(3);
                    }

                    return(

                      <tr key={data.id}>

                        <td>{data.title}</td>
                  
                        <td>
                            <span style={{cursor:'pointer'}} onClick={()=>dispatch(incrementQuantity(data.id))}><PlusCircle size={12}/></span>
                            <span style={{padding:"5px 5px"}}>{data.quantity}</span>
                            <span style={{cursor:'pointer'}} onClick={()=>dispatch(decrementQuantity(data.id))}><DashCircle size={12}/></span>
                        </td>
                        <td>{qtyPrice()}</td>
                        <td>
                          <span style={{cursor:'pointer'}} onClick={()=>dispatch(removeCartItem(data.id))}><XCircle size={12}/></span>
                        </td>

                      </tr>
                    )
                      

                  })
                }
              
              </tbody>
              <tfoot>
                 <tr>
                  <td colSpan={2}>Total Price</td>
                  <td>{avg.toFixed(3)}</td>
                  <td></td>
                  
                
                </tr>

              </tfoot>

              
               

             


             </Table>
            
              <NavDropdown.Item href="#action/3.4">
              <NavLink style={{textDecoration:'none', color:'black', fontSize:'14px'}} to={'/cart'}><Button variant='default' style={{background:'black', color:'white', borderRadius:'0px'}}>Checkout <ArrowRightShort /></Button></NavLink>
              </NavDropdown.Item>
            </NavDropdown>

           ): ( <Nav.Link><BagFill style={{fontSize:"20PX",fontWeight:"600"}}/></Nav.Link>)}
              
            
          
         
          <Nav.Link><NavLink to={'/store'} style={{textDecoration:"none", color:"black"}}>Store</NavLink></Nav.Link>
            <LoginLink>
             
              <Nav.Link href="#deets"><span onClick={logOut} style={{color:"black"}}>Logout</span></Nav.Link>
              
            </LoginLink>
          
            <LogoutLink>
              <Nav.Link href="#deets"><span ><NavLink style={{textDecoration:'none', color:'black'}} to={'/login'}>Login</NavLink></span></Nav.Link>
            </LogoutLink>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;