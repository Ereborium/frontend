import React, { FC, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
