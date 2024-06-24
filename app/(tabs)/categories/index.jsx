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


export default function CategoriesScreen() {

    const { categories } = useAppContext();

  

    return (
        <>

            <View className="bg-gamma h- px-6 pt-6">
                <View className="py-3 flex-row items-center justify-between">
                    <View className=" flex-row items-center ">
                        <Icon.Arrow />
                        <Text className="text-white/90 text-lg ml-3">Expense Categories</Text>
                    </View>
                </View>


                <Pressable onPress={() => { console.log("f") }} className="p-1 mt-5 flex-row items-center justify-center bg-beta rounded-xl ">
                    <View className="mt-3">
                        <Icon.PlusDashed size={40} color={"white"} />
                    </View>
                    <Text className="text-white ml-2">Add Category</Text>
                </Pressable>


                <ScrollView className="h-[75vh]  py-3 mt-5">
                    {
                        categories.map((element, index) =>
                            <Pressable onPress={()=>{router.navigate(`categories/${element.id}`)}} key={index} className="py-5 px-4  flex-row items-center justify-between bg-beta rounded-xl">
                                <View className="flex-row items-center">
                                    <View className={`p-3 w-12 rounded-xl  bg-[${element.color}]`}>
                                        {element.icon}
                                    </View>
                                    <View className="flex-col ml-3  ">
                                        <Text className="text-white text-base">{element.name}</Text>
                                        <Text className="text-white/80 ">{element.description}</Text>
                                    </View>
                                </View>
                                <View className="flex-row items-center">
                                    <Text className="text-white/90 mr-2 ">{element.total} Dh</Text>
                                    <View className="rotate-180">
                                        <Icon.Arrow />
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }





                </ScrollView>

            </View>


        </>
    );
}
