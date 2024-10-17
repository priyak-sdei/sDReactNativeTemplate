import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useColorScheme } from '@hooks/useColorScheme';
import { ThemeProvider } from '@react-navigation/native';
import { FONTS, theme } from '@theme/index';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { StoreProvider } from './store-provider';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function Providers({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts(FONTS);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === 'dark' ? theme.dark : theme.light}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView>
            <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
