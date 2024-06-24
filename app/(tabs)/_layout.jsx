import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SignedIn } from "@clerk/clerk-expo";
import { AppProvider } from "@/context";
import { Icon } from "@/constants";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // <SignedIn>
    <AppProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#262626",
            borderBlockColor: "#262626",
          }

        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerTintColor: "#b4ef72",
            tabBarActiveTintColor: "#b4ef72",
            tabBarIcon: ({ color, focused }) => (
              <Icon.Home focus={focused} active={!focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="widget"
          options={{
            title: "Widget",
            headerTintColor: "#b4ef72",
            tabBarActiveTintColor: "#b4ef72",
            tabBarIcon: ({ color, focused }) => (
              <Icon.Widget focus={focused} active={!focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="statistics"
          options={{
            title: "Chart",
            headerTintColor: "#b4ef72",
            tabBarActiveTintColor: "#b4ef72",
            tabBarIcon: ({ color, focused }) => (
              <Icon.Chart focus={focused} active={!focused} />
            ),
          }}
        />




        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerTintColor: "#b4ef72",
            tabBarActiveTintColor: "#b4ef72",
            tabBarIcon: ({ color, focused }) => (
              <Icon.Person focus={focused} active={!focused} />
            ),
          }}
        />


        {[
          "history",
          "categories/index",
          "categories/[id]",
          "goals/index",
          "goals/[id]"

        ].map((pathname, index) => (
          <Tabs.Screen
            key={index}
            name={pathname}
            options={{
              href: null,
            }}
          />
        ))}
      </Tabs>
    </AppProvider>
    // </SignedIn>
  );
}
