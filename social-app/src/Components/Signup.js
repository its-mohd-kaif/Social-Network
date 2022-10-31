import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { noteContext } from "../App";
import "./Signup.css";

function Signup() {
  // Import useContext in data1 variable
  let data1 = useContext(noteContext);
  // UseState for holding values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const [pincode, setPincode] = useState("");

  let navigate = useNavigate();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const userHandler = (e) => {
    setUsername(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const pinHandler = (e) => {
    setPincode(e.target.value);
  };
  // Obj that holds all input values
  let obj = {
    name: name,
    email: email,
    username: username,
    pass: pass,
    mobile: mobile,
    city: city,
    pincode: pincode,
  };
  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    // All validations
    let tempUsername = username;
    tempUsername = tempUsername.toLowerCase();
    var mailformat =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name === "") {
      alert("Name Field Can Not be Empty");
      document.getElementById("name").focus();
    } else if (!isNaN(name)) {
      alert("Name field can not be integer");
      document.getElementById("name").focus();
    } else if (email === "") {
      alert("Email Field Can Not Be Empty");
      document.getElementById("email").focus();
    } else if (!email.match(mailformat)) {
      alert("Email is not proper valid");
      document.getElementById("email").focus();
    } else if (username === "") {
      alert("Username Field Can Not Be Empty");
      document.getElementById("username").focus();
    } else if (tempUsername !== username) {
      alert("Username Must in Lower Case");
      document.getElementById("username").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else if (pass.length <= 4) {
      alert("Password length must be greater then 4");
      document.getElementById("pass").focus();
    } else if (mobile === "") {
      alert("Mobile Field Can Not Be Empty");
      document.getElementById("mobile").focus();
    } else if (mobile.length !== 10) {
      alert("Mobile Number length must be equal to 10");
      document.getElementById("mobile").focus();
    } else if (city === "") {
      alert("City Field Can Not be Empty");
      document.getElementById("city").focus();
    } else if (!isNaN(city)) {
      alert("City field can not be integer");
      document.getElementById("city").focus();
    } else if (pincode === "") {
      alert("Pincode Field Can Not Be Empty");
      document.getElementById("pincode").focus();
    } else if (pincode.length !== 6) {
      alert("Pincode length must be equal to 6");
      document.getElementById("pincode").focus();
    } else {
      // Push obj into context
      alert("Account Created Successfully");
      data1.data.push(obj);
      data1.setData([...data1.data]);
      // Push data into local storage
      localStorage.setItem("username", JSON.stringify(data1.data));
      setName("");
      setEmail("");
      setUsername("");
      setPass("");
      setMobile("");
      setPincode("");
      setCity("");

      navigate("/Signin");
    }
  };

  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Sign up</h1>
          <div className="inputContainer">
            <input
              onChange={nameHandler}
              id="name"
              type="text"
              className="input"
              placeholder="a"
              value={name}
            />
            <label for="" className="label">
              Full Name
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={emailHandler}
              id="email"
              type="text"
              className="input"
              placeholder="a"
              value={email}
            />
            <label for="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={userHandler}
              id="username"
              type="text"
              className="input"
              placeholder="a"
              value={username}
            />
            <label for="" className="label">
              Username
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={passHandler}
              id="pass"
              type="password"
              className="input"
              placeholder="a"
              value={pass}
            />
            <label for="" className="label">
              Password
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={mobileHandler}
              id="mobile"
              type={"number"}
              className="input"
              placeholder="a"
              value={mobile}
            />
            <label for="" className="label">
              Mobile
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={cityHandler}
              id="city"
              type="text"
              className="input"
              placeholder="a"
              value={city}
            />
            <label for="" className="label">
              City
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={pinHandler}
              id="pincode"
              type={"number"}
              className="input"
              placeholder="a"
              value={pincode}
            />
            <label for="" className="label">
              Pincode
            </label>
          </div>
          <input
            onClick={submitHandler}
            type="submit"
            className="submitBtn"
            value="Sign up"
          />
          <Link to="/Signin">
            <input type="submit" className="submitBtn" value="Login" />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
