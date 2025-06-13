import Agregar_carrito from "./agregar-vuelo"
import { useEffect,useState } from "react"
const Micros = ()=>{

const colores = [
  "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3", "#33FFF3",
  "#A833FF", "#FF8F33", "#33FFA8", "#A8FF33", "#FF338F", "#33A8FF",
  "#FFD700", "#8B0000", "#008B8B", "#7CFC00", "#FF4500", "#9400D3",
  "#1E90FF", "#DC143C", "#00FF7F", "#FF1493"
];


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

const vuelosFiltrados = data.filter(vuelo => vuelo[0].Transporte=="Bus");
console.log(vuelosFiltrados)
  return (
        
        <div className="divConNombre">
    <h2>Vuelos desde Argentina</h2>
        <div className="container-div">
    {vuelosFiltrados.map( (vuelo, index) => (
        <a href="" key={index}>
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