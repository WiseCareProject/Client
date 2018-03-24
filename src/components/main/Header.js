import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../../images/menu.png')} style={styles.menu} />
            <Image source={require('../../images/logo.png')} style={styles.logo} />
            <Image source={require('../../images/notify.png')} style={styles.notify} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    logo: {
        alignSelf: 'center',
        height: 40,
        width: 180,
        resizeMode: 'stretch'
    },
    menu: {
        marginTop: 10,
        height: 14,
        width: 21,
        resizeMode: 'stretch'
    },
    notify: {
        height: 20,
        width: 17,
        marginTop: 10,
        resizeMode: 'stretch'
    }
});

export default Header;