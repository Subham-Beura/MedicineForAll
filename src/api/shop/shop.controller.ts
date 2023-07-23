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

export const getAllMedicinesByShop = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const medicines = await prisma.medicineInShops.findMany({
      where: {
        shopId: String(id),
      },
    });
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const addMedicineToShop = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const medicineStock = req.body;
    const medicine = await prisma.medicineInShops.create({
      data: {
        ...medicineStock,
        shopId: id,
      },
    });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getMedicineFromShopById = async (req: Request, res: Response) => {
  try {
    const { id: shopId, medicineInShopId } = req.params;
    const medicine = await prisma.medicineInShops.findUnique({
      where: {
        id: medicineInShopId,
      },
    });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const updateMedicineInShop = async (req: Request, res: Response) => {
  try {
    const { id, medicineId } = req.params;
    const medicineStock = req.body;
    const medicine = await prisma.medicineInShops.updateMany({
      where: {
        shopId: id,
        medicineId: medicineId,
      },
      data: {
        ...medicineStock,
      },
    });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteMedicineFromShop = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { medicineId } = req.body;
    const medicine = prisma.medicineInShops.deleteMany({
      where: {
        shopId: id,
        medicineId: medicineId,
      },
    });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error });
  }
};
