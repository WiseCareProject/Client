import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const BigButton = () => {
    return (
        <ImageBackground source={require('../../../../images/Main/bg-main-button.png')} style={styles.warp}>
            <View style={styles.spaces}>
                <Image source={require('../../../../images/Main/arrow-right.png')} style={styles.arrow}/>
                <TouchableOpacity style={styles.bigButton}>
                    <ImageBackground source={require('../../../../images/Main/bigbutton.png')} style={styles.bigButton}>
                        <Text style={styles.btnText}>START FEED</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <Image source={require('../../../../images/Main/arrow-left.png')} style={styles.arrow}/>
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
        marginTop: 10,
        alignSelf: 'center',
        height: '86%',
        width: '78%',
    },
    btnText: {
        fontSize: 46,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 50,
        width: 120,
        textAlign: 'center',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    arrow: {
        alignSelf: 'center',
        height: 35,
        width: 15,
    }
});

export default BigButton;