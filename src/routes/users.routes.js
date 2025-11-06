import { Router } from "express";
import { z } from "zod";
import * as users from "../controllers/users.controller.js";
import { validate } from "../middlewares/validate.js";

const router = Router();

const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("E-mail inválido")
  })
});

router.get("/", users.list);
router.post("/", validate(createUserSchema), users.create);

export default router;
