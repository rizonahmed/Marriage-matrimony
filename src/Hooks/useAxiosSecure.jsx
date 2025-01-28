import axios from "axios";

export const axiosSecure = axios.create({
     baseURL: 'https://find-partner-server.vercel.app',
     withCredentials: true
})
const useAxiosSecure = () => {
    return  axiosSecure

};

export default useAxiosSecure;

 