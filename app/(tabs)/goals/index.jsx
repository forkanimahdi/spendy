import { Icon } from "@/constants";
import { useAppContext } from "@/context";
import { router } from "expo-router";
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


export default function GoalsScreen() {

    const { categories } = useAppContext();



    return (
        <>

            <View className="bg-gamma h- px-6 pt-6">
                <View className="py-3 flex-row items-center justify-between">
                    <View className=" flex-row items-center ">
                        <Icon.Arrow />
                        <Text className="text-white/90 text-lg ml-3">Goals</Text>
                    </View>
                </View>


                <Pressable onPress={() => { console.log("f") }} className="p-1 mt-5 flex-row items-center justify-center bg-alpha rounded-xl ">
                    <View className="mt-3">
                        <Icon.PlusDashed size={40} color={"black"} />
                    </View>
                    <Text className="text-black text-base ml-2">Add Goal</Text>
                </Pressable>


                <ScrollView className="h-[75vh]  py-3 mt-5">
                    {
                        categories.map((element, index) =>

                            <Pressable key={index} onPress={() => { router.navigate(`goals/${element.id}`) }}  className=" px-4 py-5   bg-beta rounded-xl">
                                <View className="  flex-row items-center justify-between ">
                                    <View className="flex-row items-center">
                                        <View className="bg-white/90 p-1 rounded-xl">
                                            <Icon.Phone active={true} color={"black"} />
                                        </View>
                                        <Text className="text-white/90 text-base ml-3">Buy House</Text>
                                    </View>

                                    <Text className="text-white/90">200 000 Dh</Text>

                                </View>

                                <Text className="text-white/80 mt-6 leading-6 truncate ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aperiam dolorum, provident consectetur dolorem quidem temporibus dignissimos sequi dolore deserunt?</Text>

                                {/* <View className="flex-row items-center justify-between mt-6 ">
                                    <Text className="text-white/80">3 Participants</Text>
                                    <View className="flex-row ">
                                        {
                                            [1, 2, 3].map((participant, index) =>

                                                <Image
                                                    source={require("@/assets/images/avatars/default.jpg")}
                                                    className={`w-8 h-8 rounded-full ${index != 0 && "-ml-5"}`}
                                                />
                                            )

                                        }
                                    </View>
                                </View> */}

                                <View className="mt-6 flex-row relative items-center">
                                    <Text className="text-white/90">Progress :</Text>
                                    <View className="h-2 ml-3 rounded-full bg-gamma w-4/5">
                                        <View className="w-3/4 bg-white/80 h-full rounded-full">

                                        </View>
                                    </View>
                                    <Text className="text-white/80 absolute right-0 bottom-full mb-2 ml-1">90%</Text>
                                </View>




                            </Pressable>

                        )
                    }





                </ScrollView>

            </View>


        </>
    );
}


