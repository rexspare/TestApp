import AsyncStorage from '@react-native-async-storage/async-storage'

class functions {

    getProducts = async () => {
        let productList = []
        const prev = await AsyncStorage.getItem('productList')
        const list = await JSON.parse(prev)
        if (list != null) {
            productList = list;
            // console.log('====================================');
            // console.log(productList);
            // console.log('====================================');
        }
        return productList
    }

    resetProducts = async () => {
        let productList = []
        await AsyncStorage.setItem('productList', JSON.stringify(productList))
    }

    // ADD PRODUCT TO THE CART
    addProduct = async (product) => {
        let productList = []
        let ProArray = []
        try {
            const prev = await AsyncStorage.getItem('productList')
            ProArray = JSON.parse(prev)
            if (ProArray != null) {
                productList = ProArray;
                await productList.push(product);
                await AsyncStorage.setItem('productList', JSON.stringify(productList))
            } else {
                await productList.push(product)
                await AsyncStorage.setItem('productList', JSON.stringify(productList))
            }
        } catch (error) {
            console.log(error);
        }

    }
    // DELETE PRODUCT FROM CART
    delProduct = async (product) => {

        let productList = []
        let list = [];
        try {
            const prev = await AsyncStorage.getItem('productList')
            list = JSON.parse(prev)
            if (list != null) {
                productList = list;
                const itemToBeRemoved = product
                await productList.splice(productList.findIndex(a => a.item.id === itemToBeRemoved.id), 1)
                await AsyncStorage.setItem('productList', JSON.stringify(productList))
            }
        } catch (error) {
            console.log(error);
        }

    }


}

const func = new functions();

export default func;