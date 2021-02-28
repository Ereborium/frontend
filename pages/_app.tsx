import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
};

export default MyApp;
