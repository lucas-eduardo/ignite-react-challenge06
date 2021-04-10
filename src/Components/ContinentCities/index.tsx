import React from "react";
import { Heading, Wrap } from "@chakra-ui/react";

import { CityCard } from "./CityCard";
import { ContentContainer } from "../ContentContainer";

interface ICity {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}

interface IModalInfo {
  city: string;
  query: string;
}

interface ContinentCitiesProps {
  cities: ICity[];
  onClickCard: (data: IModalInfo) => void;
}

export const ContinentCities = ({
  cities,
  onClickCard,
}: ContinentCitiesProps) => {
  return (
    <ContentContainer mt="4rem" flexDir="column" align="flex-start" mb="4rem">
      <Heading>Cidades +100</Heading>
      <Wrap
        mt="2rem"
        spacing="3rem"
        justify={["center", "center", "center", "flex-start"]}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            imageSrc={city.image}
            city={city.name}
            id={city.id}
            country={city.country}
            flagCode={city.code}
            onClickCard={onClickCard}
          ></CityCard>
        ))}
      </Wrap>
    </ContentContainer>
  );
};
