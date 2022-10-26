import React from 'react'
import LogIn_Form from "../components/components-structure/LogIn_Form";
import Logo_header from '../components/components-structure/Reusable components/Logo_header';

const LogIn= () => {
  return (
    <div className="LogIn-page">
      <Logo_header/>
      <LogIn_Form />
    </div>
  );
}

export default LogIn
