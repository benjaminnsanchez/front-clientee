import { useState } from "react"
import { data } from "react-router-dom"
const SingUp = ()=>{
 
    return <>
    <div className="Sing-up">
     <h1 className="cont-input-title">Sing up</h1>
     <form >
      <p className="label">Mail</p>
      <input className="input" required type="text" name="user" placeholder='Ingrese tu usuario' onChange={(event)=>setUser(event.target.value)} /> <br></br>
       <p className="label">Contraseña</p>
      <input className="input" required type="password" name="password" placeholder='Ingrese la contraseña de tu usuario' onChange={(event)=>setPassword(event.target.value)}/><br></br>
       <p className="label">Nombre</p>
      <input className="input" required type="text" name="text" placeholder='Ingrese tu nombre' onChange={(event)=>setName(event.target.value)}/><br></br>
       <p className="label">Apellido</p>
      <input className="input" required type="text" name="text" placeholder='Ingrese tu apellido' onChange={(event)=>setSurname(event.target.value)}/><br></br>
      <button type="submit">ingresar</button>
     </form>
    </div>
    </>
}
export default  SingUp