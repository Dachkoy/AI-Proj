import { Router } from "express";
import { decodeVin } from "../services/vinDecoder";
import { findVehicleByVin, saveVehicle, getVehicleById, saveVehicleState, getVehicleStateByVehicleId } from "../data/storage";

const router = Router();

router.post("/vin", async (req, res) => {
  const { vin } = req.body as { vin?: string };
  if (!vin) {
    return res.status(400).json({ error: "VIN is required." });
  }

  const existing = findVehicleByVin(vin);
  if (existing) {
    return res.json({ vehicle: existing });
  }

  const decoded = await decodeVin(vin);
  const saved = saveVehicle(decoded);
  return res.status(201).json({ vehicle: saved });
});

router.get("/:id", (req, res) => {
  const vehicle = getVehicleById(req.params.id);
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found." });
  }
  const state = getVehicleStateByVehicleId(vehicle.id);
  return res.json({ vehicle, state });
});

router.post("/:id/state", (req, res) => {
  const vehicle = getVehicleById(req.params.id);
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found." });
  }

  const stateData = req.body as any;
  if (typeof stateData.odometerKm !== "number") {
    return res.status(400).json({ error: "Odometer reading is required." });
  }

  const state = saveVehicleState({
    vehicleId: vehicle.id,
    odometerKm: stateData.odometerKm,
    serviceItems: Array.isArray(stateData.serviceItems) ? stateData.serviceItems : [],
    tires: Array.isArray(stateData.tires) ? stateData.tires : [],
    notes: stateData.notes ?? "",
  });

  return res.status(201).json({ state });
});

export default router;
