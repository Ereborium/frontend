import { FC } from "react";
import { chakra, Box, Text, HStack, Circle, Flex } from "@chakra-ui/react";
import Image from "next/image";
import type { FoodItem } from "@components/Food/FoodTypes";

const NextImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "sizes", "layout"].includes(prop),
});

export const FoodListItem: FC<FoodItem> = ({
  name,
  img_url,
  price,
  description,
}) => {
  return (
    <Flex borderRadius="xl" overflow="hidden">
      {/* @TODO it's not scaling properly */}
      <Box w="100%" maxH="180px" maxW={["35%", "30%"]}>
        <NextImage
          src={img_url}
          layout="responsive"
          width={200}
          height={300}
          objectFit="cover"
          sizes="30vw"
        />
      </Box>
      <Flex px={4} pb={1} direction="column" w="75%">
        <Text fontSize="2xl" fontWeight="700">
          {name}
        </Text>
        <Text noOfLines={3} paddingTop="3">
          {description}
        </Text>
        <Flex justify="space-between" mt="auto">
          <HStack spacing="3">
            <Circle size="0.75rem" bg="grey" />
            <Circle size="0.75rem" bg="grey" />
            <Circle size="0.75rem" bg="grey" />
          </HStack>
          <Text fontSize="lg" fontWeight="600">
            {price}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
