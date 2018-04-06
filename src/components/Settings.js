import React, { Component } from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Settings/Header';
import TopMenu from './Settings/TopMenu';
import SettingNavigator from './Navigations/SettingNavigation';

class Settings extends Component {

    render() {
        return (
            <ImageBackground source={require('./../images/common/bg.png')} style={styles.backGround} >
                <Header/>
                <TopMenu />
                <SettingNavigator />
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
export default Settings;