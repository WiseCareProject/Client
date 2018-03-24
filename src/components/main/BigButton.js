import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const BigButton = () => {
    return (
        <ImageBackground source={require('../../images/bg-main-button.png')} style={styles.warp}>
            <View style={styles.spaces}>
                <Image source={require('../../images/arrow-right.png')} style={styles.arrow}/>
                <TouchableOpacity style={styles.bigButton}>
                    <ImageBackground source={require('../../images/bigbutton.png')} style={styles.bigButton}>
                        <Text style={styles.btnText}>START FEED</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <Image source={require('../../images/arrow-left.png')} style={styles.arrow}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    warp: {
        height: '60%',
        marginTop: 10
    },
    spaces: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90%',
        marginLeft: 10,
        marginRight: 10,
    },
    bigButton: {
        marginTop: 20,
        alignSelf: 'center',
        height: '76%',
        width: '76%',
    },
    btnText: {
        fontSize: 36,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 60,
        width: 120,
        textAlign: 'center'
    },
    arrow: {
        alignSelf: 'center',
        height: 35,
        width: 15,
    }
});

export default BigButton;