import { Request, Response } from "express";
import { loginUser, registerUser } from "./auth.service";
export const registerController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const tokens = await loginUser(email, password);
    res.status(200).json(tokens);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

import { refreshAccessToken } from "./auth.service";

export const refreshController = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const token = await refreshAccessToken(refreshToken);
    res.json(token);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
