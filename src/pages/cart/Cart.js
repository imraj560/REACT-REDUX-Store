import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem, incrementQuantity, decrementQuantity} from '../../features/cartSlice';
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
                            {data.quantity}
                            <button className='quantity' onClick={()=>dispatch(decrementQuantity(data.id))}>-</button>
                        </td>
                        <td>{qtyPrice()}</td>
                        <td>
                          <button className='delete' onClick={()=>dispatch(removeCartItem(data.id))}>x</button>
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
                  <td>{avgTotal()}</td>
                
                </tr>
              </tfooter>

            </table>
            

             

           
          
        </div>

    </div>
  )
}

export default Cart