import React, { Component, useContext, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native';
import TestScreen from '../TestScreen'

const handler = () => {
    console.log("Working");

}

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext)
    const navigation = useNavigation();

    const handler1 = () => {
        console.log("Working");

    }

    return (
        <TestScreen loginF={login()} />
        // <View>
        //     <TextInput placeholder='Email'
        //         onChangeText={(text) => setEmail(text)} />
        //     <TextInput placeholder='password'
        //         onChangeText={(text) => setPassword(text)} />
        //     <Button title='SignIn'
        //         onPress={() => login(email, password)}
        //     />
        //     <View style={{ height: 20 }}></View>
        //     <Button title='SignUp'
        //         onPress={() => navigation.navigate('SignUp')}
        //     />
        //     <View style={{ height: 20 }}></View>
        //     <Button title='Reset Password'
        //         onPress={() => navigation.navigate('ForgotPassword')}
        //     />

        // </View>
    )
}

