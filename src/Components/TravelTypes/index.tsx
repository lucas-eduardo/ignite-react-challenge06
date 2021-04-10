import React from "react";

import { Item } from "./Item";
import { ContentContainer } from "../ContentContainer";

export const TravelTypes = () => {
  return (
    <ContentContainer
      mt="6rem"
      flexWrap={["wrap", "wrap", "nowrap"]}
      justify={["center", "center", "space-between"]}
      align="center"
    >
      <Item imageSrc="/assets/cocktail.png" title="Vida Noturna" />
      <Item imageSrc="/assets/surf.png" title="praia" />
      <Item imageSrc="/assets/building.png" title="moderno" />
      <Item imageSrc="/assets/museum.png" title="clássico" />
      <Item imageSrc="/assets/earth.png" title="e mais" />
    </ContentContainer>
  );
};
