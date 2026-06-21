import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { decodeVin } from "../services/api";
import Screen from "../components/ui/Screen";
import TextField from "../components/ui/TextField";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionHeader from "../components/ui/SectionHeader";

type Props = NativeStackScreenProps<RootStackParamList, "VinEntry">;

export default function VinEntryScreen({ navigation }: Props) {
  const [vin, setVin] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleDecode = async () => {
    setError(null);
    try {
      const vehicle = await decodeVin(vin);
      navigation.navigate("VehicleSummary", { vehicleId: vehicle.id });
    } catch (err) {
      setError("Unable to decode VIN. Please verify and try again.");
    }
  };

  return (
    <Screen>
      <View style={styles.center}>
        <SectionHeader>Enter your vehicle VIN</SectionHeader>
        <TextField label="VIN" value={vin} onChangeText={setVin} placeholder="Enter VIN" />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <PrimaryButton title="Decode VIN" onPress={handleDecode} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center" },
  error: { color: "#B00020", marginVertical: 8, textAlign: "center" },
});
