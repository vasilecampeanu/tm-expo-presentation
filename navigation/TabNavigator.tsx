import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BasketIcon from "../components/BasketIcon";
import ProductsScreen from "../screens/ProductsScreen";
import HomeIcon from "../components/HomeIcon";

export type TabStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

const Tab = createBottomTabNavigator<TabStackParamList>();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: HomeIcon }}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProductsScreen: { query: string };
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
