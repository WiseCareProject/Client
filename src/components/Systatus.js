import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from './Systatus/Header';
import Setting from './Systatus/Setting';

class Systatus extends Component {

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
export default Systatus;