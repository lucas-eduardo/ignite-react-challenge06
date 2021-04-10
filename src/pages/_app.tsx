import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";

import { theme } from "../styles/theme";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
