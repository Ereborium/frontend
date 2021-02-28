import { FC } from "react";
import Layout from "@components/Layout";
import FoodList from "@components/FoodList";

const Home: FC = () => {
  return (
    <Layout>
      <FoodList />
    </Layout>
  );
};

export default Home;
