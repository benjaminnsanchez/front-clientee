import Login_buttons from "./buttons_login"
import { useNavigate } from "react-router-dom";
import { Outlet , Link,useLocation} from "react-router-dom"
import Carrito from "./carrito";
  import { AuthContext } from "../AuthContext";
  import { useContext } from 'react'
const Inside = ()=>{
       const navigate = useNavigate();
 const location = useLocation(); 
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); 
    navigate("/login"); //  Redirige al login
  };
     
return <>

     <div className='inside-image'>
      
<Login_buttons />
        {isLoggedIn && (
          <div className="user-actions">
            <a onClick={handleLogout} href="#">Log out</a>
          </div>
        )}
<div className="icn">
<Link to={"/carrito"}><i className="fa-solid fa-cart-shopping" ></i></Link>

</div>
 <p className="welcome-message">¡Bienvenido a Horizon Air!</p>
 <p className="welcome-eslogan">"Tu próximo destino comienza en Horizon Air"</p>
      {location.pathname == "/carrito" &&  (
           <Carrito/>
        )}
        


</div>
    </>
}
export default Inside
