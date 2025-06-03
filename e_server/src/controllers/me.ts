import { Request, Response } from "express";

const me = async (req: Request, res: Response): Promise<any> => {
  res.status(200).send("hello from server routes");
};

export { me };
