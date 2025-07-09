import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View, Linking } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Categories } from '@/components/categories'
import { Link } from '@/components/link'
import { Option } from '@/components/option'
import { router, useFocusEffect } from 'expo-router'
import { useCallback, useState } from 'react'
import { categories } from '@/utils/categories'
import { LinkStorage, linkStorage } from '@/storage/link-storage'
import { api } from "@/services/api";

export default function Index() {
  // --- ESTADO UNIFICADO E LIMPO ---
  const [links, setLinks] = useState<LinkStorage[]>([])
  const [category, setCategory] = useState(categories[0].name)
  
  // O NOVO SISTEMA DE ESTADO QUE CONTROLA TUDO
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null);
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  const [responseApiQRCode, setResponseApiQRCode ] = useState({});

  // REMOVEMOS os estados antigos 'showModal' e 'link' para evitar conflitos.

  // --- FUNÇÕES ATUALIZADAS PARA USAR O NOVO ESTADO ---

  function handleOpenDetailsModal(link: LinkStorage) {
    setSelectedLink(link); // Abre o modal de detalhes guardando o link selecionado
  }

  function handleCloseDetailsModal() {
    setSelectedLink(null); // Fecha o modal de detalhes limpando o estado
  }

  function handleCloseQrCodeModal() {
    setQrCodeData(null); // Fecha o modal de QR Code
  }



/* async function handleGenerateQrCode() {
     if (!selectedLink) return; // Usa o 'selectedLink'
    try {
      console.log(selectedLink);
      const response = await api.post('', { url: selectedLink.url });
      console.log("entrou");
      console.log(response);
      setResponseApiQRCode(response) 
      GenerateQrCode();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar a Api do QR Code.");
      console.log(error);

    } 
  }  */

    async function handleGenerateQrCode() {
  if (!selectedLink) return;

  try {
    const response = await api.post('/generate-qr', { url: selectedLink.url });


    console.log("entrou");
    console.log(response);

    const qrCode = response.data?.qrCode;

    if (!qrCode) {
      throw new Error("QR Code não encontrado na resposta da API");
    }

    setQrCodeData(qrCode); // Define diretamente o qrCode
    handleCloseDetailsModal(); // Fecha o modal de detalhes
  } catch (error) {
    Alert.alert("Erro", "Não foi possível gerar o QR Code.");
    console.log(error);
  }
}

  async function GenerateQrCode() {
      try {
        setQrCodeData(responseApiQRCode.data.qrCode);
        handleCloseDetailsModal(); // Fecha um modal para abrir o outro
      } catch (error) {
        Alert.alert("Erro", "Não foi possível gerar o QR Code.");
        console.log(error);
    }
  }

  async function getLinks() {
    try {
      const response = await linkStorage.getByCategory(category) // Usando a busca por categoria
      setLinks(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  async function handleRemove() {
    if (!selectedLink) return; // Usa o 'selectedLink'
    Alert.alert("Excluir", `Deseja realmente excluir o link ${selectedLink.name}?`, [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: async () => {
          await linkStorage.remove(selectedLink.id);
          handleCloseDetailsModal();
          getLinks();
        } 
      },
    ]);
  }

  async function handleOpenLink() {
    if (!selectedLink) return; // Usa o 'selectedLink'
    try {
      await Linking.openURL(selectedLink.url);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o link");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name='add' size={32} color={colors.green[300]}/>
        </TouchableOpacity>
      </View>

      {/* CORREÇÃO: Usando 'onPress' e passando a lista de categorias */}
 <Categories onChange={setCategory} selected={category}/>


      <FlatList 
        data={links}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link 
            name={item.name}
            url={item.url}
            // CORREÇÃO: Chamando a nova função para abrir o modal
            onDetails={() => handleOpenDetailsModal(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      {/* --- MODAL DE DETALHES --- */}
      {/* CORREÇÃO: Controlado pelo estado 'selectedLink' */}
      <Modal transparent visible={!!selectedLink} animationType='slide' onRequestClose={handleCloseDetailsModal}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink?.category}</Text>
              <TouchableOpacity onPress={handleCloseDetailsModal}>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            
            {/* CORREÇÃO: Usando os dados de 'selectedLink' */}
            <Text style={styles.modalLinkName}>{selectedLink?.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink?.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove} />
              <Option name="QR Code" icon="qr-code" onPress={ handleGenerateQrCode} />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>

      {/* --- MODAL DO QR CODE (AGORA FORA DO OUTRO MODAL) --- */}
      <Modal transparent visible={!!qrCodeData} animationType='fade' onRequestClose={handleCloseQrCodeModal}>
        <TouchableOpacity style={styles.modal} activeOpacity={1} onPress={handleCloseQrCodeModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalCategory}>QR Code do Link</Text>
            <Image source={{ uri: qrCodeData! }} style={styles.qrCodeImage} />
            <Text style={styles.modalUrl} numberOfLines={1}>{selectedLink?.url}</Text>
            <Text style={styles.modalCloseText}>Toque para fechar</Text>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
}