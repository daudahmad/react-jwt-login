import axios from "axios";

const login = async (username, password) => {
  console.log('login called');
  const result = await axios.post("/api/auth/login", {
    username,
    password,
  });

  return result.data;
};

export default login;
