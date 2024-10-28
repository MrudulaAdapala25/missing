import "./Header.css";
import { Link } from "react-router-dom";





import { userLoginContext } from "../../contexts/userLoginContext";
import { useContext } from "react";

function Header() {
  let { logoutUser, userLoginStatus } = useContext(userLoginContext);

  return (
    <div className="d-flex flex-wrap justify-content-around header " >
      <h1>
        {}
        <h1 className="text-black text-left">
        
        Missing Person App
      </h1></h1>
      <ul className="nav fs-5 p-3">
        <li className="nav-item">
          <Link to="" className="nav-link text-black">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link text-black">
            
            Register
          </Link>
        </li>
        {userLoginStatus === false ? (
          <li className="nav-item">
            <Link to="login" className="nav-link text-black">
              
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="login" className="nav-link text-black" onClick={logoutUser}>
              
              Logout
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="report" className="nav-link text-black">
            {" "}
            Report Form
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;