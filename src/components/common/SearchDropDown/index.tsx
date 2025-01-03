/**
 * Author: Priya Kumari
 * Date: 2024-10-16
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { ReactNode, useState } from 'react';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from '../Text';
import useStyles from './styles';
interface DropDownProps {
  label: string;
  labelField?: string;
  rightIcon?: ReactNode;
  showLoading?: boolean;
  onBtnPress: () => void;
  customContainerStyle?: StyleProp<ViewStyle>;
  customTitle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const SearchDropDown = (props: DropDownProps): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState(
    [] as {
      key: string;
      value: string;
    }[],
  );

  const {
    label = 'Select Group',
    labelField = 'value',
    rightIcon = '',
    onBtnPress,
    customContainerStyle = {},
    customTitle = {},
    disabled = false,
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme, disabled);

  return (
    <View style={{}}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.labelStyle}>{label} </Text>
          <View style={styles.groupContainer}>
            <Text numberOfLines={1} style={styles.valueStyle}>
              {selectedItems.length === 0
                ? ''
                : selectedItems.length === 1
                ? selectedItems[0][labelField]
                : `${selectedItems.length} selected`}
            </Text>
            <FontAwesome6 name="angle-down" size={22} color={colors.primary} />
          </View>
        </View>
        {/* <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>{leftIcon}</View>
          <View style={styles.middleContainer}>
            {showLoading ? (
              <ActivityIndicator color={colors.white} size={'small'} />
            ) : (
              <Text style={[styles.title, customTitle]}>{title}</Text>
            )}
          </View>
          <View style={styles.rightContainer}>{rightIcon}</View>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};
