import { Request, Response } from "express";
import { prisma } from "../users/users.controller";
export const searchMedicines = async (req: Request, res: Response) => {
  try {
    const filter = req.body;
    const medicines = await prisma.medicine.findMany({
      where: {
        ...filter,
      },
      include: {
        MedicineInShops: {
          include: {
            shop: {
              include: {
                Address: true,
              },
            },
          },
        },
        Company: true,
      },
    });
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ error });
  }
};
