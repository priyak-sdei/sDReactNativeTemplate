/**
 * Author: Priya Kumari
 * Date: 2024-10-10
 * Description: JSX Element type Component created Description of the file
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import createStyles from './Header.styles';

interface HeaderProps {
  title?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { title = '123444' } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <Text>{title}</Text>
    </View>
  );
};
