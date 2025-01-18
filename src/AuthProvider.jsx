import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

const [user, setUser] =useState(null);
const [loading, setLoading] = useState(true)


const createUser = (email, password) => {
    createUserWith
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