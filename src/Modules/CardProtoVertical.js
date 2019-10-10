import React from "react";
import {Box} from "../Primitives";
import ImageSection from '../Cards/ImageSection';
import Section from '../Global/Section'




let CardProtoVertical = props => {
  let offer = props.offer;
  return (
    <Box
      bg={"transparent"}
      
      width={["calc(100vw - 24px)", "calc(100vw - 24px)", "calc(50vw - 24px)"]}
      minHeight="11px"
      mb="3"
      mx={["0px", "0px", "2"]}
    >
       <ImageSection link={offer.image} greatdeal={offer.grwatdeal} />
       <Section>hello</Section>
       

    </Box>
  );
};

export default CardProtoVertical;
