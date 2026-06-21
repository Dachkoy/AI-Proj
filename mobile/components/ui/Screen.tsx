import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import theme from "../../theme";

type Props = {
  children?: React.ReactNode;
  style?: any;
  scroll?: boolean;
};

export default function Screen({ children, style, scroll = false }: Props) {
  if (scroll) {
    return (
      <SafeAreaView style={[styles.safe, style]}>
        <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, style]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, padding: theme.spacing.md },
});
