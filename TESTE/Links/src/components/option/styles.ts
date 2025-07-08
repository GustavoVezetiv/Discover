import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        
    },
    primaryTitle:{
        color: colors.green[300],
        fontSize: 16,
        fontWeight: "600"
    },
    secondaryTitle:{
        color: colors.gray[400],
        fontSize: 16,
    },
    name: {
    color: colors.white[100],
    fontSize: 16,
  },

})