import React, { useState } from "react";
//import {useState} from 'react'

//import styled component from the styled directory
import { Div } from "./../styled";

const About = () => {
  const [userName, setUserName] = useState("Guest");
  return (
    <Div>
      <label>Enter User Name : </label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <div style={{ textAlign: "center", paddingTop: "25px" }}>
        {" "}
        Welcome {userName}!!!!
      </div>
    </Div>
  );
};

export default About;
