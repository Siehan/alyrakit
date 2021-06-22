export const styles = {
  global: (props) => ({
    "html, body": {
      color: props.colorMode === "light" ? "gray.700" : "white",
      bg: props.colorMode === "light" ? "white" : "teal.800",
    },
  }),
};

// src/theme/styles.js
/*

import { mode } from "@chakra-ui/theme-tools";
export const styles = {
  global: (props) => ({
    "html, body": {
      //color: props.colorMode === "light" ? "gray.800" : "white",
      //bg: props.colorMode === "light" ? "white" : "teal.800",
      color: mode("gray.800", "white")(props),
      bg: mode("white", "teal.800")(props),
    },
  }),
};


*/
export default styles;
