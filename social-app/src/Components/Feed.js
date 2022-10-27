import React, { useState } from "react";
import './Feed.css'

function Feed() {
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState(null);

  const [data, setData] = useState([]);

  const textHandler = (e) => {
    setText(e.target.value);
  };
  // const fileHandler=(e)=>{
  //     setFile(e.target.value);
  // }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const submitHandler = (e) => {
    let obj = {
      text: text,
      image: image,
    };
    setData([...data, obj]);
    console.log(data);
  };

  return (
    <div>
      <h1>Feeds Page</h1>
      <input
        onChange={textHandler}
        type={"text"}
        placeholder="Type Something..."
      />
      <br></br>
      <br></br>
      <input onChange={onImageChange} type={"file"} />
      <br></br>
      <br></br>
      <button onClick={submitHandler}>Submit</button>

      <ul>
        {data.map((item) => (
          <ul>
            <li>{item.text}</li>
            <li>{<img src={item.image} alt="" />}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Feed;
