import React from "react";
import { Router} from "@reach/router";
import {Cis, Csr,Csrm, NotFound} from "./Pages/index";
import ScrollToTop from './ScrollToTop'
import offers from './offers'
import offers2 from './offers2'

const Navigator = () => {
  return (
    <Router  primary={false}>
      <ScrollToTop path="/">
      <NotFound default />
      <Csr offers={offers} inventory={offers2}  path="/" />
      <Csrm offers={offers} inventory={offers2}  path="/m" />
      <Cis offers={offers} inventory={offers2} path="/cis/:id/:d" />
      </ScrollToTop>
      
    </Router>
  );
};

export default Navigator;
