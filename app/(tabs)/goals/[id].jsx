import { Icon } from "@/constants";
import { useAppContext } from "@/context";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    Image,
    View,
    Text,
    Platform,
    ScrollView,
    Pressable,
    ImageBackground,
    TextInput,
} from "react-native";


export default function GoalScreen() {

    const { id } = useLocalSearchParams();




    return (
        <>
            <View className="h-screen px-6 pt-6 bg-gamma">
                <View className="py-3 flex-row items-center justify-between">
                    <View className=" flex-row items-center ">
                        <Icon.Arrow />
                        <Text className="text-white/90 text-lg ml-3">Buy House</Text>
                    </View>

                    <View className="flex-row items-center justify-between ">
                        <View className="flex-row ">
                            {
                                [1, 2, 3].map((participant, index) =>

                                    <Image
                                        source={require("@/assets/images/avatars/default.jpg")}
                                        className={`w-8 h-8 rounded-full ${index != 0 && "-ml-3"}`}
                                    />
                                )

                            }
                        </View>
                    </View>
                </View>



            </View>


        </>
    );
}
