import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const UserLogout = () => {
        const { signOutUser } = useContext(AuthContext)
    

    signOutUser()
    .then(() => {
        Swal.fire({
            title: "Sign Out Successfully",
            text: "Login again for all features!",
        });
    })
    .catch((error) => {
    });
    return 
};

export default UserLogout;