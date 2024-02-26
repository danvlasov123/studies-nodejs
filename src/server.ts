import express from "express";

import authRouter from "./routes/authRouter";

import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.use(errorHandler);

export { app };
