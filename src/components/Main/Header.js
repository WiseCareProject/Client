import React, { Component } from 'react';
import {View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

class Header extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.click} onPress={() => navigate('Setting')} onLongPress={() => navigate('Admin')}>
                    <Image source={require('../../images/common/menu.png')} style={styles.menu}/>
                </TouchableOpacity>
                <Image source={require('../../images/common/logo.png')} style={styles.logo}/>
                <TouchableOpacity style={styles.click} onPress={() => navigate('Statistics')}>
                    <Image source={require('../../images/common/stats.png')} style={styles.stats}/>
                </TouchableOpacity>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        marginLeft: 20,
        marginRight: 20,
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
    stats: {
        height: 20,
        width: 20,
        marginTop: 10,
        resizeMode: 'stretch'
    },
    click: {
        padding: 15,
    }
});

export default Header;