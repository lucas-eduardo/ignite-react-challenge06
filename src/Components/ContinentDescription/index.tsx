import React from "react";
import { Flex, Text, Heading, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { ContentContainer } from "../ContentContainer";

interface IContinentDescriptionProps {
  about: string;
  countries: number;
  languages: number;
  cities100: number;
}

export const ContinentDetail = ({
  about,
  countries,
  languages,
  cities100,
}: IContinentDescriptionProps) => {
  return (
    <ContentContainer
      justify="space-between"
      mt="4rem"
      flexDir={["column", "column", "row"]}
    >
      <Text width={["100%", "100%", "40%"]} align="justify">
        {about}
      </Text>
      <Flex
        width={["100%", "100%", "40%"]}
        mt={["1rem", "1rem", "0"]}
        justify="space-around"
      >
        <Flex flexDir="column" align="center" justify="center">
          <Heading color="yellow.500">{countries}</Heading>
          <Text>países</Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Heading color="yellow.500">{languages}</Heading>
          <Text>línguas</Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Heading color="yellow.500">{cities100}</Heading>
          <Text>
            cidades +100
            <Tooltip
              hasArrow
              placement="top"
              label="Cidades entre as 100 mais visitadas do mundo"
              fontSize="md"
            >
              <InfoOutlineIcon
                color="gray:400"
                size="5px"
                w="0.5rem"
                h="0.5rem"
                ml="0.25rem"
              />
            </Tooltip>
          </Text>
        </Flex>
      </Flex>
    </ContentContainer>
  );
};
