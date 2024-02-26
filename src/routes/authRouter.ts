import { Router } from "express";

import { refreshSchema } from "../lib/schemas";

import { validator } from "../middlewares/validator";

import { authController } from "../controllers/authController";

const router = Router();

router.post("/refresh-token", validator(refreshSchema), authController.refresh);

export default router;
