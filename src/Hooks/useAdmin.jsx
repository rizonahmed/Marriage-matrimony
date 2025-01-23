import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { AuthContext } from '../AuthProvider';
import axios from 'axios';


const useAdmin = () => {
      const { user } = useContext(AuthContext);
      
    const { data: isAdmin =[] , isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async () => {
            try {
                const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
                // console.log('Admin check response:', res.data);
                return res.data;
            } catch (error) {
                // console.error('Admin check failed:', error);
                return false;
            }
        }
    })
    console.log(isAdmin, user);
    return [isAdmin, isAdminLoading]
};

export default useAdmin;