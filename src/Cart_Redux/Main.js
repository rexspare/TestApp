import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import CartStyles from '../assets/styles/CartStyles'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import func from './functions';

import { AddCart, DelCart } from '../redux/action'

// const prefs = new PrefManager()

export default function Main(props) {
    // HERE

    const navigation = useNavigation();
    const [products, setProducts] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(AddCart(product))
    }



    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(resJson => {
                setProducts(resJson)
                setRefreshing(false)
            }).catch(e => console.log(e));
    }

    useEffect(() => {

        fetchProducts()
        //  console.log(products)
    }, []);

    const handleRefresh = () => {
        setRefreshing(true)
        fetchProducts()

    }

    const renderItemComponent = data =>
        <TouchableOpacity style={CartStyles.productConatiner} activeOpacity={0.7}
            onPress={() => navigation.navigate('Product', { id: data.item.id })}>

            <Image source={{ uri: data.item.image }} style={CartStyles.productImage} />
            <Text style={CartStyles.productTitle}>{data.item.title}$</Text>
            <Text style={CartStyles.productPrice}>{data.item.price}$</Text>


            <TouchableOpacity style={[CartStyles.Item_ViewButton]}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>ADD ITEM</Text>
            </TouchableOpacity>


            <Text style={{ fontSize: 15, marginBottom: 20 }}>
                Category : {data.item.category}</Text>

        </TouchableOpacity>


    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={CartStyles.MainContainer}>


                <FlatList
                    ListHeaderComponent={<Text style={{ fontSize: 24, alignSelf: 'center', marginVertical: 10 }}>
                        PRODUCTS</Text>}
                    data={products}
                    renderItem={item => renderItemComponent(item)}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                />
            </View>
        </View>
    )
}
