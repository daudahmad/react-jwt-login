import React, { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import login from "../services/auth.service";
import "../styles.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    try {
      const result = await login(username, password);
      if (result.access_token) {
        setAccessToken(result.access_token);
        setIsAuthenticated(true);
        setIsLoading(false);
      }
    } catch (error) {
      if (error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(error.response.statusText);
      }
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessToken("");
    setErrorMessage("");
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main>
        {!isAuthenticated && (
          <Login
            isLoading={isLoading}
            errorMessage={errorMessage}
            handleLogin={handleLogin}
          />
        )}
        {isAuthenticated && <Home accessToken={accessToken} />}
      </main>
    </div>
  );
}
