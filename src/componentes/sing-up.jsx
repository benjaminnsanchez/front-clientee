import { useState } from "react"
import { data } from "react-router-dom"
const SingUp = ()=>{

    return <>
    <div className="Sing-up">
     <h1>Sing up</h1>
     <form >
      <input required type="text" name="user" placeholder='Ingrese tu usuario' onChange={(event)=>setUser(event.target.value)} /> <br></br>
      <input required type="password" name="password" placeholder='Ingrese la contraseña de tu usuario' onChange={(event)=>setPassword(event.target.value)}/><br></br>
      <input required type="password" name="text" placeholder='Ingrese tu nombre' onChange={(event)=>setName(event.target.value)}/><br></br>
       <input required type="password" name="text" placeholder='Ingrese tu apellido' onChange={(event)=>setSurname(event.target.value)}/><br></br>
      <button type="submit">ingresar</button>
     </form>
    </div>
    </>
}
export default  SingUp