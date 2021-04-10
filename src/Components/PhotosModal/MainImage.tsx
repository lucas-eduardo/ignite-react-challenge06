import React from "react";
import { Image } from "@chakra-ui/react";

interface IMainImageProps {
  src: string;
}

export default ({ src }: IMainImageProps) => {
  return (
    <Image
      width="95%"
      maxWidth="720px"
      src={src}
    />
  );
};
