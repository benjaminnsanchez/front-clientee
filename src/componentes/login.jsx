import { useState } from "react"
const [user,setUser] = useState("")
const [password,setPassword] = useState("")
contra = "1234"
usuario = "pepe"
const handleLogin = (event)=>{
  event.preventDefault()
 
  if(user==usuario && password==contra){
 console.log("increíble react")
  }
}
const Login = ()=>{
    return <>
     <h1>loginn</h1>
     <form onSubmit={handleLogin}>
      <input required type="text" name="user" placeholder='Ingrese tu usuario' onChange={(event)=>setUser(event.target.value)} /> <br></br>
      <input required type="password" name="password" placeholder='Ingrese la contraseña de tu usuario' onChange={(event)=>setPassword(event.target.value)}/><br></br>
      <button></button>
     </form>
    </>
}
export default Login