// import { fetch_all_data, fetch_visitor } from "@/api";
import { Icon } from "@/constants";
import { useAuth } from "@clerk/clerk-expo";
import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  // const { userId } = useAuth();

  const [categories, setCategories] = useState([
    {
        id: 0,
        name: "Transport",
        description: "All type of transport",
        color: "#fcc102",
        icon: <Icon.Car />,
        total: 285.45

    }
])

  const appValue = { theme, setTheme,categories, setCategories };

  return <appContext.Provider value={appValue}>{children}</appContext.Provider>;
};

const useAppContext = () => useContext(appContext);

export { AppProvider, appContext, useAppContext };
