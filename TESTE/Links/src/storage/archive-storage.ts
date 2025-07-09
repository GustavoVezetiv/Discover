import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinkStorage } from "./link-storage";

const STORAGE_KEY = "@links:archived";

export async function getArchivedLinks(): Promise<LinkStorage[]> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export async function addArchivedLink(link: LinkStorage) {
  const current = await getArchivedLinks();
  const updated = [...current, link];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
