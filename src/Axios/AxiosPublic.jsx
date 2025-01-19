
import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;