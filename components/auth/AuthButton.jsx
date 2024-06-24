import { Pressable, Text } from "react-native";

export default function AuthButton({ handler, text, outline = false }) {
  return (
    <>
      <Pressable
        className={`rounded-xl w-full py-3 my-8 ${
          outline ? "border-2 border-alpha" : "bg-alpha"
        }`}
        onPress={handler}
      >
        <Text
          className={`text-center font-medium text-lg ${outline ? "text-primary" : "text-black"}`}
        >
          {text}
        </Text>
      </Pressable>
    </>
  );
}
