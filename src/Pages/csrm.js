import React, { useState } from "react";
import Layout from "../Modules/layout";
import { Stack, Box } from "../Primitives";
import CardProtoModal from "../Modules/CardProtoModal";
import DynamicSection from "../Cards/DynamicSection";
import dealset from "../deal";
import { motion } from "framer-motion";



function Csrm(props) {

  let ScrollContainer = props => {
    return (
      <Stack vertical center top width="100vw" height="auto" overflowX="hidden">
        {props.children}
      </Stack>
    );
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

  const [selection, select] = useState(null);
  const [modalState, flip] = useState(false);

  const handleClick = card => {
    select(card);
    flip(!modalState)
  };
  return (
    <Layout>
      <ScrollContainer>
        {props.inventory.map((card, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleClick(card);
              }}
            >
              <CardProtoModal offer={card} />
            </div>
          );
        })}
      </ScrollContainer>
      <motion.div variants={variants} animate={modalState?"visible":"hidden"} >
        
        <Stack vertical top center {...ModalStyle}>
          <Box width="60px" height="8px" borderRadius="4" bg="neutral__200" mt="2"></Box>
          {selection !== null
            ? selection.dealset.map((d, index) => {
                return (
                  <DynamicSection
                    key={index}
                    offer={selection}
                    deal={dealset[d].deal}
                    cc={dealset[d].cancellation}
                    rate="12"
                    paylater={dealset[d].paymentplan}
                    mileage={dealset[d].mileage}
                  />
                );
              })
            : null}
        </Stack>
      </motion.div>
    </Layout>
  );
}

export default Csrm;
