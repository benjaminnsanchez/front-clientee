import { Outlet , Link} from "react-router-dom"
const Login_buttons = ()=>{
      return <div className="buttons-login">
        <Link to={"/login"}>Login</Link>
        <Link to={"/sing-up"}>SingUp</Link> 
        </div>
}
export default Login_buttons