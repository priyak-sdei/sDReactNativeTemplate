import { router } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
export default function Root() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/(auth)/login');
    }, 1000);
  }, []);
  return (
    <View>
      <Text>This is Root Screen</Text>
    </View>
  );
}
