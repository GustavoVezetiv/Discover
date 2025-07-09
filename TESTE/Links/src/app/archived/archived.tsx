import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { LinkStorage } from '@/storage/link-storage';
import { getArchivedLinks } from '@/storage/archive-storage';
import { Link } from '@/components/link';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { router } from 'expo-router';

export default function Archived() {
  const [archivedLinks, setArchivedLinks] = useState<LinkStorage[]>([]);

  async function loadArchivedLinks() {
    const data = await getArchivedLinks();
    setArchivedLinks(data);
  }

  useEffect(() => {
    loadArchivedLinks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Links Arquivados</Text>
      </View>

      <FlatList
        data={archivedLinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => {}}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum link arquivado.</Text>}
      />
    </View>
  );
}
