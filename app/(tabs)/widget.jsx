import { AuthButton } from "@/components/auth";
import Navbar from "@/components/header/header";
import HeaderPart from "@/components/header/header";
import { Icon } from "@/constants";
import { useAppContext } from "@/context";
import { Link, router } from "expo-router";
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


export default function WidgetScreen() {



  const { all } = useAppContext();

  const widgets = [
    { name: "Goals", icon: <Icon.Goal  />, link: "/goals", description: "Saving Plan"},
    { name: "Expense ", icon: <Icon.CreditCard />, link: "", description: "Daily Expense Details"},
    { name: "Categories", icon: <Icon.List />, link: "/categories", description: "Your Expense Categories"},
    { name: "Scheduled", icon: <Icon.Schedule />, link: "", description: "Frequently Paid"},
    { name: "Budget", icon: <Icon.Sack />, link: "", description: "this is a desc"},
    { name: "History ", icon: <Icon.ArrowHisto />, link: "/history", description: "Set Budget "},
  ]



  return (
    <>
      <View className="h-screen bg-gamma px-6 pt-6">

        <Navbar />

        <View className=" flex-row justify-between flex-wrap  ">

          {
            widgets.map((element, index) =>
              <>
                <Pressable key={index} onPress={()=>{router.navigate(element.link)}} className="bg-beta flex-col justify-between px-3 py-6  mt-4 w-[48%] h-[24vh]   rounded-3xl">

                  <View className=" w-[11vw] h-[6vh] items-center justify-center bg-white/95 rounded-xl">
                    {element.icon}
                  </View>

                  <View className=" flex-col ">
                    <Text className="text-white text-lg font-extrabold">{element.name}</Text>
                    <Text className="text-white/50 mt-3 leading-loose">{element.description}</Text>
                  </View>
                </Pressable>
              </>)
          }




        </View>

      </View>

    </>
  );
}
