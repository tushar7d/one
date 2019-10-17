import React from 'react';
import Layout from '../Modules/layout';
import {Stack} from '../Primitives'



import CardProtoVertical  from '../Modules/CardProtoVertical'


let ScrollContainer = props =>{
  return <Stack vertical center top width ="100vw" height="auto" overflowX="hidden"  >{props.children}</Stack>
}


function Csr(props) {
  return (
    <Layout>
      <ScrollContainer>
      
      {props.inventory.map((offer,index) => (
          <div key={index} >
          <CardProtoVertical  offer={offer}  index={index}/>
          </div>
        ))}
      </ScrollContainer>
  
   </Layout>
  );
}

export default Csr;
