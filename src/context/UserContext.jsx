import { useContext, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const urlApi = "http://localhost:5000/api/auth/me";

export function UserProvider({ children }) {

   const [token, setToken] = useState(false);
   const [login, setLogin] = useState(false);
   const [user, setUser] = useState(null);

   const logout = () => {
    setToken(false);
    setUser(null);
   }

   const userInfo = () => {
    if (token) {
    fetch(urlApi, { headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token,
    }}).then((data) => {
        return data.json();
      }).then((userInfo) => {
        setUser(userInfo);
      })
    }
   }

   useEffect(() => {
    userInfo();
    if (token) {
        setLogin(true);
    } else {
        setLogin(false)
    }
   },[token]);

  return (
    <UserContext.Provider value={{ token, logout, setToken, user, login }}>
      {children}
    </UserContext.Provider>
  );
}
