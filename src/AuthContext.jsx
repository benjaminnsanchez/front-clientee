// AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listaCarrito, setListaCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });
  const [mail_guardado,setMail_guardado]= useState(()=>{
    const mail = localStorage.getItem("mail_guardado");
    return mail ? JSON.parse(mail):null;
  })
    localStorage.getItem("mail_guardado");
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, listaCarrito, setListaCarrito,mail_guardado,setMail_guardado }}>
      {children}
    </AuthContext.Provider>
  );
};
