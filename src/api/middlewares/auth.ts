import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export const SECRET_KEY: Secret = "Never Gonna Give You Up";

export interface TokenRequest extends Request {
  token: string | JwtPayload;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error();
    const decoded = jwt.verify(token, SECRET_KEY!);
    (req as TokenRequest).token = decoded;
    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      msg: "No Authorization. Please Sign in",
    });
  }
};
