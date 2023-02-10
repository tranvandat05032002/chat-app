import { Spin } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase/config";
export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
        setUser({
          displayName,
          photoURL,
          email,
          uid,
        });
        navigate("/");
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      navigate("/login");
    });
    return () => {
      unsubscribed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={user}>
      {isLoading ? <Spin></Spin> : children}
    </AuthContext.Provider>
  );
}
