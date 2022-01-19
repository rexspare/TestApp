import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
export default class Index extends Component {
    render() {
        return (
            <AuthProvider>
                <Routes />
            </AuthProvider>
        )
    }
}



