import React, { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
export default function Home() {

    const { logout } = useContext(AuthContext)
    return (
        <View>
            <Text>HOME</Text>
            <Button title='LogOut'
                onPress={() => logout()}
            />
        </View>
    )
}
