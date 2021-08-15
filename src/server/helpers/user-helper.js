/*
  Keep user information in memory for this demo
  In a real app we will store users in db and passwords will be encryped
*/
const USERS = [
  {
    username: "jack",
    password: "jack123",
  },
  {
    username: "bill",
    password: "bill123",
  },
  {
    username: "aa",
    password: "aa",
  },
];

const authenticateUser = ({ username, password }) => {
  return (
    USERS.filter(
      (user) => user.username === username && user.password === password
    ).length === 1
  );
};

module.exports = { authenticateUser };
