import React, { Component } from 'react'
import { Text, View } from 'react-native'
import App from '../App'
import AnimatedSplash from "react-native-animated-splash-screen";
import TestScreen from './TestScreen';

export default class Splash extends Component {
    state = {
        isLoaded: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true })
        }, 2000)
    }

    render() {
        return (
            <AnimatedSplash
                translucent={false}
                isLoaded={this.state.isLoaded}
                logoImage={require("../src/assets/images/logo.jpg")}
                backgroundColor={"#262626"}
                logoHeight={100}
                logoWidth={100}
            >
                {/* <App /> */}
                <TestScreen />
            </AnimatedSplash>
        )
    }
}
