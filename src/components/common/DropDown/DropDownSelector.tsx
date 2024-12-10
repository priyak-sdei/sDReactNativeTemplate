/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Author: Priya Kumari
 * Date: 2024-10-17 12:12:33
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import DropDownPicker from './DropDownPicker';
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
  options: dropDownOptions[];
  selectedValue?: string;
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
    selectedValue,
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  useEffect(() => {
    if (selectedValue) {
      setSelectedItems(options.filter(item => item.value === selectedValue));
    }
  }, []);

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
          <Text style={styles.labelStyle}>{label} </Text>
          <View style={styles.groupContainer}>
            <Text numberOfLines={1} style={styles.valueStyle}>
              {selectedItems.length === 0
                ? ''
                : selectedItems.length === 1
                ? selectedItems[0].value
                : `${selectedItems.length} selected`}
            </Text>
            <FontAwesome6 name="angle-right" size={22} color={colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
      {errorMessage && <Text style={styles.errorStyle}>{errorMessage}</Text>}

      <DropDownPicker
        multiSelection={multiSelection}
        options={options}
        selectedOption={selectedItems}
        showPicker={showOptions}
        hideModal={() => {
          setShowOptions(false);
        }}
        onItemSelected={item => {
          onItemSelected(item);
          onOptionSelect(item);
        }}
      />
    </View>
  );
};
