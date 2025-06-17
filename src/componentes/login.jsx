import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";


const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { mail_guardado,setMail_guardado} = useContext(AuthContext);
  const url = "https://backend-carrito-alpha.vercel.app/clientes/validarContrasena";
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
 const [dict, setDict] = useState(null);
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

  const handleLogin = (event) => {
     
     event.preventDefault();
 
     console.log(mail_guardado)
    const dicc={
      usuarioIngresado:mail_guardado,
      contraseñaIngresada: password
    }
    setDict(dicc)
   
    fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dicc),
    })
    .then((data) => data.json())
    .then((data) =>
        {if(data) {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
setMail_guardado(mail_guardado);
  localStorage.setItem("mail_guardado", JSON.stringify(mail_guardado));
    
  } else {
    console.log("Datos incorrectos");
  }})

    
  };
const traerLogin = (data) => {



};


 

  return (
    <>

      <img className="imagen" src="https://i.ibb.co/tPbRPJyL/sky-8763986-1280.jpg" alt="imagen-del-amazonas" />
      <div className="login">
        <h1 className="cont-input-title">Log in</h1>
        <form onSubmit={handleLogin}>
          <p className="label">Mail</p>
          <input required type="email" name="correo_electronico" className="input" placeholder="Ingrese tu mail:"onChange={(event) =>  setMail_guardado(event.target.value)}/><br></br>
          <p className="label">Contraseña:</p>
          <input required type="password" name="contraseña" className="input" placeholder="Ingrese la contraseña de tu usuario:" onChange={(event) => setPassword(event.target.value)}/><br></br>
          <p className="linkkk">¿No tenes una cuenta? <Link to={"/sing-up"} >¡Regístrate!</Link></p>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
