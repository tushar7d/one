import React from 'react';
import GlobalNav from '../Global/GlobalNav'
import SearchPlayback from '../Global/SearchPlayback'
import {Box } from '../Primitives'

function Layout(props) {
  return (
   <div>
    <GlobalNav />
    <SearchPlayback />
    
   <Box  height="111px" width="100vw"/>
        {props.children}
    
   
   </div>
  );
}

export default Layout;
