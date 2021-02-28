import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component resetCss {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
