import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";

import { ContentContainer } from "../ContentContainer";
import { Slider } from "./Slider";

interface IContinent {
  id: string;
  name: string;
  call: string;
  callImage: string;
}

interface ICallToActionProps {
  continents: IContinent[];
}

export const CallToAction = ({ continents }: ICallToActionProps) => {
  return (
    <ContentContainer flexDir="column">
      <Box direction="row" w="90px" mt="4rem" mb="2rem">
        <Divider color="blue" size="4rem" borderColor="blue.800" />
      </Box>

      <Heading textAlign="center" fontSize={["xl"]}>
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slider continents={continents} />
    </ContentContainer>
  );
};
