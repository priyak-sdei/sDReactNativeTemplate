/**
 * Author: Priya Kumari
 * Date: 2024-10-16
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Label } from '../Label/Label';
import createStyles from './styles';
interface ButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showLoading?: boolean;
  onBtnPress: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    leftIcon = '',
    title = '',
    showLoading = false,
    rightIcon = '',
    onBtnPress,
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onBtnPress}>
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}>{leftIcon}</View>
        <View style={styles.middleContainer}>
          {showLoading ? (
            <ActivityIndicator color={colors.white} size={'small'} />
          ) : (
            <Label style={styles.title}>{title}</Label>
          )}
        </View>
        <View style={styles.rightContainer}>{rightIcon}</View>
      </View>
    </TouchableOpacity>
  );
};
