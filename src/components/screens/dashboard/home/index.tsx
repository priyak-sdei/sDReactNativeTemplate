/**
 * Author: Priya Kumari
 * Date: 2024-10-21 16:45:18
 * Description: JSX Element type Component created Description of the file
 */

import { Button } from '@/src/components/common/Button';

import { Text } from '@/src/components/common/Text';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import useLocation from '@hooks/useLocation';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import useStyles from './styles';
interface indexProps {
  index_title?: string;
}

export const HomePage = (props: indexProps): JSX.Element => {
  const [termsModal, showTermsModal] = useState(true);
  const { permissionStatus, getLocation } = useLocation();
  const { index_title = '' } = props;

  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <Text>{index_title}</Text>
      <Text>Location permission is {permissionStatus}</Text>
      <Button
        title="Submit"
        onBtnPress={() => {
          getLocation();
        }}
      ></Button>
      {/* <BottomSheet visible={false} onDismiss={() => showTermsModal(false)}>
        <ConfirmationAlert />
      </BottomSheet> */}
    </View>
  );
};
