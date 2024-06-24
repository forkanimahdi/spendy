import { Icon } from "@/constants";
import { Image, Text, View } from "react-native";

export default function Navbar() {
    return (
        <>
            <View className=" py-6 flex-row items-center justify-between ">
                <View className="flex-row">
                    <Image
                        source={require("@/assets/images/avatars/men.png")}
                        className="w-12 h-12 rounded-full"
                    />

                    <View className="flex-col ml-3">
                        <Text className="text-white ">Welcome !</Text>
                        <Text className="text-white text-lg mt-1">Forkani Mehdi</Text>
                    </View>
                </View>

                <View className="">
                    <Icon.Bell />
                </View>

            </View>

        </>
    );
}
