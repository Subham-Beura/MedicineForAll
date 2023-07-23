import { Request, Response } from "express";
import { prisma } from "../users/users.controller";

export const getAllShops = async (req: Request, res: Response) => {
  const shops = await prisma.shop.findMany();
  res.json(shops);
};
export const getShopById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const shop = await prisma.shop.findUnique({
    where: {
      id: String(id),
    },
  });
  if (!shop) return res.status(404).json({ error: "Shop not found" });
  res.status(200).json(shop);
};
export const createShop = async (req: Request, res: Response) => {
  try {
    const shop = await prisma.shop.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateShop = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shop = await prisma.shop.update({
      where: {
        id: String(id),
      },
      data: {
        ...req.body,
      },
    });
    if (!shop) return res.status(404).json({ error: "Shop not found" });
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteShop = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const shop = await prisma.shop.delete({
      where: {
        id: String(id),
      },
    });
    if (!shop) return res.status(404).json({ error: "Shop not found" });
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ error });
  }
};

