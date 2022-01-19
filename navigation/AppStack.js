import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'


const Stack = createNativeStackNavigator();

export default class AppStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        )
    }
}
