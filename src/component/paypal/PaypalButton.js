import { PayPalButtons } from "@paypal/react-paypal-js";
import { redirect, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nullCart } from "../../features/cartSlice";
const PaypalButton = ({props}) => {

    const {price} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleApproval = (orderID)=>{

        alert('Congratulations on your purchase');
        dispatch(nullCart());
        navigate('/thankyou')


    }

    return <PayPalButtons

    style={{color: "silver"}}


    createOrder={(data, actions)=>{

        return actions.order.create({

            purchase_units:[
                {
                    amount:{
                        value:price,
                    }
                }
            ]
        })

    }}
    
    onApprove={async(data, actions)=>{

        const order = await actions.order.capture();

        handleApproval(data.orderID);

       

    }}

    />;
}

export default PaypalButton;