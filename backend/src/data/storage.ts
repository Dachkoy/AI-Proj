import { User, VehicleInfo, VehicleState } from "../models/types";

const users: User[] = [];
const vehicles: VehicleInfo[] = [];
const states: VehicleState[] = [];

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const findUserByEmail = (email: string) => users.find((user) => user.email === email);

export const createUser = (email: string, password: string, name: string): User => {
  const user: User = {
    id: generateId(),
    email,
    password,
    name,
  };

  users.push(user);
  return user;
};

export const findVehicleByVin = (vin: string) => vehicles.find((vehicle) => vehicle.vin === vin);

export const saveVehicle = (vehicle: VehicleInfo): VehicleInfo => {
  const record: VehicleInfo = {
    ...vehicle,
    id: vehicle.id || generateId(),
  };

  vehicles.push(record);
  return record;
};

export const getVehicleById = (id: string) => vehicles.find((vehicle) => vehicle.id === id);

export const saveVehicleState = (stateData: Omit<VehicleState, "id" | "updatedAt">): VehicleState => {
  const record: VehicleState = {
    ...stateData,
    id: generateId(),
    updatedAt: new Date().toISOString(),
  };

  states.push(record);
  return record;
};

export const getVehicleStateByVehicleId = (vehicleId: string) =>
  states.find((state) => state.vehicleId === vehicleId);
