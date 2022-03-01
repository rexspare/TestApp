import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import CartStyles from '../assets/styles/CartStyles';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart, DelCart, ResetCart } from '../redux/action'
import func from './functions';

export default function Checkout() {
    const state = useSelector((state) => state.handleCart)

    const navigation = useNavigation();
    const [products, setProducts] = useState([])
    const [refreshing, setRefreshing] = useState(true)
    const [total, setTotal] = useState(0)
    const [displayList, setDisplayList] = useState([])
    const dispatch = useDispatch();

    const addProduct = async (product) => {

        await dispatch(AddCart(product))

    }

    const delProduct = async (product) => {
        dispatch(DelCart(product))
        totalPrice(state)
    }

    // FROM ASYNCSTORAGE FUNCTIONS
    const getPro = async () => {
        const list = await func.getProducts();
        setProducts(list)
        totalPrice(products)
        setRefreshing(false)

    }

    const delPro = async (prod) => {
        func.delProduct(prod);
        handleRefresh()
    }

    useEffect(() => {
        // getPro()
        totalPrice(state)


    });

    const handleRefresh = () => {
        setRefreshing(true)
        getPro()

    }

    const totalPrice = (prodi) => {
        var totalP = 0
        for (var j = 0; j < prodi.length; j++) {
            totalP = totalP + prodi[j].price * prodi[j].qty
        }
        setTotal(totalP)
    }


    const renderItemComponent = data => {
        displayList.push(data.item.item)
        return (
            <TouchableOpacity style={CartStyles.check_P_Container} activeOpacity={0.7}
            // onPress={() => navigation.navigate('Product', { id: data.item.id })}
            >
                <Image source={{ uri: data.item.image }} style={CartStyles.check_image} />
                <View>
                    <Text style={CartStyles.check_productTitle}>{data.item.title}</Text>


                    <Text style={[CartStyles.productPrice, { paddingTop: 8 }]}>
                        {data.item.price}$</Text>

                    <Text style={[CartStyles.productPrice, { marginTop: -10 }]}>
                        Total : {data.item.price * data.item.qty}$
                    </Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <View style={CartStyles.CartButtons}>
                            <TouchableOpacity style={CartStyles.button}
                                onPress={() => delProduct(data.item)} >
                                <AntDesign name='minuscircleo' size={22} color='#000000' />
                            </TouchableOpacity>

                            <View style={CartStyles.button}>
                                <Text style={{ fontSize: 22 }}>{
                                    data.item.qty
                                }</Text>
                            </View>

                            <TouchableOpacity style={CartStyles.button}
                                onPress={() => addProduct(data.item)}>
                                <AntDesign name='pluscircleo' size={22} color='#000000' />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={CartStyles.MainContainer}>
                <View style={{ width: '100%', height: '87%' }}>
                    <FlatList
                        ListHeaderComponent={<Text style={{
                            fontSize: 24, alignSelf: 'center', marginVertical: 10
                        }}>
                            MY CART</Text>}
                        data={state}
                        renderItem={item => renderItemComponent(item)}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                {/* BOTTOM BUTTONS */}
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 15, left: 25 }}>
                    <View style={[CartStyles.CartButtons, CartStyles.totalPrice]}>
                        <Text style={{ fontSize: 20 }}>{total}$</Text>
                    </View>
                    <TouchableOpacity style={CartStyles.buttonCO}
                        onPress={() => {
                            // dispatch(reset())
                            // func.resetProducts()
                            dispatch(ResetCart())

                        }}>
                        <AntDesign name='shoppingcart' size={28} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>


            </View>

        </View >
    )
}