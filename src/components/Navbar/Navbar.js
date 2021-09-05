import React from "react";
import LoginForm from '../LoginForm/LoginForm'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
       </li>
      </ul>
      <LoginForm handleChange={props.loginInputChange} formData={props.loginFormData} />
      </div>
    </nav>
  );
}

export default Navbar;