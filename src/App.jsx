import { Routes, Route, useLocation,useNavigate,Link } from 'react-router-dom' 
import './App.css'

import Login from './componentes/login'
import Layout from './componentes/layout'

import SingUp from './componentes/sing-up'
import Vuelos from './componentes/vuelos'
import Inside from './componentes/inside-image'
import Micros from './componentes/micros'
const url ="https://backend-carrito-alpha.vercel.app/viajes/obtener"
import { AuthContext } from './AuthContext'
import { useContext,useEffect } from 'react'
import CustomAlert from './componentes/alerta'
import Paquetes from './componentes/paquetes'
function App_header() {
  const navigate = useNavigate();
const {precio} =useContext(AuthContext)
 const {data, setData} =  useContext(AuthContext);
  const location = useLocation(); 
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const {eleccionMoneda, setEleccionMoneda} =useContext(AuthContext);
  useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(json => setData(json));
}, []);
  return (
    <>

  <main className="main-cont">
  {location.pathname !== "/login" && location.pathname !== "/sing-up" && (
    <>

      <Inside />

      <div className="bienvenida">
        
        <h2>¡Bienvenido a Horizon Air!</h2>
        <p>Descubrí ofertas imperdibles y organizá tu próxima aventura con nosotros.</p>
        <button onClick={() => navigate("/vuelos")} className="btn-vuelos">
          Explorar Vuelos
        </button>
      </div>

      {isLoggedIn && <CustomAlert />}

      <div className="destinos-container">
        <h2 className="titulo-destino"> Destinos Populares</h2>
        <div className="tarjetas-destinos">
          {data?.length > 0 &&
            data.slice(0, 6).map((destino, i) => (
              <div key={i} className="tarjeta-destino">
                <h3>{destino.Destino}</h3>
                                              {eleccionMoneda ==="ARS" ?(
            <p className="parrafo_compra">Desde ${destino.Precio.toLocaleString()}ARS</p>
          ):(
            <p className="parrafo_compra">${parseInt(destino.Precio/precio).toLocaleString()}USD</p>
          )
          }
                
              </div>
            ))}
        </div>
      </div>
            
      <div className="tips-viaje">
        <h2>Tips para viajar más barato</h2>
        <ul>
          <li> Buscá con anticipación para encontrar mejores tarifas.</li>
          <li>Sé flexible con tus fechas de viaje.</li>
          <li> Viajá liviano para evitar cargos por equipaje.</li>
        </ul>
      </div>
    </>
  )}

  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="sing-up" element={<SingUp />} />
      <Route path="vuelos" element={<Vuelos />} />
      <Route path="micros" element={<Micros />} />
      <Route path="paquetes" element={<Paquetes />} />
    </Route>
  </Routes>
</main>

      <footer className="footer">
  <div className="footer-content">
    <div>
      <h3>Horizon Air</h3>
      <p>Tu próxima aventura comienza acá </p>
    </div>
    <div>
      <h4>Enlaces</h4>
      <ul>
        <li><Link to={"/vuelos"}>Vuelos</Link></li>
        <li><Link to={"/paquetes"}>Paquetes</Link></li>
        <li><Link to={"/micros"}>Micros</Link></li>
        <li><Link to={"/login"}>Log in</Link></li>
      </ul>
    </div>
    <div>
      <h4>Contacto</h4>
      <p> pruebaOlimpiadas@gmail.com</p>
      <p> Buenos Aires, Argentina</p>
    </div>
  </div>
  <p className="footer-copy">© {new Date().getFullYear()} Horizon Air. Todos los derechos reservados.</p>
</footer>

    </>
  );
}

export default App_header;