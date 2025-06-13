import React, { useEffect, useState } from "react";

const SingUp = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dict, setDict] = useState(null);

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
    <form id="formularioIngresarCliente" onSubmit={handleLogin}>
      <input type="text" name="nombre" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)} /><br />
      <input type="text" name="apellido" placeholder="Apellido" onChange={(event) => setApellido(event.target.value)} /><br />
      <input type="password" name="contraseña" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} /><br />
      <input type="email" name="correo_electronico" placeholder="Correo Electrónico" onChange={(event) => setMail(event.target.value)} /><br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SingUp;
