import { Request, Response } from "express";
import { prisma } from "../users/users.controller";
export const getAllMedicines = async (req: Request, res: Response) => {
  const medicines = await prisma.medicine.findMany();
  res.status(200).json({
    medicines,
  });
};
export const getMedicineById = async (req: Request, res: Response) => {
  const { med_id } = req.params;
  const medicine = await prisma.medicine.findUnique({
    where: {
      id: med_id,
    },
  });
  if (!medicine) return res.status(404).json({ message: "Medicine not found" });
  res.status(200).json({
    medicine,
  });
};
export const createMedicine = async (req: Request, res: Response) => {
  const { name, rating, companyId } = req.body;
  const medicine = await prisma.medicine.create({
    data: {
      name,
      rating,
      companyId: companyId && companyId,
    },
  });
  res.status(201).json({
    medicine,
  });
};
export const updateMedicine = async (req: Request, res: Response) => {
  const { med_id } = req.params;
  const { name, rating, companyId } = req.body;
  const medicine = await prisma.medicine.update({
    where: {
      id: med_id,
    },
    data: {
      ...req.body,
    },
  });
  res.status(200).json({
    medicine,
  });
};
export const deleteMedicine = async (req: Request, res: Response) => {
  const { med_id } = req.params;
  const medicine = await prisma.medicine.delete({
    where: {
      id: med_id,
    },
  });
  res.status(200).json({
    medicine,
  });
};
