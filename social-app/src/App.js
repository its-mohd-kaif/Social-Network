import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
// import NoteState from "./NoteState";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
export const noteContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <div>
        {/* <NoteState> */}

        <noteContext.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Signin" element={<Signin/>}/>
          </Routes>
        </noteContext.Provider>

        {/* </NoteState> */}
      </div>
    </>
  );
}

export default App;
