import Login_buttons from "./buttons_login"
import vuelosFiltrados  from "./vuelos"
import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../AuthContext";
  import { useContext,useState,useEffect } from 'react'
const Inside = ()=>{
   const { mail_guardado,setMail_guardado} = useContext(AuthContext);
  let  [diccionarioo,setDiccionario] = useState(null)
  const [precioTotal,setPrecioTotal] = useState(0)
  const { listaCarrito, setListaCarrito} = useContext(AuthContext);
  const [mostarPaginaCompra,setMostarPaginaCompra] = useState(false)
  const navigate = useNavigate();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [tieneCuotas, setTieneCoutas] = useState(false)
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const [mostrarDiv,setMostrarDiv] = useState(false)
  const [animandoCierre, setAnimandoCierre] = useState(false); 
    const [metodoPago, setMetodoPago] = useState(null); 
    const{ autos,setAutos}= useContext(AuthContext);
const {excursiones,setExcursiones} = useContext(AuthContext);
const [cuotas, setCuotas] = useState(3);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("mail_guardado");
 setMail_guardado(null)
 
 
  
    navigate("/login"); 
  };
    const handleAbrirCarrito = () => {
  setAnimandoCierre(false)
   setMostrarCarrito(true)
  };
      const handleCerrarCarrito = () => {
        setAnimandoCierre(true)
   setTimeout(() => setMostrarCarrito(false), 300);
  };
     useEffect(() => {
  const total = listaCarrito.reduce((acc, vuelo) => acc + parseInt(vuelo.Precio), 0);
  setPrecioTotal(total);
}, [listaCarrito]);

const handleComprar = () =>{
   document.body.style.overflow = "hidden";
  setMostarPaginaCompra(true)
    setMostrarCarrito(false)
  
}
const handleCerrarComprar = ()=>{
   document.body.style.overflow = "auto";
  setMostarPaginaCompra(false)
}
const handleEnviarVenta = async (event) => {
  event.preventDefault();

  if (!metodoPago) {
    alert("Por favor seleccioná un método de pago antes de continuar.");
    return;
  }

  for (const element of listaCarrito) {
const diccionarioVenta = {
  data: {
    medio_de_pago: metodoPago,
    cuotas: tieneCuotas,
    cantidad: cuotas,
    codigo_vs: element.Codigo,
    codigo_pv: null,
    precio: element.Precio
  },
  correo_electronico: mail_guardado
};

    try {
      const res = await fetch("https://backend-carrito-alpha.vercel.app/ventas/ingresar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(diccionarioVenta),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log("Venta registrada:", data);
      
    } catch (error) {
      console.error("Error al registrar venta:", error.message);
    }
        try {
      const res_mai = await fetch("https://backend-carrito-alpha.vercel.app/ventas/confirmarMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(diccionarioVenta),
      });
      const data = await res_mai.json();
      console.log("Se envio mail:", data);
      
    } catch (error) {
      console.error("Error al enviar mail:", error.message);
    }
  }

  alert("¡Compra finalizada con éxito!");
  setListaCarrito([]);
  setMostarPaginaCompra(false);
  document.body.style.overflow = "auto";
};
return <>
       {mostarPaginaCompra &&(
          <>
<div className="paginaCompra">
  <a onClick={handleCerrarComprar} ><h2 className="cerrarCompra">X</h2></a>
  <h1 className="titulo-compra">¡Termina tu compra!</h1>
  <div className="carrito-cont">
    {listaCarrito.map((vuelo, index) => (
      <div className="vuelo-carrito" key={index}>
        <h2 className="titulo-carrito">{vuelo.Destino}</h2>
        <p className="parrafo_carrito">${vuelo.Precio}</p>
        <p className="parrafo_carrito">{vuelo.Descripcion}</p>
      </div>
    ))}
  </div>
    <label className="cont-compra-label">
      ¿Deseás realizar el pago en cuotas?
      <input
        type="checkbox"
        checked={tieneCuotas}
        onChange={(e) => setTieneCoutas(e.target.checked)}
      />
    </label>
    {tieneCuotas && (
  <>
    <label className="cont-compra-label" htmlFor="cuotas">Selecciona la cantidad de cuotas:</label>
    <select id="cuotas" value={cuotas} onChange={(e) => setCuotas(Number(e.target.value))}>
      <option value={3}>3 cuotas</option>
      <option value={6}>6 cuotas</option>
      <option value={9}>9 cuotas</option>
      <option value={12}>12 cuotas</option>
    </select>
  </>
)}<label className="cont-compra-label" htmlFor="m_pago">Método de pago</label>
    <select id="m_pagos"  onChange={(e) => setMetodoPago(e.target.value)}>
       <option value={undefined}>--Selecciona un método de pago--</option>
      <option value="Transferencia_bancaria">Transferencia bancaria</option>
      <option value="tarjeta_debito">Tarjeta de débito</option>
      <option value="tarjeta_credito">Tarjeta de crédito</option>
    
    </select>

  <h2>Total pagado: ${precioTotal}</h2>
    <button className="btn-vuelos" onClick={handleEnviarVenta}>Comprar</button>
</div>

          </>
        )}
     <div className='inside-image'>
      
<Login_buttons />
        {isLoggedIn && (
          <div className="user-actions">
            <a className="link" onClick={handleLogout} href="#">Log out</a>
          </div>
        )}
<div className="icn">
<a onClick={handleAbrirCarrito} className="link"><i className="fa-solid fa-cart-shopping" ></i></a>

</div>
 <p className="welcome-message">¡Bienvenido a Horizon Air!</p>
 <p className="welcome-eslogan">"Tu próximo destino comienza en Horizon Air"</p>
         {mostrarCarrito && (
  <div className={`carrito ${animandoCierre ? "fade-out" : "fade-in"}`}>
        <div className="encabezado_carrito">
            <a onClick={handleCerrarCarrito} ><h2 className="cerrar">X</h2></a>
            <h1 className="titulo_carrito">Tu carrito</h1>       
        </div>
        <div className="carrito-cont">
           { listaCarrito.map((vuelo, index) => (
           
            <div className="vuelo-carrito"key={index}>
              <h1 className="titulo-carrito">{vuelo.Destino}</h1>
              <p className="parrafo_carrito">${vuelo.Precio}</p>
              <p className="parrafo_carrito">{vuelo.Descripcion}</p>
              <hr />     
            </div>            
           ))}
         {listaCarrito.length > 0 && (
  <div>
    <p className="tet">Total: ${precioTotal}</p>
    <button className="boton-compra" onClick={handleComprar}>ir a comprar</button>
    <button className="boton-compra" onClick={() => setListaCarrito([])}>
      Vaciar carrito
    </button>
  </div>
)}
    
        </div>
  </div>
      )}
</div>
    </>
}
export default Inside
