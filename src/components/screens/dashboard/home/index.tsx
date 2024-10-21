/**
 * Author: Priya Kumari
 * Date: 2024-10-21 16:45:18
 * Description: JSX Element type Component created Description of the file
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import useStyles from './styles';
interface indexProps {
  index_title?: string;
}

export const index = (props: indexProps): JSX.Element => {
  const { index_title = '' } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <Text>{index_title}</Text>
    </View>
  );
};
