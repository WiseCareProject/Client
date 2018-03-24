import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TopMenu = () => {
    return (
        <View style={styles.menu}>
            <Text style={styles.item}>Temp</Text>
            <Text style={styles.active}>Feeding</Text>
            <Text style={styles.item}>Drinking</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        marginLeft: 50,
        marginRight: 50,
    },
    active: {
        color: 'rgba(255, 255, 255, 1.0)',
        fontSize: 20
    },
    item: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 20
    }
});

export default TopMenu;