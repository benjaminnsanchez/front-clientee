 import { useState } from "react"
import { data } from "react-router-dom"

const Login = ()=>{
  const url = "https://dragonball-api.com/api/characters/1"

  const [user,setUser] = useState("") 
  const [password,setPassword] = useState("")
  const handleLogin = (event)=>{ 
    event.preventDefault() 
    fetch(url)
    .then(data => data.json())
    .then(data=>traerLogin(data) )
    function traerLogin(data){
    if(user===data.name && password===data.gender){
      console.log("iniciaste sesion")
 } } }
    return <>
    <div className="login">
     <h1 className="cont-input-title">Log in</h1>
     <form onSubmit={handleLogin}>
      <p className="label">Mail</p>
      <input required type="text" name="user" className="input" placeholder='Ingrese tu usuario' onChange={(event)=>setUser(event.target.value)} /> <br></br>
      <p className="label">Contraseña</p>
      <input required type="password" name="password"  className="input"placeholder='Ingrese la contraseña de tu usuario' onChange={(event)=>setPassword(event.target.value)}/><br></br>
      <button type="submit">ingresar</button>
     </form>
    </div>
    </>
}
export default Login