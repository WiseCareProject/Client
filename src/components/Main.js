import React, {Component} from 'react';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';
import Header from './Main/Header';
import TopNavigator from './Navigations/TopNavigation';

class Main extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ImageBackground source={require('./../images/common/bg.png')} style={styles.backGround}>
                <StatusBar hidden={true}/>
                <Header navigation={this.props.navigation}/>
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