import React from "react";
import { Box, Stack, Text, Icon } from "../Primitives";

import Section from "../Global/Section";

import { MdChevronRight } from "react-icons/md";

let DynamicSection = props => {
  return (
    <Section width="100%" py="2">
      <Box height="1px" width="100%" bg="neutral__300" />

      <Stack horizontal split top width="100%">
        <Stack vertical mt="2" width="calc(70% - 12px )" pl="3">
          <Text type300 normal color={"neutral__700"}>
            Unlimited mileage
          </Text>
          <Text type300 normal color={"accent.4"}>
            Reserve now pay later
          </Text>
          <Text type300 normal color={"accent.4"}>
            Free cancellation
          </Text>
        </Stack>
        <Stack horizontal right mid width="calc(28% - 12px )" pr="1">
          <Stack vertical right top width="100%" mt="2" pr="1">
            <Text type600 bold color={"neutral__800"} textAlign="right">
              $26
            </Text>
            <Text type200 normal color={"neutral__500"} textAlign="right">
              per day
            </Text>
            <Text type200 normal color={"neutral__500"} textAlign="right">
            ${props.offer.price.total} total
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
