import Login_buttons from "./buttons_login"
import Header_buttons from "./headers-buttons"
import { data, useNavigate } from "react-router-dom";

  import { AuthContext } from "../AuthContext";
  import { useContext,useState,useEffect } from 'react'
  const Inside = ()=>{
  const { mail_guardado,setMail_guardado} = useContext(AuthContext);
  const [precioTotal,setPrecioTotal] = useState(0)
  const { listaCarrito, setListaCarrito} = useContext(AuthContext);
  const [mostarPaginaCompra,setMostarPaginaCompra] = useState(false)
  const navigate = useNavigate();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [tieneCuotas, setTieneCoutas] = useState(false)
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const {datos,setDatos} =  useContext(AuthContext);
  const{dataPaquetes,setDataPaquetes}= useContext(AuthContext)
  const [filtroDestinoSect,setFiltroDestinoSect] = useState("")
  const [filtroPrecioSect,setFiltroPrecioSect] = useState("")
  const [animandoCierre, setAnimandoCierre] = useState(false); 
  const [metodoPago, setMetodoPago] = useState(null); 
  const{ autos,setAutos}= useContext(AuthContext);
  const {excursiones,setExcursiones} = useContext(AuthContext);
  const [cuotas, setCuotas] = useState(3);
  const {eleccionMoneda, setEleccionMoneda} =useContext(AuthContext);
  const {precio,setPrecio} =useContext(AuthContext)
  const urlDolar="https://dolarapi.com/v1/dolares/oficial"
  const [paquetesFiltrados,setPaquetesFiltrados] = useState([])
  const url = "https://backend-carrito-alpha.vercel.app/paqueteDeViajes/obtener";
    useEffect(() => {
  fetch(urlDolar)
  .then(data => data.json())
  .then(data=>setPrecio(data.compra))
  
    }, []);
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
const handlerFiltar = () => {
  let filtrado = [];

  if (filtroPrecioSect === "menos90mil") {
    filtrado = dataPaquetes?.filter(
      (filtro) => filtro[0].Tipo_de_viaje === filtroDestinoSect && filtro[0].Precio < 90000
    ) || [];
  } else if (filtroPrecioSect === "mas90mil") {
    filtrado = dataPaquetes?.filter(
      (filtro) =>
        filtro[0].Tipo_de_viaje === filtroDestinoSect &&
        filtro[0].Precio >= 90000 &&
        filtro[0].Precio <= 180000
    ) || [];
  } else if (filtroPrecioSect === "mas180mil") {
    filtrado = dataPaquetes?.filter(
      (filtro) => filtro[0].Tipo_de_viaje === filtroDestinoSect && filtro[0].Precio > 180000
    ) || [];
  }

  
  setPaquetesFiltrados(filtrado);
};

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const json = await response.json();
        setDataPaquetes(json)

      } catch (error) {
        console.error("Error al cargar los datos:", error);
       
      }
    };

    fetchData();
  }, []);
 
return <>
     
  {/* CONTENEDOR DEL CONTENIDO DENTRO DE LA IMAGEN */}
<div className='inside-image'>
  <header className='header'>
    <div className="cont-header">
        
        <img className='header-h1' onClick={() => navigate("/")} src="https://ik.imagekit.io/dbqevvjt4/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(9).png?updatedAt=1751240829946"alt="" />
        <Header_buttons />
        {/* BOTÓN DE CARRITO */}
        <div className="icn">
          {eleccionMoneda ==="ARS" ?(
             <img className="img-pais" src="https://ik.imagekit.io/dbqevvjt4/mundo.png?updatedAt=1751251555960" alt="imagen redonda de Argentina papa" /> 
          ):(
            <img className="img-pais" src="https://ik.imagekit.io/dbqevvjt4/estados-unidos-de-america.png?updatedAt=1751251555949" alt="imagen redonda de EE.UU" /> 
          )

          }
             
        <select onChange={(e) => setEleccionMoneda(e.target.value)} >
        <option value="ARS">ARS$</option>
        <option value="USD">USD$</option>
       </select>
           {/* BOTONES PARA LOGEARSE */}
        <Login_buttons />
        {/* BOTÓN PARA DESLOGEARSE */}
        {isLoggedIn && (
          <div className="user-actions">
            <a className="link" onClick={handleLogout} href="#">Log out</a>
          </div>
        )}
        <a onClick={handleAbrirCarrito} className="link"><i className="fa-solid fa-cart-shopping" ></i></a>
        </div>
    </div>

  </header>

 {/* TITULO PRINCIPAL */}
    <p className="welcome-message">¡Bienvenido a Horizon Air!</p>
    <p className="welcome-eslogan">"Tu próximo destino comienza en Horizon Air"</p>
 {/* SELECCIÓN DE VUELOS POR FILTROS */}
 <div className="cont-filtros">
  <h1>Empezá a buscar tus vacaciones ideales</h1>

  {/* Seleccionar un destino para filtrar */}
  <div className="seleccionar-filtro">
<select  onChange={(e) => setFiltroDestinoSect(e.target.value)}>
  <option value={undefined}>Elige un destino</option>
<option value="Internacional">Internacional</option>
<option value="Nacional">Nacional</option>
</select>
 {/* Seleccionar un rango de precio para filtrar */}
<select onChange={(e) => setFiltroPrecioSect(e.target.value)}>
  <option value={undefined}>Elige un rango de precio</option>
  <option value={"menos90mil"}>Menos de $90.000</option>
  <option value={"mas90mil"}>Mas de $90.000</option>
  <option value={"mas180mil"}>Mas de $180.000</option>
</select>
<button onClick={handlerFiltar} className="butoon">Filtrar</button>
  </div>
 </div>
  {/* CARRITO */}
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
              
            {eleccionMoneda ==="ARS" ?(
            <p className="parrafo_carrito">${vuelo.Precio.toLocaleString()}ARS</p>
          ):(
            <p className="parrafo_carrito">${parseInt(vuelo.Precio/precio)}USD</p>
          )
          }
            
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
{/* PAGINA DE COMPRA, CUANDO CLIQUEAS COMPRAR EN EL CARRITO */}
{mostarPaginaCompra &&(
          <>
<div className="paginaCompra">
  <a onClick={handleCerrarComprar} ><h2 className="cerrarCompra">X</h2></a>
  <h1 className="titulo-compra">¡Termina tu compra!</h1>
  <div className="pagina-compra-cont">
        {listaCarrito.map((vuelo, index) => (
      <div className="vuelo-carrito" key={index}>
        <h2 className="titulo-carrito">{vuelo.Destino}</h2>
                                                     {eleccionMoneda ==="ARS" ?(
            <p className="parrafo_carrito">${vuelo.Precio.toLocaleString()}ARS</p>
          ):(
            <p className="parrafo_carrito">${parseInt(vuelo.Precio/precio).toLocaleString()}USD</p>
          )
          }
       
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
       <option value={undefined}>Selecciona un método de pago</option>
      <option value="Transferencia_bancaria">Transferencia bancaria</option>
      <option value="tarjeta_debito">Tarjeta de débito</option>
      <option value="tarjeta_credito">Tarjeta de crédito</option>
    
    </select>

  <h2>Total pagado: ${precioTotal}</h2>
    <button className="btn-vuelos" onClick={handleEnviarVenta}>Comprar</button>
</div>

          </>
        )}
</div>

    </>
}
export default Inside