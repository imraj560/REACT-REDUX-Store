import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const LoginLink = ({children}) => {

   const user = useSelector(selectUser);
   
   if(user){

        return children;

   }else{

    return null;
   }
}

export default LoginLink