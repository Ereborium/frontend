import React from "react";
import { render, screen } from "../test-utils";
import Home from "@pages/index";

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    render(<Home />, {});
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});
