import Agregar_carrito from "./agregar-vuelo"
import { useEffect,useState } from "react"
const Carrito = ()=>{

/* useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data=>setData(data))

},[]) */

    
return <>

     <div className="carrito">
        <div className="encabezado_carrito">
<h1>Tu carrito</h1>

        </div>

        <div className="carrito-cont">
{}
        </div>
        
      
</div>

    </>
}
export default Carrito
/*             {data?.map(elemento=>{
            {elemento?.map(item=>{
                return( <>
                <p>{item.Destino}</p>
                </>)
                  
            })}
            })} */