import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import Counter from 'react-native-counter';
import axios from "axios/index";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            platformId: 1,
            waterLevel: 0,
            waterStatus: "Med"
        }
    };

    componentWillMount() {
        let self = this;
        axios.get('http://52.38.156.227:8081/getFullWaterDetails')
            .then(function (response) {
                console.log(response);
                self.setState({
                    showAlert: true,
                    waterLevel: response.data.result.levelOfWater,
                    waterStatus: response.data.result.floatSwitch
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.items}>
                <View>
                    <Text style={styles.number}><Counter end={this.state.waterLevel} sign={'%'} size={46}/></Text>
                    <Text style={styles.desc}>Current Tank</Text>
                </View>
                <View>
                    <Text style={styles.number}>
                        <Text style={styles.waterText}>{this.state.waterStatus}</Text>
                    </Text>
                    <Text style={styles.desc}>Status Level</Text>
                </View>
            </ImageBackground>
        );
    }
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
    },
    number_active: {
        fontSize: 36,
        color: '#37e5ef',
        marginTop: -60,
        marginBottom: 25,
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
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
    waterText: {
        fontSize: 46,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: "SourceSansPro-ExtraLight",
        marginTop: 25
    },
    desc: {
        marginTop: -20,
        fontSize:14,
        color: '#9bb3dc',
        fontFamily: "SourceSansPro-Regular",
        textAlign: 'center',
        alignItems: 'center'
    }
});

export default Footer;