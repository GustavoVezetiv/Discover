// ARQUIVO COMPLETO E MAIS SEGURO: src/app/_layout.tsx

import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { colors } from "@/styles/colors";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

// Não vamos mais tentar carregar o MaterialIcons aqui.
// Apenas o fato de ele ser usado em outros componentes já deve ser suficiente
// para o Expo incluí-lo no build.

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  
  // Vamos carregar APENAS as fontes Roboto aqui.
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  // Se houver um erro com as fontes Roboto, o app irá quebrar e nos mostrar o erro.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    // Escondemos a tela de splash apenas quando as fontes Roboto estiverem prontas.
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Se as fontes Roboto ainda não carregaram, não fazemos nada.
  if (!fontsLoaded && !fontError) {
    return null;
  }
const backgroundColor = colors.gray[950]
  // Se tudo deu certo, renderizamos o aplicativo.
  return <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
        }}
    />
}