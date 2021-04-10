import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      600: "#999999",
      50: "#F5F8FA",
    },
    blue: {
      800: "#47585B",
    },
    yellow: {
      500: "#ffba08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "blue.800",
      },
    },
  },
});
