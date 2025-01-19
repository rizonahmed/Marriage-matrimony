import { createContext, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

const [user, setUser] =useState(null);
// const [loading, setLoading] = useState(true)


const createUser = (email, password) => {
    setLoading(true)
    return  (auth, email, password)
}


const info = {

}

    return (
        <AuthContext.Provider  value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;