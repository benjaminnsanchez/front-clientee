import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
import Layout from './componentes/layout'
import Header_buttons from './componentes/headers-buttons'
import SingUp from './componentes/sing-up'
function App_header() {
  return (
    <>
    <header className='header'>
      <h1>Horizon Air</h1>
      <Header_buttons></Header_buttons>
    </header>
      <main className="main-cont">
        <div className='main-cont-login-page'>
         <img className='imagen' src="https://i.ibb.co/Y7yDrqpx/imagen-del-amazonas.jpg" alt="imagen-del-amazonas" border="0" />
        <div className='main-cont-login-input'>
        <Routes >
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="sing-up" element={<SingUp />} />
            </Route>
        </Routes>
        <Routes >
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="sing-up" element={<SingUp />} />
            </Route>
        </Routes>
        </div>

        </div>

      </main>

    </>
  )
}

export default App_header
