import { rest, DefaultRequestBody } from "msw";
import { config } from "config";
import type { FoodItemList } from "@components/Food/FoodTypes";

export const getFood = rest.get<DefaultRequestBody, FoodItemList>(
  `${config.backendUrl}/food`,
  (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Banana shake",
          img_url: "photo-1587815073078-f636169821e3_ruc5nw.jpg",
          price: "$4.99",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie libero metus, ac molestie tellus ornare eget. Nullam sem
                  urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
                  congue augue, ac dignissim risus viverra non.`,
        },
        {
          name: "Random meat",
          img_url: "photo-1546556402-3302675475bc_xkmt8m.jpg",
          price: "$18.99",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie libero metus, ac molestie tellus ornare eget. Nullam sem
                  urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
                  congue augue, ac dignissim risus viverra non.`,
        },
        {
          name: "Autumn soup",
          img_url: "photo-1601314002592-b8734bca6604_jquxqi.png",
          price: "$14.99",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  molestie libero metus, ac molestie tellus ornare eget. Nullam sem
                  urna, posuere at tellus quis, ornare dignissim magna. Donec tempor
                  congue augue, ac dignissim risus viverra non.`,
        },
      ])
    );
  }
);
