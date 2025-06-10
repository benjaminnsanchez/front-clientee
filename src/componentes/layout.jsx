import { Outlet , Link} from "react-router-dom"
const Layout = () =>{
    return <div>
    <Link to={"/login"}>Login</Link>
    
    <Outlet />
    </div>
}
export default Layout