import React from "react";
import { Router} from "@reach/router";
import {Cis, Csr, NotFound} from "./Pages/index";
import ScrollToTop from './ScrollToTop'
import offers from './offers'
import offers2 from './offers2'

const Navigator = () => {
  return (
    <Router  primary={false}>
      <ScrollToTop path="/">
      <NotFound default />
      <Csr offers={offers} inventory={offers2}  path="/" />
      <Cis offers={offers} inventory={offers2} path="/cis" />
      </ScrollToTop>
      
    </Router>
  );
};

export default Navigator;
