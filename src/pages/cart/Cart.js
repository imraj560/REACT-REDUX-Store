import React, { useState } from 'react'
import  Row  from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem, incrementQuantity, decrementQuantity} from '../../features/cartSlice';
import Layout from '../../component/layout/layout';
import PaypalButton from '../../component/paypal/PaypalButton';
import './Cart.css';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.cart);

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

    



  return (
    <Layout>

      <Container>

        <Row>

        <Row className='cart__banner g-0'>
          <p>Cart Items</p>
        </Row>

        <div className='cartContainer'>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
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
                        <td>{data.price}</td>
                        <td>
                            <button className='quantity' onClick={()=>dispatch(incrementQuantity(data.id))}>+</button>
                            <span style={{padding:"10px"}}>{data.quantity}</span>
                            <button className='quantity' onClick={()=>dispatch(decrementQuantity(data.id))}>-</button>
                        </td>
                        <td>{qtyPrice()}</td>
                        <td>
                          <button className='delete' onClick={()=>dispatch(removeCartItem(data.id))}> <Trash color='black' size={22}/></button>
                        </td>

                      </tr>
                    )
                      

                  })
                }
              
              </tbody>

              <tfooter>
                <tr>
                  <td colSpan={3}>Total Quantity</td>
                  <td>{quantityTotal()}</td>

                  <td colSpan={3}>Total Price</td>
                  <td>{avg.toFixed(3)}</td>
                
                </tr>

                 <tr>

                  <td colSpan={6} style={{padding:"20px"}}>

                    <h5>Select your Payment option</h5>

                    <PaypalButton props={priceDetail}/>

                  </td>
                
                </tr>
              </tfooter>

            </Table>
            

             

           
          
        </div>

    </Row>
      </Container>
      
    </Layout>
    
  )
}

export default Cart