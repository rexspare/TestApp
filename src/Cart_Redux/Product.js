import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import { addCArt, delCArt } from '../redux/action';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import CartStyles from '../assets/styles/CartStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart, DelCart } from '../redux/action'

export default function Product(props) {
    const navigation = useNavigation();
    const [product, setProduct] = useState({})
    const [stem, setStem] = useState(0)
    const [productLoading, setProductLoading] = useState(true)
    const { id } = props.route.params
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(resJson => {
                setProduct(resJson)
                setProductLoading(false)
            }).catch(e => console.log(e));
    }

    const addProduct = (product) => {
        if (productLoading == false) {
            dispatch(AddCart(product))
        }
    }

    const delProduct = (product) => {
        if (productLoading == false) {
            dispatch(DelCart(product))
        }
    }

    useEffect(() => {
        fetchProducts()
        // console.log(product.rating.rate)
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={CartStyles.MainContainer}>
                <Text style={CartStyles.title}>{product.title}</Text>

                <Image source={{ uri: product.image }} style={CartStyles.image} />

                <Text style={CartStyles.rating}>{product.category}</Text>

                <Text style={CartStyles.description}>{product.description}</Text>

                <Text style={CartStyles.price}>{product.price}$</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={CartStyles.CartButtons}>
                        <TouchableOpacity style={CartStyles.button}
                            onPress={() => delProduct(product)} >
                            <AntDesign name='minuscircleo' size={22} color='#000000' />
                        </TouchableOpacity>

                        <View style={CartStyles.button}>
                            <Text style={{ fontSize: 22 }}>{
                                stem
                            }</Text>
                        </View>

                        <TouchableOpacity style={CartStyles.button}
                            onPress={() => addProduct(product)}>
                            <AntDesign name='pluscircleo' size={22} color='#000000' />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={CartStyles.buttonCO}
                        onPress={() => navigation.navigate('Checkout')}>
                        <AntDesign name='shoppingcart' size={28} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>


            </View>

        </View >
    )
}