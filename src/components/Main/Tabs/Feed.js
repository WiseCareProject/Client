import React, { Component } from 'react';
import BigButton from './Feed/BigButton';
import Footer from './Feed/Footer';
import {StyleSheet, View} from 'react-native';

class Feed extends Component {
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

export default Feed;