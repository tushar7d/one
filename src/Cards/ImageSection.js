import React from "react";
import { Stack } from "../Primitives";

const ImageSection = props => {

  let CardImageStyle = {
    vertical: true,
    bg: "neutral__100",
    height: "100px",
    width: "calc(100% )",
    left: true,
    top: true,
    py: "6",
    borderTopRightRadius: "2",
    borderTopLeftRadius: "2",
    backgroundImage: `url(${props.link})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Stack {...CardImageStyle} style={{backgroundBlendMode: "multiply"}} />
  );
};

export default ImageSection;
