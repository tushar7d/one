import React, { useState } from "react";
import Layout from "../Modules/layout";
import { Stack, Box } from "../Primitives";
import CardProtoModal from "../Modules/CardProtoModal";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import DynamicSection from "../Cards/DynamicSection";
import dealset from "../deal";
import InfoSection from "../Cards/InfoSection";
import { Link } from "@reach/router";

let ScrollContainer = props => {
  return (
    <Stack vertical center top width="100vw" height="auto" overflowX="hidden">
      {props.children}
    </Stack>
  );
};

function Csrm(props) {
  const [selection, select] = useState(null);
  const [modalState, flip] = useState(false);

  const handleClick = card => {
    select(card);
    flip(!modalState);
  };
  const resetState = () => {
    flip(!modalState);
  };

  return (
    <>
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
      </Layout>
      <SwipeableBottomSheet open={modalState} onChange={resetState}>
        <div style={{ height: "50vh" }}>
          <Stack vertical top center>
            <Box
              width="60px"
              height="8px"
              borderRadius="4"
              bg="neutral__200"
              mt="2"
            ></Box>
              {selection !== null
              ? <InfoSection offer={selection} />: null}
            {selection !== null
              ? selection.dealset.map((d, index) => {
                  return (
                    <Link style={{width:"100%"}} key={index} to={`/cis/${selection.id}/${d}`}>
                    <DynamicSection
                    key={index}
                      offer={selection}
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
          </Stack>
        </div>
      </SwipeableBottomSheet>
    </>
  );
}

export default Csrm;
