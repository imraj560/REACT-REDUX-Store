
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import Login from '../../pages/login/Login';
import { toast} from 'react-toastify';

const AuthComponent = ({children}) => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    if(user){

        return <Outlet/>

    }else{

       
        return <Login/>;
        
            
    }
}

export default AuthComponent;