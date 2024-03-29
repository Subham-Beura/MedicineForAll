import { Request, Response } from "express";
import { prisma } from "../users/users.controller";
export const getItemsFromCart = async (req: Request, res: Response) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: req.params.id,
      },
      include: {
        CartItems: {
          include: {
            medicinesInShops: {
              include: {
                shop: true,
                medicine: { include: { Company: true } },
              },
            },
          },
        },
      },
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const createCart = async (req: Request, res: Response) => {
  try {
    const cart = await prisma.cart.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const addItemsToCart = async (req: Request, res: Response) => {
  try {
    let cart = await prisma.cart.findFirst({
      where: {
        userId: req.params.id,
      },
    });
    let newCart;
    // If cart doesn't exist, create a new one
    if (!cart) {
      newCart = await prisma.cart.create({
        data: {
          ...req.body,
        },
      });
      cart = newCart;
    }

    await prisma.cartItems.create({
      data: {
        cartId: cart.id,
        medicineInShopsId: String(req.body.medicineInShopsId),
      },
    });
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const removeItemsFromCart = async (req: Request, res: Response) => {
  try {
    await prisma.cartItems.delete({
      where: {
        id: String(req.params.item_id),
      },
    });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const orderFromCart = async (req: Request, res: Response) => {
  try {
    const order = await prisma.orders.create({
      data: {
        userId: String(req.body.userId),
        cartId: String(req.body.cartId),
        transactionsId: String(req.body.transactionsId),
        isDelivered: false,
      },
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
