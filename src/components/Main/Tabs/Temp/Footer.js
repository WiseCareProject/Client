import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import axios from "axios/index";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lowTemp: 20,
            maxTemp: 40,
        }
    };


    // componentWillMount() {
        // let self = this;
        // axios.get('http://52.38.156.227:8081/getFullDetails')
        //     .then(function (response) {
        //         self.setState({
        //             showAlert: true,
        //             plateAmount: response.data.plateAmount,
        //             tankAmount: response.data.tankAmount
        //         });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    // };

    render() {
        return (
            <ImageBackground source={require('../../../../images/Main/footer-bg.png')} style={styles.items}>
                <View>
                    <Text style={styles.number}><Text style={{fontSize: 32}}>{this.state.lowTemp}°</Text></Text>
                    <Text style={styles.desc}>Low Temperatue</Text>
                </View>
                <View>
                    <Text style={styles.number}><Text style={{fontSize: 32}}>{this.state.maxTemp}°</Text></Text>
                    <Text style={styles.desc}>Max Temperature</Text>
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
        paddingTop: 70,
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