import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './index';
import RotaInterna from './rotaInterna';


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="Bem-vindo(a)"
                component={Bem_Vindo}
            />
            <Stack.Screen
                name="rotaInterna"
                component={RotaInterna}
            />
        </Stack.Navigator>

    )
}