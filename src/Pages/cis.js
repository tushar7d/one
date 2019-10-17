import React from 'react';
import Layout from'../Modules/layout'
import offer from '../offers2'
import d from '../deal'


let increment = (price, deal, pp, cc, mm) => {
  let updatedPrice = price;

  //Mip
  if (deal === "0") {
    updatedPrice = updatedPrice - (5 - parseInt(deal, 10));
  }
 //Mod
  if (deal === "1") {
    updatedPrice = updatedPrice - (5 - parseInt(deal, 10));
  }
  //Mobile exclusive
  if (deal === "2") {
    updatedPrice = updatedPrice - (5 - parseInt(deal, 10));
  }
  //normal offer
  if (deal === "3") {
    updatedPrice = updatedPrice - (5 - parseInt(deal, 10));
  }
  //no offer
  if (deal === null) {
    updatedPrice = updatedPrice + 0;
  }
  //pay later
  if (pp) {
    updatedPrice = updatedPrice + 1;
  }
  //free cancellation
  if (cc) {
    updatedPrice = updatedPrice + 1;
  }
 //mileage
  if (mm === "") {
    updatedPrice = updatedPrice + 2;
  }
  //mileage
  if (mm === "400") {
    updatedPrice = updatedPrice + 1;
  }

  return updatedPrice;
};

function Cis(props) {

  const base_d = parseInt(offer[props.id].daily, 10);
  const base_t = parseInt(offer[props.id].total, 10);
  const tax = base_t - base_d * 4;

  let daily = increment(
    base_d,
    d[props.d].deal,
    d[props.d].paymentplan,
    d[props.d].cancellation,
    d[props.d].mileage
  );

  let total = daily * 4 + tax;

  return (
   <Layout>
     {props.id} /
     {props.d}/{ daily}/{total}
   </Layout>
  );
}

export default Cis;
