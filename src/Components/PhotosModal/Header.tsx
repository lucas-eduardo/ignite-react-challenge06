import React from "react";
import Link from "next/link";
import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Flex
      width="100%"
      align="center"
      pl={["0", "1rem"]}
      pr={["2rem", "2rem"]}
      justify="space-between"
    >
      <Heading color="yellow.500" fontSize={["1.5rem", "4xl"]}>
        {title}
      </Heading>
      <Link href="https://unsplash.com" passHref>
        <ChakraLink target="_blank">
          <Text fontSize={["0.4rem", "0.5rem"]} align="center">
            powered by <br /> unsplash
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
};
