import { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { Pressable } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// WebBrowser.maybeCompleteAuthSession();

export default function AuthWith({ index, strategy, Icon }) {
  // useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy: strategy,
    // redirectUrl: "exp://172.28.0.62:8081/--/home",
  });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signUp, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
        await AsyncStorage.setItem("userToken", createdSessionId);
      }
      router.replace(signUp.createdUserId ? "/info" : "/home");
    } catch (e) {
      console.log("OAuth Error", e);
    }
  }, []);

  return (
    <Pressable
      onPress={onPress}
      className={`rounded-full   p-4 ${index == 1 ? "mx-4" : ""}`}
    >
      <Icon />
    </Pressable>
  );
}
