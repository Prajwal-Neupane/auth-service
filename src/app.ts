import express from "express";

import cors from "cors";
import { prisma } from "./config/prisma";
import authRoutes from "./modules/auth/auth.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (_req, res) => {
  res.json({ message: "Auth API is running" });
});

app.get("/health/db", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ database: "connected" });
  } catch (error) {
    res.status(500).json({ database: "error", details: error });
  }
});

export default app;
