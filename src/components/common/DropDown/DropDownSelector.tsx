/**
 * Author: Priya Kumari
 * Date: 2024-10-17 12:12:33
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Label } from '../Label/Label';
import createStyles from './styles';

interface dropDownOptions {
  key: string;
  value: string;
  _id?: string;
  label?: string;
}
interface SelectedItems {
  key: string;
  label?: string;
  value: string;
}
interface DropDownSelectorProps {
  label: string;
  options?: dropDownOptions[];
  selectedValue: string;
  onOptionSelect: (data: dropDownOptions) => void;
  errorMessage?: string;
  multiSelection?: boolean;
}

export const DropDownSelector = (props: DropDownSelectorProps): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    [] as {
      key: string;
      value: string;
    }[],
  );

  const {
    label = '',
    onOptionSelect,
    options = [],
    errorMessage = '',
    multiSelection = false,
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  const onItemSelected = (item: SelectedItems) => {
    if (multiSelection) {
      setSelectedItems(prevItems => {
        const itemExists = prevItems.some(
          selectedItem => selectedItem.key === item.key,
        );
        if (itemExists) {
          return prevItems.filter(
            selectedItem => selectedItem.key !== item.key,
          );
        } else {
          return [...prevItems, item];
        }
      });
    } else {
      setSelectedItems([item]);
    }
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setShowOptions(true)}
      >
        <View style={styles.innerContainer}>
          <Label style={styles.labelStyle}>{label} </Label>
          <View style={styles.groupContainer}>
            <Label numberOfLines={1} style={styles.valueStyle}>
              Value
            </Label>
            <FontAwesome6 name="angle-right" size={22} color={colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
