import React from "react";
import { Button } from "./Button";
import { useFormik } from "formik";
import "../components-style/LogIn_Form.css";


const LogIn_Form = () => {
  return (
    <form className="login-form">
      <h1>Log in</h1>
      <div className="login-wrapper">
        <label className="login-label">Email</label>
        <input
          type="text"
          id="Email"
          name="Email"
          placeholder="Email"
          className="login-input"
        />
        <label className="login-label">password</label>
        <input
          type="password"
          id="Password"
          name="Password"
          placeholder="Password"
          className="login-input"
        />
        <Button
          text="log in"
          type="submit"
          buttonStyle="btn--form"
          onClick={() => alert("clicked !")}
          buttonSize="btn--large"
          to="/hazem"
        />
      </div>
    </form>
  );
};

export default LogIn_Form;
