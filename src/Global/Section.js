import React from "react";
import { Stack} from "../Primitives";




let Section = (props) => {
let style = {
  width: "100%",
  height:"auto",
  bg:"background.0",
 
}

  return<Stack vertical {...style} {...props} />
}

export default Section