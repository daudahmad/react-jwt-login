import React, { useState } from "react";

export default function Login({ isLoading, errorMessage, handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="container py-4 text-center form-signin bg-light border rounded-3 mt-5">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form name="form" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Log In</h1>
        <div className="form-floating mb-1">
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="username"
            value={username}
            required
            onChange={handleUsernameChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-1">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          {isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
            ></span>
          )}
          Log In
        </button>
      </form>
    </div>
  );
}
