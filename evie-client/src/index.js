import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
