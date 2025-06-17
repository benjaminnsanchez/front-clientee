import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet , Link} from "react-router-dom"
const SingUp = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dict, setDict] = useState(null);
  const navigate = useNavigate();
  
  // Manejo del formulario
  const handleLogin = (event) => {
    event.preventDefault();
    
    const diccionario = {
      nombre:nombre,
      apellido:apellido,
      contraseña: password,
      correo_electronico: mail,
    };
    
    setDict(diccionario);
    navigate("/login")
  };

  // Enviar datos cuando dict cambie
  useEffect(() => {
    fetch("https://backend-carrito-filb.vercel.app/clientes/ingresar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dict),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Server error: ${res.status} ${errorText}`);
        }
        return res.json();
      })
      .then((res) => console.log("Cliente registrado:", res))
      .catch(console.error);
  }, [dict]);

  return (
    <>
    <img className="imagen" src="https://i.ibb.co/tPbRPJyL/sky-8763986-1280.jpg" alt="imagen-del-amazonas" />
   <div className="login">
    <h1 className="cont-input-title">Sing up</h1>
    <form id="formularioIngresarCliente" onSubmit={handleLogin}>
       <p className="label">Nombre:</p>
      <input required className="input" type="text" name="nombre" placeholder="Ingrese tu nombre:"  onChange={(event) => setNombre(event.target.value)} /><br />
       <p className="label">Apellido:</p>
      <input required className="input" type="text" name="apellido" placeholder="Ingrese tu apellido:" onChange={(event) => setApellido(event.target.value)} /><br />
       <p className="label">Password:</p>
      <input required className="input" type="password" name="contraseña"placeholder="Ingrese la contraseña de tu usuario:" onChange={(event) => setPassword(event.target.value)} /><br />
       <p className="label">Mail:</p>
      <input required className="input" type="email" name="correo_electronico" placeholder="Ingrese el mail de tu usuario:" onChange={(event) => setMail(event.target.value)} /><br />
      <p className="linkkk">¿Ya tenes una cuenta? <Link to={"/login"} >Logeate!</Link></p>
      <button type="submit">Enviar</button>
    </form>
   </div>

  </> );
};

export default SingUp;
