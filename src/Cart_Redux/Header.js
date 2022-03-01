import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, USE } from 'react'
import CartStyles from '../assets/styles/CartStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Header() {

    const navigation = useNavigation();
    const [count, setCount] = useState(2)
    const state = useSelector((state) => state.handleCart)


    return (
        <View style={CartStyles.header_Container}>

            <TouchableOpacity style={{
                position: 'absolute',
                top: 12,
                left: 15
            }}
                onPress={() => navigation.replace("Main")}>
                <AntDesign name="home" size={28} color='#ff0000' />
            </TouchableOpacity>

            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#FF0000',
            }}>FakeSTORE</Text>

            <TouchableOpacity style={CartStyles.cartIcon}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Checkout')}>
                <AntDesign name="shoppingcart" size={28} color='#ff0000' />

                <View style={CartStyles.CartCout}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#FF0000',
                    }}
                    >{state.length}</Text>
                </View>
            </TouchableOpacity>

        </View >
    )
}