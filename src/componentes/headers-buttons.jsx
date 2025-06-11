import { Outlet , Link} from "react-router-dom"
const Header_buttons = ()=>{
      return <div className="buttons">
        <Link to={"/"}>Home</Link>   
        </div>
}
export default Header_buttons
/*         <Link to={"/login"}>Login</Link>
        <Link to={"/sing-up"}>Sing up</Link> */