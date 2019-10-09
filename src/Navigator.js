import React from "react";
import { Router} from "@reach/router";
import {Cis, Csr, NotFound} from "./Pages/index";
import ScrollToTop from './ScrollToTop'
import offers from './offers'

const Navigator = () => {
  return (
    <Router  primary={false}>
      <ScrollToTop path="/">
      <NotFound default />
      <Csr offers={offers} path="/" />
      <Cis offers={offers} path="/cis" />
      </ScrollToTop>
      
    </Router>
  );
};

export default Navigator;
