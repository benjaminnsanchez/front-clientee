import { Outlet , Link} from "react-router-dom"
const Header = ()=>{
      return <div className="buttons">
        <Link to={"/"}>Home</Link>   
        <Link to={"/login"}>Login</Link>
        <Link to={"/sing-up"}>Sing up</Link>
        </div>
}
export default Header