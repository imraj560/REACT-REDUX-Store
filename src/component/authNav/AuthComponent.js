import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';

const AuthComponent = ({children}) => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    if(user){

        return children;

    }else{

        navigate('/login');
    }
}

export default AuthComponent;