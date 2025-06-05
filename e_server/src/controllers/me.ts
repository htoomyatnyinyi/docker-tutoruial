import { Request, Response } from "express";

const me = async (req: Request, res: Response): Promise<any> => {
  res.status(200).send("hello from server routes after change with olume");
};

const data = [
  { name: "Blah", age: 32, bio: "lbah .ahf'" },
  { name: "kafle", age: 34, bio: "lfkajflekjflek" },
  { name: "Blah", age: 33, bio: "lbah .ahf'" },
  { name: "kafle", age: 31, bio: "lfkajflekjflek" },
];

const jsonData = async (req: Request, res: Response): Promise<any> => {
  res.status(200).json(data);
};

export { me, jsonData };
