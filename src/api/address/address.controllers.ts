import { Request, Response } from "express";
import { TokenRequest } from "../middlewares/auth";
import { prisma } from "../users/users.controller";

export const getAddressList = async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  if (!userId) return res.status(400).json({ message: "Invalid id" });
  const addressList = await prisma.address.findMany({
    where: { userId: userId },
  });
  console.log(userId);
  res.json(addressList);
};
export const createAddress = async (req: Request, res: Response) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: "Invalid id" });

  const address = await prisma.address.create({
    data: {
      ...req.body,
    },
  });
  res.json(address);
};
