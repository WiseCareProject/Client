/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import Login from './src/components/Login';
import Settings from './src/components/Settings';
import Main from './src/components/Main';

export default class App extends Component<Props> {

    render() {
        return (
            <Settings/>
            /*<Login />*/
            /*< Main />*/
        );
    }
}