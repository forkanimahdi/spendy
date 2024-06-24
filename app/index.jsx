import { ExpoRoot, Link, router } from "expo-router";
import { Icon } from "@/constants";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@clerk/clerk-expo";

export default function GardScreen() {



    const { isLoaded, isSignedIn } = useAuth();

    useEffect(() => {
        const checkToken = async () => {
            try {
                if (!isLoaded) return;

                if (isSignedIn) {
                    console.log("Already authenticated:");
                    router.replace("/home");
                    return;
                }

            } catch (error) {
                console.log(error);
            }
        };

        checkToken();
    }, [isLoaded]);

    // useEffect(() => {

    //     router.replace("/home");
        
    // }, [])
    
    return (
        <>
            <View className="h-screen bg-beta flex-col items-center justify-center  ">

                <View className="w-full h-1/2 absolute bg-alpha/60 rounded-full -top-52 -right-32"></View>
                <Image
                    className="w-96 h-96"
                    source={require("@/assets/images/hero1.png")}
                />
                <Text className=" text-white text-4xl ">App Name</Text>
                <Text className="mt-8 text-white/70 text-base px-4 text-center ">Lorem lorem-9 ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolor aut qui veniam accusantium suscipit libero iusto distinctio. Repellendus, vitae!</Text>
                <Link href={"/goals"} className="mt-28 bg-alpha px-20 py-4 rounded-full"><Text className="">Get Started</Text></Link>
            </View>
        </>
    );
}
