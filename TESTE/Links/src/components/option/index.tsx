// ARQUIVO: src/components/option/index.tsx

import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

// Aqui garantimos que o componente aceite todas as props de um botão, incluindo 'onPress'.
type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
}

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  return (
    // A PARTE MAIS IMPORTANTE:
    // O {...rest} passa todas as outras propriedades (incluindo o nosso onPress)
    // para o TouchableOpacity, fazendo o clique funcionar.
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={24}
        color={variant === "primary" ? colors.green[300] : colors.red[300]}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}