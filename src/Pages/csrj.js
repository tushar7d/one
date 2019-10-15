import React,{useState} from "react";
import Layout from "../Modules/layout";
import { Stack } from "../Primitives";
import CardProtoModal from "../Modules/CardProtoModal";

let ScrollContainer = props => {
  return (
    <Stack vertical center top width="100vw" height="auto" overflowX="hidden">
      {props.children}
    </Stack>
  );
};

function Csrm(props) {
const [selected, ] 

  return (
    <Layout>
      <ScrollContainer>
        {props.inventory.map((offer, index) => {
          return (
            <div key={index}>
              <CardProtoModal offer={offer} />
            </div>
          );
        })}
      </ScrollContainer>
    </Layout>
  );
}

export default Csrm;
