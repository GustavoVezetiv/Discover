import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { styles } from "./styles";

type Props = {
  categories: string[];
  selected: string;
  onPress: (category: string) => void;
};

export function Categories({ categories, selected, onPress }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Category
          name={item}
          icon="tag"
          // CORREÇÃO 1: 'item' já é a string, não precisa de .name
          isSelected={item === selected}
          // CORREÇÃO 2: Passamos apenas 'item' para a função onPress
          onPress={() => onPress(item)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}