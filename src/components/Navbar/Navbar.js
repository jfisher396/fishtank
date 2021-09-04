import React from "react";
import LoginForm from '../LoginForm/LoginForm'

function Navbar(props) {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
       </li>
      </ul>
      <LoginForm />
    </div>
  );
}

export default Navbar;
