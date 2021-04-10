import React from "react";
import Link from "next/link";
import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";

interface ISliderItemProps {
  backgroundImageSrc: string;
  title: string;
  subtitle: string;
  href: string;
}

export const SliderItem = ({
  href,
  backgroundImageSrc,
  title,
  subtitle,
}: ISliderItemProps) => {
  return (
    <Flex
      backgroundImage={`url('${backgroundImageSrc}')`}
      direction="row"
      justify="center"
      align="center"
      h="450px"
      color="gray.50"
      flexDir="column"
    >
      <Link href={href} passHref>
        <ChakraLink
          _hover={{ color: "yellow.500" }}
          justify="center"
          align="center"
        >
          <Heading fontSize={["xl", "3xl", "5xl"]} fontWeight="bold">
            {title}
          </Heading>
          <Text
            mt="1rem"
            color="gray.300"
            fontWeight="bold"
            fontSize={["md", "lg", "xl", "1xl"]}
          >
            {subtitle}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
};
