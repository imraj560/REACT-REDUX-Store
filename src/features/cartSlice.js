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

        incrementQuantity: (state, action) => {

            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },

        decrementQuantity:(state, action) => {
            
            const item = state.cart.find((item) => item.id === action.payload);
            if(item.quantity === 1){

                item.quantity = 1;
            }else{

                item.quantity--;
            }
        },

        removeCartItem: (state, action) => {

            const removeCartItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeCartItem;
        },

    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;