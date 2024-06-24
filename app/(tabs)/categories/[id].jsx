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


export default function CategoryScreen() {

    const { id } = useLocalSearchParams();
    const { categories } = useAppContext();
    const category = categories.find(element => element.id = id)
    const [history, setHistory] = useState({
        "1 July 2024": [4],
        "2 July 2024": [5],
        "3 July 2024": [2],
    })


    return (
        <>
            <View className="h-screen pt-6 px-6 bg-gamma">
                <View className="py-3 flex-row items-center justify-between">
                    <View className=" flex-row items-center ">
                        <Icon.Arrow />
                        <Text className="text-white/90 text-lg ml-3">{category.name}</Text>
                    </View>
                </View>

                <View className="py-5 px-4 mt-5 border flex-row items-center justify-between bg-beta rounded-xl">
                    <View className="flex-row items-center">
                        <View className={`p-3 w-12 rounded-xl  bg-[${category.color}]`}>
                            {category.icon}
                        </View>
                        <View className="flex-col ml-3  ">
                            <Text className="text-white text-base">{category.name}</Text>
                            <Text className="text-white/80 ">{category.description}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center">
                        <Text className="text-white/90 mr-5 ">{category.total} Dh</Text>
                        <View className="">
                            <Icon.Edite color="white" />
                        </View>
                    </View>
                </View>

                <View className=" flex-row items-center mt-5 ">
                    <Text className="text-white/90 text-lg ml-3">Transaction History</Text>
                </View>
                <View className="max-h-[65vh] mt-5">
                <ScrollView className=" ">
                    {
                        Object.entries(history).map((element, index) =>
                            <View className="bg-beta rounded-xl p-5 mt-5" key={index}>
                                <View className="flex-row items-center">
                                    <Text className="text-white/80">{element[0]}</Text>
                                    <View className="bg-white/70 h-[1px] w-5/6 ml-3"></View>
                                </View>
                                {
                                    element[1].map((e, i) =>
                                        <Pressable onLongPress={()=>{console.log("success")}} className="py-1 mt-1 border-b border-white/60 " key={i}>
                                            <View className=" flex-row py-2 px-3  items-center justify-between  ">
                                                <View className="flex-row items-center ">
                                                    <View className=" p-1.5 rounded-xl">
                                                        <Icon.Checked size={30} />
                                                    </View>
                                                    <Text className="text-white/50 ml-4">Taxi to Home</Text>
                                                </View>

                                                <Text className="text-white/90 mr-3 ">425 $</Text>
                                            </View>
                                        </Pressable>
                                    )
                                }


                            </View>
                        )
                    }

                </ScrollView>
                </View>

            </View>

        </>
    );
}
