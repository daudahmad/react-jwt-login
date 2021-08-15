import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Login from "../Login";

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

it("renders correctly", () => {
  act(() => {
    render(<Login isLoading={false} errorMessage={""} />, container);
  });
  expect(container.textContent).toBe("Please Log InUsernamePasswordLog In");
  expect(container.querySelectorAll("input[type='text']")).toHaveLength(1);
  expect(container.querySelector("input[type='text']").value).toBe("");
  expect(container.querySelectorAll("input[type='password']")).toHaveLength(1);
  expect(container.querySelector("input[type='password']").value).toBe("");
  expect(container.querySelectorAll("button")).toHaveLength(1);
  expect(container.querySelector("button").innerHTML).toBe("Log In");
  expect(container.querySelector(".alert")).toBeNull();
  expect(container.querySelector(".spinner-border")).toBeNull();

  act(() => {
    render(
      <Login isLoading={true} errorMessage={"Invalid inputs"} />,
      container
    );
  });
  expect(container.textContent).toBe(
    "Invalid inputsPlease Log InUsernamePasswordLog In"
  );
  expect(container.querySelector(".alert").innerHTML).toBe("Invalid inputs");
  expect(container.querySelector(".spinner-border")).toBeDefined();
});

it("calls handleLogin on submit button click", () => {
  const handleLogin = jest.fn();
  act(() => {
    render(
      <Login isLoading={false} errorMessage={""} handleLogin={handleLogin} />,
      container
    );
  });

  const submitButton = container.querySelector("button");
  expect(submitButton.innerHTML).toBe("Log In");

  act(() => {
    submitButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(handleLogin).toHaveBeenCalledTimes(1);
});
