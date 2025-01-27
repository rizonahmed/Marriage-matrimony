import { createContext, useEffect, useState } from "react";
import { auth, } from "./firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import useAxiosSecure from "./Hooks/useAxiosSecure";
import useAxiosPublic from "./Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
     const axiosSecure = useAxiosSecure()
     const axiosPublic = useAxiosPublic()

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }



    
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)
          setLoading(false)

           if(currentUser){
            const createToken = async () => {
                const userInfo = {email:currentUser?.email}
                
                try{
                    const res = await axiosSecure.post('/jwt', userInfo)
                    const data = await res.data
                 
                }

                catch(error){
                }
            }

            createToken()
           }
           else{
            const removeToken = async () => {

                    try{
                        const res = await axiosPublic.post('/logout')
                        const data = await res.data
                    }
                    catch(error){
                    }
            }
            removeToken()
           }


        })
  
        return () => {
          unSubscribe();
        }
  
      } ,[])



    const info = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;