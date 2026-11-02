const fetchUser = (userId) => {
  if (!userId) return null;
  return { id: userId, name: `user ${userId}` };
};

const login = (userId, password) => {
    const currentUser = fetchUser(userId);
  if (!password || password.length < 8) return false;
    return currentUser !== null;
};

module.exports = { fetchUser, login };

