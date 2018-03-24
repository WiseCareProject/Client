/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Header from './src/components/main/Header';
import TopMenu from './src/components/main/TopMenu';
import BigButton from './src/components/main/BigButton';
import Footer from './src/components/main/Footer';
import {StyleSheet, ImageBackground} from 'react-native';

export default class App extends Component<Props> {

    render() {
        return (
            <ImageBackground source={require('./src/images/bg.png')} style={styles.backGround} >
                <Header />
                <TopMenu />
                <BigButton />
                <Footer />
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
    }
});