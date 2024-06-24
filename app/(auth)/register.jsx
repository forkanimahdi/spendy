import { Text, TextInput, ToastAndroid, View } from "react-native";
import { COLORS, Icon } from "@/constants";
import { Link, router } from "expo-router";
import { SignedOut, useSignUp } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { AuthButton, AuthWith } from "@/components/auth";
// import { create_visitor } from "@/api";
WebBrowser.maybeCompleteAuthSession();

export default function SignupScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  useWarmUpBrowser();

  const signUpHandler = async () => {
    if (!isLoaded) {
      return;
    }

    if (confirmPassword != password) {
      console.log("not the same password");
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.SHORT);
    }
  };

  const VerifyHandler = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      await AsyncStorage.setItem("userToken", completeSignUp.createdSessionId);
      router.replace("/info");
    } catch (err) {
      ToastAndroid.show(err.errors[0].longMessage, ToastAndroid.SHORT);
    }
  };

  return (
    <>
      <SignedOut>
        {pendingVerification ? (
          <View className="pt-24 px-6 h-screen bg-gamma ">
            <View className="border border-dark/[12.5%] rounded px-5 py-3 flex-row items-center mb-4">
              <TextInput
                className="ml-3 w-full font-medium"
                value={code}
                placeholder="Insert Your Verification Code..."
                keyboardType="numeric"
                onChangeText={(code) => setCode(code)}
              />
            </View>

            <AuthButton handler={VerifyHandler} text={"Verify Email"} />
          </View>
        ) : (

          <View className="pt-16 px-6 h-screen  flex-col items-center bg-gamma">

        <Text className="text-white text-lg my-5">Sign up !</Text>

            <View>
              {[
                [
                  "Full Name :",
                  "Enter your Full Name ",
                  Icon.User,
                  userName,
                  setUserName,
                ],
                [
                  "Email",
                  "Enter your email adress",
                  Icon.Envelope,
                  emailAddress,
                  setEmailAddress,
                ],
                [
                  "Password",
                  "Enter your password",
                  Icon.Lock,
                  password,
                  setPassword,
                ],
                [
                  "Confirm Password",
                  "Confirm your password",
                  Icon.Lock,
                  confirmPassword,
                  setconfirmPassword,
                ],
              ].map(([title, placeholder, Icon, value, setValue], index) => (
                <View key={index}>
                  <Text className="font-medium  text-white mb-3 text-base">
                    {title}
                  </Text>
                  <View className="border border-white/30 rounded-xl px-5 py-3 flex-row items-center mb-4">
                    <Icon width={19} height={16} fill={"#b4ef72"} />
                    <TextInput
                      placeholderTextColor={COLORS.lightGray + "7d"}
                      className="ml-3 w-full text-white font-medium"
                      secureTextEntry={title.endsWith("Password")}
                      onChangeText={(text) => setValue(text)}
                      {...{ placeholder, value }}
                    />
                  </View>
                </View>
              ))}
            </View>

            <AuthButton handler={signUpHandler} text={"Create account"} />

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
            <View className="mt-auto flex-row mb-4 justify-center">
              <Text className="font-medium text-sm text-white/50">
                Already have account ?
              </Text>
              <Link href={"/login"}>
                <Text className="font-bold text-sm text-alpha ml-1">
                  Log In
                </Text>
              </Link>
            </View>
          </View>
        )}
      </SignedOut>
    </>
  );
}
