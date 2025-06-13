import { useContext } from "react";
import { AuthContext } from "../AuthContext"; // ✅ Importando el contexto
import { Outlet , Link} from "react-router-dom"
const Login_buttons = () => {
  const { isLoggedIn } = useContext(AuthContext); // ✅ Accediendo al estado global

  return (
    <>
      {!isLoggedIn && ( // ✅ Mostrar solo si el usuario NO ha iniciado sesión
        <div className="buttons-login">
          <Link to={"/login"}>Login</Link>
          <Link to={"/sing-up"}>Sign up</Link>
        </div>
      )}
    </>
  );
};

export default Login_buttons;
