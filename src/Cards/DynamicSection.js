import React from "react";
import { Box, Stack, Text, Icon } from "../Primitives";

import Section from "../Global/Section";

import { MdChevronRight, MdPhoneIphone, MdLocalOffer } from "react-icons/md";

let PillStyle = {
  horizontal: true,
  left: true,
  center: true,
  mid: true,
  width: "auto",
  height: "6",
  borderRadius: "3",
  px: "2"
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

let DynamicSection = props => {
  const base_d = parseInt(props.offer.daily, 10);
  const base_t = parseInt(props.offer.total, 10);
  const tax = base_t - base_d * 4;

  let daily = increment(
    base_d,
    props.deal,
    props.paylater,
    props.cc,
    props.mileage
  );
  let total = daily * 4 + tax;

  return (
    <Section width="100%" py="2">
      <Box height="1px" width="100%" bg="neutral__300" />

      <Stack horizontal left mid width="100%" height="auto" pt="2" px="2">
        {props.deal == null ? null : (
          <>
            {props.deal === "3" ? null : (
              <Stack
                {...PillStyle}
                bg={
                  props.deal === "1" || props.deal === "0"
                    ? "yellow"
                    : "accent.4"
                }
                color={
                  props.deal === "1" || props.deal === "0"
                    ? "neutral__800"
                    : "white"
                }
                mr="2"
              >
                {props.deal === "1" || props.deal === "0" ? (
                  <Icon value={{ color: "#1f3366", size: "14px" }}>
                    <MdLocalOffer />
                  </Icon>
                ) : (
                  <Icon value={{ color: "#fff", size: "14px" }}>
                    <MdPhoneIphone />
                  </Icon>
                )}

                {props.deal === "1" || props.deal === "0" ? (
                  <Text ml="1" type200 medium>
                    {props.deal === "0" ? "" : "Member Price"}
                  </Text>
                ) : (
                  <Text ml="1" type200 medium>
                    Mobile exclusive
                  </Text>
                )}
              </Stack>
            )}

            <Stack
              {...PillStyle}
              bg={
                props.deal === "1" || props.deal === "0" ? "yellow" : "accent.4"
              }
              color={
                props.deal === "1" || props.deal === "0"
                  ? "neutral__800"
                  : "white"
              }
            >
              <Text type200 medium>
                {props.rate}% off
              </Text>
            </Stack>
          </>
        )}
      </Stack>

      <Stack horizontal split top width="100%">
        <Stack vertical mt="2" width="calc(70% - 12px )" pl="3">
          {props.mileage === "" ? (
            <Text type300 normal color={"neutral__700"}>
              Unlimited mileage
            </Text>
          ) : (
            <Text type300 normal color={"neutral__700"}>
              Limited mileage {props.mileage} miles
            </Text>
          )}

          {props.paylater === true ? (
            <Text type300 normal color={"accent.4"}>
              Reserve now pay later
            </Text>
          ) : (
            <Text type300 normal color={"accent.4"}>
              Pay now
            </Text>
          )}

          {props.paylater === true ? (
            <Text type300 normal color={"accent.4"}>
              Free cancellation
            </Text>
          ) : (
            <Text type300 normal color={"neutral__700"}>
              No cancellation or refund
            </Text>
          )}
        </Stack>
        <Stack horizontal right mid width="calc(28% - 12px )" pr="1">
          <Stack vertical right top width="100%" mt="2" pr="1">
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
          <Icon value={{ color: "#005aeb", size: "36px" }}>
            <MdChevronRight />
          </Icon>
        </Stack>
      </Stack>
    </Section>
  );
};

export default DynamicSection;
