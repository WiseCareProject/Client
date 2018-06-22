/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './src/components/Login';
import Systatus from './src/components/Systatus';
import Settings from './src/components/Settings';
import Statistics from './src/components/Statistics';
import Admin from './src/components/Admin';
import Main from './src/components/Main';

const fade = (props) => {
    const {position, scene} = props

    const index = scene.index

    const translateX = 0
    const translateY = 0

    const opacity = position.interpolate({
        inputRange: [index - 0.7, index, index + 0.7],
        outputRange: [0.3, 1, 0.3]
    })

    return {
        opacity,
        transform: [{translateX}, {translateY}]
    }
};

const NavigationApp = StackNavigator({
        Login: {screen: Login},
        Home: {screen: Main},
        Setting: {screen: Settings},
        Systatus: {screen: Systatus},
        Statistics: {screen: Statistics},
        Admin: {screen: Admin},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        transitionConfig: () => ({
            screenInterpolator: (props) => {
                return fade(props)
            }
        })
    }
);

export default class App extends Component<Props> {
    render() {
        return (
            <NavigationApp/>
        );
    }
}