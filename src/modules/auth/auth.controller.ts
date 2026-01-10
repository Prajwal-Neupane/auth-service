import { Request, Response } from "express";
import { registerUser } from "./auth.service";
export const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
