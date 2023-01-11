import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Navigate } from "react-router";
import app from "../Authentication/base";
import { AuthContext } from "../Authentication/Auth";
import "../Styles/login.scss";

function Login() {
  function createNewAccont() {
    console.log("Create new accont");
  }
  function handleLogin() {
    console.log("handel Login");
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h2 for="login" className="mt-4">
            Login
          </h2>
          <div className="form-group mt-4">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mt-4">
            <label for="exampleInputPassword1">Type Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" className="form-text text-muted">
              Please do your best to create unique password.
            </small>
          </div>

          <button type="submit" className="btn btn-primary mt-5">
            Login
          </button>
          <div className="new-account mt-4 mb-2">
            <small className="form-text text-muted ">
              Don't have an Account?
            </small>

            <a onClick={createNewAccont} href="/signup">
              Create new Accont
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
