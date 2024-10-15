import type { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import type { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../common/Header/Header';

type MainLayoutProps = ViewProps & {
  variant?: 'fixed' | 'scroll';
  barStyle?: 'light-content' | 'dark-content';
  safeAreaTop?: boolean;
  showHeader?: boolean;
  safeAreaBottom?: boolean;
};

export const MainLayout = ({
  variant = 'fixed',
  barStyle = 'dark-content',
  showHeader,
  children,
  safeAreaTop = true,
  safeAreaBottom = false,
  ...rest
}: MainLayoutProps) => {
  const areaInsets = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View
        style={[
          styles.container,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            paddingTop: safeAreaTop ? areaInsets.top : 0,
            paddingBottom: safeAreaBottom ? areaInsets.bottom : 0,
          },
        ]}
        {...rest}
      >
        {showHeader && <Header />}
        <MainLayoutContainer variant={variant}>{children}</MainLayoutContainer>
      </View>
    </>
  );
};

type MainLayoutContainerProps = KeyboardAvoidingViewProps &
  KeyboardAwareScrollViewProps & {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    variant?: 'fixed' | 'scroll';
  };
const MainLayoutContainer = ({
  style,
  children,
  variant,
  ...rest
}: MainLayoutContainerProps) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return variant === 'fixed' ? (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior="position"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
