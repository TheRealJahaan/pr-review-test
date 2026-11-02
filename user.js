const fetchUser = (userId) => {
  if (!userId) {
    return null;
  }
  return { id: userId, name: `user ${userId}` };
};

const login = (userId, pw) => {
  const found = fetchUser(userId);
  if (!pw || pw.length < 10) return false;
  return found !== null;
};

module.exports = { fetchUser, login };