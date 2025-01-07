import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import Login from '../../pages/login/Login';
import { toast} from 'react-toastify';
import { removeCartItem, incrementQuantity, decrementQuantity} from '../../features/cartSlice';

const CartComponent = ({children}) => {

  const cartItem = useSelector((state) => state.cart.cart);

    if(cartItem !== 0){

        return children

    }else{

        return (
            <p>The cart is empty</p>
        )
    }
}

export default CartComponent;