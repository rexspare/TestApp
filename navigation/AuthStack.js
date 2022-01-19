import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Entry from '../screens/Authentication/Entery'
import SignIn from '../screens/Authentication/SignIn'
import SignUp from '../screens/Authentication/SignUp'
import ForgotPassword from '../screens/Authentication/ForgotPassword'
import OTP from '../screens/Authentication/OTP'

const Stack = createNativeStackNavigator();

export default class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator>
                {/* <Stack.Screen name='Entry' component={Entry} /> */}
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='OTP' component={OTP} />
            </Stack.Navigator>

        )
    }
}
