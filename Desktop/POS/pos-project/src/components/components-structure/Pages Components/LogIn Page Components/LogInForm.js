import { Button } from "../../Reusable components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../components-style/LogIn_Form.css";
import { useState } from "react";

const LogIn_Form = () => {
  const default_account = {
    email: "hazem-pos@gmail.com",
    password: "123123",
  };

  const logInForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
    }),
    onSubmit: (value) => {
      if (
        value.email === default_account.email &&
        value.password === default_account.password
      ) {
        window.location = "/dashboard";
      } else {
        setShowFailedLogInMessage(true);
      }
    },
  });
  const [showFailedLogInMessage, setShowFailedLogInMessage] = useState(false);

  return (
    <form className="login-form" onSubmit={logInForm.handleSubmit}>
      <h1>Log in</h1>
      <div className="login-wrapper">
        <div className="login-input-container">
          <label className="login-label">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email // hazem-pos@gmail.com "
            className="login-input"
            onChange={logInForm.handleChange}
            value={logInForm.values.email}
          />
          {logInForm.errors.email ? (
            <p style={{ color: "red" }}>{logInForm.errors.email}</p>
          ) : null}
          <label className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password // 123123"
            className="login-input"
            onChange={logInForm.handleChange}
            value={logInForm.values.password}
          />
        </div>
        <Button
          text="log in"
          type="submit"
          buttonStyle="btn--form"
          buttonSize="btn--large"
        />
        {showFailedLogInMessage && (
          <p className="LogIn-failed-message">
            {" "}
            The Password or Email is incorrect
          </p>
        )}
      </div>
    </form>
  );
};

export default LogIn_Form;
