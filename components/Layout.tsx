import React, { FC } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout: FC = (props) => {
  return (
    <Flex
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      m="0 auto"
      {...props}
    >
      <Header />
      <Box m="50px 0">{props.children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
