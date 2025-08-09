import { useContext, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

   const [token, setToken] = useState(true);

   const logout = () => {
    setToken(false);
   }

   console.log(token);

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
}
