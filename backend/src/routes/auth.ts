import { Router } from "express";
import { createUser, findUserByEmail } from "../data/storage";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const existing = findUserByEmail(email);
  if (existing) {
    if (existing.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    return res.json({ user: { id: existing.id, email: existing.email, name: existing.name }, token: `mock-token-${existing.id}` });
  }

  const user = createUser(email, password, "Car Owner");
  return res.status(201).json({ user: { id: user.id, email: user.email, name: user.name }, token: `mock-token-${user.id}` });
});

export default router;
