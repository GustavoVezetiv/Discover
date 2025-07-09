import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  title: {
    color: colors.gray[100],
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  content: {
    gap: 12,
    paddingBottom: 20,
  },
  emptyText: {
    color: colors.gray[400],
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});
