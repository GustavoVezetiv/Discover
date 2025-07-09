import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Withme() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Minha Jornada</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}>
        
        <Text style={styles.sectionTitle}>Sobre o Projeto e o Desenvolvedor</Text>

        <Text style={styles.paragraph}>
          O "Links" foi criado por <Text style={styles.highlight}>Gustavo Vezetiv</Text>, alguém que ainda está aprendendo, errando bastante, mas tentando entender um pouco mais de desenvolvimento a cada dia. A ideia do app surgiu como uma forma de praticar, mas acabou virando algo maior do que só um exercício.
        </Text>

        <Text style={styles.paragraph}>
          Ao longo do caminho, enfrentei problemas que eu nem imaginava que existiam. Teve bug difícil de achar, erro que parecia impossível de resolver, coisa que funcionava em um lugar e quebrava em outro… mas cada um desses momentos foi importante. Fui aprendendo com calma, buscando entender por que as coisas davam errado e como melhorar.
        </Text>

        <Text style={styles.paragraph}>
          Não sou especialista, ainda estou construindo meu caminho, mas me orgulho de ter chegado até aqui com paciência e insistência. Esse projeto é simples, mas representa muito pra mim. É a prova de que, mesmo com todas as dúvidas e tropeços, é possível aprender construindo.
        </Text>


        <Text style={styles.finalMessage}>
          Esse app não é só funcional — ele carrega a história de alguém que foi até o fim, por conta própria. 🚀
        </Text>
      </ScrollView>
    </View>
  );
}
