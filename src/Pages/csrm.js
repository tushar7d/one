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
  const [modalState, setState] = useState(false);
  const [currentOffer, setOffer]= useState(null);

  const handleClick = (offer) => {
    setState(!modalState);
    setOffer(offer);
  };

  const variants = {
    hidden: { opacity: 1, y: 100, },
    visible: {
      opacity: 1,
      y: 0,
   
      
    }
  };

  const ModalStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    height: "40vh",
    bg: "white"
  };
  return (
    <Layout>
      <ScrollContainer>
        {props.inventory.map((offer, index) => (
          <div key={index} onClick={(offer)=>{return handleClick(offer)}} >
            <CardProtoModal offer={offer} />
          </div>
        ))}
      </ScrollContainer>

      <motion.div
        initial="hidden"
        animate={modalState ? "visible" : "hidden"}
        variants={variants}
        
      >
        <Box {...ModalStyle} >
       
            
        </Box>
      </motion.div>
    </Layout>
  );
}

export default Csrm;
