import React from "react";
import { Stack } from "../Primitives";

const ImageSection = props => {

  let CardImageStyle = {
    vertical: true,
    bg: "background.0",
    height: "100px",
    width: "calc(100% - 24px)",
    left: true,
    top: true,
    py: "1",
    borderTopRightRadius: "2",
    borderTopLeftRadius: "2",
    backgroundImage: `url(${props.link})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Stack {...CardImageStyle} />
  );
};

export default ImageSection;
