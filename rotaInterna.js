import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Youtube from './outroYoutube';
import Vimeo from './outroVimeo';


const Tab = createBottomTabNavigator();

export default function RotaInterna() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: "#f9f9f9",
                tabBarStyle: {
                    position: 'absolute',
                    height: 60,
                    borderRadius: 5,
                    backgroundColor: "#f9f9f9",
                },

            }}>
            <Tab.Screen
                name="Youtube"
                component={Youtube}
                options={{
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="logo-youtube" />)
                        }
                        return (<Ionicons size={20} color={"#d2d2d2"} name="logo-youtube" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Vimeo"
                component={Vimeo}
                options={{
                    tabBarShowLabel: true,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="logo-vimeo" />)
                        }
                        return (<Ionicons size={20} color={"#d2d2d2"} name="logo-vimeo" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}