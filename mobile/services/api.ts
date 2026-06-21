const API_BASE = "http://localhost:4000";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

export const decodeVin = async (vin: string) => {
  const response = await fetch(`${API_BASE}/vehicle/vin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vin }),
  });

  if (!response.ok) {
    throw new Error("VIN decode failed");
  }

  const data = await response.json();
  return data.vehicle;
};

export const fetchVehicle = async (vehicleId: string) => {
  const response = await fetch(`${API_BASE}/vehicle/${vehicleId}`);
  if (!response.ok) {
    throw new Error("Vehicle fetch failed");
  }
  return response.json();
};

export const saveVehicleState = async (vehicleId: string, state: any) => {
  const response = await fetch(`${API_BASE}/vehicle/${vehicleId}/state`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });

  if (!response.ok) {
    throw new Error("Saving state failed");
  }
  return response.json();
};
