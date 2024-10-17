import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StatusBar,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { ReactNode } from 'react';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import useStyles from './Layouts.styles';

interface MainLayoutProps extends ViewProps {
  barStyle?: 'light-content' | 'dark-content';
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
}

// It should be used to provide status bar and safe area to the screen
export const MainLayout = ({
  barStyle = 'dark-content',
  children,
  safeAreaTop = true,
  safeAreaBottom = false,
  ...rest
}: MainLayoutProps) => {
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles({ safeAreaBottom, safeAreaTop, ...theme });
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.safeAreaContainer} {...rest}>
        {children}
      </View>
    </>
  );
};

interface MainLayoutContainerProps
  extends KeyboardAvoidingViewProps,
    KeyboardAwareScrollViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  variant?: 'fixed' | 'scroll';
}
// It should be user for screen body i.e. between header and footer
const MainLayoutContainer = ({
  style,
  children,
  variant,
  ...rest
}: MainLayoutContainerProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);
  return variant === 'fixed' ? (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAwareScrollView
      style={[styles.container, style]}
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

MainLayout.Body = MainLayoutContainer;
