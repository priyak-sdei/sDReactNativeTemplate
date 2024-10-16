/**
 * Author: Priya Kumari
 * Date: 2024-10-16 15:28:59
 * Description: JSX Element type Component created Description of the file
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import {
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import createStyles from './Input.styles';

interface InputProps extends TextInputProps {
  sourceLeftIcon?: ImageSourcePropType;
  sourceRightIcon?: ImageSourcePropType;
  textInputStyle?: StyleProp<TextStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  sourceRightImage?: boolean;
  children?: React.ReactElement;
  onPress?: () => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  tintColor?: string;
  highlight: boolean;
  ref?: React.RefObject<TextInput>;
  errorValue?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  //  const {} = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>hiii</Text>
      </View>
      {/* <TextInput
        style={{}}
        value={'number'}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
    </View>
  );
};
