import React from "react";
import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex w="100%" h="6.25rem" align="center" justify="center">
      <Link href="/">
        <a>
          <Image src="/assets/logo.png"></Image>
        </a>
      </Link>
    </Flex>
  );
};
