import React from 'react';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const LogoutLink = ({children}) => {

    const user = useSelector(selectUser);

    if(!user){

        return children;

   }else{

    return null;
   }


}

export default LogoutLink