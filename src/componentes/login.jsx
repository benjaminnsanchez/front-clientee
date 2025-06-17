import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { mail_guardado,setMail_guardado} = useContext(AuthContext);
  const url = "https://backend-carrito-alpha.vercel.app/clientes/obtener";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "true") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      setData(data)
      traerLogin(data);
      
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };
const traerLogin = (data) => {
   const usuarios = data.flat();
  const encontrado = usuarios.find((usuario) => {
    return user === usuario.Email && password === usuario.Contraseña;
  });

  if (encontrado) {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setMail_guardado(encontrado.Email);
  localStorage.setItem("mail_guardado", JSON.stringify(encontrado.Email));
    
  } else {
    console.log("Datos incorrectos");
  }
};


  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("mail_guardado");
setMail_guardado(null);
 
    navigate("/login"); 
  };

  return (
    <>
      <img className="imagen" src="https://i.ibb.co/Y7yDrqpx/imagen-del-amazonas.jpg" alt="imagen-del-amazonas" />
      <div className="login">
        <h1 className="cont-input-title">Log in</h1>
        <form onSubmit={handleLogin}>
          <p className="label">Mail</p>
          <input required type="email" name="correo_electronico" className="input" placeholder="Ingrese tu mail:"onChange={(event) => setUser(event.target.value)}/><br></br>
          <p className="label">Contraseña:</p>
          <input required type="password" name="contraseña" className="input" placeholder="Ingrese la contraseña de tu usuario:" onChange={(event) => setPassword(event.target.value)}/><br></br>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
