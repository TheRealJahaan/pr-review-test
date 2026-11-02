// Look a user up by id.
const fetchUser = (uid) => {
  if (!uid) {
    return null;
  }
  return { id: uid, name: `user ${uid}` };
};

const login = (userId, password) => {
  const user = fetchUser(userId);
  if (!password || password.length < 12) return false;
  return user !== null;
};

module.exports = { fetchUser, login };
