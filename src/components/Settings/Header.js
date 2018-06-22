import React, {Component} from 'react';
import {View, StyleSheet, Image, Alert, TouchableOpacity, Text} from 'react-native';

class Header extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.header}>

                <TouchableOpacity style={styles.click} onPress={() => navigate('Home')}>
                    <Image source={require('../../images/common/back.png')} style={styles.menu}/>
                </TouchableOpacity>
                <Text style={styles.h5}>Settings</Text>
                <TouchableOpacity style={styles.click} onPress={() => navigate('Systatus')}>
                    <Image source={require('../../images/common/cpu.png')} style={styles.cpu}/>
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
    h5: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 24,
        fontFamily: "SourceSansPro-ExtraLight",
        marginTop: 10
    },
    menu: {
        marginTop: 10,
        height: 14,
        width: 21,
        resizeMode: 'stretch'
    },
    cpu: {
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