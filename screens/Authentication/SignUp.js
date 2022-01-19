import React, { Component, useContext, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { register } = useContext(AuthContext)
    const navigation = useNavigation();
    return (
        <View>
            <TextInput placeholder='Email'
                onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='password'
                onChangeText={(text) => setPassword(text)} />
            <Button title='SignUp'
                onPress={() => register(email, password)}
            />
            <View style={{ height: 20 }}></View>
            <Button title='SignIn'
                onPress={() => navigation.navigate('SignIn')}
            />
        </View>
    )
}

