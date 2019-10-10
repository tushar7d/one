import React from "react";
import { Box} from "../Primitives";
import ImageSection from "../Cards/ImageSection";
import Section from "../Global/Section";
import InfoSection from "../Cards/InfoSection";
import DynamicSection from '../Cards/DynamicSection';


let CardProtoVertical = props => {
  let offer = props.offer;
  return (
    <Box
      bg={"transparent"}
      width={"calc(100vw - 24px)"}
      minHeight="11px"
      mb="3"
      mx={["0px", "0px", "2"]}
    >
      <ImageSection link={offer.image} greatdeal={offer.grwatdeal} />
      <Section>
        <InfoSection offer={offer} />
      </Section>
      <DynamicSection offer={offer} />
    
    </Box>
  );
};

export default CardProtoVertical;
