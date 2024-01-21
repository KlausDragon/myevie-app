import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ProfileContext.Provider
        value={{
          firstName: null,
          lastName: null,
          experience: 0,
          level: 0,
        }}
      >
        <AppRouter />
      </ProfileContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
