import React from "react";
import { Box } from "../Primitives";
import ImageSection from "../Cards/ImageSection";
import InfoSectionm from "../Cards/InfoSectionm";
import BottomSection from '../Cards/BottomSection'

let CardProtoModal = props => {
  let offer = props.offer;
  return (
    <Box
      bg={"transparent"}
      width={"calc(100vw - 24px)"}
      minHeight="11px"
      mb="3"
      mx={["0px", "0px", "2"]}
    >
      <ImageSection link={offer.image} />
      <InfoSectionm offer={offer} />

      
        <BottomSection />
    </Box>
  );
};

export default CardProtoModal;
