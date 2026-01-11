import { Router } from "express";

import { requireAuth } from "./auth.middleware";

const router = Router();

router.get("/me", requireAuth, (req, res) => {
  res.json({
    message: "Access granted",
    userId: (req as any).userId,
  });
});

export default router;
