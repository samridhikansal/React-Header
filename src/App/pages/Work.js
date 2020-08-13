import React from "react";
import { useHistory } from "react-router-dom";

//import styled component from the styled directory
import { Div } from "./../styled";

const Work = () => {
  let history = useHistory();
  console.log(history);
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <Div>
      <button onClick={handleClick}>Redirect to Homepage</button>{" "}
    </Div>
  );
};

export default Work;
