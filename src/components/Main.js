import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Main/Header';
import TopMenu from './Main/TopMenu';
import TopNavigator from './Navigations/TopNavigation';
import axios from "axios/index";

class Main extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ImageBackground source={require('./../images/common/bg.png')} style={styles.backGround}>
                <Header navigation={this.props.navigation}/>
                <TopMenu/>
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