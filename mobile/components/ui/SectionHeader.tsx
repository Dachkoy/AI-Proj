import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme";

export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return <Text style={styles.header}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: theme.typography.subheading,
    fontWeight: "700",
    color: theme.colors.text,
    marginVertical: theme.spacing.sm,
  },
});
