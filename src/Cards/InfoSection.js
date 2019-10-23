import React from "react";
import { Stack, Text, Image, Icon } from "../Primitives";

import { MdPerson,MdFlight } from "react-icons/md";
import Section from "../Global/Section";

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
        <Text type300 normal color="neutral__700" >
        |  Automatic
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


let Ugc = props => {
  return (
    <Stack right top vertical>
      <Image src={props.offer.logo} width="50px" />

      <Text
        type300
        bold
        color={parseInt(props.offer.rating*100) > 70 ? "accent.4" : "neutral__700"}
        pr="1"
        pt="2"
      >
        {props.offer.rating * 100}%
      </Text>
      <Text type300 normal color={"neutral__700"}>
        recommend
      </Text>
      <Text type300 normal color={"neutral__700"}>
        ({props.offer.rated} rated)
      </Text>
    </Stack>
  );
};

//Main section
let CarInfoSectionEmea = props => {
  return (
    <Section>
      <Stack horizontal split top width={"calc(100% - 24px)"} px={"3"}  py={"2"}>
        <CarInfo info={props.offer} />
        <Ugc offer={props.offer} />
      </Stack>
    </Section>
  );
};
export default CarInfoSectionEmea;
