import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main'
import Product from './Product';
import Checkout from './Checkout';

export default function Cart_Navigation() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Product' component={Product} />
                <Stack.Screen name='Checkout' component={Checkout} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}