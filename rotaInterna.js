import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Youtube from './outroYoutube';
import Vimeo from './Vimeo';


const Tab = createBottomTabNavigator();

export default function RotaInterna() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Youtube"
                component={Youtube}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Vimeo"
                component={Vimeo}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}