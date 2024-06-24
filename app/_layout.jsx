import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ClerkProvider } from "@clerk/clerk-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const CLERK_PUBLISHABLE_KEY = "pk_test_c3dlZXQtZW11LTE3LmNsZXJrLmFjY291bnRzLmRldiQ";

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const tokenCache = {
    async getToken(key) {
      try {
        return AsyncStorage.getItem(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return AsyncStorage.setItem(key, value);
      } catch (err) {
        return;
      }
    },
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache}  publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <ExpoStatusBar style="inverted" />
    </ClerkProvider>
  );
}
