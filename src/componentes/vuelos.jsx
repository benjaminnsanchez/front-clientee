import Agregar_carrito from "./agregar-vuelo"
import { useEffect,useState } from "react"
const Vuelos = ()=>{
        const [loading,setLoading] = useState(true)
const [data, setData]= useState(null)
const url ="https://backend-carrito-filb.vercel.app/viajes/obtener"
useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
            const json = await response.json();
            setData(json);
        }catch(error){
            console.log(error);
        }
        

    }
    fetchData();
},[])
if(loading) console.log("cargando");
if(!data) console.log("no hay datos")
    if(data) return (
        <div>
    <h2>Vuelos desde Argentina</h2>
                  <div>
            
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
</div>
    )
return <>

</>
}
export default Vuelos