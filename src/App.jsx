import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
import Layout from './componentes/layout'
import Header from './componentes/header'
import SingUp from './componentes/sing-up'
function App_header() {
  return (
    <>
    <header className='header'>
      <h1>Horizon Air</h1>
      <Header></Header>
    </header>
      <main className="main-cont">
      <Routes >
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sing-up" element={<SingUp />} />
          </Route>
      </Routes>
      </main>

    </>
  )
}

export default App_header
