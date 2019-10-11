import React from "react";
import { Box } from "../Primitives";
import ImageSection from "../Cards/ImageSection";

import InfoSection from "../Cards/InfoSection";
import DynamicSection from "../Cards/DynamicSection";
import dealset from "../deal";

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
      <ImageSection link={offer.image} />
      <InfoSection offer={offer} />

      {props.offer.dealset
        ? props.offer.dealset.map((d,index) => {
            return (
              <DynamicSection key={index}
                offer={offer}
                deal={dealset[d].deal}
                rate="12"
                paylater={dealset[d].paymentplan}
                mileage={dealset[d].mileage}
              />
            );
          })
        : null}
    </Box>
  );
};

export default CardProtoVertical;
