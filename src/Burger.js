import React from 'react';
import { useStateValue } from "./StateProvider"
import { Link } from "react-router-dom";
import './Burger.css';
import { auth } from "./firebase";

function Burger(props) {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div>

      <ul>
        <li className="navSelection">

          <i>Hello,</i> {!user ? 'Guest' : user?.email}

        </li>
        <li>
          <Link
            to="/"
            className="navSelection"
            onClick={props.closeMenu}
          >
            Home
                    </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="navSelection"
            onClick={props.closeMenu}
          >
            Returns & Orders
                    </Link>
        </li>
        <li className="navSelection">

          Prime

          </li>
        <li>
          <Link
            to="/checkout"
            className="navSelection"
            onClick={props.closeMenu}
          >
            Checkout ({basket?.length} Items)
          </Link>
        </li>
        <li>
          <Link onClick={handleAuthentication} to={!user && "/login"} className="navSelection">
            {user ? 'Sign Out' : 'Sign In'}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Burger;
