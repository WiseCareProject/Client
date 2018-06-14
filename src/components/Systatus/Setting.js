import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, ImageBackground} from 'react-native';
import Switch from 'react-native-switch-pro'
import axios from "axios/index";

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            isDateTimePickerVisible: false,
            isLoading: true,
            platformId: '1',
        }
    }

    componentWillMount() {
        let self = this;
        axios({
            method: 'get',
            url: 'http://52.38.156.227:8081/healthCheck',
        })
            .then(function (response) {
                self.setState({
                    uniquePlatformId: response.data.uniquePlatformId,
                    isLoading: false
                });
            }).catch(function (error) {
                console.log(error);
        });
    };


    render() {
        return (
            <ScrollView>
                <View style={[styles.loader, {display: this.state.isLoading ? 'flex' : 'none'}]}>
                    <ActivityIndicator size="large"/>
                </View>
                <View style={[styles.form/*, {display: this.state.isLoading ? 'none' : 'flex'}*/]}>
                    <ImageBackground source={require('./../../images/common/online.png')} style={styles.component}>
                        <Text style={styles.componentText}>Food</Text>
                        <Text style={styles.componentDesc}>Component</Text>
                        <Text style={styles.online}>CONNECTED</Text>
                    </ImageBackground>
                    <ImageBackground source={require('./../../images/common/online.png')} style={styles.component}>
                        <Text style={styles.componentText}>Water</Text>
                        <Text style={styles.componentDesc}>Component</Text>
                        <Text style={styles.online}>CONNECTED</Text>
                    </ImageBackground>
                    <ImageBackground source={require('./../../images/common/offline.png')} style={styles.component}>
                        <Text style={styles.componentText}>Environment</Text>
                        <Text style={styles.componentDesc}>Component</Text>
                        <Text style={styles.offline}>DISCONNECTED</Text>
                    </ImageBackground>
                </View>
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
    form: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'space-between',
        margin: 50,
    },
    component: {
        height: 120,
        width: 120,
        aspectRatio: 1,
        marginBottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    componentText: {
        fontFamily: "SourceSansPro-Bold",
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    componentDesc: {
        fontSize: 11,
        fontFamily: "SourceSansPro-Bold",
        color: '#fff',
    },
    online: {
        fontFamily: "SourceSansPro-Bold",
        color: '#94f057',
        fontSize: 12
    },
    offline: {
        fontFamily: "SourceSansPro-Bold",
        color: '#f05656',
        fontSize: 12
    },
});

export default Settings;