import { Response, Request, NextFunction } from "express";

import { ObjectSchema } from "joi";

import type { RequestBodyRefresh } from "../lib/types";

import { errorHandler } from "./errorHandler";

const validator =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data: RequestBodyRefresh = req.body;
    try {
      await schema.validateAsync(data);
    } catch (err: any) {
      next(err);
    }
  };

export { validator };
