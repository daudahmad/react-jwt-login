import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Home from "../Home";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without access token if not provided", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe(
    "You have successfully logged in!Your JWT access token is"
  );
});

it("renders withaccess token if provided in props", () => {
  act(() => {
    render(<Home accessToken="sample_token" />, container);
  });
  expect(container.textContent).toBe(
    "You have successfully logged in!Your JWT access token issample_token"
  );
});
