/**
 * Author: Priya Kumari
 * Date: 2024-10-18 11:20:41
 * Description: JSX Element type Component created Description of the file
 */

import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { FontAwesome6 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { FlatList, Modal, TouchableOpacity, View } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import createStyles from './styles';

interface DropDownPickerProps {
  showPicker: boolean;
  hideModal: () => void;
  onItemSelected: (data: DropDownOptions) => void;
  options: DropDownOptions[];
  selectedOption: DropDownOptions[];
  multiSelection: boolean;
  labelField?: string;
}
interface DropDownOptions {
  key: string;
  value: string;
}

const DropDownPicker = (props: DropDownPickerProps): JSX.Element => {
  const {
    showPicker = false,
    hideModal,
    options = [],
    selectedOption = [],
    onItemSelected,
    multiSelection = false,
    labelField = 'value',
  } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);
  const renderItem = ({ item }: { item: DropDownOptions }) => (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() => {
        onItemSelected(item);
        if (!multiSelection) hideModal();
      }}
    >
      <Text style={styles.labelStyle}>{item[labelField]}</Text>
      {selectedOption &&
        selectedOption.some(selected => selected.value === item.value) && (
          <Ionicons name="checkmark-sharp" size={24} color="black" />
        )}
    </TouchableOpacity>
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showPicker}
      onRequestClose={() => hideModal()}
    >
      <View style={styles.pickerOuterContainer}>
        <TouchableOpacity
          style={styles.header_container}
          onPress={() => hideModal()}
        >
          <FontAwesome6 name="chevron-left" size={24} color={colors.primary} />
          <Text style={styles.headingTitle}>Select Value</Text>
        </TouchableOpacity>
        <View style={styles.pickerContainer}>
          <FlatList data={options} renderItem={renderItem} numColumns={1} />
          {multiSelection && (
            <Button
              title={'Save'}
              showLoading={false}
              onBtnPress={() => {
                hideModal();
              }}
            ></Button>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DropDownPicker;
