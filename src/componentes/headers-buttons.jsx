import { Outlet , Link} from "react-router-dom"
const Header_buttons = ()=>{
      return <div className="buttons">
        <Link to={"/"}>Home</Link>   
        <Link to={"/paquetes"}>Paquetes</Link>   
        <Link to={"/vuelos"}>Vuelos</Link>   
        <Link to={"/micros"}>Micros</Link>   
        </div>
}
export default Header_buttons
/*         <Link to={"/login"}>Login</Link>
        <Link to={"/sing-up"}>Sing up</Link> */