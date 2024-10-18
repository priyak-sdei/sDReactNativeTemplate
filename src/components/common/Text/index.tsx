/**
 * Author: Priya Kumari
 * Date: 2024-10-16 12:41:10
 * Description: JSX Element type Component created Description of the file
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as LabelText, TextProps } from 'react-native';
import useStyles from './styles';

interface LabelProps extends TextProps {
  level?: keyof ReturnType<typeof useStyles>;
}

export const Text = (props: LabelProps): JSX.Element => {
  const { level = '', style = {} } = props;
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);
  // Check if `style` is an array or object and convert accordingly
  const customStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style || {};

  const mergedStyles = { ...styles[level], ...customStyle };
  return <LabelText {...props} style={mergedStyles} />;
};
