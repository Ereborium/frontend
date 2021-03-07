import React from "react";
import { render } from "../test-utils";
import Home from "@pages/index";

describe("Home page", () => {
  it("Test test", () => {
    const { debug } = render(<Home items={[]} />, {});
    debug();
  });
});
