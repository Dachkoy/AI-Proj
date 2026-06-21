export interface VehicleInfo {
  id: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  lastServiceDate: string;
  notes?: string;
}

export interface TireStatus {
  position: string;
  model: string;
  dotNumber: string;
  treadDepthMm: number;
  condition: string;
}

export interface VehicleState {
  id: string;
  vehicleId: string;
  odometerKm: number;
  serviceItems: ServiceItem[];
  tires: TireStatus[];
  notes?: string;
  updatedAt: string;
}
