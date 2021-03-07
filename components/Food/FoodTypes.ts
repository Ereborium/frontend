export interface FoodItem {
  name: string;
  img_url: string;
  price: string;
  description: string;
}

export type FoodItemList = FoodItem[];

export interface FoodServerSideProps {
  items: FoodItemList;
}
