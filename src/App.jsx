import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
import Layout from './componentes/layout'
function App() {
  return (
    <>
    <div>
      <h1>ruta</h1>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
