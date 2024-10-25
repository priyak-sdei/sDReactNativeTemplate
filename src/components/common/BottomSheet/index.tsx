/**
 * Author: Priya Kumari
 * Date: 2024-10-16
 * Description: JSX Element type Component created Description of the file
 */
import { ExtendedTheme } from '@/src/types/ColorPalette';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import createStyles from './styles';
interface BottomSheetProps extends BottomSheetModalProps {
  visible: boolean;
  children: ReactNode;
}

export const BottomSheet = (props: BottomSheetProps): JSX.Element => {
  const { visible, children } = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const insets = useSafeAreaInsets();

  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme, { insets });

  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current.present();
    } else {
      bottomSheetModalRef.current.close();
    }
  }, [visible]);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
        opacity={1}
        style={{ backgroundColor: 'red' }}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      //   backgroundStyle={{ backgroundColor: 'red' }}
      ref={bottomSheetModalRef}
      index={0}
      style={styles.container}
      backdropComponent={renderBackdrop}
      snapPoints={['25%', '30%']}
      {...props}
    >
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};
