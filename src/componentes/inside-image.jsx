import Login_buttons from "./buttons_login"
import { Outlet , Link,useLocation} from "react-router-dom"
import Carrito from "./carrito";
const Inside = ()=>{
      const location = useLocation(); 
return <>
     <div className='inside-image'>
<Login_buttons />
<div className="icn">
<Link to={"/carrito"}><i className="fa-solid fa-cart-shopping" ></i></Link>

</div>

      {location.pathname == "/carrito" &&  (
           <Carrito/>
        )}


</div>
    </>
}
export default Inside
