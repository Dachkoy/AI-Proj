import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { fetchVehicle } from "../services/api";
import Screen from "../components/ui/Screen";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionHeader from "../components/ui/SectionHeader";

type Props = NativeStackScreenProps<RootStackParamList, "VehicleSummary">;

export default function VehicleSummaryScreen({ route, navigation }: Props) {
  const { vehicleId } = route.params;
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVehicle(vehicleId)
      .then((result) => setVehicle(result.vehicle))
      .catch(() => setError("Unable to load vehicle data."))
      .finally(() => setLoading(false));
  }, [vehicleId]);

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator />
      </Screen>
    );
  }

  return (
    <Screen>
      <SectionHeader>Vehicle Summary</SectionHeader>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {vehicle ? (
        <View style={styles.card}>
          <Text style={styles.label}>Make</Text>
          <Text style={styles.value}>{vehicle.make}</Text>
          <Text style={styles.label}>Model</Text>
          <Text style={styles.value}>{vehicle.model}</Text>
          <Text style={styles.label}>Year</Text>
          <Text style={styles.value}>{vehicle.year}</Text>
          <Text style={styles.label}>VIN</Text>
          <Text style={styles.value}>{vehicle.vin}</Text>
        </View>
      ) : null}
      <PrimaryButton title="Enter Current State" onPress={() => navigation.navigate("VehicleState", { vehicleId })} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  label: {
    fontWeight: "600",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
  error: { color: "#B00020", marginBottom: 12, textAlign: "center" },
});
