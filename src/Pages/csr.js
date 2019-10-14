import React from 'react';
import Layout from '../Modules/layout';
import {Stack} from '../Primitives'

import {Link} from '@reach/router'

import CardProtoVertical  from '../Modules/CardProtoVertical'


let ScrollContainer = props =>{
  return <Stack vertical center top width ="100vw" height="auto" overflowX="hidden"  >{props.children}</Stack>
}


function Csr(props) {
  return (
    <Layout>
      <ScrollContainer>
      
      {props.inventory.map((offer,index) => (
          <Link key={index} to={`/cis/${index}`}>
          <CardProtoVertical  offer={offer} />
          </Link>
        ))}
      </ScrollContainer>
  
   </Layout>
  );
}

export default Csr;
