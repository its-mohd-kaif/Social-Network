import React, { useState } from "react";

function Signin() {
  const [username, setUSername] = useState("");
  const [pass, setPass] = useState("");

  const userHandler = (e) => {
    setUSername(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem(username));
    for (let i = 0; i < user.length; i++) {
      if (user[i].username === username) {
        alert("MIl Gya");
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
