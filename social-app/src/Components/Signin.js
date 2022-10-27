import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

function Signin() {
  // UseState for input values
  const [username, setUSername] = useState("");
  const [pass, setPass] = useState("");
  // useNavigate for navigation
  let navigate = useNavigate();

  const userHandler = (e) => {
    setUSername(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Get data from local storage
    var user = JSON.parse(localStorage.getItem("username"));
    let users = user;
    console.log(users[0]);
    // Check Validation
    if (username === "") {
      alert("Username Field Can Not Be Empty");
      document.getElementById("username").focus();
    } else if (pass === "") {
      alert("Password Field Can Not Be Empty");
      document.getElementById("pass").focus();
    } else if (users[0].username !== username) {
      alert("Wrong Username");
      document.getElementById("username").focus();
    } else if (users[0].pass !== pass) {
      alert("Wrong Password");
      document.getElementById("pass").focus();
    } else if (users[0].username === username && users[0].pass === pass) {
      alert("Login Successfully");
      // Navigate to feed page
      navigate("/Feed");
    }
  };

  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Log in</h1>

          <div className="inputContainer">
            <input
              onChange={userHandler}
              id="username"
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
              id="pass"
              type="text"
              className="input"
              placeholder="a"
            />
            <label for="" className="label">
              Password
            </label>
          </div>

          <input
            onClick={submitHandler}
            type="submit"
            className="submitBtn"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Signin;
