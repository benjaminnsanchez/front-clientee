import { Routes, Route, useLocation } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
import Layout from './componentes/layout'
import Header_buttons from './componentes/headers-buttons'
import SingUp from './componentes/sing-up'
import Vuelos from './componentes/vuelos'
import Inside from './componentes/inside-image'
import Carrito from './componentes/carrito'
   const url ="https://backend-carrito-wa2f.onrender.com/obtener"
  import { AuthContext } from './AuthContext'
  import { useContext } from 'react'
import CustomAlert from './componentes/alerta'
/*     fetch(url)
    .then(data => data.json())
    .then(data=>console.log(data)) */
function App_header() {
  const location = useLocation(); 
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // ✅ Limpia el estado de sesión
    navigate("/login"); // ✅ Redirige al login
  };
  return (
    <>
      <header className='header'>
        <h1>Horizon Air</h1>
        <Header_buttons />
       
      </header>
      <main className="main-cont">

        {location.pathname !== "/login" && location.pathname !== "/sing-up" && (
           <Inside></Inside>

        )}

        { isLoggedIn &&  (
           <CustomAlert/>
        )}
                     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sing-up" element={<SingUp />} />
            <Route path="vuelos" element={<Vuelos />}/>
            <Route path="carrito" element={<Home />}/>
            
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App_header;
