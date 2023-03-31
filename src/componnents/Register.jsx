import React from "react";
import { useState } from "react";
import Header from "./Header";
import RegisterInput from "./RegisterInput";
import Footer from "./Footer";
function Register() {
  const [values, setValues] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(values);
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Please enter your name",
      label: "Name",
      errorMessage:
        "Name should be atlease 3-16 characters long, shouldn't contain special characters!",
      pattern: "^[A-Za-z0-9]{3,15}$",
      required: true,
    },
    {
      id: 2,
      required: true,
      name: "userName",
      type: "text",
      placeholder: "Please enter your user name",
      label: "User Name",
      errorMessage:
        "User Name should be atlease 3-16 characters long, shouldn't contain special characters!",
      pattern: "^[A-za-z0-9]{3,15}$",
    },
    {
      id: 3,
      name: "email",
      required: true,
      type: "email",
      placeholder: "Please enter your email address",
      label: "Email Address",
      errorMessage: "Email should contain special character @!",
    },
    {
      id: 4,
      required: true,
      name: "password",
      type: "password",
      placeholder: "Please enter your password",
      label: "Password",
      errorMessage:
        "Password should be atlease 1 letter, 1 number and at lease 1 special characters",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 5,
      required: true,
      name: "confirmPassword",
      type: "password",
      placeholder: "Please enter your confirm password",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <RegisterInput
              key={input.id}
              {...input}
              onChange={onChangeHandler}
              value={values[input.name]}
              required
            />
          ))}
          <button className="register__button" type="submit">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
