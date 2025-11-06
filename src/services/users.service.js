// Simples "db" em memória para fins didáticos
const users = [];

export const UsersService = {
  list() {
    return users;
  },
  create({ name, email }) {
    const id = String(Date.now());
    const user = { id, name, email };
    users.push(user);
    return user;
  }
};
