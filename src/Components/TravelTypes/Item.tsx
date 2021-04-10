import React from "react";
import { Flex, Image, Text, Icon } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

interface ItemProps {
  imageSrc: string;
  title: string;
}

export const Item = ({ imageSrc, title }: ItemProps) => {
  const isMobileVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
  });
  return (
    <Flex
      flexDir={isMobileVersion ? "row" : "column"}
      align="center"
      justify="flex-start"
      width={["45%", "35%", "auto"]}
      mt={["1rem", "1rem", "0"]}
    >
      {!isMobileVersion && <Image src={imageSrc}></Image>}
      {isMobileVersion && (
        <Icon viewBox="0 0 200 200" color="yellow.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      )}
      <Text
        fontWeight="semibold"
        fontSize={["1rem", "1.1rem", "1.5rem"]}
        ml={["1rem", "1rem", "0"]}
      >
        {title}
      </Text>
    </Flex>
  );
};
