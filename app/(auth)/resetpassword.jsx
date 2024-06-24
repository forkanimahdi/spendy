import { AuthButton } from "@/components/auth";
import { COLORS, Icon } from "@/constants";
import { useSignIn } from "@clerk/clerk-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function ResetPassword() {
  const { signIn, setActive } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);

  const onRequestReset = async () => {
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: emailAddress,
      });
      setSuccessfulCreation(true);
    } catch (err) {
      alert(err.errors[0].message);
    }
  };

  const onReset = async () => {
    try {
      const { createdSessionId } = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      });
      await setActive({ session: createdSessionId });
      await AsyncStorage.setItem("userToken", createdSessionId);
      router.navigate("/home");
    } catch (err) {
      alert(err.errors[0].message);
    }
  };

  return (
    <>
      <View className="pt-32 px-6 h-screen">
        {!successfulCreation ? (
          <>
            <Text className="capitalize text-dark text-2xl font-semibold mb-1">
              Forgot Your Password?
            </Text>
            <Text className="text-dark/50 text-base mb-6">
              Enter the email address associated with your account and we'll send you a one-time
              code
            </Text>

            <Text className="mb-1 text-dark font-medium">Email</Text>
            <View className="border border-dark/[12.5%] rounded px-5 flex-row items-center mb-4">
              <Icon.Envelope width={19} height={16} fill="#002d557d" />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor={COLORS.dark + "7d"}
                value={emailAddress}
                className="ml-3 font-medium w-11/12 py-3"
                placeholder="Email..."
                secureTextEntry={false}
                onChangeText={(text) => setEmailAddress(text)}
              />
            </View>

            <AuthButton handler={onRequestReset} text={"Reset Code"} />
          </>
        ) : (
          <>
            <View className="border border-dark/[12.5%] rounded px-5 flex-row items-center mb-4">
              <Icon.Lock width={19} height={16} fill="#002d557d" />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor={COLORS.dark + "7d"}
                value={code}
                className="ml-3 font-medium w-11/12 py-3"
                placeholder="Code"
                keyboardType="numeric"
                secureTextEntry={false}
                onChangeText={(text) => setCode(text)}
              />
            </View>
            <View className="border border-dark/[12.5%] rounded px-5 flex-row items-center mb-4">
              <Icon.Lock width={19} height={16} fill="#002d557d" />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor={COLORS.dark + "7d"}
                value={password}
                className="ml-3 font-medium w-11/12 py-3"
                placeholder="New password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <AuthButton handler={onReset} text={"Set new Password"} />
          </>
        )}
      </View>
    </>
  );
}
