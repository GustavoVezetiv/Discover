import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 62,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.white[100],
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 24,
  },
  sectionTitle: {
    color: colors.green[300],
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 16,
  },
  paragraph: {
    color: colors.gray[200],
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "justify",
  },
  highlight: {
    color: colors.white[100],
    fontWeight: "bold",
  },
  finalMessage: {
    color: colors.white[100],
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 64,
  },
  // Adicione também estes estilos básicos que o componente antigo usava, caso precise
  label: {
    color: colors.white[100],
    fontSize: 16,
    marginBottom: 8,
  },
  form: {
    gap: 16,
    marginTop: 24,
  },
});