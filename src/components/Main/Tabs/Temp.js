import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigButton from './Temp/BigButton';
import Footer from './Temp/Footer';
import {StyleSheet, View} from 'react-native';

class Temp extends Component {
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

export default Temp;