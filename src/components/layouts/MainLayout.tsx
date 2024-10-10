import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { Header } from '../common/Header/Header';
import createStyles from './Layouts.styles';

export default function MainLayout({ children }: React.PropsWithChildren) {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
}
