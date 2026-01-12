import { NextFunction, Request, Response } from "express";

import { prisma } from "../config/prisma";

export const requireApiKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || typeof apiKey !== "string") {
    return res.status(401).json({ error: "API Key required" });
  }
  const project = await prisma.project.findUnique({
    where: { apiKey },
  });
  if (!project) {
    return res.status(401).json({ error: "Invalid API Key" });
  }
  next();
};
