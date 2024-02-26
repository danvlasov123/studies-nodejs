import { Response, Request } from "express";

interface CustomError extends Error {
  status?: number;
}

const errorHandler = (err: CustomError, req: Request, res: Response) => {
  res.status(err?.status ?? 500).json({
    error: err.message ?? "Error",
  });
};

export { errorHandler };
