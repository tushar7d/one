import React from "react";
import {Box,Stack,} from "../Primitives";

import ImageSection from '../Cards/ImageSection'






let container = {
  vertical: true,
  left: true,
  mid: true,
  width:"calc(100% - 24px)",
  bg: "background.0",
}
let option = {
  height: "44px",
  width:"100%",
  bg: "background.0",

  mr: "3",
  
  shrink:"0",
  p: "3",
  
  borderTop:'1px solid',
  borderColor: 'neutral__400'
}


let CardProtoVertical = props => {
  let offer = props.offer;

  return (
    <Box
      bg={"background.0"}
      borderRadius="2"
      width={["calc(100vw - 24px)", "calc(100vw - 24px)", "calc(50vw - 24px)"]}
      minHeight="11px"
      mb="3"
      mx={["0px", "0px", "2"]}
    >
      <ImageSection link={offer.image} greatdeal={offer.grwatdeal} />
      

     
     
      
    </Box>
  );
};

export default CardProtoVertical;
