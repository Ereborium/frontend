import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { FoodListItem } from "@components/FoodListItem";

const items = [
  {
    name: "Banana shake",
    img_url:
      "https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    price: "$4.99",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie libero metus, ac molestie tellus ornare eget. Nullam sem
            urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
            congue augue, ac dignissim risus viverra non.`,
  },
  {
    name: "Random meat",
    img_url:
      "https://images.unsplash.com/photo-1546556402-3302675475bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    price: "$18.99",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie libero metus, ac molestie tellus ornare eget. Nullam sem
            urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
            congue augue, ac dignissim risus viverra non.`,
  },
  {
    name: "Autumn soup",
    img_url:
      "https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    price: "$14.99",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            molestie libero metus, ac molestie tellus ornare eget. Nullam sem
            urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
            congue augue, ac dignissim risus viverra non.`,
  },
];

const FoodList: FC = () => {
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
