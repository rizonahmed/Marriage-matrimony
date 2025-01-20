import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const UserLogout = () => {
        const { signOutUser } = useContext(AuthContext)
    

    signOutUser()
    .then(() => {
        Swal.fire({
            icon: "error",
            title: "Sign Out Successfully",
            text: "Login again for all features!",
        });
    })
    .catch((error) => {
    });
    return 
};

export default UserLogout;