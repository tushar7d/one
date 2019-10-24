import React from "react";
import { Stack, Text, Icon } from "../Primitives";

import { MdPerson, MdFlight } from "react-icons/md";
import Section from "../Global/Section";

import dealset from '../deal'
//Attribute Section
let IconStack = props => {
  let info = props.info;
  return (
    <Stack horizontal left mid pt="2">
      <Stack horizonatl bottom left pr="2">
        <Icon value={{ color: "#465280", size: "18px" }}>
          <MdPerson />
        </Icon>
        <Text type300 normal color="neutral__700" ml="1">
          {info.seats}
        </Text>
      </Stack>
      <Stack horizontal bottom left>
        <Text type300 normal color="neutral__700">
          | Automatic
        </Text>
      </Stack>
    </Stack>
  );
};

//Car Info sectio
let CarInfo = props => {
  let info = props.info;
  return (
    <Stack vertical top left width="100%">
      <Stack vertical pr={"6px"}>
        <Text type500 medium color="neutral__900">
          {info.type}
        </Text>
        <Text type300 normal color="neutral__700">
          {info.name}
        </Text>
        <IconStack info={info} />
      </Stack>
      <Stack horizonatl bottom left pr="2" pt="2">
        <Icon value={{ color: "#465280", size: "18px" }}>
          <MdFlight />
        </Icon>
        <Text type300 normal color="neutral__700" mx="1">
          Free shuttle to the car off airport
        </Text>
      </Stack>
    </Stack>
  );
};

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
let Pricing = props => {
  const base_d = parseInt(props.offer.daily, 10);
  const base_t = parseInt(props.offer.total, 10);
  const tax = base_t - base_d * 4;

  let daily = increment(
    base_d,
    dealset[0].deal,
    dealset[0].paymentplan,
    dealset[0].cancellation,
    dealset[0].mileage
  );
  let total = daily * 4 + tax;


  return (
    <Stack horizontal right mid width="calc(28% - 12px )" pr="1">
      <Stack vertical right top width="100%" mt="2" pr="1">
        <Text type200 normal color={"neutral__500"} textAlign="right">
          starting
        </Text>
        <Text type600 bold color={"neutral__800"} textAlign="right">
          ${daily}
        </Text>
        <Text type200 normal color={"neutral__500"} textAlign="right">
          per day
        </Text>
        <Text type200 normal color={"neutral__500"} textAlign="right">
          ${total} total
        </Text>
      </Stack>
    </Stack>
  );
};

//Main section
let CarInfoSectionm = props => {
  return (
    <Section>
      <Stack horizontal split top width={"calc(100% - 24px)"} px={"3"} py={"2"}>
        <CarInfo info={props.offer} />
        <Pricing offer={props.offer} />
      </Stack>
    </Section>
  );
};
export default CarInfoSectionm;
