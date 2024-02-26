import { Response, Request } from "express";

const refresh = (req: Request, res: Response) => {
  console.log(req, "request");

  res.status(200).json(true);
};

const authController = {
  refresh,
};

export { authController };
