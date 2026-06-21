import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

const theme = {
  colors: {
    background: "#F7FAFC",
    surface: "#FFFFFF",
    primary: "#0B6EF6",
    primaryDark: "#0A58D4",
    primaryText: "#FFFFFF",
    text: "#0F1724",
    muted: "#6B7280",
    error: "#B00020",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 6,
    md: 8,
    lg: 12,
  },
  typography: {
    heading: 20,
    subheading: 16,
    body: 14,
    label: 12,
  },
};

export const navigationTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.text,
    primary: theme.colors.primary,
  },
};

export default theme;
