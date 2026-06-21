import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App.js";
import { login } from "../services/api.js";
import Screen from "../components/ui/Screen.js";
import TextField from "../components/ui/TextField.js";
import PrimaryButton from "../components/ui/PrimaryButton.js";
import SectionHeader from "../components/ui/SectionHeader.js";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigation.replace("VinEntry");
    } catch (err) {
      setError("Failed to login. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen>
      <View style={styles.center}>
        <SectionHeader>Car Companion</SectionHeader>
        <TextField label="Email" value={email} onChangeText={setEmail} placeholder="you@example.com" />
        <TextField label="Password" value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <PrimaryButton title="Login" onPress={handleLogin} loading={loading} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center" },
  error: { color: "#B00020", marginVertical: 8, textAlign: "center" },
});
