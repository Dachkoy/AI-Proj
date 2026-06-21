import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import theme from "../../theme";

type Props = {
  label?: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  style?: any;
};

export default function TextField({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, style }: Props) {
  return (
    <View style={[styles.wrap, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: theme.spacing.md },
  label: { fontSize: theme.typography.label, color: theme.colors.muted, marginBottom: theme.spacing.xs },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
  },
});
