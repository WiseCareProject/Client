import React, { Component } from 'react';
import BigButton from './Camera/BigButton';
import Footer from './Camera/Footer';
import {StyleSheet, View} from 'react-native';

class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false
        }
    }

    toggleAlert = () => {
        this.setState({
            showAlert: !this.state.showAlert
        });
    };

    render() {
        return (
            <View style={styles.backGround}>
                <BigButton toggleAlert={this.toggleAlert} showAlert={this.state.showAlert}/>
                <Footer toggleAlert={this.toggleAlert}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    backGround: {
        width: '100%',
        height: '100%',
        marginTop: 30
    }
});

export default Camera;