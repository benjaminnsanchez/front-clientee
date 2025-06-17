import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Vuelos = () => {
  const colores = [
    "#2d87f9", "#392df9", "#0b223e", "#1c549c", "#11335d",
    "#2265bb", "#162b86", "#082532", "#0e3e54"
  ];

  const { listaCarrito, setListaCarrito } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const [visibleDiv, setVisibleDiv] = useState(false);
  const [data, setData] = useState(null);
  const [vueloSeleccionado, setVueloSeleccionado] = useState(null);

  const url = "https://backend-carrito-alpha.vercel.app/viajes/obtener";
  const handleAbrirDiv = () => {
    document.body.style.overflow = "hidden";
    setVisibleDiv(true);
    requestAnimationFrame(() => setMostrarDiv(true));
  };

  const handleCerrarDiv = () => {
    setMostrarDiv(false);
    document.body.style.overflow = "auto";
    setTimeout(() => setVisibleDiv(false), 300);
  };

  const handlerAgregar = () => {
    if (vueloSeleccionado) {

        setListaCarrito(prev => [...prev, vueloSeleccionado]);
      
      handleCerrarDiv();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const json = await response.json();

        const vuelosConColor = json.map((vuelo) => {
          const color = colores[Math.floor(Math.random() * colores.length)];
          return { ...vuelo, color };
        });

        setData(vuelosConColor);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
  }, [listaCarrito]);

  const vuelosFiltrados = data?.filter((vuelo) => vuelo.Transporte === "Avion") || [];

  return (
    <div className="divConNombre fade-in-viajes">
      {visibleDiv && vueloSeleccionado && (
        <>
          <div className="overlay fade-out" onClick={handleCerrarDiv}></div>
          <div className={`cont-compra ${mostrarDiv ? "fade-in" : "fade-out"}`}>
            <div className="descripcion">
              <div className="conjunto-raro">
                <p className="parrafo_compra">{vueloSeleccionado.Tipo_de_viaje}</p>
              </div>

              <div className="conjunto">
                <i className="fa-solid fa-chevron-up rari"></i>
                <h2 className="titulo-compra" style={{ color: vueloSeleccionado.color }}>
                  {vueloSeleccionado.Destino}
                </h2>
              </div>

              <p className="parrafo_compra">${vueloSeleccionado.Precio}</p>

              <div className="conjunto">
                <i className="fa-solid fa-location-dot icon"></i>
                <p className="parrafo_compra">Origen: {vueloSeleccionado.Origen}</p>
              </div>

              <div className="conjunto">
                <i className="fa-light fa-clock icon"></i>
                <p className="parrafo_compra">Duración: {vueloSeleccionado.Duracion}</p>
              </div>

              <div className="conjunto">
                <i className="fa-solid fa-calendar-days icon"></i>
                <p className="parrafo_compra">Fecha: {vueloSeleccionado.Fecha} - {vueloSeleccionado.Hora}</p>
              </div>

              <div className="conjunto">
                <i className="fa-solid fa-people-group icon"></i>
                <p className="parrafo_compra">Cupos disponibles: {vueloSeleccionado.Cupos}</p>
              </div>

              <div className="conjunto">
                <i className="fa-solid fa-plane-departure icon"></i>
                <p className="parrafo_compra">Transporte: {vueloSeleccionado.Transporte}</p>
              </div>

              <p className="parrafo_compra">{vueloSeleccionado.Descripcion}</p>

              <button onClick={handlerAgregar} className="boton-compra" style={{ color: vueloSeleccionado.color }}>
                <i className="fa-solid fa-cart-shopping"></i> Añadir al carrito
              </button>
            </div>
          </div>
        </>
      )}

      <h2 className="text_vuelos">Vuelos desde Argentina</h2>
      <div className="container-div">
        {vuelosFiltrados.map((vuelo, index) => (
          <a
            key={index}
            onClick={() => {
              setVueloSeleccionado(vuelo);
              handleAbrirDiv();
            }}
          >
            <div className="vuelo" style={{ backgroundColor: vuelo.color }}>
              <h1 className="titulo-compra">{vuelo.Destino}</h1>
              <p className="parrafo_compra">${vuelo.Precio}</p>
              <p className="parrafo_compra">{vuelo.Descripcion}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Vuelos;
