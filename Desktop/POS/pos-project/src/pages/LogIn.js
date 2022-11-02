import React from "react";
import LogIn_Form from "../components/components-structure/Pages Components/LogIn Page Components/LogInForm";
import Logo_header from "../components/components-structure/Reusable components/LogoHeader";

const LogIn = () => {
  return (
    <div className="LogIn-page">
      <Logo_header />
      <LogIn_Form />
    </div>
  );
};

export default LogIn;
