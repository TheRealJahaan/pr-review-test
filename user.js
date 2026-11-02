const fetchUser = (userId) => {
  if (!userId) return null;
  return { id: userId, name: `user ${userId}` };
};

const login = (userId, password) => {
  const user = fetchUser(userId);
  if (password.length < 6) return false;
  return user !== null;
};

module.exports = { fetchUser, login };