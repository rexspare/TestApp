import { StyleSheet } from "react-native";

const CartStyles = new StyleSheet.create({
    // Header Styles
    header_Container: {
        width: '100%',
        height: '15%',
        backgroundColor: '#b4face',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,


    },
    cartIcon: {
        position: 'absolute',
        top: 7,
        right: 15,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },
    CartCout: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        right: 1
    },

    // Main Styles
    MainContainer: {
        flex: 1,
        width: '100%',
        height: '93%',
        position: 'absolute',
        top: 55,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#FFFFFF',
        borderWidth: 1
    },

    productConatiner: {
        width: '85%',
        borderWidth: 1 / 2,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 10,
        elevation: 15
    },
    productImage: {
        width: 190,
        height: 190,
        margin: 10
    },
    productPrice: {
        fontSize: 16,
        color: '#FF0000',
        justifyContent: 'center',
        marginTop: -5,
        marginBottom: 5
    },
    productTitle: {
        fontSize: 16,
        color: '#000000',
        justifyContent: 'center',
        marginTop: -7,
        marginBottom: 7,
        marginHorizontal: 30,
    },
    CartButtons: {
        flexDirection: 'row',
        width: 120,
        height: 40,
        marginBottom: 10,
        borderWidth: 1 / 2
    },
    Item_ViewButton: {
        width: 120,
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1 / 2
    },
    // Single Product Styles
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginHorizontal: 20,
        marginTop: 10,
        alignSelf: 'center'
    },
    rating: {
        marginLeft: 24,
        marginVertical: 5,
        fontSize: 18,
        color: '#ffbe26'
    },

    description: {
        marginHorizontal: 20,
        alignSelf: 'center',
        fontSize: 14,
        color: '#000000'
    },
    price: {
        fontSize: 24,
        color: '#FF0000',
        alignSelf: 'center',
        marginVertical: 10
    },

    buttonCO: {
        marginLeft: 70,
        width: 120,
        height: 40,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    totalPrice: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5
    },

    // CHECKOUT STYLES
    check_P_Container: {
        width: '89%',
        flexDirection: 'row',
        borderWidth: 1 / 2,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 10,
        elevation: 15
    },
    check_image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginHorizontal: 15,
        marginVertical: 30
    },
    check_productTitle: {
        fontSize: 14,
        color: '#000000',
        width: 180

    },



})

export default CartStyles;