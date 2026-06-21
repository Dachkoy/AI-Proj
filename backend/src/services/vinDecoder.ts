import { VehicleInfo } from "../models/types";

export const decodeVin = async (vin: string): Promise<VehicleInfo> => {
  // Mock VIN decode; replace with a real VIN decoder service later.
  const normalized = vin.trim().toUpperCase();
  return {
    id: "",
    vin: normalized,
    make: "MockMake",
    model: "MockModel",
    year: 2022,
    trim: "Standard",
  };
};
