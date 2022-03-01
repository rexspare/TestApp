import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import Index from './navigation/Index'
import firestore from '@react-native-firebase/firestore';
import Cart_Navigation from './src/Cart_Redux/Cart_Navigation';
import { Provider } from 'react-redux';
//import store from './src/Redux/store'
import store from './src/redux/store'

export default class App extends Component {


  componentDidMount() {
    // firestore().collection('users').doc("first")
    //   // .collection("cards").doc("card1")
    //   .update({
    //     FirstName: 'Hamza',
    //     LastName: 'Zafar',
    //     Phone: '53453454534543',
    //     address: '',
    //     email: "",
    //     createdAt: firestore.Timestamp.fromDate(new Date()),
    //     userImg: null,
    //     bio: ''
    //   })
  }
  render() {
    return (
      // <Index />
      <Provider store={store}>
        <Cart_Navigation />
      </Provider>
    )
  }
}
