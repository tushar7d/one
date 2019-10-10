import React from "react";
import { Stack, Box, Icon } from "../Primitives";
import logo from "../Assets/Images/logo.png";
import { MdFavorite, MdAccountCircle,MdSearch } from "react-icons/md";
import theme from "../theme"

let IconContainerStyle = {
  size: "48px",
  horizontal: true,
  center: true,
  mid: true
};
let IconContainer = (props)=>{
    return(
<Icon value={{ color: `${theme.colors.neutral__700}`, size:"24px" }}>
      <Stack {...IconContainerStyle}>
          {props.children}
      </Stack>
      </Icon>
    );
}





let GlobalNavContainerStyle = {
  bg:"#ffffff",
  horizontal: true,
  split: true,
  mid: true,
  height: "48px",
  px: "12px",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.12)",

  position: "fixed",
  top:"3px",
  left: "0px",
  right: "0px",
};


let IconStack = () => {
  return (
    <Stack>
      <IconContainer>
        <MdSearch />
      </IconContainer>
      <IconContainer>
        <MdFavorite />
      </IconContainer>
      <IconContainer>
        <MdAccountCircle />
      </IconContainer>
    </Stack>
  );
};

let Line = () => {
  return <Box position={"fixed"} top={0} left={0} right={0} height={"3px"} width={"100%"} bg={"#FFD500"} />;
};

const GlobalNav = () => {
  return (
    <>
      <Line />
      <Stack {...GlobalNavContainerStyle}>
        <img src={logo} alt="logo" height={"30px"}></img>
        <IconStack />
      </Stack>
    </>
  );
};

export default GlobalNav;
