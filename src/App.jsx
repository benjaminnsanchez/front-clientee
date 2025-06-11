import { Routes, Route, useLocation } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
import Layout from './componentes/layout'
import Header_buttons from './componentes/headers-buttons'
import SingUp from './componentes/sing-up'
import Login_buttons from './componentes/buttons_login'
import Main_content from './componentes/main-content'

function App_header() {
  const location = useLocation(); 

  return (
    <>
      <header className='header'>
        <h1>Horizon Air</h1>
        <Header_buttons />
        <Login_buttons />
      </header>

      <main className="main-cont">
        
        {location.pathname !== "/login" && location.pathname !== "/sing-up" && (
          <img className='imagen2' src="https://i.ibb.co/Y7yDrqpx/imagen-del-amazonas.jpg" alt="imagen-del-amazonas" border="0" />
        )}
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sing-up" element={<SingUp />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App_header;
