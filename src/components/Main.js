import React, { Component } from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Main/Header';
import TopMenu from './Main/TopMenu';
import TopNavigator from './Navigations/TopNavigation';

class Main extends Component {

    render() {
        return (
            <ImageBackground source={require('./../images/common/bg.png')} style={styles.backGround} >
                <Header/>
                <TopMenu />
                <TopNavigator/>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
    }
});

export default Main;