import React, { Component } from 'react';
import BigButton from './Drink/BigButton';
import Footer from './Drink/Footer';
import {StyleSheet, View} from 'react-native';

class Drink extends Component {
    render() {
        return (
            <View style={styles.backGround}>
                <BigButton />
                <Footer />
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

export default Drink;