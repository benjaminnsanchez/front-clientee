import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // ✅ Importando el contexto

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // ✅ Accediendo al contexto
  const url = "https://dragonball-api.com/api/characters/1";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      
      const data = await response.json();
      traerLogin(data);
      
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  const traerLogin = (data) => {
    if (user === data.name && password === data.gender) {
      setIsLoggedIn(true); // ✅ Guarda el estado global
      navigate("/");
    } else {
      console.log("Datos incorrectos");
    }
  };

  return (
    <>
      <img className="imagen" src="https://i.ibb.co/Y7yDrqpx/imagen-del-amazonas.jpg" alt="imagen-del-amazonas" />
      <div className="login">
        <h1 className="cont-input-title">Log in</h1>
        <form onSubmit={handleLogin}>
          <p className="label">Mail</p>
          <input
            required
            type="text"
            name="user"
            className="input"
            placeholder="Ingrese tu usuario"
            onChange={(event) => setUser(event.target.value)}
          />
          <p className="label">Contraseña</p>
          <input
            required
            type="password"
            name="password"
            className="input"
            placeholder="Ingrese la contraseña de tu usuario"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
