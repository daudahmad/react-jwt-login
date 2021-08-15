import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "../Header";

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

it("renders without log out button if not logged in", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe("React with JWT");
});

it("renders with log out button if user logged in", () => {
  act(() => {
    render(<Header isAuthenticated={true} />, container);
  });
  expect(container.textContent).toBe("React with JWTLog out");
});
