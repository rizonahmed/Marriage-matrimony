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
                return res.data;
            } catch (error) {
                return false;
            }
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;