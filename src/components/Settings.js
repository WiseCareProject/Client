import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Settings/Header';
import Setting from './Settings/Setting';

class Settings extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={require('./../images/common/bg.png')} style={styles.backGround}>
                <Header navigation={this.props.navigation}/>
                <Setting />
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