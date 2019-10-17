import React from "react";
import { Box } from "../Primitives";
import ImageSection from "../Cards/ImageSection";
import { Link } from "@reach/router";
import InfoSection from "../Cards/InfoSection";
import DynamicSection from "../Cards/DynamicSection";
import dealset from "../deal";
import BottomSection from "../Cards/BottomSection";



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
        ? props.offer.dealset.map((d, index) => {
            return (
              <Link key={index} to={`/cis/${props.index}/${d}`}>
                <DynamicSection
                  key={index}
                  offer={offer}
                  deal={dealset[d].deal}
                  cc={dealset[d].cancellation}
                  rate="12"
                  paylater={dealset[d].paymentplan}
                  mileage={dealset[d].mileage}
                />
              </Link>
            );
          })
        : null}
      <BottomSection />
    </Box>
  );
};

export default CardProtoVertical;
