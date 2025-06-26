import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

export type TabStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

const Tab = createBottomTabNavigator<TabStackParamList>();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>
  );
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
