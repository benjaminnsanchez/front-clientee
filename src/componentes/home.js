import { Outlet , Link} from "react-router-dom"
const Home = () =>{
    return <div>
    <Link to={"/Login"}>Login</Link>
    <Outlet />
    </div>
}
export default Home