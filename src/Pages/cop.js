import React, { useState } from "react";
import Layout from "../Modules/layout";
import { Stack, Box } from "../Primitives";

import CardProtoModal from "../Modules/CardProtoModal";
import { motion } from "framer-motion";
import dealset from "../deal";
import DynamicSection from "../Cards/DynamicSection";

let ScrollContainer = props => {
  return (
    <Stack vertical center top width="100vw" height="auto" overflowX="hidden">
      {props.children}
    </Stack>
  );
};

function Csrm(props) {
  let currentOffer;
  
  const [modalState, setState] = useState(false);

  let setOffer = (offer)=>{
    
    return offer
      
    
  }
  const handleClick = async (offer ) => {
     currentOffer= await setOffer(offer)
   
    setState(!modalState);
   
        

   
  };

  const variants = {
    hidden: { opacity: 1, y: 100 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const ModalStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    height: "auto",
    bg: "white"
  };
  return (
    <Layout>
      <ScrollContainer>
        {props.inventory.map((offer, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                return handleClick(offer);
              }}
            >
              <CardProtoModal offer={offer} />
            </div>
          );
        })}
      </ScrollContainer>

      
    </Layout>
  );
}

export default Csrm;
/**
 * 
 * {currentOffer.dealset
        ? props.offer.dealset.map((d,index) => {
            return (
              <DynamicSection key={index}
                offer={currentOffer}
                deal={dealset[d].deal}
                cc={dealset[d].cancellation}
                rate="12"
                paylater={dealset[d].paymentplan}
                mileage={dealset[d].mileage}
              />
            );
          })
        : null}
 */