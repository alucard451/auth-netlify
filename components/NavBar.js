import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function NavBar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <nav>
        <h1>Autenticacion</h1>
        <ul>
          <li>
            <a>Ingresar</a>
          </li>
          <li onClick={login}>Login/Signup</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </div>
  );
}
