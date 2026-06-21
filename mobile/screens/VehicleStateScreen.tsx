import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { saveVehicleState } from "../services/api";
import Screen from "../components/ui/Screen";
import TextField from "../components/ui/TextField";
import PrimaryButton from "../components/ui/PrimaryButton";
import SectionHeader from "../components/ui/SectionHeader";

type Props = NativeStackScreenProps<RootStackParamList, "VehicleState">;

function TireInput({ index, tire, onChange }: { index: number; tire: any; onChange: (value: any) => void }) {
  return (
    <View style={styles.section}>
      <SectionHeader>Tire {index + 1}</SectionHeader>
      <TextField label="Position" value={tire.position} onChangeText={(text) => onChange({ ...tire, position: text })} />
      <TextField label="Model" value={tire.model} onChangeText={(text) => onChange({ ...tire, model: text })} />
      <TextField label="DOT number" value={tire.dotNumber} onChangeText={(text) => onChange({ ...tire, dotNumber: text })} />
      <TextField label="Tread depth (mm)" value={tire.treadDepthMm?.toString() ?? ""} onChangeText={(text) => onChange({ ...tire, treadDepthMm: Number(text) })} />
      <TextField label="Condition" value={tire.condition} onChangeText={(text) => onChange({ ...tire, condition: text })} />
    </View>
  );
}

export default function VehicleStateScreen({ route }: Props) {
  const { vehicleId } = route.params;
  const [odometerKm, setOdometerKm] = useState("");
  const [notes, setNotes] = useState("");
  const [serviceItems, setServiceItems] = useState([{ id: "1", name: "Oil Change", lastServiceDate: "", notes: "" }]);
  const [tires, setTires] = useState([
    { position: "Front Left", model: "", dotNumber: "", treadDepthMm: 0, condition: "" },
    { position: "Front Right", model: "", dotNumber: "", treadDepthMm: 0, condition: "" },
    { position: "Rear Left", model: "", dotNumber: "", treadDepthMm: 0, condition: "" },
    { position: "Rear Right", model: "", dotNumber: "", treadDepthMm: 0, condition: "" },
  ]);

  const handleSubmit = async () => {
    await saveVehicleState(vehicleId, {
      odometerKm: Number(odometerKm),
      serviceItems,
      tires,
      notes,
    });
  };

  return (
    <Screen>
      <SectionHeader>Current Vehicle State</SectionHeader>
      <TextField label="Odometer reading (km)" value={odometerKm} onChangeText={setOdometerKm} />

      <SectionHeader>Service items</SectionHeader>
      <FlatList
        data={serviceItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.section}>
            <TextField label="Service item name" value={item.name} onChangeText={(text) => {
              const copy = [...serviceItems];
              copy[index] = { ...copy[index], name: text };
              setServiceItems(copy);
            }} />
            <TextField label="Last service date" value={item.lastServiceDate} onChangeText={(text) => {
              const copy = [...serviceItems];
              copy[index] = { ...copy[index], lastServiceDate: text };
              setServiceItems(copy);
            }} />
            <TextField label="Notes" value={item.notes} onChangeText={(text) => {
              const copy = [...serviceItems];
              copy[index] = { ...copy[index], notes: text };
              setServiceItems(copy);
            }} />
          </View>
        )}
      />

      <SectionHeader>Tire details</SectionHeader>
      {tires.map((tire, index) => (
        <TireInput key={index} index={index} tire={tire} onChange={(updated) => {
          const copy = [...tires];
          copy[index] = updated;
          setTires(copy);
        }} />
      ))}

      <TextField label="Notes" value={notes} onChangeText={setNotes} />
      <PrimaryButton title="Save Vehicle State" onPress={handleSubmit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
  },
});
