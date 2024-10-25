/**
 * Author: Priya Kumari
 * Date: 2024-10-16
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '../Text';
import useStyles from './styles';
interface ButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showLoading?: boolean;
  onBtnPress: () => void;
  customContainerStyle?: StyleProp<ViewStyle>;
  customTitle?: StyleProp<TextStyle>;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    leftIcon = '',
    title = '',
    showLoading = false,
    rightIcon = '',
    onBtnPress,
    customContainerStyle = {},
    customTitle = {},
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.container, customContainerStyle]}
      onPress={onBtnPress}
    >
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}>{leftIcon}</View>
        <View style={styles.middleContainer}>
          {showLoading ? (
            <ActivityIndicator color={colors.white} size={'small'} />
          ) : (
            <Text style={[styles.title, customTitle]}>{title}</Text>
          )}
        </View>
        <View style={styles.rightContainer}>{rightIcon}</View>
      </View>
    </TouchableOpacity>
  );
};
