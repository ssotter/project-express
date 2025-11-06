import { UsersService } from "../services/users.service.js";

export const list = (_req, res) => {
  return res.json(UsersService.list());
};

export const create = (req, res) => {
  const user = UsersService.create(req.body);
  return res.status(201).json(user);
};
