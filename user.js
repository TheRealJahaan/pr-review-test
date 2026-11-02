const fetchUser = (uid) => {
  if (!uid) {
    return null;
  }
  return { id: uid, name: `user ${uid}` };
};

const login = (userId, password) => {
  // look the user up first
  const found = fetchUser(userId);
  if (!password || password.length < 8) return false;
  return found !== null;
};

module.exports = { fetchUser, login };
