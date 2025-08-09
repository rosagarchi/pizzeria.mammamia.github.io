import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function Profile() {

  const { user, logout } =  useContext(UserContext);
  return (
    <div className="contenedorProfile">
        <div>{user.email}</div>
        <div><button onClick={logout}>Cerrar sesion</button></div>
    </div>
  );
}
