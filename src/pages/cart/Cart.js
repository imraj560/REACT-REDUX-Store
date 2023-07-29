import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Cart.css';
const Cart = () => {

    const cartItem = useSelector((state) => state.cart.cart)

  return (
    <div className='row'>

        <div className='cartContainer'>
            <h3>Your order list is here</h3>

            <table id='cartTable'>
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

                    return(

                      <tr key={data.id}>

                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td></td>
                        <td></td>
                        <td>
                          <button className='delete'>x</button>
                        </td>

                      </tr>
                    )
                      

                  })
                }
              
              </tbody>

              <tfooter>
                <tr>
                  <td colSpan={3}>Total</td>
                  <td>455.55</td>
                </tr>
              </tfooter>

            </table>
            

               {
                 cartItem.map((item)=>{
                  <div>

                     <p key={item.id}>{item.title}</p>
                  </div>
                  
                   
                 })

                }  
            

           
          
        </div>

    </div>
  )
}

export default Cart