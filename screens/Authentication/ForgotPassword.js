import React, { useState, useContext } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { AuthContext } from '../../navigation/AuthProvider'
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    const [email, setEmail] = useState();
    const navigation = useNavigation();
    const { reset } = useContext(AuthContext)
    return (
        <View>
            <TextInput placeholder='Email'
                onChangeText={(text) => setEmail(text)} />
            <Button title='Reset'
                onPress={() => reset(email)} />

        </View>
    )
}
