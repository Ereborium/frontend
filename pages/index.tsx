import { FC } from "react";
import Layout from "@components/Layout";
import FoodList from "@components/Food/FoodList";
import { GetServerSideProps } from "next";
import { config } from "config";
import type { FoodServerSideProps } from "@components/Food/FoodTypes";

const Home: FC<FoodServerSideProps> = ({ items }) => {
  return (
    <Layout>
      <FoodList items={items} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch(`${config.backendUrl}/food`);
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
};

export default Home;
