import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { FoodListItem } from "@components/Food/FoodListItem";
import type { FoodServerSideProps } from "@components/Food/FoodTypes";

const FoodList: FC<FoodServerSideProps> = ({ items }) => {
  return (
    <VStack maxW="80ch" spacing={4}>
      {items.map((item) => (
        <FoodListItem
          key={item.name}
          name={item.name}
          img_url={item.img_url}
          price={item.price}
          description={item.description}
        />
      ))}
    </VStack>
  );
};

export default FoodList;
