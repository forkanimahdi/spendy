import Navbar from "@/components/header/header";
import { COLORS, Icon } from "@/constants";
import { useAppContext } from "@/context";
import { Link } from "expo-router";
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
  FlatList,
} from "react-native";


export default function HomeScreen() {

  let [shortcutsEdit, setShortcutsEdit] = useState(false)


  const { all } = useAppContext();



  return (
    <>
      <View className="h-screen px-6 pt-6 bg-gamma">
      
        <Navbar />

        <View className="py-6 px-2 bg-beta rounded-xl">
          <Text className="text-white text-xl">Balance</Text>
          <Text className="text-alpha text-3xl mt-4">2500.49 Dh</Text>
        </View>

        <View className="py-6   ">
          <Text className="text-white text-xl mb-3 ">Saving Plans</Text>

          <FlatList
            horizontal={true}
            data={["Plan 1", "Plan 2", "Plan 3"]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              // my view here
              <View className={`w-[35vw]  p-4 flex-col justify-between bg-beta rounded-xl ${item != "Plan 1" && "ml-3"}`}>
                <View className=" border-l-2 border-white/80 px-3">
                  <Icon.Home size={20} active={true} color={"#fff"} />
                </View>
                <View className="mt-8">
                  <Text className="text-white/80 mb-2 text-base">Buy House</Text>
                  <Text className="text-white">20k /<Text className="text-white/80"> 200k </Text>DH</Text>
                </View>

              </View>
            }
          />
        </View>


        <View className="pt-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-white pb-3">Recent Transaction</Text>
            <Link href={""} className="text-white/50 text-base m-0 p-0">See All</Link>
          </View>
          <ScrollView className=" mt-3 rounded-xl   bg-beta max-h-[30vh]">

            {/* task */}
            <View className=" flex-row py-6 px-3  items-center justify-between  ">
              <View className="flex-row items-center ">
                <View className="bg-white/80 p-1.5 rounded-xl">
                  <Icon.Car active={true} color={"black"} />
                </View>
                <Text className="text-white/50 ml-3 text-base">Taxi to Home</Text>
              </View>

              <Text className="text-white/90 mr-3 text-base">425 $</Text>
            </View>
            {/* end Task  */}



          </ScrollView>
        </View>

      </View>

    </>
  );
}
