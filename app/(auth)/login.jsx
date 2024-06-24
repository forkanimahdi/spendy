import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { COLORS, Icon } from "@/constants";
import { Link, router } from "expo-router";
import { SignedOut, useSignIn } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthButton, AuthWith } from "@/components/auth";

export default function LoginScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      await AsyncStorage.setItem("userToken", completeSignIn.createdSessionId);
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
      ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.SHORT);
    }
    setEmailAddress("");
    setPassword("");
  };

  return (
    <>
      {/* <SignedOut> */}
        <View className="pt-24 px-6 h-screen bg-gamma flex-col items-center   ">
        <Link href={"/widget"} className="text-alpha text-5xl ">Logo</Link>
        <Text className="text-white text-lg my-10">Welcome back !</Text>
        <View className="">

          {[
            ["Email", "Enter your email adress", Icon.Envelope, emailAddress, setEmailAddress],
            ["Password", "Enter your password", Icon.Lock, password, setPassword],
          ].map(([title, placeholder, Icon, value, setValeur], index) => (
            <View key={index}>
              <Text className="font-medium text-white mb-3 text-base">{title}</Text>
              <View className="border border-white/30 rounded-xl px-5 flex-row items-center mb-4">
                <Icon width={19} height={16} fill={COLORS.danger + "7d"} />
                <TextInput
                  autoCapitalize="none"
                  placeholderTextColor={COLORS.lightGray + "7d"}
                  className="ml-3  font-medium w-11/12 py-3"
                  secureTextEntry={title == "Password"}
                  onChangeText={(text) => setValeur(text)}
                  {...{ placeholder, value }}
                />
              </View>
            </View>
          ))}
          <TouchableOpacity
            className="self-end mt-2 font-medium text-sm text-dark"
            onPress={() => {
              router.navigate("resetpassword");
            }}
          >
            <Text className="text-white">Forget Password?</Text>
          </TouchableOpacity>
        </View>


          <AuthButton handler={onSignInPress} text={"Sign in"} />


          <Text className="text-center text-white/50">Or continue with</Text>
          <View className="flex-row justify-center mt-5">
            {[
              [Icon.Google, "oauth_google"],
              [Icon.Apple, "oauth_apple"],
              [Icon.Facebook, "oauth_facebook"],
            ].map(([Icon, strategy], index) => (
              <AuthWith key={index} {...{ index, strategy, Icon }} />
            ))}
          </View>

          <View className="mt-auto mb-4 flex-row ">
            <Text className="font-medium text-sm text-white">Or </Text>
            <Link href={"/register"}>
              <Text className="font-bold text-sm text-primary ml-1 text-alpha"> Create account</Text>
            </Link>
          </View>


        </View>
      {/* </SignedOut> */}
    </>
  );
}
