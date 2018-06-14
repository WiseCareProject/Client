import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView, TextInput} from 'react-native';

class Settings extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <ScrollView>
                <Text>Statistics!</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    container: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 50,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 150,
    },
    space_between_columns: {
        width: 20
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        color: '#fff',
        fontFamily: "SourceSansPro-Bold",
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "SourceSansPro-ExtraLight",
    },
    bigButton: {
        bottom: '-5%',
    },
    save: {
        alignSelf: 'center',
        height: '37%',
        width: '92%',
    },
    ModalDropdown: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        width: 100,
        padding: 5,
    }
});

export default Settings;