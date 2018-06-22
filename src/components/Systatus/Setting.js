import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, ImageBackground} from 'react-native';
import api from './../../api/requests';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            platformId: '1',
            devices: []
        }
    }

    getDeviceStatus(name, status) {
        this.setState({
            devices: this.state.devices.concat({name, status})
        });
    }

    componentWillMount() {
        let self = this;
        api.getSystemStatus(self);
    };

    renderComponents() {
        let devices = this.state.devices;
        let components = [];
        let errorImg = require('../../images/common/offline.png');
        let okImg = require('../../images/common/online.png');

        devices.forEach(device => {
            let name = device.name.split("Device")[0];
            let nameCapitalize = name.charAt(0).toUpperCase() + name.slice(1);
            components.push(
                <ImageBackground source={device.status === 'error' ? errorImg : okImg} style={styles.component}
                                 key={device.name}>
                    <Text style={styles.componentText}>{nameCapitalize}</Text>
                    <Text style={styles.componentDesc}>Component</Text>
                    <Text style={device.status === 'error' ? styles.offline : styles.online}>{device.status === 'error' ? 'DISCONNECTED' : 'CONNECTED'}</Text>
                </ImageBackground>
            )
        });
        return components;
    }

    render() {
        return (
            <ScrollView>
                <View style={[styles.loader, {display: this.state.isLoading ? 'flex' : 'none'}]}>
                    <ActivityIndicator size="large"/>
                </View>
                <View style={[styles.form, {display: this.state.isLoading ? 'none' : 'flex'}]}>
                    {this.state.isLoading ? null : this.renderComponents()}
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginRight: 50,
        marginLeft: 50,
    },
    component: {
        height: 125,
        width: 125,
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