import React from "react";
import { Stack, Text, Icon } from "../Primitives";
import { MdSearch } from "react-icons/md";




let IconContainerStyle = {
  size: "48px",
  horizontal: true,
  center: true,
  mid: true
};
let IconContainer = (props)=>{
    return(
<Icon value={{ color: "#005AEB", size:"24px" }}>
      <Stack {...IconContainerStyle}>
          {props.children}
      </Stack>
</Icon>
    );
}


let ContainerStyle = {
  bg:"#ffffff",
  horizontal: true,
  mid: true,
  height: "48px",
  pr: "12px",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.12)",
  mb:"12px",
  position: "fixed",
  top:52,
  left: 0,
  right: 0,
};

let InfoContainerStyle = {
  vertical: true,
  mid: true,
  left: true,
  color: "#005AEB"
};

const SearchPlayback = props => {
  const onSearch = () => {
    console.log("Search Clicked");
  };
  return (
    <Stack {...ContainerStyle}>
      <div onClick={onSearch}>
        <IconContainer>
          <MdSearch />
        </IconContainer>
      </div>
      <Stack {...InfoContainerStyle}>
        <Text fontSize={"18px"} lineHeight={"22px"} fontWeight={"500"}>
          SEA Airport, Seattle
        </Text>
        <Text fontSize={"12px"} lineHeight={"16px"} fontWeight={"normal"}>
          Oct 12 - Oct 16 10:00am
        </Text>
      </Stack>
    </Stack>
  );
};
export default SearchPlayback;
