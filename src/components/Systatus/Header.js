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

                <TouchableOpacity style={styles.click} onPress={() => navigate('Setting')}>
                    <Image source={require('../../images/common/back.png')} style={styles.back}/>
                </TouchableOpacity>
                <Text style={styles.h5}>System Status</Text>
                <TouchableOpacity style={styles.click} onPress={() => navigate('Home')}>
                    {/*<Image source={require('../../images/common/notify.png')} style={styles.notify}/>*/}
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
    back: {
        marginTop: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch'
    },
    click: {
        padding: 15,
    }
});

export default Header;