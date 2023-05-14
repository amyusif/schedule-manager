import React from "react";
import Button from "../Components/Button";
import Test from "../Components/test";

const Form = () => {
  return (
    <form action="" method="post" className="form">
      <Test name="Eamil Address" type="email" />
      <Test name="Password" type="password" />
      <div className="fg-pass"><a href="/">
        Forgot Password?
      </a></div>
      <Button name="Login" type="submit" />
    </form>
  );
};

export default Form;
