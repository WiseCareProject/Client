import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import topNavigator from "../Navigations/TopNavigation";

class TopMenu extends Component {

    setMenu = (navigate) => {
        Alert.alert(navigate);
    };

    render() {
        return (
            <View style={styles.menu}>
                <Text style={styles.item} onPress={() => this.setMenu('Tab1')}>Temp</Text>
                <Text style={styles.active} onPress={() => this.setMenu('Tab2')}>Feeding</Text>
                <Text style={styles.item} onPress={() => this.setMenu('Tab3')}>Drinking</Text>
            </View>
        );
    };
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
        fontSize: 20,
        fontFamily: "SourceSansPro-Regular",
    },
    item: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 20,
        fontFamily: "SourceSansPro-Regular",
    }
});

export default TopMenu;