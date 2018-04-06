import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';

const Footer = () => {
    return (
        <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.items}>
            <View style={{textAlign:'center', alignItems: 'center'}}>
                <Text style={styles.number}>75<Text style={{fontSize: 18}}>kg</Text></Text>
                <Text style={styles.desc}>Amount Feeding</Text>
            </View>
            <View style={{textAlign:'center', alignItems: 'center'}}>
                <Text style={styles.number_active}>100<Text style={{fontSize: 18}}>kg</Text></Text>
                <Text style={styles.desc}>Current Tank</Text>

                <Text style={styles.schedule}>Schedule Date</Text>
                <Text style={styles.date}>16:54, 01-05-2018</Text>
            </View>
            <View style={{textAlign:'center', alignItems: 'center'}}>
                <Text style={styles.number}>25<Text style={{fontSize: 18}}>kg</Text></Text>
                <Text style={styles.desc}>Current Plate</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        fontFamily: "SourceSansPro-Regular",
    },
    number_active: {
        fontSize: 36,
        color: '#37e5ef',
        marginTop: -60,
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",

    },
    schedule: {
        marginTop: 50,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
    },
    date: {
        color: '#fff',
        fontFamily: "SourceSansPro-Regular",
    },
    number: {
        marginTop: -70,
        fontSize: 33,
        color: '#4e6baf',
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
    },
    desc: {
        marginTop: -20,
        fontSize:14,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
    }
});

export default Footer;