import React, { useState } from "react";
import { Button } from "./Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../components-style/LogIn_Form.css";
import { Link } from "react-router-dom";

const LogIn_Form = () => {
  const [defaultEmail, setDefaultEmail] = useState("hazem-pos@gmail.com");
  const [defaultPassword, setDefualtPassword] = useState("123123");
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      // password:Yup.required("Required"),
    }),
    onSubmit: (value) => {
      value.email === defaultEmail && value.password === defaultPassword
        ? setSuccess(true)
        : setSuccess(false);
    },
  });

  console.log(formik.values);
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      {/* {success ? <a href="/dashboard">Go to Home</a> : null} */}

      <h1>Log in</h1>
      <div className="login-wrapper">
        <div className="login-input-container">
          <label className="login-label">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          ) : null}
          <label className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="login-input"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <Link to="/dashboard">
          <Button
            text="log in"
            type="submit"
            buttonStyle="btn--form"
            // onClick={() => alert(`${formik.values.email}`)}
            buttonSize="btn--large"
          />
        </Link>
      </div>
    </form>
  );
};

export default LogIn_Form;
