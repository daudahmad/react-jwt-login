import React from "react";
import { render, fireEvent } from "@testing-library/react";
import login from "../../services/auth.service";
import App from "../App";

jest.mock("../../services/auth.service");

test("It should update inputs correctly and call the login service", () => {
  login.mockResolvedValue({ data: { access_token: "sample_token" } });
  const utils = render(<App />);

  const usernameInput = utils.getByLabelText("Username");
  fireEvent.change(usernameInput, { target: { value: "jack" } });
  expect(usernameInput.value).toBe("jack");

  const passwordInput = utils.getByLabelText("Password");
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  expect(passwordInput.value).toBe("password123");

  const submitButton = utils.getByRole("button");
  fireEvent.click(submitButton);
  expect(login).toHaveBeenCalledTimes(1);
  expect(login).toHaveBeenCalledWith("jack", "password123");
});
