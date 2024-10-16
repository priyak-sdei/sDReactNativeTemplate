/**
 * Author: Priya Kumari
 * Date: 2024-10-16 12:41:10
 * Description: JSX Element type Component created Description of the file
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextProps } from 'react-native';
import createStyles from './Label.styles';

interface LabelProps extends TextProps {
  level?: keyof ReturnType<typeof createStyles>;
}

export const Label = (props: LabelProps): JSX.Element => {
  const { level = '', style = {} } = props;
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);
  // Check if `style` is an array or object and convert accordingly
  const customStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style || {};

  const mergedStyles = { ...styles[level], ...customStyle };
  return <Text {...props} style={mergedStyles} />;
};
