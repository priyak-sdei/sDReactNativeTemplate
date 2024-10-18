/**
 * Author: Priya Kumari
 * Date: 2024-10-16 15:28:59
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Label } from '../Label/Label';
import createStyles from './styles';

interface InputProps extends TextInputProps {
  sourceLeftIcon?: ImageSourcePropType;
  sourceRightIcon?: ImageSourcePropType;
  textInputStyle?: StyleProp<TextStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  onRightIconPress?: () => void;
  ref?: React.RefObject<TextInput>;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  showHighLightInput?: boolean;
  labelText?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const {
    sourceLeftIcon,
    sourceRightIcon,
    rightIconStyle = {},
    textInputContainerStyle = {},
    textInputStyle = {},
    showHighLightInput = false,
    onRightIconPress,
    onBlur,
    ref,
    labelText,
    ...InputProps
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    onBlur?.(e); // This line needs to match your desired behavior
  };

  return (
    <View style={styles.container}>
      {labelText && (
        <View style={styles.labelContainer}>
          <Label level="xsTitle">{labelText}</Label>
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          showHighLightInput && focus ? styles.hightLightStyle : {},
        ]}
      >
        <View style={{}}>
          {sourceLeftIcon && (
            <Image
              source={sourceLeftIcon}
              resizeMode="contain"
              style={rightIconStyle}
            />
          )}
        </View>
        <View style={[styles.innerContainer, textInputContainerStyle]}>
          <TextInput
            ref={ref}
            style={[styles.inputStyle, textInputStyle]}
            onFocus={() => setFocus(true)}
            numberOfLines={1}
            onBlur={handleOnBlur}
            placeholderTextColor={colors.subTitleColor}
            selectionColor={colors.primary}
            {...InputProps}
          />
        </View>

        {sourceRightIcon && (
          <TouchableOpacity
            style={styles.rightIconContainer}
            onPress={onRightIconPress}
          >
            <Image
              source={sourceRightIcon}
              resizeMode="contain"
              style={[styles.rightImage, rightIconStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
