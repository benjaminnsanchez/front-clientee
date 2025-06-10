import { Routes, Route } from 'react-router-dom' 
import './App.css'
import Home from './componentes/home'
import Login from './componentes/login'
function App() {
  return (
    <>
    <div>
      <h1>ruta</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}>
           <Route path='Login' element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
