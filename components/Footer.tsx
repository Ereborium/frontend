import React, { FC } from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <Flex
      h="100px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      minW="100%"
      bg="#DDF5CE"
    >
      <Flex align="center" m="0 auto">
        <Heading as="h1" size="1g">
          This is footer
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
