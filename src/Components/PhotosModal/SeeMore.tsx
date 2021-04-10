import React from "react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface ISeeMoreProps {
  href: string;
}

export const SeeMore = ({ href }: ISeeMoreProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        mt="2rem"
        mb="2rem"
        target="_blank"
        isExternal
        color="yellow.500"
      >
        Veja mais imagens
        <ExternalLinkIcon mx="1px" />
      </ChakraLink>
    </Link>
  );
};
