import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function NavBar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <nav>
        <h1>Autenticacion</h1>
        {authReady && (
          <ul>
            <li>
              <a>Ingresar</a>
            </li>
            {!user && <li onClick={login}>Login/Signup</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout}>Logout</li>}
          </ul>
        )}
      </nav>
    </div>
  );
}
