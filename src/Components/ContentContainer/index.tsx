import React, { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface IContentContainerProps extends FlexProps {
  children: ReactNode;
}

export const ContentContainer = ({
  children,
  ...rest
}: IContentContainerProps) => {
  return (
    <Flex w="90%" maxWidth="1240px" align="center" {...rest}>
      {children}
    </Flex>
  );
};
