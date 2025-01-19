import { createContext, useEffect, useState } from "react";
import { auth, } from "./firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

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



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            // if (currentUser?.email) {
            //     const userInfo = { email: currentUser.email };

            //     try {
            //         const fetchData = async () => {
            //             const res = await axios.post(
            //                 ' http://localhost:5000/create-token',
            //                 userInfo,
            //                 { withCredentials: true }
            //             );
            //             const data = await res.data;
            //             setLoading(false);
            //         };
            //         fetchData();
            //     } catch (err) {
            //         toast.error(err.message);
            //     }
            // } else {
            //     try {
            //         const fetchData = async () => {
            //             const res = await axios.post(
            //                 ' http://localhost:5000/logout',
            //                 {},
            //                 { withCredentials: true }
            //             );
            //             const data = await res.data;

            //             if (data.success) {
            //                 setUser(null);
            //                 setLoading(false);
            //             } else {
            //                 toast.error('Failed to log out');
            //             }
            //         };
            //         fetchData();
            //     } catch (err) {
            //         toast.error(err.message);
            //     }
            // }
        });

        return () => {
            unSubscribe();
        };
    }, []);




    const info = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;