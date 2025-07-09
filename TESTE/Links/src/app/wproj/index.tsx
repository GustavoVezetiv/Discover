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

        <Text style={styles.title}>Desafios Enfrentados</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.paragraph}>
          <Text style={styles.highlight}>1. A Tela Branca e os Ícones Invisíveis:</Text> No início, o app nem chegava a renderizar. Uma simples tela branca e ícones sumidos foram o ponto de partida. A causa? Fontes não carregadas corretamente no `_layout.tsx`. Esse obstáculo me forçou a entender profundamente o ciclo de vida do Expo e a importância da inicialização correta.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.highlight}>2. A Comunicação Entre Componentes:</Text> Passei por momentos em que propriedades como `onPress` e `onChange` causavam erros confusos. Ao estruturar os componentes de forma reutilizável e padronizar a comunicação entre eles, tudo começou a fazer sentido. Foi aí que o entendimento real sobre "comunicação entre pai e filho" se consolidou.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.highlight}>3. O Erro de Rede que Testou a Paciência:</Text> Um dos momentos mais frustrantes foi quando a API simplesmente não respondia. Horas tentando resolver algo que parecia estar certo no código... até perceber que o problema estava fora dele. Era o **firewall do sistema bloqueando a porta da API**. A partir daí, aprendi a importância de considerar também o ambiente de execução e não apenas o código em si.
        </Text>

        <Text style={styles.sectionTitle}>Aprendizados</Text>

        <Text style={styles.paragraph}>
          Cada bug, cada erro de tipagem, cada comportamento inesperado foi uma oportunidade de aprender. Não foi apenas sobre escrever código, mas sobre entender o motivo das coisas, melhorar a lógica e organizar melhor as ideias. Foi um projeto que exigiu atenção aos detalhes, paciência e vontade de resolver o que parecia impossível no começo.
        </Text>

        <Text style={styles.finalMessage}>
          Esse app não é só funcional — ele carrega a história de alguém que foi até o fim, por conta própria. 🚀
        </Text>
      </ScrollView>
    </View>
  );
}
