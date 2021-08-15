const { login } = require("../routes/auth");

let mockResponse;

describe("Auth unit tests", () => {
  beforeAll(() => {
    mockResponse = () => {
      const res = {};
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };
  });

  test("should return 200 and access_token if valid credentials are supplied", () => {
    const req = { body: { username: "jack", password: "jack123" } };
    const res = mockResponse();

    login(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      access_token: expect.any(String),
      expires_in: "1h",
    });
  });

  test("should return 401 error if invalid credentials", () => {
    const req = { body: { username: "invalid", password: "invalid" } };
    const res = mockResponse();

    login(req, res);

    expect(res.status).toBeCalledWith(401);
    expect(res.json).toBeCalledWith({
      message: "Invalid username or password",
    });
  });

  test("should return 400 if password is not provided", () => {
    const req = { body: { username: "jack" } };
    const res = mockResponse();

    login(req, res);

    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({
      message: "Username or password not provided",
    });
  });
});
