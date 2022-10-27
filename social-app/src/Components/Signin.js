import React, { useState } from "react";
import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

function Signin() {
  const [username, setUSername] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();

  const userHandler = (e) => {
    setUSername(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem(username));
    console.log("LOGIN", user);
    // let pass=JSON.parse(localStorage.getItem(pass))
    for (let i = 0; i < user.length; i++) {
      if (user[i].username === username && user[i].pass === pass) {
        alert("MIl Gya");
        navigate("/Feed");
      }
    }
    console.log("LOGIN", user[0].username);
  };

  return (
    <div>
      <div className="signupFrm">
        <form action="" className="form">
          <h1 className="title">Log in</h1>

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

          {/* <Link to="/Feed"> */}
          <input
            onClick={submitHandler}
            type="submit"
            className="submitBtn"
            value="Login"
          />
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Signin;
