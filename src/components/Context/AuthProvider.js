/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from 'antd';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
        if (user) {
            const { displayName, email, uid, photoURL } = user;
            setUser({
                displayName, email, uid, photoURL
            });
            setIsLoading(false);
            navigate('/');
        }

        navigate('/login');
    });

    return () => {
        unsubscibed();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
        {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
