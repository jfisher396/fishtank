import React from "react";

function LoginForm(props) {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          value={props.formData.email}
          onChange={props.handleChange}
          name="email"
          type="email"
        //   className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={props.formData.password}
          name="password"
          onChange={props.handleChange}
          type="password"
        //   className="form-control"
          id="password-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
