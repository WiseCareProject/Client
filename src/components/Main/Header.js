import React from 'react';
import {View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

const Header = () => {

    openMenu = () => {
        Alert.alert('Open Menu');
    }

    openNotify = () => {
        Alert.alert('Notify Menu');
    }

    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={() => this.openMenu()}>
                <Image source={require('../../images/common/menu.png')} style={styles.menu}/>
            </TouchableOpacity>
            <Image source={require('../../images/common/logo.png')} style={styles.logo}/>
            <TouchableOpacity onPress={() => this.openNotify()}>
                <Image source={require('../../images/common/notify.png')} style={styles.notify}/>
            </TouchableOpacity>

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