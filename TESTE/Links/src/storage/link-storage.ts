import AsyncStorage from "@react-native-async-storage/async-storage";
import { addArchivedLink } from "@/storage/archive-storage";

// Mudei o nome da constante para ser mais claro e evitar conflitos.
const LINK_COLLECTION = "@links-app:links";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(LINK_COLLECTION);
    const links: LinkStorage[] = storage ? JSON.parse(storage) : [];
    return links;
  } catch (error) {
    throw error;
  }
}

// ---- FUNÇÃO NOVA QUE ESTAVA FALTANDO ----
// Ela usa a função get() para buscar tudo e depois filtra o resultado.
async function getByCategory(category: string): Promise<LinkStorage[]> {
  try {
    const links = await get();
    const filtered = links.filter((link) => link.category === category);
    return filtered;
  } catch (error) {
    throw error;
  }
}

async function save(newLink: LinkStorage) {
  try {
    const storage = await get();
    const update = JSON.stringify([...storage, newLink]);
    await AsyncStorage.setItem(LINK_COLLECTION, update);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();
    const updated = storage.filter((link) => link.id !== id);
    await AsyncStorage.setItem(LINK_COLLECTION, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}
    
// ---- EXPORT ATUALIZADO, INCLUINDO A NOVA FUNÇÃO ----
export const linkStorage = { get, save, remove, getByCategory };