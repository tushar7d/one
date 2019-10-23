import React from "react";
import Layout from "../Modules/layout";
import offer from "../offers2";
import d from "../deal";
import { Image, Box, Stack, Text, Icon } from "../Primitives";
import { MdPerson } from "react-icons/md";
import door from "../Assets/Images/door.png";
import bag from "../Assets/Images/bag.png";
import badge from "../Assets/Images/badge.png";

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
      <Stack horizonatl bottom left pr="2">
        <Image src={door} size="18px"></Image>
        <Text type300 normal color="neutral__700" ml="1">
          {info.doors}
        </Text>
      </Stack>
      <Stack horizonatl bottom left pr="2">
        <Image src={bag} size="18px"></Image>
        <Text type300 normal color="neutral__700" ml="1">
          {info.seats}
        </Text>
      </Stack>
    </Stack>
  );
};

let ScrollContainer = props => {
  return (
    <Stack vertical center top width="100vw" height="auto" overflowX="hidden">
      {props.children}
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

let Heading = {
  type500: true,
  medium: true,
  color: "neutral__900"
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
      <ScrollContainer>
        <Box
          bg={"transparent"}
          width={"calc(100vw - 24px)"}
          minHeight="11px"
          mb="3"
          mx={["0px", "0px", "2"]}
        >
          <Stack vertical center mid p="3" bg="white" mb="3" borderRadius="2">
            <Image src={offer[props.id].image} minHeight="60px" mb="2" />
            <Image
              src={offer[props.id].logo}
              minHeight="12px"
              maxHeight="20px"
              mb="2"
            />
            <Text {...Heading}>{offer[props.id].type}</Text>
            <Text type300 regular color="neutral__700">
              {offer[props.id].name}
            </Text>

            <IconStack info={offer[props.id]} />
          </Stack>
          <Stack vertical left top p="3" bg="white" mb="3" borderRadius="2">
            <Text {...Heading}>Reviews</Text>
            <Text type300 regular color="neutral__700">
              {100 * parseFloat(offer[props.id].rating, 10)}% recommend (
              {offer[props.id].rated}rated)
            </Text>
          </Stack>

          <Stack horizontal left mid p="3" bg="white" mb="3" borderRadius="2">
            <Image src={badge} size="70px" mr="2"></Image>
            <Stack vertical left top height="100%">
              <Text {...Heading}>Risk Free Booking!</Text>
              <Text type300 regular color="neutral__700">
                Lock in this fantastic price today
              </Text>
              <Text type300 medium color="neutral__900">
                Cancel free of charge anytime
              </Text>
            </Stack>
          </Stack>

          <Stack vertical left top p="3" bg="white" mb="3" borderRadius="2">
            <Text {...Heading} mb="2">
              Pick-up & Drop-off
            </Text>
            <Text type300 medium color="neutral__800">
              JFK Airport
            </Text>
            <Text type300 regular color="neutral__700">
              124-10 Conduit Ave, South Ozone Park. New York, USA 11420
            </Text>

            <Text type300 medium color="neutral__800" mt="2">
              Hours of operation
            </Text>
            <Text type300 regular color="neutral__700">
              9:30am - 4:30pm
            </Text>

            <Text type300 medium color="neutral__800" mt="2">
              Shuttle to counter and car
            </Text>
            <Text type300 regular color="neutral__700">
              Free shuttle to the rental car counter and car located off the
              airport
            </Text>
          </Stack>

          <Stack vertical left top p="3" bg="white" mb="3" borderRadius="2">
            <Text {...Heading} mb="2">
              Important Information
            </Text>

            <Text type300 regular color="neutral__700">
              Driver under 30 or over 70 years of age may need to pay an extra
              fee.
            </Text>
          </Stack>

          <Stack vertical left top p="3" bg="white" mb="3" borderRadius="2">
            <Stack vertical width="calc(70% - 12px )">
              {d[props.d].mileage === "" ? (
                <Text type300 normal color={"neutral__700"}>
                  Unlimited mileage
                </Text>
              ) : (
                <Text type300 normal color={"neutral__700"}>
                  Limited mileage {d[props.d].mileage} miles
                </Text>
              )}

              {d[props.d].paymentplan === true ? (
                <Text type300 normal color={"accent.4"}>
                  Reserve now pay later
                </Text>
              ) : (
                <Text type300 normal color={"accent.4"}>
                  Pay now
                </Text>
              )}

              {d[props.d].paymentplan === true ? (
                <Text type300 normal color={"accent.4"}>
                  Free cancellation
                </Text>
              ) : (
                <Text type300 normal color={"neutral__700"}>
                  No cancellation or refund
                </Text>
              )}
            </Stack>
          </Stack>
        </Box>
        {props.id} /{props.d}/{daily}/{total}
      </ScrollContainer>
    </Layout>
  );
}

export default Cis;
