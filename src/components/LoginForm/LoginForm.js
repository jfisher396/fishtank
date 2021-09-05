import React from "react";

function LoginForm(props) {
  return (
    <form>
      <div className="form-group">
        <label>
        <input
          value={props.formData.email}
          onChange={props.handleChange}
          name="email"
          type="email"
          //   className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        </label>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label>
        <input
          value={props.formData.password}
          name="password"
          onChange={props.handleChange}
          type="password"
          //   className="form-control"
          id="password-input"
        />
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
