import React from "react";
import { Stack } from "../Primitives";

const BottomSection = props => {

  let CardImageStyle = {
    bg: "white",
    height: "6px",
    width: "calc(100%)",
    borderBottomRightRadius: "2",
    borderBottomLeftRadius: "2",
   
  };
  return (
    <Stack {...CardImageStyle}  />
  );
};

export default BottomSection;
