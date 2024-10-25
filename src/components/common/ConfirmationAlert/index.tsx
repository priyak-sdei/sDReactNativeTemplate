/**
 * Author: Priya Kumari
 * Date: 2024-10-22 12:06:28
 * Description: JSX Element type Component created Description of the file
 */

import { IMAGES } from '@/src/assets/images';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import createStyles from './styles';
interface ConfirmationAlertProps {
  title?: string;
  sub_title?: string;
  primary_btn_title?: string;
  secondary_btn_title?: string;
}

export const ConfirmationAlert = (
  props: ConfirmationAlertProps,
): JSX.Element => {
  const {
    title = 'Turn On your notifications',
    sub_title = ' Users who have their notifications turned on are more likely to updatethe data',
    primary_btn_title = 'Allow',
    secondary_btn_title = 'Not Now',
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={IMAGES.logoShort}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub_title}>{sub_title}</Text>
      </View>
      <Button
        title={primary_btn_title}
        onBtnPress={() => {}}
        customContainerStyle={styles.buttonStyle}
      ></Button>
      <Button
        title={secondary_btn_title}
        onBtnPress={() => {}}
        customContainerStyle={styles.transparentBg}
        customTitle={{ color: 'black' }}
      ></Button>
    </View>
  );
};
