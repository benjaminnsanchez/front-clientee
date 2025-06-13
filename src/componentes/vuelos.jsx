import Agregar_carrito from "./agregar-vuelo"
import { useEffect,useState } from "react"
const Vuelos = ()=>{
const colores = [
  "#FF5733", // Rojo anaranjado intenso
  "#FF8C00", // Naranja fuerte
  "#FFD700", // Amarillo dorado
  "#008000", // Verde oscuro
  "#0096FF", // Azul brillante
  "#4B0082", // Índigo profundo
  "#8A2BE2", // Violeta vibrante
  "#FF1493", // Rosa oscuro
  "#00CED1", // Turquesa intenso
  "#2ECC71", // Verde esmeralda
  "#DC143C", // Carmesí
  "#1E90FF", // Azul brillante
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
    if(data) return (
        <div className="divConNombre">
    <h2>Vuelos desde Argentina</h2>
        <div className="container-div">
            <a href=""><div className="vuelo" style={{backgroundColor: colores[Math.floor(Math.random() * 12) + 0]}}>
                <h1>{data[0][0].Destino}</h1>
                <p>{"$"+data[0][0].Precio}</p>
                <p>{data[0][0].Descripcion}</p>
            </div>
            </a>
            <a href=""><div className="vuelo"  style={{backgroundColor: colores[Math.floor(Math.random() * 12) + 0]}}>
                <h1>{data[2][0].Destino}</h1>
                <p>{"$"+data[2][0].Precio}</p>
                <p>{data[2][0].Descripcion}</p>
            </div>
            </a>
            <a href=""><div className="vuelo " style={{backgroundColor: colores[Math.floor(Math.random() * 12) + 0]}}>
                <h1>{data[3][0].Destino}</h1>
                <p>{"$"+data[3][0].Precio}</p>
                <p>{data[3][0].Descripcion}</p>
            </div>
            </a>
            <a href=""><div className="vuelo" style={{backgroundColor: colores[Math.floor(Math.random() * 12) + 0]}}>
                <h1>{data[4][0].Destino}</h1>
                <p>{"$"+data[4][0].Precio}</p>
                <p>{data[4][0].Descripcion}</p>
            </div>
            </a>
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
        </div>
</div>
    )
return <>

</>
}
export default Vuelos