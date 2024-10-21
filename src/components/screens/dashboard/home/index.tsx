/**
 * Author: Priya Kumari
 * Date: 2024-10-21 16:45:18
 * Description: JSX Element type Component created Description of the file
 */

import { Button } from '@/src/components/common/Button';

import { BottomSheet } from '@/src/components/common/BottomSheet';
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
      <BottomSheet visible={termsModal} onDismiss={() => showTermsModal(false)}>
        <Text style={styles.policyTitle}>Awesome 🎉</Text>
        <Text style={styles.policyContent}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Text>
      </BottomSheet>
    </View>
  );
};
