import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { noteContext } from "../App";
import "./Signup.css";

function Signup() {
  let data1 = useContext(noteContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const [pincode, setPincode] = useState("");

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

  let obj = {
    name: name,
    email: email,
    username: username,
    pass: pass,
    mobile: mobile,
    city: city,
    pincode: pincode,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(pincode);
    // data1.setData("hyy")

    // data1.push(obj)
    console.log(data1.data);
    data1.data.push(obj);
    localStorage.setItem(username, JSON.stringify(data1.data));
    console.log(data1);
    console.log(data1.data);
  };

  return (
    <div>
      {/* <NoteContext.Provider value={state}></NoteContext.Provider> */}
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Sign up</h1>
          <div className="inputContainer">
            <input
              onChange={nameHandler}
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Full Name
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={emailHandler}
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Email
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={userHandler}
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Username
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={passHandler}
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Password
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={mobileHandler}
              type={"number"}
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Mobile
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={cityHandler}
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              City
            </label>
          </div>
          <div className="inputContainer">
            <input
              onChange={pinHandler}
              type={"number"}
              className="input"
              placeholder="a"
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
          {/* <br></br>
          Already have a account?
          <br></br> */}
          <Link to="/Signin">
            <input type="submit" className="submitBtn" value="Login" />
          </Link>

          {/* <button>Login</button> */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
