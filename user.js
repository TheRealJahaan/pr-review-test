function fetchUser(id) {
  if (!id) {
    return null;
  }
  return { id: id, name: `user ${id}` };
}

function login(id, password) {
  const user = fetchUser(id);
  if (password.length < 6) return false;
  return user !== null;
}

module.exports = { fetchUser, login };