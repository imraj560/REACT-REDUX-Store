import { createSlice } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import { toast, ToastContainer } from 'react-toastify';

const cartSlice = createSlice({

    name:'cart',
    initialState: {
        cart:[]
    },

    reducers:{

        addToCart : (state, action) => {

            const itemInCart = state.cart.find((item)=>item.id === action.payload.id);

            if(itemInCart){

                itemInCart.quantity++;
                toast.success("Quantity Increased");
            }else{

                state.cart.push({...action.payload, quantity:1});

                toast.success("Added to Cart");
            }

        },

    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;