import Agregar_carrito from "./agregar-vuelo"
import { useEffect,useState } from "react"
const Micros = ()=>{

const colores = [
"#2d87f9","#392df9","#0b223e","#0b223e","#1c549c","#11335d","#2265bb","#162b86","#082532","#0e3e54"];


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
    if(data){
console.log(data)
const vuelosFiltrados = data.filter(vuelo => vuelo[0].Transporte=="Bus");
console.log(vuelosFiltrados)
  return (
        
        <div className="divConNombre">
    <h2 className="text_vuelos"> Viajes en Micro</h2>
        <div className="container-div">
    {vuelosFiltrados.map( (vuelo, index) => (
        <a key={index}>
          <div 
            className="vuelo" 
            style={{ backgroundColor: colores[Math.floor(Math.random() * colores.length)] }}
          >
            <h1>{vuelo[0].Destino}</h1>
            <p>{"$" + vuelo[0].Precio}</p>
            <p>{vuelo[0].Descripcion}</p>
          </div>
        </a>
      ))}
        </div>
</div>
    )
    }
       
return <>

</>
}
export default Micros