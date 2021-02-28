import { FC } from "react";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  HStack,
  Circle,
  Flex,
} from "@chakra-ui/react";

type ItemProps = {
  name: string;
  img_url: string;
  price: string;
};

const FoodListItem: FC<ItemProps> = ({ name, img_url, price }) => {
  return (
    <Grid
      key={name}
      minH="185px"
      templateColumns="minmax(140px, 2fr) 4fr"
      margin="10px"
      bg="#E5E5E5"
      borderRadius="18px"
    >
      <GridItem minH="185px">
        <Image
          src={img_url}
          objectFit="cover"
          h="100%"
          w="100%"
          borderRadius="18px 0 0 18px"
        />
      </GridItem>
      <GridItem
        minH="185px"
        p="10px 15px"
        display="flex"
        flexDirection="column"
      >
        <Box>
          <Text fontSize="24px" fontWeight="700">
            {name}
          </Text>
          <Text noOfLines={3} paddingTop="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie libero metus, ac molestie tellus ornare eget. Nullam sem
            urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
            congue augue, ac dignissim risus viverra non.
          </Text>
        </Box>
        <Flex h="100%" alignItems="flex-end">
          <Flex w="100%" justifyContent="space-between">
            <HStack spacing={3}>
              <Circle size="12px" bg="grey" />
              <Circle size="12px" bg="grey" marginLeft="12px" />
              <Circle size="12px" bg="grey" marginLeft="12px" />
            </HStack>
            <Text fontSize="18px" fontWeight="700">
              {price}
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default FoodListItem;
