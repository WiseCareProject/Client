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
import Main from './src/components/Main';

const NavigationApp = StackNavigator({
        Login: {screen: Login},
        Home: {screen: Main},
        Setting: {screen: Settings},
        Systatus: {screen: Systatus},
        Statistics: {screen: Statistics},
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default class App extends Component<Props> {
    render() {
        return (
            <NavigationApp/>
        );
    }
}