import express, { json } from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import vehicleRouter from "./routes/vehicle";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send({ status: "ok", service: "Car Companion Backend" });
});

app.use("/auth", authRouter);
app.use("/vehicle", vehicleRouter);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
