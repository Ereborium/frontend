import { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import FoodListItem from "@components/FoodListItem";

const FoodList: FC = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}>
      <FoodListItem
        name={"Banana shake"}
        img_url={"/banana_shake.png"}
        price={"$4.99"}
      />
      <FoodListItem
        name={"Random meat"}
        img_url={"/random_meat.png"}
        price={"$18.99"}
      />
      <FoodListItem
        name={"Autumn soup"}
        img_url={"/autumn_soup.png"}
        price={"$14.99"}
      />
    </SimpleGrid>
  );
};

export default FoodList;
