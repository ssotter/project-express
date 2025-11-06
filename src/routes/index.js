import { Router } from "express";
import * as health from "../controllers/health.controller.js";
import users from "./users.routes.js";

const router = Router();

router.get("/health", health.get);
router.use("/users", users); // <— adiciona o grupo /api/users

export default router;
