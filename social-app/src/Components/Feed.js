import React, { useState } from "react";
import "./Feed.css";

function Feed() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const [data, setData] = useState([]);

  const textHandler = (e) => {
    setText(e.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const submitHandler = (e) => {
    if(text===""){
      alert("Empty Field Can Not Be Added!!");
      document.getElementById("text").focus();
    }else{
      let obj = {
        text: text,
        image: image,
      };
      setData([...data, obj]);
    }
  };

  return (
    <div className="feedContainer">
      <h1>Feed Page</h1>
      <div className="inputField">
        Type Something
        <textarea
          className="inputText"
          onChange={textHandler}
          type={""}
          id="text"
          placeholder="Type Something..."
          autoFocus
          
        />
      </div>

      <br></br>
      <br></br>
      <input className="fileInput" onChange={onImageChange} type={"file"} />
      <br></br>
      <br></br>
      <button className="addBtn" onClick={submitHandler}>
        ADD
      </button>

      <ul>
        {data.map((item) => (
          <ul>
            <li>
              <h3>{item.text}</h3>
            </li>

            <li>{<img src={item.image} alt="" />}</li>
            <hr></hr>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
