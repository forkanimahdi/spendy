import { Icon } from "@/constants";
import { useAppContext } from "@/context";
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


export default function HistoryScreen() {



    const { all } = useAppContext();

    const [history, setHistory] = useState({
        "1 July 2024": [4],
        "2 July 2024": [5],
        "3 July 2024": [2, 9],
    })

    console.log(Object.entries(history))


    return (
        <>
            <View className="bg-gamma h- px-6 pt-6">
                <View className="py-3 flex-row items-center ">
                    <Icon.Arrow />
                    <Text className="text-white/90 text-lg ml-3">Transaction History</Text>
                </View>
                <View className="p-3 mt-5 flex-row items-center bg-beta rounded-xl ">
                    <Icon.Search />
                    <TextInput
                        className=" w-full h-full px-3"
                        placeholder="Search for transaction..."
                        placeholderTextColor={"#ffffffaa"}
                    />
                </View>

                <ScrollView className=" mt-5 h-[75vh] py-3">
                    {
                        Object.entries(history).map((element, index) =>
                            <View className="bg-beta rounded-xl p-5 mt-5" key={index}>
                                <View className="flex-row items-center">
                                    <Text className="text-white/90">{element[0]}</Text>
                                    <View className="bg-white/70 h-[1px] w-5/6 ml-3"></View>
                                </View>
                                {
                                    element[1].map((e, i) =>
                                        <View className="py-1 mt-1 border-b border-white/60 " key={i}>
                                            <View className=" flex-row py-4 px-3  items-center justify-between  ">
                                                <View className="flex-row items-center ">
                                                    <View className="bg-white/80 p-1.5 rounded-xl">
                                                        <Icon.Car active={true} color={"black"} />
                                                    </View>
                                                    <Text className="text-white/50 ml-4">Taxi to Home</Text>
                                                </View>

                                                <Text className="text-white/90 mr-3 ">425 $</Text>
                                            </View>
                                        </View>
                                    )
                                }


                            </View>
                        )
                    }

                </ScrollView>


            </View>

        </>
    );
}
