import { useColorScheme } from '@hooks/useColorScheme';
import { ThemeProvider } from '@react-navigation/native';
import { theme } from '@theme/index';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { StoreProvider } from './store-provider';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function Providers({ children }: React.PropsWithChildren) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('@assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <StoreProvider>
      <ThemeProvider value={colorScheme === 'dark' ? theme.dark : theme.light}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          {children}
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
