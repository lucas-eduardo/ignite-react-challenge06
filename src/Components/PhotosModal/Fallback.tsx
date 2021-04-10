import React from "react";
import { Skeleton, Wrap, Flex } from "@chakra-ui/react";

export const Fallback = () => {
  return (
    <Flex width="760px" flexDir="column" align="center">
      <Skeleton width="720px" height="480px" />

      <Wrap mt="2rem" align="flex-start" justify="center">
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
        <Skeleton width="180px" height="100px" />
      </Wrap>
    </Flex>
  );
};
