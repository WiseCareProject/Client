import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import api from "./../../../../api/requests";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lowTemp: '-',
            maxTemp: '-',
            ventaStatus: false,
            blanketStatus: false,
            platformId: "1",
        }
    };


    componentWillMount() {
        api.getTempData(this.state).then((res) => {
            this.setState({
                lowTemp: res.data.lowTemperature,
                maxTemp: res.data.maxTemperature,
            });
        });
    }

    toggleBlanket() {
        this.setState({blanketStatus: !this.state.blanketStatus}, () => {
            api.toggleBlanket(this.state.blanketStatus);
        });
    }

    toggleVenta() {
        this.setState({ventaStatus: !this.state.ventaStatus}, () => {
            api.toggleVenta(this.state.ventaStatus);
        });
    }

    render() {
        let statusOn = require('../../../../images/common/online.png');
        let statusOff = require('../../../../images/common/offline.png');
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.bg}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.bigButton, {marginRight: 60}]} onPress={() => this.toggleVenta()}>
                        <ImageBackground source={this.state.ventaStatus === false ? statusOff : statusOn}
                                         style={styles.buttonImage}>
                            <Text style={styles.btnText}>Venta</Text>
                            <Text
                                style={this.state.ventaStatus === false ? styles.offline : styles.online}>{this.state.ventaStatus === false ? 'OFF' : 'ON'}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.bigButton, {marginLeft: 60}]} onPress={() => this.toggleBlanket()}>
                        <ImageBackground source={this.state.blanketStatus === false ? statusOff : statusOn}
                                         style={styles.buttonImage}>
                            <Text style={styles.btnText}>Blanket</Text>
                            <Text
                                style={this.state.blanketStatus === false ? styles.offline : styles.online}>{this.state.blanketStatus === false ? 'OFF' : 'ON'}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <View>
                        <Text style={styles.number}><Text style={{fontSize: 32}}>{this.state.lowTemp}°</Text></Text>
                        <Text style={styles.desc}>Low Temperatue</Text>
                    </View>
                    <View>
                        <Text style={styles.number}><Text style={{fontSize: 32}}>{this.state.maxTemp}°</Text></Text>
                        <Text style={styles.desc}>Max Temperature</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
;


const styles = StyleSheet.create({
    bg: {
        justifyContent: 'space-between',
        paddingTop: 70,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
    },
    number_active: {
        fontSize: 36,
        color: '#37e5ef',
        marginTop: -60,
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
        alignItems: 'center'
    },
    schedule: {
        marginTop: 50,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    date: {
        color: '#fff',
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    number: {
        marginTop: -70,
        fontSize: 33,
        color: '#4e6baf',
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    desc: {
        marginTop: -20,
        fontSize: 14,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    },
    bigButton: {
        width: '30%',
        marginTop: -120,
    },
    buttonImage: {
        alignSelf: 'center',
        width: '90%',
        aspectRatio: 1,
    },
    btnText: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#fff',
        marginTop: 30,
        width: 100,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: "SourceSansPro-Regular",
    },
    online: {
        fontFamily: "SourceSansPro-Bold",
        color: '#94f057',
        fontSize: 12,
        textAlign: 'center',
    },
    offline: {
        fontFamily: "SourceSansPro-Bold",
        color: '#f05656',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Footer;